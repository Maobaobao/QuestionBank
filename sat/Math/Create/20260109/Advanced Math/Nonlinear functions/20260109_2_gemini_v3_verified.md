# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 2
* **Critical Errors:** 1 (Chart Mismatch)
* **Minor Issues/Warnings:** 1 (Metadata Inconsistency)

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| Metadata | Metadata Inconsistency | The `question_type_distribution` counts are incorrect. The file lists `multiple_choice: 15` and `student_produced_response: 5`. However, a count of the questions reveals 14 MCQs and 6 SPRs (Q3, Q6, Q8, Q12, Q16, Q19). | Update metadata to `multiple_choice: 14` and `student_produced_response: 6`. |
| 7 | Chart Mismatch | The SVG for the scatterplot depicts a **positive** linear association (points rising from bottom-left to top-right, line  values decreasing from 280 to 80 as  increases). The question and answer () require a **negative** association. | Replace the SVG with a corrected version where the points and line slope downwards (Top-Left to Bottom-Right). |

## Metadata Consistency Findings

* The domain and skill mappings align well with standard SAT categories.
* Difficulty levels are generally appropriate, with simple operations for Easy, multi-step for Medium, and complex concepts (nonlinear shifts, circle equations) for Hard.

---

# Corrected JSON File

```json
{
  "test_metadata": {
    "focus_domains": [
      "Advanced Math",
      "Algebra",
      "Problem-Solving and Data Analysis",
      "Geometry and Trigonometry"
    ],
    "focus_skills": [
      "Nonlinear functions",
      "Linear equations in 1 variable",
      "Systems of 2 linear equations in 2 variables",
      "Quadratic equations",
      "Exponential functions"
    ],
    "total_questions": 20,
    "difficulty_distribution": {
      "easy": 4,
      "medium": 6,
      "hard": 10
    },
    "question_type_distribution": {
      "multiple_choice": 14,
      "student_produced_response": 6
    }
  },
  "questions": [
    {
      "question_number": 1,
      "domain": "Algebra",
      "skill": "Linear equations in 1 variable",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "If <math><mn>4</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>18</mn></math>, what is the value of <math><mn>4</mn><mi>x</mi><mo>−</mo><mn>2</mn></math>?",
      "options": {
        "A": "10",
        "B": "12",
        "C": "14",
        "D": "16"
      },
      "answer": "A",
      "explanation": "First, solve for <math><mn>4</mn><mi>x</mi></math>. Subtract 6 from both sides of <math><mn>4</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>18</mn></math> to get <math><mn>4</mn><mi>x</mi><mo>=</mo><mn>12</mn></math>. The question asks for the value of <math><mn>4</mn><mi>x</mi><mo>−</mo><mn>2</mn></math>. Substitute 12 for <math><mn>4</mn><mi>x</mi></math> to get <math><mn>12</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>10</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Look for shortcuts. Instead of solving for x completely (x=3), notice that you can solve directly for the term 4x.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The function <math><mi>g</mi></math> is defined by <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>5</mn></math>. What is the value of <math><mi>g</mi><mo>(</mo><mn>2</mn><mo>)</mo></math>?",
      "options": {
        "A": "9",
        "B": "11",
        "C": "13",
        "D": "21"
      },
      "answer": "C",
      "explanation": "Substitute <math><mn>2</mn></math> for <math><mi>x</mi></math> in the function definition: <math><mi>g</mi><mo>(</mo><mn>2</mn><mo>)</mo><mo>=</mo><msup><mn>2</mn><mn>3</mn></msup><mo>+</mo><mn>5</mn></math>. Calculating the exponent gives <math><mn>8</mn><mo>+</mo><mn>5</mn></math>, which equals <math><mn>13</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When evaluating functions, carefully perform exponentiation before addition according to the order of operations.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Ratios, rates, proportional relationships, and units",
      "difficulty": "Easy",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A printing machine can print 60 pages in 5 minutes. At this rate, how many minutes will it take the machine to print 240 pages?",
      "options": null,
      "answer": "20",
      "explanation": "Calculate the rate per minute: <math><mfrac><mn>60</mn><mn>5</mn></mfrac><mo>=</mo><mn>12</mn></math> pages per minute. To print 240 pages, divide the total pages by the rate: <math><mfrac><mn>240</mn><mn>12</mn></mfrac><mo>=</mo><mn>20</mn></math> minutes.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Find the unit rate (per 1 unit) first, then multiply or divide to find the target value.",
      "additional_data": null
    },
    {
      "question_number": 4,
      "domain": "Geometry and Trigonometry",
      "skill": "Area and volume formulas",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='200' height='100' fill='none' stroke='black' stroke-width='2' /><text x='150' y='40' text-anchor='middle'>Length = 12</text><text x='260' y='100' text-anchor='start'>Width = 5</text></svg>",
      "question_chart_description": "A rectangle with length labeled 12 and width labeled 5.",
      "question": "A rectangle has a length of 12 meters and a width of 5 meters. What is the area, in square meters, of the rectangle?",
      "options": {
        "A": "17",
        "B": "34",
        "C": "60",
        "D": "85"
      },
      "answer": "C",
      "explanation": "The area of a rectangle is calculated as <math><mtext>length</mtext><mo>×</mo><mtext>width</mtext></math>. Thus, <math><mn>12</mn><mo>×</mo><mn>5</mn><mo>=</mo><mn>60</mn></math> square meters.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Don't confuse perimeter (adding sides) with area (multiplying length and width).",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The population of a bacterial colony is modeled by the function <math><mi>P</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>2</mn><mo>,</mo><mn>500</mn><mo>(</mo><mn>1.04</mn><msup><mo>)</mo><mi>t</mi></msup></math>, where <math><mi>t</mi></math> is the time in hours after the initial observation. Which statement is the best interpretation of the number 2,500 in this context?",
      "options": {
        "A": "The population increases by 2,500 bacteria each hour.",
        "B": "The population increases by 2,500% each hour.",
        "C": "The estimated initial population of the colony.",
        "D": "The estimated population of the colony after 1 hour."
      },
      "answer": "C",
      "explanation": "In an exponential function of the form <math><mi>y</mi><mo>=</mo><mi>a</mi><mo>(</mo><mi>b</mi><msup><mo>)</mo><mi>x</mi></msup></math>, the value <math><mi>a</mi></math> represents the initial value when <math><mi>x</mi><mo>=</mo><mn>0</mn></math>. Here, 2,500 is the initial population when <math><mi>t</mi><mo>=</mo><mn>0</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In exponential models, identify the coefficient 'a' as the starting value (y-intercept) and the base 'b' as the growth/decay factor.",
      "additional_data": null
    },
    {
      "question_number": 6,
      "domain": "Algebra",
      "skill": "Systems of 2 linear equations in 2 variables",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "If <math><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>15</mn></math> and <math><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>6</mn></math>, what is the value of <math><mi>x</mi></math>?",
      "options": null,
      "answer": "7",
      "explanation": "Add the two equations together: <math><mo>(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>)</mo><mo>+</mo><mo>(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>)</mo><mo>=</mo><mn>15</mn><mo>+</mo><mn>6</mn></math>. This simplifies to <math><mn>3</mn><mi>x</mi><mo>=</mo><mn>21</mn></math>. Dividing by 3 gives <math><mi>x</mi><mo>=</mo><mn>7</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When coefficients of a variable are opposites (like +y and -y), adding the equations is the most efficient method.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Two-variable data: models and scatter-plots",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='270' x2='270' y2='270' stroke='black' stroke-width='2' /><line x1='30' y1='270' x2='30' y2='30' stroke='black' stroke-width='2' /><circle cx='50' cy='50' r='3' fill='black' /><circle cx='80' cy='80' r='3' fill='black' /><circle cx='110' cy='100' r='3' fill='black' /><circle cx='140' cy='130' r='3' fill='black' /><circle cx='170' cy='150' r='3' fill='black' /><circle cx='200' cy='180' r='3' fill='black' /><circle cx='230' cy='200' r='3' fill='black' /><line x1='30' y1='20' x2='250' y2='220' stroke='blue' stroke-width='2' stroke-dasharray='5,5' /><text x='150' y='290' text-anchor='middle'>Variable x</text><text x='15' y='150' transform='rotate(-90 15,150)' text-anchor='middle'>Variable y</text></svg>",
      "question_chart_description": "Scatterplot showing a strong negative linear association with a line of best fit sloping downwards from left to right.",
      "question": "Which of the following equations best represents the line of best fit for the data shown in the scatterplot?",
      "options": {
        "A": "<math><mi>y</mi><mo>=</mo><mn>0.8</mn><mi>x</mi><mo>+</mo><mn>10</mn></math>",
        "B": "<math><mi>y</mi><mo>=</mo><mo>−</mo><mn>0.8</mn><mi>x</mi><mo>+</mo><mn>10</mn></math>",
        "C": "<math><mi>y</mi><mo>=</mo><mn>0.8</mn><mi>x</mi><mo>−</mo><mn>10</mn></math>",
        "D": "<math><mi>y</mi><mo>=</mo><mo>−</mo><mn>0.8</mn><mi>x</mi><mo>−</mo><mn>10</mn></math>"
      },
      "answer": "B",
      "explanation": "The scatterplot shows a negative trend, meaning as x increases, y decreases. This indicates a negative slope. The line starts high on the y-axis (positive y-intercept). Option B is the only choice with a negative slope and a positive y-intercept.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the direction of the slope (positive/negative) and the y-intercept location (above/below x-axis) to eliminate options quickly.",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "What is the positive solution to the equation <math><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>18</mn><mo>=</mo><mn>0</mn></math>?",
      "options": null,
      "answer": "3",
      "explanation": "Add 18 to both sides: <math><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>18</mn></math>. Divide by 2: <math><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>9</mn></math>. Take the square root: <math><mi>x</mi><mo>=</mo><mo>±</mo><mn>3</mn></math>. The positive solution is 3.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember that quadratic equations often have two solutions. Pay attention if the question asks specifically for the 'positive' one.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Geometry and Trigonometry",
      "skill": "Lines, angles, and triangles",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 250,150 150,50' fill='none' stroke='black' stroke-width='2' /><text x='40' y='165'>A</text><text x='260' y='165'>B</text><text x='145' y='40'>C</text><text x='150' y='130'>50°</text><text x='70' y='140'>x°</text><text x='230' y='140'>x°</text></svg>",
      "question_chart_description": "An isosceles triangle ABC where side AC = side BC. Angle C is 50 degrees. Angles A and B are labeled x degrees.",
      "question": "In triangle <math><mi>A</mi><mi>B</mi><mi>C</mi></math>, <math><mi>A</mi><mi>C</mi><mo>=</mo><mi>B</mi><mi>C</mi></math> and the measure of angle <math><mi>C</mi></math> is <math><mn>50</mn><mo>°</mo></math>. What is the value of <math><mi>x</mi></math>?",
      "options": {
        "A": "50",
        "B": "65",
        "C": "80",
        "D": "130"
      },
      "answer": "B",
      "explanation": "Since <math><mi>A</mi><mi>C</mi><mo>=</mo><mi>B</mi><mi>C</mi></math>, the triangle is isosceles and base angles <math><mi>A</mi></math> and <math><mi>B</mi></math> are equal. The sum of angles is <math><mn>180</mn><mo>°</mo></math>. <math><mn>180</mn><mo>−</mo><mn>50</mn><mo>=</mo><mn>130</mn></math>. Dividing the remaining sum by 2 gives <math><mi>x</mi><mo>=</mo><mfrac><mn>130</mn><mn>2</mn></mfrac><mo>=</mo><mn>65</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In isosceles triangles, angles opposite equal sides are always equal.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Algebra",
      "skill": "Linear equations in 2 variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The equation <math><mi>E</mi><mo>=</mo><mn>200</mn><mo>+</mo><mn>15</mn><mi>h</mi></math> gives the total earnings <math><mi>E</mi></math>, in dollars, of a musician for a performance lasting <math><mi>h</mi></math> hours. Which equation correctly expresses <math><mi>h</mi></math> in terms of <math><mi>E</mi></math>?",
      "options": {
        "A": "<math><mi>h</mi><mo>=</mo><mfrac><mrow><mi>E</mi><mo>−</mo><mn>200</mn></mrow><mn>15</mn></mfrac></math>",
        "B": "<math><mi>h</mi><mo>=</mo><mfrac><mrow><mi>E</mi><mo>+</mo><mn>200</mn></mrow><mn>15</mn></mfrac></math>",
        "C": "<math><mi>h</mi><mo>=</mo><mn>15</mn><mo>(</mo><mi>E</mi><mo>−</mo><mn>200</mn><mo>)</mo></math>",
        "D": "<math><mi>h</mi><mo>=</mo><mfrac><mi>E</mi><mn>15</mn></mfrac><mo>−</mo><mn>200</mn></math>"
      },
      "answer": "A",
      "explanation": "To isolate <math><mi>h</mi></math>, subtract 200 from both sides: <math><mi>E</mi><mo>−</mo><mn>200</mn><mo>=</mo><mn>15</mn><mi>h</mi></math>. Then divide by 15: <math><mi>h</mi><mo>=</mo><mfrac><mrow><mi>E</mi><mo>−</mo><mn>200</mn></mrow><mn>15</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Use inverse operations in reverse order of operations (PEMDAS) to isolate a variable.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='400' height='400' viewBox='-10 -10 20 20' xmlns='http://www.w3.org/2000/svg'><line x1='-10' y1='0' x2='10' y2='0' stroke='black' stroke-width='0.1' /><line x1='0' y1='-10' x2='0' y2='10' stroke='black' stroke-width='0.1' /><path d='M -10,3.8 Q -6,3.5 -4,3 L -4,-10 M 10,4.2 Q 6,4.5 4,5 L 4,10' stroke='blue' stroke-width='0.1' fill='none' /><text x='1' y='9' font-size='1'>y</text><text x='9' y='-1' font-size='1'>x</text></svg>",
      "question_chart_description": "Graph of a rational function with a vertical asymptote at x = 0 and horizontal asymptote at y = 4.",
      "question": "The function <math><mi>f</mi></math> is defined by <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mn>4</mn></math>. The graph of <math><mi>y</mi><mo>=</mo><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is the result of shifting the graph of <math><mi>y</mi><mo>=</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> to the right by 3 units. Which equation defines function <math><mi>g</mi></math>?",
      "options": {
        "A": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mn>3</mn></mrow></mfrac><mo>+</mo><mn>4</mn></math>",
        "B": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow></mfrac><mo>+</mo><mn>4</mn></math>",
        "C": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mn>7</mn></math>",
        "D": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mn>1</mn></math>"
      },
      "answer": "B",
      "explanation": "A horizontal shift to the right by <math><mi>k</mi></math> units replaces <math><mi>x</mi></math> with <math><mo>(</mo><mi>x</mi><mo>−</mo><mi>k</mi><mo>)</mo></math>. Shifting right by 3 units means replacing <math><mi>x</mi></math> with <math><mi>x</mi><mo>−</mo><mn>3</mn></math>. Thus, <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow></mfrac><mo>+</mo><mn>4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Recall transformations: <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>−</mo><mi>k</mi><mo>)</mo></math> moves right, <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>+</mo><mi>k</mi><mo>)</mo></math> moves left, <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>+</mo><mi>k</mi></math> moves up.",
      "additional_data": null
    },
    {
      "question_number": 12,
      "domain": "Algebra",
      "skill": "Systems of 2 linear equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The system of equations below has no solution. What is the value of <math><mi>k</mi></math>?\n<math><mi>k</mi><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>12</mn></math>\n<math><mn>4</mn><mi>x</mi><mo>+</mo><mn>6</mn><mi>y</mi><mo>=</mo><mn>20</mn></math>",
      "options": null,
      "answer": "2",
      "explanation": "For a system to have no solution, the lines must be parallel, meaning their slopes are equal but intercepts differ. Rewrite the second equation: <math><mn>6</mn><mi>y</mi><mo>=</mo><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>20</mn></math> -> <math><mi>y</mi><mo>=</mo><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>10</mn><mn>3</mn></mfrac></math>. The slope is <math><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></math>. The first equation is <math><mn>3</mn><mi>y</mi><mo>=</mo><mo>−</mo><mi>k</mi><mi>x</mi><mo>+</mo><mn>12</mn></math> -> <math><mi>y</mi><mo>=</mo><mo>−</mo><mfrac><mi>k</mi><mn>3</mn></mfrac><mi>x</mi><mo>+</mo><mn>4</mn></math>. Equating slopes: <math><mo>−</mo><mfrac><mi>k</mi><mn>3</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></math> implies <math><mi>k</mi><mo>=</mo><mn>2</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "If a system has no solution, the ratio of x-coefficients must equal the ratio of y-coefficients (<math><mfrac><mi>k</mi><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>6</mn></mfrac></math>).",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A radioactive substance decays such that its mass decreases by 15% every year. If the initial mass is 400 grams, which function <math><mi>m</mi><mo>(</mo><mi>t</mi><mo>)</mo></math> models the mass in grams <math><mi>t</mi></math> years later?",
      "options": {
        "A": "<math><mi>m</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>400</mn><mo>(</mo><mn>0.15</mn><msup><mo>)</mo><mi>t</mi></msup></math>",
        "B": "<math><mi>m</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>400</mn><mo>(</mo><mn>0.85</mn><msup><mo>)</mo><mi>t</mi></msup></math>",
        "C": "<math><mi>m</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>400</mn><mo>(</mo><mn>1.15</mn><msup><mo>)</mo><mi>t</mi></msup></math>",
        "D": "<math><mi>m</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>15</mn><mo>(</mo><mn>400</mn><msup><mo>)</mo><mi>t</mi></msup></math>"
      },
      "answer": "B",
      "explanation": "Decaying by 15% means 85% of the mass remains each year. The decay factor is <math><mn>1</mn><mo>−</mo><mn>0.15</mn><mo>=</mo><mn>0.85</mn></math>. The model is <math><mtext>Initial</mtext><mo>×</mo><mo>(</mo><mtext>Rate</mtext><msup><mo>)</mo><mi>t</mi></msup></math>, so <math><mn>400</mn><mo>(</mo><mn>0.85</mn><msup><mo>)</mo><mi>t</mi></msup></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For exponential decay, the base is always (1 - rate). For growth, it is (1 + rate).",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Ratios, rates, proportional relationships, and units",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A car travels at a speed of 90 kilometers per hour. What is this speed in meters per second? (1 kilometer = 1,000 meters)",
      "options": {
        "A": "25",
        "B": "54",
        "C": "324",
        "D": "1,500"
      },
      "answer": "A",
      "explanation": "Convert km to m: <math><mn>90</mn><mtext> km</mtext><mo>=</mo><mn>90</mn><mo>,</mo><mn>000</mn><mtext> m</mtext></math>. Convert hours to seconds: <math><mn>1</mn><mtext> hour</mtext><mo>=</mo><mn>3</mn><mo>,</mo><mn>600</mn><mtext> seconds</mtext></math>. Divide distance by time: <math><mfrac><mrow><mn>90</mn><mo>,</mo><mn>000</mn></mrow><mrow><mn>3</mn><mo>,</mo><mn>600</mn></mrow></mfrac><mo>=</mo><mn>25</mn></math> meters per second.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Use dimensional analysis (factor-label method) to track units and ensure they cancel out correctly.",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='80' fill='none' stroke='black' stroke-width='2' /><path d='M 100,100 L 180,100 A 80,80 0 0,0 100,20 Z' fill='lightgray' stroke='black' stroke-width='1' /><text x='105' y='95'>O</text><text x='185' y='100'>A</text><text x='100' y='15'>B</text><text x='110' y='70'>x°</text></svg>",
      "question_chart_description": "Circle with center O. Radius OA is horizontal. Radius OB is vertical. The arc AB measures 90 degrees.",
      "question": "The area of the shaded sector is <math><mn>4</mn><mi>π</mi></math>. If the radius of the circle is 4, what is the measure of the central angle <math><mi>x</mi></math> in degrees?",
      "options": {
        "A": "45",
        "B": "60",
        "C": "90",
        "D": "120"
      },
      "answer": "C",
      "explanation": "Area of a sector = <math><mfrac><mi>x</mi><mn>360</mn></mfrac><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></math>. Substitute values: <math><mn>4</mn><mi>π</mi><mo>=</mo><mfrac><mi>x</mi><mn>360</mn></mfrac><mi>π</mi><mo>(</mo><msup><mn>4</mn><mn>2</mn></msup><mo>)</mo></math>. Simplify: <math><mn>4</mn><mi>π</mi><mo>=</mo><mfrac><mi>x</mi><mn>360</mn></mfrac><mn>16</mn><mi>π</mi></math>. Divide by <math><mn>16</mn><mi>π</mi></math>: <math><mfrac><mn>4</mn><mn>16</mn></mfrac><mo>=</mo><mfrac><mi>x</mi><mn>360</mn></mfrac></math> -> <math><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mi>x</mi><mn>360</mn></mfrac></math>. Solving for x gives <math><mi>x</mi><mo>=</mo><mn>90</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Memorize the sector area formula <math><mfrac><mi>θ</mi><mn>360</mn></mfrac><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></math> and arc length formula <math><mfrac><mi>θ</mi><mn>360</mn></mfrac><mn>2</mn><mi>π</mi><mi>r</mi></math>.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "What is the solution to the equation <math><msqrt><mn>3</mn><mi>x</mi><mo>+</mo><mn>13</mn></msqrt><mo>−</mo><mn>2</mn><mo>=</mo><mn>3</mn></math>?",
      "options": null,
      "answer": "4",
      "explanation": "Add 2 to both sides: <math><msqrt><mn>3</mn><mi>x</mi><mo>+</mo><mn>13</mn></msqrt><mo>=</mo><mn>5</mn></math>. Square both sides: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>13</mn><mo>=</mo><mn>25</mn></math>. Subtract 13: <math><mn>3</mn><mi>x</mi><mo>=</mo><mn>12</mn></math>. Divide by 3: <math><mi>x</mi><mo>=</mo><mn>4</mn></math>. Verify: <math><msqrt><mn>12</mn><mo>+</mo><mn>13</mn></msqrt><mo>−</mo><mn>2</mn><mo>=</mo><mn>5</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>3</mn></math>. Correct.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always check for extraneous solutions when solving radical equations by plugging the answer back into the original equation.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Algebra",
      "skill": "Linear inequalities in 1 or 2 variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A shipping company charges a flat fee of $10 plus $0.50 per pound. If a customer wants to spend at most $40 on shipping, which inequality represents the maximum weight <math><mi>w</mi></math>, in pounds, they can ship?",
      "options": {
        "A": "<math><mn>10</mn><mo>+</mo><mn>0.50</mn><mi>w</mi><mo>≤</mo><mn>40</mn></math>",
        "B": "<math><mn>10</mn><mo>+</mo><mn>0.50</mn><mi>w</mi><mo>≥</mo><mn>40</mn></math>",
        "C": "<math><mn>0.50</mn><mo>+</mo><mn>10</mn><mi>w</mi><mo>≤</mo><mn>40</mn></math>",
        "D": "<math><mn>10</mn><mi>w</mi><mo>+</mo><mn>0.50</mn><mo>≥</mo><mn>40</mn></math>"
      },
      "answer": "A",
      "explanation": "The cost is $10 (flat) + 0.50 (per pound <math><mi>w</mi></math>). Total cost is <math><mn>10</mn><mo>+</mo><mn>0.50</mn><mi>w</mi></math>. 'At most' means less than or equal to <math><mo>≤</mo></math>. So, <math><mn>10</mn><mo>+</mo><mn>0.50</mn><mi>w</mi><mo>≤</mo><mn>40</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Translate key phrases literally: 'at most' becomes <math><mo>≤</mo></math>, 'at least' becomes <math><mo>≥</mo></math>.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>a</mi><mo>(</mo><mi>x</mi><mo>−</mo><mi>h</mi><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mi>k</mi></math> represents a parabola. If the vertex of the parabola is at <math><mo>(</mo><mn>3</mn><mo>,</mo><mn>7</mn><mo>)</mo></math> and the graph passes through the point <math><mo>(</mo><mn>5</mn><mo>,</mo><mn>15</mn><mo>)</mo></math>, what is the value of <math><mi>a</mi></math>?",
      "options": {
        "A": "2",
        "B": "4",
        "C": "8",
        "D": "12"
      },
      "answer": "A",
      "explanation": "Substitute the vertex <math><mo>(</mo><mn>3</mn><mo>,</mo><mn>7</mn><mo>)</mo></math>: <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>a</mi><mo>(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mn>7</mn></math>. Substitute the point <math><mo>(</mo><mn>5</mn><mo>,</mo><mn>15</mn><mo>)</mo></math>: <math><mn>15</mn><mo>=</mo><mi>a</mi><mo>(</mo><mn>5</mn><mo>−</mo><mn>3</mn><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mn>7</mn></math>. Simplify: <math><mn>15</mn><mo>=</mo><mi>a</mi><mo>(</mo><mn>2</mn><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mn>7</mn></math> -> <math><mn>15</mn><mo>=</mo><mn>4</mn><mi>a</mi><mo>+</mo><mn>7</mn></math>. Subtract 7: <math><mn>8</mn><mo>=</mo><mn>4</mn><mi>a</mi></math>. Divide by 4: <math><mi>a</mi><mo>=</mo><mn>2</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Vertex form <math><mi>a</mi><mo>(</mo><mi>x</mi><mo>−</mo><mi>h</mi><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mi>k</mi></math> is powerful. Plug in the vertex for <math><mi>h</mi></math> and <math><mi>k</mi></math>, then any other point for <math><mi>x</mi></math> and <math><mi>y</mi></math> to find <math><mi>a</mi></math>.",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The equation of a circle in the xy-plane is <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>8</mn><mi>x</mi><mo>+</mo><mn>6</mn><mi>y</mi><mo>=</mo><mn>0</mn></math>. What is the radius of the circle?",
      "options": null,
      "answer": "5",
      "explanation": "Complete the square. Group x and y terms: <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>8</mn><mi>x</mi><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>y</mi><mo>)</mo><mo>=</mo><mn>0</mn></math>. Add <math><mo>(</mo><mo>−</mo><mn>8</mn><mo>/</mo><mn>2</mn><msup><mo>)</mo><mn>2</mn></msup><mo>=</mo><mn>16</mn></math> and <math><mo>(</mo><mn>6</mn><mo>/</mo><mn>2</mn><msup><mo>)</mo><mn>2</mn></msup><mo>=</mo><mn>9</mn></math> to both sides: <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>8</mn><mi>x</mi><mo>+</mo><mn>16</mn><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>y</mi><mo>+</mo><mn>9</mn><mo>)</mo><mo>=</mo><mn>16</mn><mo>+</mo><mn>9</mn></math>. This becomes <math><mo>(</mo><mi>x</mi><mo>−</mo><mn>4</mn><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mo>(</mo><mi>y</mi><mo>+</mo><mn>3</mn><msup><mo>)</mo><mn>2</mn></msup><mo>=</mo><mn>25</mn></math>. The radius is <math><msqrt><mn>25</mn></msqrt><mo>=</mo><mn>5</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To convert general circle equations to standard form, complete the square for both x and y variables simultaneously.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A polynomial <math><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> has a zero at <math><mi>x</mi><mo>=</mo><mo>−</mo><mn>3</mn></math>. Which of the following must be a factor of <math><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>?",
      "options": {
        "A": "<math><mi>x</mi><mo>−</mo><mn>3</mn></math>",
        "B": "<math><mi>x</mi><mo>+</mo><mn>3</mn></math>",
        "C": "<math><mn>3</mn><mi>x</mi></math>",
        "D": "<math><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>9</mn></math>"
      },
      "answer": "B",
      "explanation": "According to the Factor Theorem, if <math><mi>p</mi><mo>(</mo><mi>c</mi><mo>)</mo><mo>=</mo><mn>0</mn></math>, then <math><mo>(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mo>)</mo></math> is a factor of the polynomial. Here, <math><mi>c</mi><mo>=</mo><mo>−</mo><mn>3</mn></math>, so the factor is <math><mo>(</mo><mi>x</mi><mo>−</mo><mo>(</mo><mo>−</mo><mn>3</mn><mo>)</mo><mo>)</mo></math>, which simplifies to <math><mi>x</mi><mo>+</mo><mn>3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Connect zeros (roots) directly to factors: Root <math><mi>k</mi></math> means factor <math><mo>(</mo><mi>x</mi><mo>−</mo><mi>k</mi><mo>)</mo></math>.",
      "additional_data": null
    }
  ]
}

```

