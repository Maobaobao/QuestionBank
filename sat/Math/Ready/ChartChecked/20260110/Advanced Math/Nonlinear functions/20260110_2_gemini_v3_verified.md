# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 4
* **Critical Errors:** 3 (Broken/Drafting text in explanations, Unsolvable/Invalid Question-Option pairs)
* **Minor Issues/Warnings:** 1 (Chart visual mismatch)

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| 2 | Chart Mismatch | The question describes a parabola with a vertex "on the y-axis **below** the x-axis," but the SVG displays the vertex exactly at the origin (labeled `(0,0)`), which contradicts the text. | Modify the SVG to visually separate the origin and the vertex. Move the parabola vertex lower or the x-axis higher so the vertex is clearly below the x-axis. |
| 12 | Critical Content & Explanation Flaw | The question  yields an irrational solution () that does not match any integer options. The explanation text contains the AI's internal "drafting notes" (e.g., "Let's test x=-4... Revised Question..."), which is unprofessional and broken. | Replace the question with the workable version suggested in the drafting notes: . This yields , which matches Option B. Completely rewrite the explanation to be a standard instructional solution. |
| 14 | Explanation Flaw & Ambiguity | The system has two solutions ( and ). The prompt only restricts , which doesn't isolate a unique answer for . The explanation again contains internal drafting notes ("Let's constrain the question..."). | Add the constraint "" to the question text to isolate the solution . Clean the explanation to remove drafting notes. |
| 15 | Chart Mismatch | The question asks for the slope of the line of best fit, with the correct answer being 2.0. However, the SVG depicts a line with a slope of roughly 0.6 (rise of 200px over run of 320px). | Redraw the SVG scatterplot and line of best fit to actually visually represent a slope of ~2.0 (steeper rise). |

## Metadata Consistency Findings

* The metadata counts and distributions (15 MCQ, 5 SPR; 4 Easy, 6 Medium, 10 Hard) are consistent with the content.
* Domain mappings are accurate.

---

