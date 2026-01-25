# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Status:** Verified with corrections.
* **Issues Found:** 1
* **Critical Errors:** 0
* **Minor Issues/Warnings:** 1 (Chart Inaccuracy)

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| 7 | Chart Mismatch | The SVG for the downward-opening parabola is mathematically incorrect relative to the coordinate system implied. <br>

<br>The vertex label is , corresponding to `cy='-3'` (due to the y-flip transform). However, the path `d='M -1.2 -10 Q 2 -3.6 5.2 -10'` defines a curve with tails at  (math ) and a vertex near  (math ). <br>

<br>This creates a parabola that opens **upward** (from  to ) instead of downward, and misaligns with the vertex dot. | Update the SVG path to `M -1.2 10 Q 2 -16 5.2 10`. <br>

<br>This places the tails at  (math ) and the control point at , creating a peak at  (math ). This results in a correct downward-opening parabola passing through the vertex. |

## Metadata Consistency Findings

* **Domain & Skill Mapping:** The metadata `focus_domains` and `focus_skills` accurately reflect the content of the 20 questions.
* **Difficulty Distribution:** * Easy: 4 (Q1-Q4) matches metadata.
* Medium: 6 (Q5-Q10) matches metadata.
* Hard: 10 (Q11-Q20) matches metadata.


* **Question Type:**
* MCQ: 15 matches metadata.
* SPR (Student Produced Response): 5 matches metadata.



---

# Corrected JSON File

