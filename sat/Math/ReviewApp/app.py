import os
import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Base directory to browse
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'Create'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/files')
def list_files():
    """List all JSON files in the BASE_DIR recursively."""
    json_files = []
    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            if file.endswith('.json'):
                full_path = os.path.join(root, file)
                # Return relative path for display, or absolute for internal use
                # Using absolute path for simplicity in loading
                json_files.append({
                    "name": file,
                    "path": full_path,
                    "rel_path": os.path.relpath(full_path, BASE_DIR)
                })
    # Sort by name
    json_files.sort(key=lambda x: x['name'])
    return jsonify(json_files)

@app.route('/api/load', methods=['GET'])
def load_file():
    file_path = request.args.get('path')
    if not file_path:
        return jsonify({"error": "No path provided"}), 400
    
    # Security check: ensure path is within BASE_DIR (basic check)
    if not os.path.abspath(file_path).startswith(BASE_DIR):
        # Allow reading from anywhere if user insists, but warn? 
        # For a local tool, strict security might be less critical, but good practice.
        # User asked to read "like d:\TraeRepo...", which implies absolute paths.
        # I'll allow it if it exists.
        pass

    if not os.path.exists(file_path):
        return jsonify({"error": "File not found"}), 404

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        return jsonify({"content": content, "path": file_path})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/save', methods=['POST'])
def save_file():
    data = request.json
    file_path = data.get('path')
    content = data.get('content')

    if not file_path or content is None:
        return jsonify({"error": "Missing path or content"}), 400

    try:
        # Validate JSON before saving
        try:
            json_content = json.loads(content)
        except json.JSONDecodeError as e:
            return jsonify({"error": f"Invalid JSON: {str(e)}"}), 400

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)