# CORRECTED JSON FILE

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
      "Systems of equations",
      "Linear equations",
      "Data inference"
    ],
    "total_questions": 20,
    "difficulty_distribution": {
      "easy": 4,
      "medium": 6,
      "hard": 10
    },
    "question_type_distribution": {
      "multiple_choice": 15,
      "student_produced_response": 5
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
      "question": "If <math><mn>4</mn><mi>x</mi><mo>-</mo><mn>9</mn><mo>=</mo><mn>11</mn></math>, what is the value of <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn></math>?",
      "options": {
        "A": "5",
        "B": "8",
        "C": "10",
        "D": "13"
      },
      "answer": "D",
      "explanation": "First, solve for <math><mi>x</mi></math>. Add 9 to both sides of the equation <math><mn>4</mn><mi>x</mi><mo>-</mo><mn>9</mn><mo>=</mo><mn>11</mn></math> to get <math><mn>4</mn><mi>x</mi><mo>=</mo><mn>20</mn></math>. Divide by 4 to find <math><mi>x</mi><mo>=</mo><mn>5</mn></math>. Next, substitute <math><mi>x</mi><mo>=</mo><mn>5</mn></math> into the expression <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn></math>: <math><mn>2</mn><mo>(</mo><mn>5</mn><mo>)</mo><mo>+</mo><mn>3</mn><mo>=</mo><mn>10</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>13</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Check if the question asks for the value of <math><mi>x</mi></math> or an expression involving <math><mi>x</mi></math>. Solving for the expression directly can sometimes save time.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='300' viewBox='-10 -10 320 320' xmlns='http://www.w3.org/2000/svg'><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='black' /></marker></defs><line x1='150' y1='0' x2='150' y2='300' stroke='black' stroke-width='1' marker-end='url(#arrow)' /><line x1='0' y1='100' x2='300' y2='100' stroke='black' stroke-width='1' marker-end='url(#arrow)' /><text x='280' y='90' font-size='12'>x</text><text x='160' y='15' font-size='12'>y</text><path d='M 50 100 Q 150 300 250 100' stroke='blue' stroke-width='2' fill='none' /><circle cx='150' cy='100' r='3' fill='black' /><text x='155' y='115' font-size='10'>(0,0)</text><text x='155' y='210' font-size='10'>Vertex</text></svg>",
      "question_chart_description": "A parabola opening upward on an xy-coordinate plane. The vertex of the parabola is located on the y-axis below the x-axis.",
      "question": "The graph of the function <math><mi>f</mi></math> is shown in the xy-plane. Which of the following could define <math><mi>f</mi></math>?",
      "options": {
        "A": "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn></math>",
        "B": "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn></math>",
        "C": "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup></math>",
        "D": "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn></math>"
      },
      "answer": "B",
      "explanation": "The graph shows a parabola opening upward, which indicates a positive leading coefficient. The vertex lies on the y-axis below the origin, representing a y-intercept that is negative. The function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn></math> is a parabola opening upward with a y-intercept at <math><mo>(</mo><mn>0</mn><mo>,</mo><mo>-</mo><mn>4</mn><mo>)</mo></math>, consistent with the graph.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the direction of opening and the location of the vertex or intercepts to eliminate options quickly.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Ratios, rates, proportional relationships, and units",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A machine produces 150 widgets every 20 minutes. At this rate, how many widgets does the machine produce in 2 hours?",
      "options": {
        "A": "450",
        "B": "600",
        "C": "900",
        "D": "1,500"
      },
      "answer": "C",
      "explanation": "First, convert the time to the same unit. 2 hours is equal to <math><mn>2</mn><mo>×</mo><mn>60</mn><mo>=</mo><mn>120</mn></math> minutes. Set up a proportion: <math><mfrac><mn>150</mn><mn>20</mn></mfrac><mo>=</mo><mfrac><mi>x</mi><mn>120</mn></mfrac></math>. Solve for <math><mi>x</mi></math>: <math><mi>x</mi><mo>=</mo><mn>150</mn><mo>×</mo><mfrac><mn>120</mn><mn>20</mn></mfrac><mo>=</mo><mn>150</mn><mo>×</mo><mn>6</mn><mo>=</mo><mn>900</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always ensure units match before setting up ratios or proportions. Converting to the smaller unit (minutes) is usually easier.",
      "additional_data": null
    },
    {
      "question_number": 4,
      "domain": "Geometry and Trigonometry",
      "skill": "Area and volume formulas",
      "difficulty": "Easy",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A cylinder has a base radius of 4 centimeters and a height of 10 centimeters. What is the volume, in cubic centimeters, of the cylinder? (Use <math><mn>3.14</mn></math> for <math><mi>π</mi></math>.)",
      "options": null,
      "answer": "502.4",
      "explanation": "The volume <math><mi>V</mi></math> of a cylinder is given by the formula <math><mi>V</mi><mo>=</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>h</mi></math>. Substitute <math><mi>r</mi><mo>=</mo><mn>4</mn></math>, <math><mi>h</mi><mo>=</mo><mn>10</mn></math>, and <math><mi>π</mi><mo>≈</mo><mn>3.14</mn></math>: <math><mi>V</mi><mo>=</mo><mn>3.14</mn><mo>×</mo><msup><mn>4</mn><mn>2</mn></msup><mo>×</mo><mn>10</mn><mo>=</mo><mn>3.14</mn><mo>×</mo><mn>16</mn><mo>×</mo><mn>10</mn><mo>=</mo><mn>3.14</mn><mo>×</mo><mn>160</mn><mo>=</mo><mn>502.4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Memorize basic volume formulas for cylinders, prisms, and spheres. Be careful to use the specific value for Pi provided in the prompt.",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Algebra",
      "skill": "Linear inequalities in 1 or 2 variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A shipping company charges a flat fee of $5.00 plus $2.50 per kilogram for a package. If a customer wants to spend no more than $30.00 on shipping, which inequality represents the maximum weight, <math><mi>w</mi></math>, in kilograms, that the package can be?",
      "options": {
        "A": "<math><mn>2.50</mn><mi>w</mi><mo>+</mo><mn>5</mn><mo>≤</mo><mn>30</mn></math>",
        "B": "<math><mn>2.50</mn><mi>w</mi><mo>+</mo><mn>5</mn><mo>≥</mo><mn>30</mn></math>",
        "C": "<math><mn>5</mn><mi>w</mi><mo>+</mo><mn>2.50</mn><mo>≤</mo><mn>30</mn></math>",
        "D": "<math><mn>2.50</mn><mi>w</mi><mo>≤</mo><mn>30</mn><mo>+</mo><mn>5</mn></math>"
      },
      "answer": "A",
      "explanation": "The cost consists of a flat fee ($5) and a variable cost ($2.50 per kg). The total cost is <math><mn>5</mn><mo>+</mo><mn>2.50</mn><mi>w</mi></math>. Since the customer wants to spend 'no more than' $30, the total cost must be less than or equal to 30. Therefore, <math><mn>2.50</mn><mi>w</mi><mo>+</mo><mn>5</mn><mo>≤</mo><mn>30</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Translate key phrases like 'no more than' directly into inequalities (<math><mo>≤</mo></math>) and identify fixed vs. variable costs.",
      "additional_data": null
    },
    {
      "question_number": 6,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The population of a bacteria culture is modeled by the function <math><mi>P</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>500</mn><msup><mrow><mo>(</mo><mn>1.08</mn><mo>)</mo></mrow><mi>t</mi></msup></math>, where <math><mi>t</mi></math> is the time in hours. What is the best interpretation of the number 1.08 in this context?",
      "options": {
        "A": "The population increases by 1.08 bacteria per hour.",
        "B": "The population increases by 108% each hour.",
        "C": "The population increases by 8% each hour.",
        "D": "The initial population is 1.08 bacteria."
      },
      "answer": "C",
      "explanation": "In an exponential growth function <math><mi>y</mi><mo>=</mo><mi>a</mi><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo>)</mo></mrow><mi>t</mi></msup></math>, the base <math><mn>1</mn><mo>+</mo><mi>r</mi></math> represents the growth factor. Here, <math><mn>1.08</mn><mo>=</mo><mn>1</mn><mo>+</mo><mn>0.08</mn></math>, meaning <math><mi>r</mi><mo>=</mo><mn>0.08</mn></math>. This corresponds to a growth rate of 8% per time period.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For exponential functions <math><mi>a</mi><mo>(</mo><mi>b</mi><msup><mo>)</mo><mi>x</mi></msup></math>, remember that <math><mi>b</mi><mo>&gt;</mo><mn>1</mn></math> is growth and <math><mi>b</mi><mo>&lt;</mo><mn>1</mn></math> is decay. The percent change is derived from the difference between the base and 1.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Algebra",
      "skill": "Linear equations in 2 variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Line <math><mi>k</mi></math> is defined by the equation <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>12</mn></math>. Line <math><mi>m</mi></math> is perpendicular to line <math><mi>k</mi></math> and passes through the point <math><mo>(</mo><mn>6</mn><mo>,</mo><mn>2</mn><mo>)</mo></math>. Which equation defines line <math><mi>m</mi></math>?",
      "options": {
        "A": "<math><mi>y</mi><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>x</mi><mo>-</mo><mn>6</mn></math>",
        "B": "<math><mi>y</mi><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>x</mi><mo>+</mo><mn>10</mn></math>",
        "C": "<math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>x</mi><mo>+</mo><mn>6.5</mn></math>",
        "D": "<math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>x</mi><mo>+</mo><mn>10</mn></math>"
      },
      "answer": "A",
      "explanation": "First, find the slope of line <math><mi>k</mi></math>. Rewrite <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>12</mn></math> as <math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>x</mi><mo>+</mo><mn>3</mn></math>. The slope is <math><mo>-</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math>. The slope of a perpendicular line is the negative reciprocal, which is <math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>. Using point-slope form <math><mi>y</mi><mo>-</mo><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi><mo>(</mo><mi>x</mi><mo>-</mo><msub><mi>x</mi><mn>1</mn></msub><mo>)</mo></math> with <math><mo>(</mo><mn>6</mn><mo>,</mo><mn>2</mn><mo>)</mo></math>: <math><mi>y</mi><mo>-</mo><mn>2</mn><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo>(</mo><mi>x</mi><mo>-</mo><mn>6</mn><mo>)</mo></math>. Simplifying: <math><mi>y</mi><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>x</mi><mo>-</mo><mn>8</mn><mo>+</mo><mn>2</mn></math>, so <math><mi>y</mi><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>x</mi><mo>-</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Perpendicular lines have slopes that are negative reciprocals of each other (e.g., <math><mi>a</mi><mo>/</mo><mi>b</mi></math> becomes <math><mo>-</mo><mi>b</mi><mo>/</mo><mi>a</mi></math>).",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Percentages",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The price of a jacket was increased by 20% to $96.00. Later, the price was reduced by 10% from the $96.00 price. What was the original price of the jacket before the increase?",
      "options": null,
      "answer": "80",
      "explanation": "Let <math><mi>x</mi></math> be the original price. An increase of 20% means <math><mn>1.20</mn><mi>x</mi><mo>=</mo><mn>96</mn></math>. Solving for <math><mi>x</mi></math>: <math><mi>x</mi><mo>=</mo><mfrac><mn>96</mn><mn>1.20</mn></mfrac><mo>=</mo><mn>80</mn></math>. (Note: The subsequent reduction is extra information irrelevant to finding the *original* price).",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Read carefully to separate relevant from irrelevant information. Identify the base value for each percentage calculation.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Advanced Math",
      "skill": "Equivalent expressions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which expression is equivalent to <math><mo>(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo><mo>-</mo><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>7</mn><mo>)</mo></math>?",
      "options": {
        "A": "<math><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>5</mn></math>",
        "B": "<math><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>9</mn><mi>x</mi><mo>-</mo><mn>9</mn></math>",
        "C": "<math><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>-</mo><mn>9</mn></math>",
        "D": "<math><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>9</mn><mi>x</mi><mo>+</mo><mn>5</mn></math>"
      },
      "answer": "B",
      "explanation": "Distribute the negative sign to the second polynomial: <math><mo>-</mo><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>7</mn><mo>)</mo><mo>=</mo><mo>-</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>7</mn></math>. Combine like terms: <math><mo>(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><msup><mi>x</mi><mn>2</mn></msup><mo>)</mo><mo>+</mo><mo>(</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>x</mi><mo>)</mo><mo>+</mo><mo>(</mo><mo>-</mo><mn>2</mn><mo>-</mo><mn>7</mn><mo>)</mo></math>. Result: <math><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>9</mn><mi>x</mi><mo>-</mo><mn>9</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Be extremely careful with signs when subtracting polynomials. Distribute the negative to every term inside the parentheses.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": "A table showing survey results.",
      "question": "A group of 200 people were surveyed about their preference for coffee or tea. The results are shown in the table below. <br><br>| | Under 40 | 40 or Older | Total |<br>|---|---|---|---|<br>| Coffee | 45 | 75 | 120 |<br>| Tea | 55 | 25 | 80 |<br>| Total | 100 | 100 | 200 |<br><br>If a person is selected at random from those who prefer Coffee, what is the probability that the person is Under 40?",
      "options": {
        "A": "<math><mfrac><mn>45</mn><mn>200</mn></mfrac></math>",
        "B": "<math><mfrac><mn>45</mn><mn>100</mn></mfrac></math>",
        "C": "<math><mfrac><mn>45</mn><mn>120</mn></mfrac></math>",
        "D": "<math><mfrac><mn>120</mn><mn>200</mn></mfrac></math>"
      },
      "answer": "C",
      "explanation": "The question asks for a conditional probability: given the person prefers Coffee. Look only at the 'Coffee' row. The total number of Coffee drinkers is 120. Of those, 45 are Under 40. The probability is <math><mfrac><mn>45</mn><mn>120</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For conditional probability ('given that...'), the denominator changes to the total of the specific subgroup mentioned, not the grand total.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Algebra",
      "skill": "Linear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "In the equation <math><mi>k</mi><mi>x</mi><mo>-</mo><mn>3</mn><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mi>b</mi></math>, <math><mi>k</mi></math> and <math><mi>b</mi></math> are constants. If the equation has no solution, which of the following must be true?",
      "options": {
        "A": "<math><mi>k</mi><mo>=</mo><mn>5</mn></math> and <math><mi>b</mi><mo>=</mo><mo>-</mo><mn>3</mn></math>",
        "B": "<math><mi>k</mi><mo>=</mo><mn>5</mn></math> and <math><mi>b</mi><mo>≠</mo><mo>-</mo><mn>3</mn></math>",
        "C": "<math><mi>k</mi><mo>≠</mo><mn>5</mn></math> and <math><mi>b</mi><mo>=</mo><mo>-</mo><mn>3</mn></math>",
        "D": "<math><mi>k</mi><mo>≠</mo><mn>5</mn></math> and <math><mi>b</mi><mo>≠</mo><mo>-</mo><mn>3</mn></math>"
      },
      "answer": "B",
      "explanation": "A linear equation in one variable has no solution if the variable terms cancel out (coefficients are equal) but the constants are different, resulting in a false statement like <math><mn>0</mn><mo>=</mo><mn>5</mn></math>. Thus, <math><mi>k</mi></math> must equal 5, and <math><mi>b</mi></math> must NOT equal -3.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Memorize the conditions for solutions: One solution (slopes different), No solution (same slope, different y-intercept), Infinite solutions (same slope, same y-intercept).",
      "additional_data": null
    },
    {
      "question_number": 12,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "What is the sum of the solutions to the equation <math><msqrt><mn>2</mn><mi>x</mi><mo>+</mo><mn>9</mn></msqrt><mo>=</mo><mi>x</mi><mo>+</mo><mn>3</mn></math>?",
      "options": {
        "A": "-1",
        "B": "0",
        "C": "2",
        "D": "4"
      },
      "answer": "B",
      "explanation": "Square both sides to eliminate the radical: <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>=</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup></math>. Expand the right side: <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn></math>. Rearrange into standard quadratic form: <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>x</mi><mo>=</mo><mn>0</mn></math>. Factor the quadratic: <math><mi>x</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. The potential solutions are <math><mi>x</mi><mo>=</mo><mn>0</mn></math> and <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>4</mn></math>. Check for extraneous solutions by substituting back into the original equation. For <math><mi>x</mi><mo>=</mo><mn>0</mn></math>: <math><msqrt><mn>9</mn></msqrt><mo>=</mo><mn>3</mn></math> (True). For <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>4</mn></math>: <math><msqrt><mn>1</mn></msqrt><mo>=</mo><mo>-</mo><mn>1</mn></math> (False, as the square root must be non-negative). The only valid solution is <math><mn>0</mn></math>. The sum of valid solutions is 0.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always check for extraneous solutions when solving radical equations by plugging answers back into the original equation.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 250,150 250,50' fill='white' stroke='black' stroke-width='2' /><rect x='230' y='130' width='20' height='20' fill='none' stroke='black' /><text x='150' y='170' font-size='14'>24</text><text x='260' y='100' font-size='14'>7</text><text x='140' y='90' font-size='14'>25</text><text x='35' y='160' font-size='14'>A</text><text x='255' y='160' font-size='14'>C</text><text x='255' y='45' font-size='14'>B</text></svg>",
      "question_chart_description": "A right triangle ABC with the right angle at C. Side AC is the base with length 24, side BC is the height with length 7, and the hypotenuse AB has length 25.",
      "question": "In the triangle shown, what is the value of <math><mi>cos</mi><mo>(</mo><mi>B</mi><mo>)</mo></math>?",
      "options": {
        "A": "<math><mfrac><mn>7</mn><mn>25</mn></mfrac></math>",
        "B": "<math><mfrac><mn>24</mn><mn>25</mn></mfrac></math>",
        "C": "<math><mfrac><mn>7</mn><mn>24</mn></mfrac></math>",
        "D": "<math><mfrac><mn>24</mn><mn>7</mn></mfrac></math>"
      },
      "answer": "A",
      "explanation": "Cosine is defined as Adjacent over Hypotenuse. For angle B, the adjacent side is BC (length 7) and the hypotenuse is AB (length 25). Therefore, <math><mi>cos</mi><mo>(</mo><mi>B</mi><mo>)</mo><mo>=</mo><mfrac><mn>7</mn><mn>25</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember SOH CAH TOA. Identify the angle of interest first to correctly label the 'Opposite' and 'Adjacent' sides.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Advanced Math",
      "skill": "Systems of equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "If <math><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></math> is a solution to the system of equations below and <math><mi>x</mi><mo>&gt;</mo><mn>2</mn></math>, what is the value of <math><mi>y</mi></math>?<br><br><math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn></math><br><math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>1</mn></math>",
      "options": null,
      "answer": "9",
      "explanation": "Set the equations equal to each other: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn><mo>=</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>1</mn></math>. Rearrange to form a quadratic equation: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>5</mn><mo>=</mo><mn>0</mn></math>. Factor the quadratic: <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. The solutions for <math><mi>x</mi></math> are 1 and 5. The problem states that <math><mi>x</mi><mo>&gt;</mo><mn>2</mn></math>, so we select <math><mi>x</mi><mo>=</mo><mn>5</mn></math>. Substitute <math><mi>x</mi><mo>=</mo><mn>5</mn></math> into the second equation to find <math><mi>y</mi></math>: <math><mi>y</mi><mo>=</mo><mn>2</mn><mo>(</mo><mn>5</mn><mo>)</mo><mo>-</mo><mn>1</mn><mo>=</mo><mn>9</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When solving systems involving quadratics, always find the specific variable asked for (y, not x) and apply any inequality constraints given.",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Two-variable data: models and scatter-plots",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='400' height='300' viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='black' /></marker></defs><line x1='40' y1='260' x2='380' y2='260' stroke='black' marker-end='url(#arrow)' /><line x1='40' y1='260' x2='40' y2='20' stroke='black' marker-end='url(#arrow)' /><text x='370' y='280' font-size='12'>x</text><text x='20' y='30' font-size='12'>y</text><circle cx='100' cy='250' r='3' fill='blue' /><circle cx='120' cy='210' r='3' fill='blue' /><circle cx='140' cy='170' r='3' fill='blue' /><circle cx='160' cy='130' r='3' fill='blue' /><circle cx='180' cy='90' r='3' fill='blue' /><circle cx='200' cy='50' r='3' fill='blue' /><line x1='100' y1='250' x2='200' y2='50' stroke='red' stroke-width='2' stroke-dasharray='5,5' /></svg>",
      "question_chart_description": "A scatterplot showing a strong positive linear association between variables x and y. A line of best fit is drawn, reflecting a steep positive slope.",
      "question": "The scatterplot shows data collected from an experiment. The line of best fit for the data is also shown. Which of the following is closest to the slope of the line of best fit?",
      "options": {
        "A": "0.5",
        "B": "2.0",
        "C": "5.0",
        "D": "-2.0"
      },
      "answer": "B",
      "explanation": "To estimate the slope, pick two points on the line. The line rises steeply; for every 1 unit it moves right, it moves up approximately 2 units. A slope of 2.0 indicates a steep positive rise. The line goes from bottom-left to top-right, so slope is positive. It is steeper than 1 (45 degrees), confirming 2.0 is the best fit among choices.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To estimate slope from a graph, find two points on the line that cross grid intersections and calculate <math><mfrac><mi>rise</mi><mi>run</mi></mfrac></math>.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Algebra",
      "skill": "Systems of 2 linear equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The system of equations below has solution <math><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></math>.<br><math><mn>4</mn><mi>x</mi><mo>-</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>24</mn></math><br><math><mn>3</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>18</mn></math><br>What is the value of <math><mn>7</mn><mi>x</mi><mo>+</mo><mi>y</mi></math>?",
      "options": null,
      "answer": "42",
      "explanation": "Instead of solving for <math><mi>x</mi></math> and <math><mi>y</mi></math> individually, look for linear combinations. Adding the two equations directly: <math><mo>(</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>3</mn><mi>y</mi><mo>)</mo><mo>+</mo><mo>(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>)</mo><mo>=</mo><mn>24</mn><mo>+</mo><mn>18</mn></math>. This simplifies to <math><mn>7</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>42</mn></math>. The value is 42.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Look for shortcuts in systems questions asking for an expression like <math><mi>ax</mi><mo>+</mo><mi>by</mi></math>. Adding or subtracting the equations often yields the answer directly.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The equation of a circle in the xy-plane is given by <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>=</mo><mo>-</mo><mn>9</mn></math>. What is the radius of the circle?",
      "options": {
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "5"
      },
      "answer": "C",
      "explanation": "Complete the square for <math><mi>x</mi></math> and <math><mi>y</mi></math>. For <math><mi>x</mi></math>: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi></math> becomes <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><msup><mo>)</mo><mn>2</mn></msup><mo>-</mo><mn>9</mn></math>. For <math><mi>y</mi></math>: <math><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>y</mi></math> becomes <math><mo>(</mo><mi>y</mi><mo>+</mo><mn>4</mn><msup><mo>)</mo><mn>2</mn></msup><mo>-</mo><mn>16</mn></math>. Substitute back: <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><msup><mo>)</mo><mn>2</mn></msup><mo>-</mo><mn>9</mn><mo>+</mo><mo>(</mo><mi>y</mi><mo>+</mo><mn>4</mn><msup><mo>)</mo><mn>2</mn></msup><mo>-</mo><mn>16</mn><mo>=</mo><mo>-</mo><mn>9</mn></math>. Rearrange: <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mo>(</mo><mi>y</mi><mo>+</mo><mn>4</mn><msup><mo>)</mo><mn>2</mn></msup><mo>=</mo><mo>-</mo><mn>9</mn><mo>+</mo><mn>9</mn><mo>+</mo><mn>16</mn><mo>=</mo><mn>16</mn></math>. The standard form is <math><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mo>(</mo><mi>y</mi><mo>-</mo><mi>k</mi><msup><mo>)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>r</mi><mn>2</mn></msup></math>. <math><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>16</mn></math>, so <math><mi>r</mi><mo>=</mo><mn>4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To convert to circle standard form, halve the linear coefficients, square them, and add to both sides to complete the square.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "In a circle with center <math><mi>O</mi></math>, central angle <math><mi>A</mi><mi>O</mi><mi>B</mi></math> measures <math><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>4</mn></mfrac></math> radians. The area of the sector formed by this angle is <math><mn>24</mn><mi>π</mi></math>. What is the radius of the circle?",
      "options": null,
      "answer": "8",
      "explanation": "The area of a sector <math><mi>A</mi></math> is given by <math><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>r</mi><mn>2</mn></msup><mi>θ</mi></math>. We have <math><mn>24</mn><mi>π</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>r</mi><mn>2</mn></msup><mo>(</mo><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>4</mn></mfrac><mo>)</mo></math>. Simplify: <math><mn>24</mn><mi>π</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>8</mn></mfrac><msup><mi>r</mi><mn>2</mn></msup></math>. Divide by <math><mi>π</mi></math>: <math><mn>24</mn><mo>=</mo><mfrac><mn>3</mn><mn>8</mn></mfrac><msup><mi>r</mi><mn>2</mn></msup></math>. Multiply by <math><mfrac><mn>8</mn><mn>3</mn></mfrac></math>: <math><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>24</mn><mo>×</mo><mfrac><mn>8</mn><mn>3</mn></mfrac><mo>=</mo><mn>8</mn><mo>×</mo><mn>8</mn><mo>=</mo><mn>64</mn></math>. So <math><mi>r</mi><mo>=</mo><mn>8</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Use the radian formula <math><mi>A</mi><mo>=</mo><mn>0.5</mn><msup><mi>r</mi><mn>2</mn></msup><mi>θ</mi></math> rather than converting to degrees to save time.",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The graph of <math><mi>y</mi><mo>=</mo><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is the result of shifting the graph of <math><mi>y</mi><mo>=</mo><msup><mn>3</mn><mi>x</mi></msup></math> down 4 units and right 2 units. Which equation defines <math><mi>g</mi></math>?",
      "options": {
        "A": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>3</mn><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></msup><mo>-</mo><mn>4</mn></math>",
        "B": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>3</mn><mrow><mi>x</mi><mo>-</mo><mn>2</mn></mrow></msup><mo>-</mo><mn>4</mn></math>",
        "C": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>3</mn><mrow><mi>x</mi><mo>-</mo><mn>4</mn></mrow></msup><mo>+</mo><mn>2</mn></math>",
        "D": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>3</mn><mrow><mi>x</mi><mo>-</mo><mn>2</mn></mrow></msup><mo>+</mo><mn>4</mn></math>"
      },
      "answer": "B",
      "explanation": "A shift to the right by <math><mi>h</mi></math> units replaces <math><mi>x</mi></math> with <math><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><mo>)</mo></math>. So right 2 means <math><msup><mn>3</mn><mrow><mi>x</mi><mo>-</mo><mn>2</mn></mrow></msup></math>. A vertical shift down <math><mi>k</mi></math> units subtracts <math><mi>k</mi></math> from the function. So down 4 means <math><mo>-</mo><mn>4</mn></math>. Combined: <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>3</mn><mrow><mi>x</mi><mo>-</mo><mn>2</mn></mrow></msup><mo>-</mo><mn>4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Recall function transformations: <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><mo>)</mo><mo>+</mo><mi>k</mi></math> moves right <math><mi>h</mi></math> and up <math><mi>k</mi></math>. Note the negative sign for horizontal shifts.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Inference from sample statistics and margin of error",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A researcher estimates that 42% of a city's population supports a new law, with a margin of error of 3% at a 95% confidence level. Which of the following is the best conclusion from this study?",
      "options": {
        "A": "Exactly 42% of the population supports the law.",
        "B": "There is a 95% probability that between 39% and 45% of the population supports the law.",
        "C": "The true percentage of the population that supports the law is likely between 39% and 45%.",
        "D": "The percentage of the population supporting the law will increase by 3% next year."
      },
      "answer": "C",
      "explanation": "A margin of error implies a range of plausible values for the true population parameter. <math><mn>42</mn><mo>%</mo><mo>±</mo><mn>3</mn><mo>%</mo></math> gives the interval 39% to 45%. Choice C correctly describes the confidence interval concept—that the true parameter is likely within this range. Choice B is technically incorrect in frequentist statistics (probability applies to the method, not the specific interval), though typical SAT logic accepts 'likely between' (C) as the safest interpretation over specific probability statements about a fixed parameter.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Margin of error defines an interval <math><mo>(</mo><mi>mean</mi><mo>−</mo><mi>error</mi><mo>,</mo><mtext> </mtext><mi>mean</mi><mo>+</mo><mi>error</mi><mo>)</mo></math> where the true population value is likely to fall. It does not prove exact values.",
      "additional_data": null
    }
  ]
}