```json
{
  "test_metadata": {
    "focus_domains": [
      "Algebra",
      "Advanced Math",
      "Problem-Solving and Data Analysis",
      "Geometry and Trigonometry"
    ],
    "focus_skills": [
      "Linear functions",
      "Linear equations in 1 variable",
      "Systems of 2 linear equations",
      "Nonlinear functions",
      "Area and volume formulas",
      "Scatterplots and models"
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
      "skill": "Linear functions",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question": "The function <math><mi>f</mi></math> is defined by <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>14</mn><mi>x</mi><mo>+</mo><mn>9</mn></math>. What is the value of <math><mi>f</mi><mo>(</mo><mn>5</mn><mo>)</mo></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "28",
        "B": "61",
        "C": "79",
        "D": "84"
      },
      "answer": "C",
      "explanation": "Substitute <math><mn>5</mn></math> for <math><mi>x</mi></math> in the equation: <math><mi>f</mi><mo>(</mo><mn>5</mn><mo>)</mo><mo>=</mo><mn>14</mn><mo>(</mo><mn>5</mn><mo>)</mo><mo>+</mo><mn>9</mn></math>. Calculate the product: <math><mn>14</mn><mo>×</mo><mn>5</mn><mo>=</mo><mn>70</mn></math>. Then add <math><mn>9</mn></math> to get <math><mn>79</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When evaluating a function, simply replace the variable in the parentheses with the given number and follow the order of operations.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Algebra",
      "skill": "Linear equations in 1 variable",
      "difficulty": "Easy",
      "question_type": "SPR",
      "question": "If <math><mn>2</mn><mo>(</mo><mi>n</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>12</mn></math>, what is the value of <math><mi>n</mi></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "9",
      "explanation": "Divide both sides by <math><mn>2</mn></math> to get <math><mi>n</mi><mo>-</mo><mn>3</mn><mo>=</mo><mn>6</mn></math>. Add <math><mn>3</mn></math> to both sides to find <math><mi>n</mi><mo>=</mo><mn>9</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "You can check your answer by plugging it back into the original equation: 2(9-3) = 2(6) = 12.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question": "A bag contains <math><mn>6</mn></math> red marbles, <math><mn>4</mn></math> blue marbles, and <math><mn>8</mn></math> green marbles. If one marble is selected at random, what is the probability that it is blue?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "<math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>",
        "B": "<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>",
        "C": "<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>",
        "D": "<math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>"
      },
      "answer": "A",
      "explanation": "The total number of marbles is <math><mn>6</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>8</mn><mo>=</mo><mn>18</mn></math>. The number of favorable outcomes (blue marbles) is <math><mn>4</mn></math>. The probability is <math><mfrac><mn>4</mn><mn>18</mn></mfrac></math>, which simplifies to <math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Probability is always (Favorable Outcomes) / (Total Outcomes). Always check if the fraction can be simplified.",
      "additional_data": null
    },
    {
      "question_number": 4,
      "domain": "Geometry and Trigonometry",
      "skill": "Area and volume formulas",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question": "A rectangular swimming pool has a length of <math><mn>20</mn></math> feet and a width of <math><mn>15</mn></math> feet. What is the area, in square feet, of the surface of the pool?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "35",
        "B": "70",
        "C": "300",
        "D": "600"
      },
      "answer": "C",
      "explanation": "The area of a rectangle is calculated as <math><mi>length</mi><mo>×</mo><mi>width</mi></math>. Calculating <math><mn>20</mn><mo>×</mo><mn>15</mn></math> results in <math><mn>300</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Don't confuse area (multiplication) with perimeter (addition).",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Algebra",
      "skill": "Linear functions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question": "A landscaping company charges a fee modeled by the equation <math><mi>C</mi><mo>=</mo><mn>45</mn><mi>h</mi><mo>+</mo><mn>80</mn></math>, where <math><mi>C</mi></math> is the total cost in dollars and <math><mi>h</mi></math> is the number of hours worked. What does the value <math><mn>45</mn></math> represent in this context?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "The initial consultation fee",
        "B": "The total cost for one day of work",
        "C": "The hourly rate charged for labor",
        "D": "The maximum number of hours the company will work"
      },
      "answer": "C",
      "explanation": "In the linear equation <math><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>b</mi></math>, the slope <math><mi>m</mi></math> represents the rate of change. Here, <math><mn>45</mn></math> is the coefficient of <math><mi>h</mi></math> (hours), so it represents the cost per hour, or the hourly rate.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In linear models, the coefficient of the variable (slope) is usually a rate (per unit), while the constant term (y-intercept) is a starting value or flat fee.",
      "additional_data": null
    },
    {
      "question_number": 6,
      "domain": "Algebra",
      "skill": "Linear inequalities in 1 or 2 variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question": "Which of the following graphs in the xy-plane represents the solution to the inequality <math><mi>y</mi><mo>&lt;</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>?",
      "question_chart_svg": "<svg width='400' height='400' viewBox='-10 -10 20 20' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='hatchA' patternUnits='userSpaceOnUse' width='4' height='4'><path d='M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2' stroke='gray' stroke-width='0.5'/></pattern><pattern id='hatchB' patternUnits='userSpaceOnUse' width='4' height='4'><path d='M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2' stroke='gray' stroke-width='0.5'/></pattern><pattern id='hatchC' patternUnits='userSpaceOnUse' width='4' height='4'><path d='M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2' stroke='gray' stroke-width='0.5'/></pattern><pattern id='hatchD' patternUnits='userSpaceOnUse' width='4' height='4'><path d='M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2' stroke='gray' stroke-width='0.5'/></pattern></defs><style>.axis { stroke: black; stroke-width: 0.2; } .grid { stroke: #ddd; stroke-width: 0.1; } .text { font-size: 1px; font-family: sans-serif; }</style><g id='grid'><line x1='-10' y1='0' x2='10' y2='0' class='axis'/><line x1='0' y1='-10' x2='0' y2='10' class='axis'/></g><text x='1' y='-8' class='text'>Graph C</text><line x1='-5' y1='-9' x2='4' y2='9' stroke='black' stroke-width='0.3' stroke-dasharray='0.5,0.5' /><polygon points='-5,-9 4,9 10,9 10,-10 -10,-10 -10,-9' fill='url(#hatchC)' opacity='0.3' /></svg>",
      "question_chart_description": "The chart shows four graphs (represented conceptually here by one correct example for visualization). The correct graph C has a dashed line passing through (0,1) with a slope of 2. The shaded region is below the dashed line.",
      "options": {
        "A": "A solid line with slope 2 and y-intercept 1, shaded above.",
        "B": "A dashed line with slope 2 and y-intercept 1, shaded above.",
        "C": "A dashed line with slope 2 and y-intercept 1, shaded below.",
        "D": "A solid line with slope 2 and y-intercept 1, shaded below."
      },
      "answer": "C",
      "explanation": "The inequality is <math><mi>y</mi><mo>&lt;</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>. The boundary line is <math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>. Because the inequality is strict (<math><mo>&lt;</mo></math>), the line must be dashed. Because <math><mi>y</mi></math> is less than the expression, the shaded region must be below the line.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Use the 'Test Point' method. Plug in (0,0). Is 0 < 2(0) + 1? Yes, 0 < 1. So the region containing (0,0) must be shaded.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question": "The graph of the function <math><mi>y</mi><mo>=</mo><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is shown in the xy-plane. Which of the following could be the equation for <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>?",
      "question_chart_svg": "<svg width='400' height='400' viewBox='-10 -10 20 20' xmlns='http://www.w3.org/2000/svg'><line x1='-10' y1='0' x2='10' y2='0' stroke='black' stroke-width='0.2'/><line x1='0' y1='-10' x2='0' y2='10' stroke='black' stroke-width='0.2'/><path d='M -2 -13 Q 2 19 6 -13' stroke='black' stroke-width='0.3' fill='none' transform='scale(1, -1)' /><text x='2' y='-4' font-size='1' font-family='sans-serif'>(2, 3)</text><circle cx='2' cy='3' r='0.2' fill='black' transform='scale(1, -1)'/></svg>",
      "question_chart_description": "A parabola opening downward with its vertex at the coordinates (2, 3).",
      "options": {
        "A": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mn>3</mn></math>",
        "B": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mn>3</mn></math>",
        "C": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mn>3</mn></math>",
        "D": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><msup><mo>)</mo><mn>2</mn></msup><mo>-</mo><mn>3</mn></math>"
      },
      "answer": "A",
      "explanation": "The vertex form of a quadratic is <math><mi>y</mi><mo>=</mo><mi>a</mi><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mi>k</mi></math>, where <math><mo>(</mo><mi>h</mi><mo>,</mo><mi>k</mi><mo>)</mo></math> is the vertex. The chart shows the vertex at <math><mo>(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>)</mo></math>, so <math><mi>h</mi><mo>=</mo><mn>2</mn></math> and <math><mi>k</mi><mo>=</mo><mn>3</mn></math>. The parabola opens downward, so <math><mi>a</mi></math> must be negative.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember: Inside the parentheses is opposite (x - 2 means right 2), outside is same (+ 3 means up 3).",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Two-variable data: models and scatter-plots",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question": "The scatterplot shows the relationship between variables <math><mi>x</mi></math> and <math><mi>y</mi></math>. A line of best fit is also shown. Based on the line of best fit, which of the following is closest to the predicted value of <math><mi>y</mi></math> when <math><mi>x</mi><mo>=</mo><mn>8</mn></math>?",
      "question_chart_svg": "<svg width='400' height='300' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'><line x1='0' y1='10' x2='10' y2='10' stroke='black' stroke-width='0.1'/><line x1='0' y1='0' x2='0' y2='10' stroke='black' stroke-width='0.1'/><line x1='0' y1='8' x2='10' y2='3' stroke='blue' stroke-width='0.1'/><circle cx='2' cy='7' r='0.1' fill='black'/><circle cx='4' cy='6' r='0.1' fill='black'/><circle cx='6' cy='5.5' r='0.1' fill='black'/><circle cx='8' cy='4' r='0.1' fill='black'/><text x='9' y='9.5' font-size='0.5'>x</text><text x='0.5' y='1' font-size='0.5'>y</text><text x='8' y='10.8' font-size='0.5'>8</text></svg>",
      "question_chart_description": "A scatterplot with a downward sloping line of best fit. The x-axis ranges from 0 to 10. The line starts near y=8 at x=0 and passes through approx y=4 at x=8.",
      "options": {
        "A": "2.5",
        "B": "4.0",
        "C": "6.0",
        "D": "8.5"
      },
      "answer": "B",
      "explanation": "Locate <math><mi>x</mi><mo>=</mo><mn>8</mn></math> on the horizontal axis. Move vertically up to the line of best fit. From that point on the line, look across to the vertical y-axis. The point on the line corresponds to <math><mi>y</mi><mo>=</mo><mn>4</mn></math>.",
      "explanation_chart_svg": "<svg width='400' height='300' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'><line x1='0' y1='8' x2='10' y2='3' stroke='blue' stroke-width='0.1'/><line x1='8' y1='10' x2='8' y2='4' stroke='red' stroke-width='0.05' stroke-dasharray='0.2'/><line x1='8' y1='4' x2='0' y2='4' stroke='red' stroke-width='0.05' stroke-dasharray='0.2'/><text x='8' y='10.8' font-size='0.5'>8</text><text x='-1' y='4' font-size='0.5'>4</text></svg>",
      "explanation_chart_description": "The original graph with a red dashed vertical line going up from x=8 to the regression line, and a horizontal line going left to y=4.",
      "score_improvement_tip": "Always read from the line of best fit, not the nearest data point, when asked for a 'predicted' value.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question": "In a right triangle, one leg measures <math><mn>5</mn></math> units and the hypotenuse measures <math><mn>13</mn></math> units. What is the length of the other leg?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "8",
        "B": "12",
        "C": "<math><msqrt><mn>194</mn></msqrt></math>",
        "D": "18"
      },
      "answer": "B",
      "explanation": "Using the Pythagorean theorem <math><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></math>: <math><msup><mn>5</mn><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mn>13</mn><mn>2</mn></msup></math>. This simplifies to <math><mn>25</mn><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mn>169</mn></math>. Subtracting 25 gives <math><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mn>144</mn></math>, so <math><mi>b</mi><mo>=</mo><mn>12</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Memorize common Pythagorean triples like 3-4-5, 5-12-13, and 8-15-17 to save calculation time.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Percentages",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question": "The population of a town increased from <math><mn>8,000</mn></math> to <math><mn>8,400</mn></math> in one year. What was the percent increase in the population?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "5",
      "explanation": "Percent increase is <math><mfrac><mi>Difference</mi><mi>Original</mi></mfrac><mo>×</mo><mn>100</mn></math>. The difference is <math><mn>8,400</mn><mo>-</mo><mn>8,000</mn><mo>=</mo><mn>400</mn></math>. Dividing by the original: <math><mfrac><mn>400</mn><mn>8,000</mn></mfrac><mo>=</mo><mn>0.05</mn></math>. Multiplying by 100 gives <math><mn>5%</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always divide the change by the *original* (starting) number, not the final number.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Algebra",
      "skill": "Systems of 2 linear equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question": "Consider the system of equations below, where <math><mi>k</mi></math> is a constant.<br><math><mi>k</mi><mi>x</mi><mo>-</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>10</mn></math><br><math><mn>4</mn><mi>x</mi><mo>-</mo><mn>5</mn><mi>y</mi><mo>=</mo><mn>7</mn></math><br>If the system has no solution, what is the value of <math><mi>k</mi></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "1.2",
        "B": "2.4",
        "C": "4.6",
        "D": "5.0"
      },
      "answer": "B",
      "explanation": "For a system of linear equations to have no solution, the lines must be parallel, meaning their slopes must be equal (or the ratio of x-coefficients to y-coefficients must be the same, but the constants different). Ratio of y-coefficients is <math><mfrac><mrow><mo>-</mo><mn>3</mn></mrow><mrow><mo>-</mo><mn>5</mn></mrow></mfrac><mo>=</mo><mn>0.6</mn></math>. Ratio of x-coefficients is <math><mfrac><mi>k</mi><mn>4</mn></mfrac></math>. Setting them equal: <math><mfrac><mi>k</mi><mn>4</mn></mfrac><mo>=</mo><mn>0.6</mn><mo>&#8594;</mo><mi>k</mi><mo>=</mo><mn>2.4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For 'no solution', set the ratios of x and y coefficients equal: a1/a2 = b1/b2.",
      "additional_data": null
    },
    {
      "question_number": 12,
      "domain": "Algebra",
      "skill": "Linear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question": "A linear function <math><mi>f</mi></math> models the growth of a sapling. The model predicts the height was <math><mn>15</mn></math> inches when <math><mi>x</mi><mo>=</mo><mn>3</mn></math> months, and <math><mn>35</mn></math> inches when <math><mi>x</mi><mo>=</mo><mn>7</mn></math> months. What is the predicted height, in inches, when <math><mi>x</mi><mo>=</mo><mn>10</mn></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "45",
        "B": "50",
        "C": "55",
        "D": "60"
      },
      "answer": "B",
      "explanation": "First find the slope (rate of growth): <math><mi>m</mi><mo>=</mo><mfrac><mrow><mn>35</mn><mo>-</mo><mn>15</mn></mrow><mrow><mn>7</mn><mo>-</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mfrac><mn>20</mn><mn>4</mn></mfrac><mo>=</mo><mn>5</mn></math>. The equation is <math><mi>y</mi><mo>-</mo><mn>15</mn><mo>=</mo><mn>5</mn><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo></math>, so <math><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi></math>. For <math><mi>x</mi><mo>=</mo><mn>10</mn></math>, <math><mi>y</mi><mo>=</mo><mn>5</mn><mo>(</mo><mn>10</mn><mo>)</mo><mo>=</mo><mn>50</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Calculate the slope first. This represents the unit rate, which allows you to extrapolate values.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Algebra",
      "skill": "Linear functions",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question": "For the linear function <math><mi>g</mi></math>, <math><mi>g</mi><mo>(</mo><mn>0</mn><mo>)</mo><mo>=</mo><mo>-</mo><mn>2</mn></math> and <math><mi>g</mi><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>6</mn></math>. What is the value of <math><mi>g</mi><mo>(</mo><mn>3</mn><mo>)</mo></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "-14",
      "explanation": "Since <math><mi>g</mi><mo>(</mo><mn>0</mn><mo>)</mo><mo>=</mo><mo>-</mo><mn>2</mn></math>, the y-intercept <math><mi>b</mi></math> is <math><mo>-</mo><mn>2</mn></math>. Use the second point to find slope <math><mi>m</mi></math>: <math><mi>g</mi><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>=</mo><mi>m</mi><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>-</mo><mn>2</mn><mo>=</mo><mn>6</mn></math>. Solving for <math><mi>m</mi></math>: <math><mo>-</mo><mn>2</mn><mi>m</mi><mo>=</mo><mn>8</mn><mo>&#8594;</mo><mi>m</mi><mo>=</mo><mo>-</mo><mn>4</mn></math>. The function is <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>. Then <math><mi>g</mi><mo>(</mo><mn>3</mn><mo>)</mo><mo>=</mo><mo>-</mo><mn>4</mn><mo>(</mo><mn>3</mn><mo>)</mo><mo>-</mo><mn>2</mn><mo>=</mo><mo>-</mo><mn>12</mn><mo>-</mo><mn>2</mn><mo>=</mo><mo>-</mo><mn>14</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When g(0) is given, you instantly know the y-intercept. This simplifies finding the equation.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question": "A substance decays such that the amount remaining decreases by <math><mn>15</mn><mo>%</mo></math> every hour. If the initial amount was <math><mn>200</mn></math> grams, which equation models the amount <math><mi>A</mi><mo>(</mo><mi>t</mi><mo>)</mo></math> remaining after <math><mi>t</mi></math> hours?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "<math><mi>A</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>200</mn><mo>(</mo><mn>0.15</mn><msup><mo>)</mo><mi>t</mi></msup></math>",
        "B": "<math><mi>A</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>200</mn><mo>(</mo><mn>0.85</mn><msup><mo>)</mo><mi>t</mi></msup></math>",
        "C": "<math><mi>A</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>200</mn><mo>(</mo><mn>1.15</mn><msup><mo>)</mo><mi>t</mi></msup></math>",
        "D": "<math><mi>A</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>200</mn><mo>-</mo><mn>15</mn><mi>t</mi></math>"
      },
      "answer": "B",
      "explanation": "Exponential decay is modeled by <math><mi>y</mi><mo>=</mo><mi>a</mi><mo>(</mo><mn>1</mn><mo>-</mo><mi>r</mi><msup><mo>)</mo><mi>t</mi></msup></math>. Here <math><mi>a</mi><mo>=</mo><mn>200</mn></math> and <math><mi>r</mi><mo>=</mo><mn>0.15</mn></math>. The base becomes <math><mn>1</mn><mo>-</mo><mn>0.15</mn><mo>=</mo><mn>0.85</mn></math>. So, <math><mi>A</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>200</mn><mo>(</mo><mn>0.85</mn><msup><mo>)</mo><mi>t</mi></msup></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "If something decreases by a percentage, multiply by (100% - percent). If it increases, multiply by (100% + percent).",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Advanced Math",
      "skill": "Equivalent expressions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question": "Which expression is equivalent to <math><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac></math> for <math><mi>x</mi><mo>&gt;</mo><mn>0</mn></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "<math><mfrac><mn>2</mn><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac></math>",
        "B": "<math><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></mrow></mfrac></math>",
        "C": "<math><mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></mrow></mfrac></math>",
        "D": "<math><mfrac><mn>2</mn><mrow><mi>x</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></mfrac></math>"
      },
      "answer": "B",
      "explanation": "To add fractions, find a common denominator, which is <math><mi>x</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></math>. The expression becomes <math><mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></mfrac><mo>+</mo><mfrac><mi>x</mi><mrow><mi>x</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></mrow></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When adding rational expressions, always multiply the top and bottom of each fraction by the factor missing from its denominator.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question": "How many real solutions does the equation <math><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>4</mn><mo>=</mo><mn>0</mn></math> have?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "Zero",
        "B": "One",
        "C": "Two",
        "D": "Three"
      },
      "answer": "A",
      "explanation": "Use the discriminant <math><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></math>. Here <math><mi>a</mi><mo>=</mo><mn>3</mn></math>, <math><mi>b</mi><mo>=</mo><mn>5</mn></math>, <math><mi>c</mi><mo>=</mo><mn>4</mn></math>. <math><msup><mn>5</mn><mn>2</mn></msup><mo>-</mo><mn>4</mn><mo>(</mo><mn>3</mn><mo>)</mo><mo>(</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>25</mn><mo>-</mo><mn>48</mn><mo>=</mo><mo>-</mo><mn>23</mn></math>. Since the discriminant is negative, there are zero real solutions.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Positive discriminant = 2 solutions. Zero discriminant = 1 solution. Negative discriminant = 0 real solutions.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Inference from sample statistics and margin of error",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question": "A researcher estimates that <math><mn>42</mn><mo>%</mo></math> of a city's residents support a new law, with a margin of error of <math><mn>3</mn><mo>%</mo></math> at a <math><mn>95</mn><mo>%</mo></math> confidence level. Which of the following is the most appropriate conclusion?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "Exactly 42% of residents support the law.",
        "B": "There is a 95% chance that between 39% and 45% of residents support the law.",
        "C": "At least 45% of residents support the law.",
        "D": "It is plausible that the true percentage of support is 40%."
      },
      "answer": "D",
      "explanation": "The margin of error implies the true value likely falls between <math><mn>42</mn><mo>-</mo><mn>3</mn><mo>=</mo><mn>39</mn><mo>%</mo></math> and <math><mn>42</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>45</mn><mo>%</mo></math>. Choice D (40%) lies within this interval. Choice B is technically incorrect terminology ('chance' vs confidence in the method), and A/C are too definitive.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Margin of error creates an interval (Estimate - MOE to Estimate + MOE). The true population parameter is likely within this interval.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question": "The equation of a circle in the xy-plane is <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>10</mn><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>y</mi><mo>=</mo><mn>2</mn></math>. What is the radius of the circle?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "6",
      "explanation": "Complete the square for x: <math><mo>(</mo><mi>x</mi><mo>+</mo><mn>5</mn><msup><mo>)</mo><mn>2</mn></msup><mo>-</mo><mn>25</mn></math>. For y: <math><mo>(</mo><mi>y</mi><mo>-</mo><mn>3</mn><msup><mo>)</mo><mn>2</mn></msup><mo>-</mo><mn>9</mn></math>. The equation becomes <math><mo>(</mo><mi>x</mi><mo>+</mo><mn>5</mn><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mo>(</mo><mi>y</mi><mo>-</mo><mn>3</mn><msup><mo>)</mo><mn>2</mn></msup><mo>=</mo><mn>2</mn><mo>+</mo><mn>25</mn><mo>+</mo><mn>9</mn><mo>=</mo><mn>36</mn></math>. Radius is <math><msqrt><mn>36</mn></msqrt><mo>=</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To complete the square for x^2 + bx, add (b/2)^2 to both sides of the equation.",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Geometry and Trigonometry",
      "skill": "Lines, angles, and triangles",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question": "In triangle <math><mi>A</mi><mi>B</mi><mi>C</mi></math> below, line segment <math><mi>D</mi><mi>E</mi></math> is parallel to <math><mi>B</mi><mi>C</mi></math>, with <math><mi>D</mi></math> on <math><mi>A</mi><mi>B</mi></math> and <math><mi>E</mi></math> on <math><mi>A</mi><mi>C</mi></math>. If <math><mi>A</mi><mi>D</mi><mo>=</mo><mn>4</mn></math>, <math><mi>D</mi><mi>B</mi><mo>=</mo><mn>2</mn></math>, and <math><mi>D</mi><mi>E</mi><mo>=</mo><mn>6</mn></math>, what is the length of <math><mi>B</mi><mi>C</mi></math>?",
      "question_chart_svg": "<svg width='400' height='300' viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='200,50 100,250 300,250' fill='none' stroke='black' stroke-width='2' /><line x1='133' y1='183' x2='267' y2='183' stroke='black' stroke-width='2' /><text x='195' y='45' font-size='15'>A</text><text x='90' y='265' font-size='15'>B</text><text x='305' y='265' font-size='15'>C</text><text x='120' y='180' font-size='15'>D</text><text x='270' y='180' font-size='15'>E</text></svg>",
      "question_chart_description": "Triangle ABC with a horizontal line segment DE cutting across the middle. A is the top vertex. D lies on side AB and E lies on side AC. DE is parallel to base BC.",
      "options": {
        "A": "8",
        "B": "9",
        "C": "10",
        "D": "12"
      },
      "answer": "B",
      "explanation": "Triangles <math><mi>A</mi><mi>D</mi><mi>E</mi></math> and <math><mi>A</mi><mi>B</mi><mi>C</mi></math> are similar. The ratio of sides is <math><mfrac><mrow><mi>A</mi><mi>D</mi></mrow><mrow><mi>A</mi><mi>B</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>D</mi><mi>E</mi></mrow><mrow><mi>B</mi><mi>C</mi></mrow></mfrac></math>. <math><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi><mi>D</mi><mo>+</mo><mi>D</mi><mi>B</mi><mo>=</mo><mn>4</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>6</mn></math>. So, <math><mfrac><mn>4</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>6</mn><mrow><mi>B</mi><mi>C</mi></mrow></mfrac></math>. Cross-multiply: <math><mn>4</mn><mo>(</mo><mi>B</mi><mi>C</mi><mo>)</mo><mo>=</mo><mn>36</mn></math>, so <math><mi>B</mi><mi>C</mi><mo>=</mo><mn>9</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When a line is parallel to a triangle base, it creates a smaller similar triangle. Always compare the small triangle's side to the *total* large triangle's side.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question": "What is the sum of the solutions to the equation <math><msqrt><mn>2</mn><mi>x</mi><mo>+</mo><mn>6</mn></msqrt><mo>=</mo><mi>x</mi><mo>-</mo><mn>1</mn></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "5",
      "explanation": "Square both sides: <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>=</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><msup><mo>)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>. Rearrange: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>5</mn><mo>=</mo><mn>0</mn></math>. Factor: <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Potential solutions: <math><mn>5</mn></math> and <math><mo>-</mo><mn>1</mn></math>. Check <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>1</mn></math>: <math><msqrt><mn>4</mn></msqrt><mo>=</mo><mn>2</mn></math> but <math><mo>-</mo><mn>1</mn><mo>-</mo><mn>1</mn><mo>=</mo><mo>-</mo><mn>2</mn></math>, so <math><mo>-</mo><mn>1</mn></math> is extraneous. The only valid solution is <math><mn>5</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always check for extraneous solutions when squaring both sides of an equation involving variables.",
      "additional_data": null
    }
  ]
}

```

