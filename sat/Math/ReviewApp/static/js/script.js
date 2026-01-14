document.addEventListener('DOMContentLoaded', function() {
    const fileSelect = document.getElementById('file-select');
    const btnRefresh = document.getElementById('btn-refresh-list');
    const btnReload = document.getElementById('btn-reload');
    const btnSave = document.getElementById('btn-save');
    const jsonEditor = document.getElementById('json-editor');
    const previewContent = document.getElementById('preview-content');
    const statusMsg = document.getElementById('status-msg');

    let currentFilePath = '';

    // Initialize
    fetchFiles();

    // Event Listeners
    btnRefresh.addEventListener('click', fetchFiles);
    
    fileSelect.addEventListener('change', function() {
        const selectedPath = this.value;
        if (selectedPath) {
            loadFile(selectedPath);
        } else {
            currentFilePath = '';
            jsonEditor.value = '';
            previewContent.innerHTML = '';
        }
    });

    btnReload.addEventListener('click', function() {
        if (currentFilePath) {
            loadFile(currentFilePath);
        }
    });

    btnSave.addEventListener('click', saveFile);

    // Live Preview on typing (with debounce)
    let debounceTimer;
    jsonEditor.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(renderPreview, 500);
    });

    // --- Functions ---

    function showStatus(msg, type = 'success') {
        statusMsg.textContent = msg;
        statusMsg.className = type === 'error' ? 'status-error' : 'status-success';
        setTimeout(() => {
            statusMsg.textContent = '';
            statusMsg.className = '';
        }, 3000);
    }

    function fetchFiles() {
        fetch('/api/files')
            .then(response => response.json())
            .then(files => {
                const currentVal = fileSelect.value;
                fileSelect.innerHTML = '<option value="">-- Select a JSON file --</option>';
                
                files.forEach(file => {
                    const option = document.createElement('option');
                    option.value = file.path;
                    option.textContent = file.rel_path; // Show relative path for better readability
                    fileSelect.appendChild(option);
                });

                // Restore selection if it still exists
                if (currentVal && files.some(f => f.path === currentVal)) {
                    fileSelect.value = currentVal;
                }
            })
            .catch(err => showStatus('Error fetching files: ' + err, 'error'));
    }

    function loadFile(path) {
        fetch(`/api/load?path=${encodeURIComponent(path)}`)
            .then(response => {
                if (!response.ok) throw new Error('Failed to load file');
                return response.json();
            })
            .then(data => {
                if (data.error) throw new Error(data.error);
                
                currentFilePath = data.path;
                jsonEditor.value = data.content;
                renderPreview();
                showStatus('File loaded');
            })
            .catch(err => {
                showStatus(err.message, 'error');
                jsonEditor.value = ''; // Clear on error
            });
    }

    function saveFile() {
        if (!currentFilePath) {
            showStatus('No file selected', 'error');
            return;
        }

        const content = jsonEditor.value;
        
        // Validate JSON before sending
        try {
            JSON.parse(content);
        } catch (e) {
            showStatus('Invalid JSON: ' + e.message, 'error');
            return;
        }

        fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                path: currentFilePath,
                content: content
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) throw new Error(data.error);
            showStatus('File saved successfully');
        })
        .catch(err => showStatus('Error saving: ' + err.message, 'error'));
    }

    function renderPreview() {
        const content = jsonEditor.value;
        if (!content.trim()) {
            previewContent.innerHTML = '';
            return;
        }

        try {
            const data = JSON.parse(content);
            const html = generateQuestionHTML(data);
            previewContent.innerHTML = html;
            
            // Trigger MathJax typeset
            if (window.MathJax) {
                // MathJax 3.x promise-based typeset
                MathJax.typesetPromise([previewContent]).catch((err) => console.log(err));
            }
        } catch (e) {
            previewContent.innerHTML = `<div style="color:red; padding: 20px;">
                <strong>JSON Parse Error:</strong><br>${e.message}
            </div>`;
        }
    }

    function generateQuestionHTML(data) {
        // Handle different JSON structures
        
        // Case 1: Root object has "questions" array (e.g., standard generator output)
        if (data.questions && Array.isArray(data.questions)) {
            return data.questions.map(q => renderSingleQuestion(q)).join('<hr>');
        }
        
        // Case 2: Root object is an array of questions
        if (Array.isArray(data)) {
            return data.map(q => renderSingleQuestion(q)).join('<hr>');
        }
        
        // Case 3: Root object is a single question
        return renderSingleQuestion(data);
    }

    function parseMarkdown(text) {
        if (!text) return '';
        // 1. Replace <br> tags with newlines
        let cleanText = text.replace(/<br\s*\/?>/gi, '\n');
        
        // 2. Ensure a blank line exists after a table to prevent following text from merging into the table
        // Matches a line ending with '|' followed by a newline, where the next line does NOT start with '|'
        cleanText = cleanText.replace(/(\|\s*\n)(?![|])/g, '$1\n');
        
        return marked.parse(cleanText);
    }

    function renderSingleQuestion(q) {
        const difficultyClass = `difficulty-${(q.difficulty || 'medium').toLowerCase()}`;
        
        // SVG Handling: Check if SVG is provided
        let questionChartHtml = '';
        if (q.question_chart_svg) {
            questionChartHtml = `<div class="question-chart">${q.question_chart_svg}</div>`;
            if (q.question_chart_description) {
                questionChartHtml += `<div class="chart-description">${parseMarkdown(q.question_chart_description)}</div>`;
            }
        }

        let explanationChartHtml = '';
        if (q.explanation_chart_svg) {
            explanationChartHtml = `<div class="question-chart">${q.explanation_chart_svg}</div>`;
            if (q.explanation_chart_description) {
                explanationChartHtml += `<div class="chart-description">${parseMarkdown(q.explanation_chart_description)}</div>`;
            }
        }

        // Determine correct answer field (handles 'answer' or 'correct_answer')
        const correctAnswer = q.answer || q.correct_answer;

        // Options Handling
        let optionsHtml = '';
        if (q.options) {
            const options = typeof q.options === 'string' ? JSON.parse(q.options) : q.options;
            
            if (typeof options === 'object' && !Array.isArray(options)) {
                optionsHtml = '<ul class="options-list">';
                for (const [key, value] of Object.entries(options)) {
                    const isCorrect = key === correctAnswer;
                    const correctClass = isCorrect ? 'correct-option' : '';
                    optionsHtml += `
                        <li class="option-item ${correctClass}">
                            <span class="option-letter">${key}</span>
                            <span class="option-text">${parseMarkdown(value).replace(/^<p>|<\/p>$/g, '')}</span>
                        </li>`;
                }
                optionsHtml += '</ul>';
            }
        }

        // Metadata display
        const categoryDisplay = [q.domain, q.skill, q.primary_category, q.secondary_category]
            .filter(Boolean)
            .join(' > ');

        const tagsDisplay = Array.isArray(q.tags) ? q.tags.join(', ') : (q.tags || '');

        return `
            <div class="question-container">
                <div class="question-header">
                    <span class="question-id">ID: ${q.id || q.question_number || 'N/A'}</span>
                    <span class="difficulty-badge ${difficultyClass}">${q.difficulty || 'Unknown'}</span>
                </div>
                
                <div class="question-body">
                    ${parseMarkdown(q.question)}
                </div>

                ${questionChartHtml}

                ${optionsHtml}

                <div class="explanation-section">
                    <div class="explanation-title">Explanation</div>
                    <div>${parseMarkdown(q.explanation)}</div>
                    ${explanationChartHtml}
                </div>

                <div class="metadata-section">
                    <p><strong>Category/Domain:</strong> ${categoryDisplay}</p>
                    ${tagsDisplay ? `<p><strong>Tags:</strong> ${tagsDisplay}</p>` : ''}
                    <p><strong>Score Improvement Tip:</strong> ${q.score_improvement_tip || ''}</p>
                </div>
            </div>
        `;
    }
});