```

---

# SAT Math Question Difficulty Audit

## 1. Difficulty Distribution Summary

This audit compares the declared difficulty in the JSON metadata against the **Assessed Difficulty** based on the cognitive load, number of steps, and conceptual depth required to solve each problem.

* **Declared Distribution:**
* Easy: 4
* Medium: 6
* Hard: 10


* **Audited Distribution:**
* Easy: 5 (+1)
* Medium: 8 (+2)
* Hard: 7 (-3)


* **Alignment Score:** **85%** (17/20 questions correctly labeled)

## 2. Mislabeled Questions Log

Three questions were found to be mislabeled. In general, the test tends to overestimate the difficulty of geometry and data interpretation questions.

| Q# | Assigned Difficulty | Assessed Difficulty | Reason for Reclassification |
| --- | --- | --- | --- |
| **13** | Hard | **Easy** | The problem asks for  in a right triangle where all three side lengths are explicitly given. This requires only a single step: applying the definition of cosine (Adjacent/Hypotenuse). There are no complex calculations or missing sides to find. |
| **15** | Hard | **Medium** | Calculating the slope of a line of best fit is a standard algebra skill. While it involves estimation from a graph (which adds slight cognitive load), it does not require the complex insight or multi-step modeling characteristic of "Hard" questions. |
| **19** | Hard | **Medium** | The question requires applying standard function transformation rules (right shift = , down shift = ). While this falls under "Advanced Math," it is a direct application of rules without synthesis or complex algebraic manipulation. |

## 3. Detailed Analysis

* **Well-Calibrated Questions:**
* **Q11 (No Solution Constants):** Correctly labeled **Hard**. It requires abstract conceptual understanding of linear system conditions (), which is a common stumbling block for students.
* **Q16 (System Shortcut):** Correctly labeled **Hard**. While solvable by brute force, the intended path requires the insight to add the equations () to find the answer efficiently. This "insight-rewarding" design is a hallmark of Hard SAT questions.
* **Q20 (Confidence Interval):** Correctly labeled **Hard**. The distinction between "probability of the parameter" (incorrect) and "confidence in the interval" (correct) is a subtle, high-level statistical concept.


* **Borderline Cases:**
* **Q5 (Inequalities):** Labelled **Medium**, assessed as **Easy/Medium**. It is a very straightforward translation of text to math. It stands as a solid Medium only because "no more than" () is a common reversal trap for students.
* **Q9 (Polynomial Subtraction):** Labelled **Medium**. This is purely mechanical Algebra I. It fits the lower end of Medium solely due to the potential for sign errors when distributing the negative, but computationally it is simple.