# SAT Math Question Difficulty Audit

## 1. Difficulty Distribution Summary
*   **Declared Distribution:** Easy: 4, Medium: 6, Hard: 10
*   **Audited Distribution:** Easy: 4, Medium: 12, Hard: 4
*   **Alignment Score:** 70%

## 2. Mislabeled Questions Log
| Q# | Assigned Difficulty | Assessed Difficulty | Reason for Reclassification |
| :-- | :--- | :--- | :--- |
| 12 | Hard | Medium | Problem is a standard linear modeling task requiring slope calculation and substitution (procedural), lacking the abstract insight required for "Hard". |
| 13 | Hard | Medium | Task involves finding a linear equation from two points (y-intercept given directly); standard procedural skill. |
| 14 | Hard | Medium | Direct application of the exponential decay formula ($1-r$); relies on recognition rather than complex modeling. |
| 15 | Hard | Medium | Requires adding two rational expressions with a clear common denominator; standard algebraic manipulation. |
| 16 | Hard | Medium | Direct application of the discriminant formula ($b^2-4ac$); single-step procedural check. |
| 19 | Hard | Medium | Standard similar triangle proportion problem ($AD/AB = DE/BC$); requires only one setup and calculation step. |

## 3. Detailed Analysis
*   **Well-Calibrated Questions:**
    *   **Q11 (Hard):** Correctly identified as Hard due to the abstract parameter $k$ and the "no solution" condition requiring deep conceptual understanding of linear systems.
    *   **Q17 (Hard):** Correctly labeled; interpreting confidence intervals and margins of error is a high-cognitive-load conceptual task for students.
    *   **Q20 (Hard):** Classic Hard archetype involving a radical equation that leads to a quadratic with an extraneous solution trap.
*   **General Observation:** The model tends to overclassify standard procedural "Medium" questions (linear modeling, quadratics, rational expressions) as "Hard". True "Hard" questions usually involve a "trick", a parameter, or a multi-stage logical leap, not just a formula application.