---

# SAT Math Question Difficulty Auditor Report

## 1. Difficulty Distribution Summary

The audit reveals a significant skew in the declared difficulty levels, specifically an overestimation of "Hard" questions. A substantial portion of questions labeled **Hard** rely on standard procedural steps or direct translation, which aligns more closely with the **Medium** difficulty standard.

* **Declared Distribution (from JSON):**
* 🟢 **Easy:** 4
* 🟡 **Medium:** 6
* 🔴 **Hard:** 10


* **Audited Distribution:**
* 🟢 **Easy:** 4
* 🟡 **Medium:** 11
* 🔴 **Hard:** 5


* **Alignment Score:** **75%** (15/20 questions correctly labeled)

## 2. Mislabeled Questions Log

The following questions were flagged as mislabeled. In most cases, the assigned difficulty overestimated the cognitive load required to solve the problem.

| Q# | Assigned Difficulty | Audited Difficulty | Reason for Reclassification |
| --- | --- | --- | --- |
| **11** | Hard | 🟡 **Medium** | The problem asks for a standard function transformation (shifting right by 3 units). While the function is rational, the operation is a direct application of the rule , requiring no complex insight or manipulation. |
| **13** | Hard | 🟡 **Medium** | The question requires modeling 15% decay. Converting "decrease by 15%" to a base of  is a standard, fundamental skill in exponential modeling, not a "Hard" insight. |
| **14** | Hard | 🟡 **Medium** | This is a standard two-step unit conversion (km to m, hours to seconds). While it involves dimensional analysis, the path is purely procedural and lacks the abstract complexity or novelty of a Hard problem. |
| **17** | Hard | 🟡 **Medium** | The problem asks to translate a simple word problem into a linear inequality (). This is a direct translation task with no "distractors" or complex logic, characteristic of Medium (or even Easy) difficulty. |
| **20** | Hard | 🟡 **Medium** | The question requires applying the Factor Theorem (). This is a check of a core concept definition rather than a complex problem-solving task. |

## 3. Detailed Analysis of Calibrated Questions

* **Correctly Labeled "Hard" Questions:**
* **Q12 (System with No Solution):** Correctly labeled. Solving for a parameter  to force parallel lines requires abstract conceptual understanding of linear systems, fitting the Hard criteria.
* **Q19 (Circle Equation):** Correctly labeled. Requires "completing the square" for both variables to reveal the radius. This is a multi-step procedural task with high opportunity for arithmetic error, justifying the Hard label.
* **Q16 (Radical Equation):** Correctly labeled. Solving  requires isolating the radical, squaring (potential for algebraic errors), and solving. The cognitive load is sufficiently high.


* **Borderline Cases:**
* **Q5 (Exponential Interpretation - Medium):** This could arguably be **Easy** as it simply asks for the initial value  in . However, because it requires interpreting a model in context rather than raw calculation, **Medium** is an acceptable classification.
* **Q17 (Inequality - Reclassified to Medium):** This question is extremely close to **Easy**. It was left as Medium in the audit only because it involves generating a mathematical model from text ("at most"), but it is on the lower end of the Medium spectrum.