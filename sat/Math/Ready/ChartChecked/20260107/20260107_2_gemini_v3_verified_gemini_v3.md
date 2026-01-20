# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 3
* **Critical Errors:** 2 (Incorrect Answer Key/Explanation in Q12; Contradictory Graph in Q3)
* **Minor Issues/Warnings:** 1 (Unprofessional "Self-correction" note in Q12)

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| 3 | Chart Mismatch | The SVG graph shows a line rising from left to right (positive visual slope), but the text describes a "negative slope". In SVG coordinates (0,0 at top-left), a line from y=120 to y=40 rises visually. | Update SVG to visually depict a negative slope (falling from left to right) to align with the text description. |
| 12 | Mathematical Error | The question asks for the sum of solutions to . The only valid solution is  ( is extraneous). The sum is 2. The provided answer key is **B** (1), which implies the sum of 2 and -1 (incorrect) or -3 and something else. Option **C** is 2. | Change `answer` from **B** to **C**. Rewrite the explanation to correctly identify  as the single valid solution and verify the sum is 2. |
| 12 | Content Quality | The explanation contains conversational "Self-correction" text ("Wait, the question asks... Let me re-calculate..."). | Rewrite the explanation to be professional, direct, and mathematically accurate. Remove `additional_data` field content. |

## Metadata Consistency Findings

* **Counts:** The distribution of difficulty (4 Easy, 6 Medium, 10 Hard) and question types (15 MCQ, 5 SPR) matches the `test_metadata` exactly.
* **Domains/Skills:** The domain and skill mappings are consistent with standard SAT categories.

---

## Corrected JSON File

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
      "Linear equations in one variable",
      "Systems of equations",
      "Nonlinear functions",
      "Ratios, rates, and proportions"
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
      "skill": "Linear equations in one variable",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "If <math><mn>5</mn><mi>x</mi><mo>-</mo><mn>9</mn><mo>=</mo><mn>21</mn></math>, what is the value of <math><mi>x</mi></math>?",
      "options": {
        "A": "2.4",
        "B": "6",
        "C": "12",
        "D": "30"
      },
      "answer": "B",
      "explanation": "Add 9 to both sides of the equation: <math><mn>5</mn><mi>x</mi><mo>=</mo><mn>30</mn></math>. Divide both sides by 5: <math><mi>x</mi><mo>=</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Isolate the variable term first by performing inverse operations for addition or subtraction, then handle multiplication or division.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A bag contains 6 red marbles, 4 blue marbles, and 10 green marbles. If one marble is selected at random from the bag, what is the probability that it is blue?",
      "options": {
        "A": "0.2",
        "B": "0.25",
        "C": "0.4",
        "D": "0.5"
      },
      "answer": "A",
      "explanation": "Calculate the total number of marbles: <math><mn>6</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>10</mn><mo>=</mo><mn>20</mn></math>. The number of blue marbles is 4. The probability is <math><mfrac><mn>4</mn><mn>20</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>5</mn></mfrac><mo>=</mo><mn>0.2</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Probability is the ratio of favorable outcomes to the total number of possible outcomes.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Algebra",
      "skill": "Linear functions",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='300' viewBox='-10 -10 220 220' xmlns='http://www.w3.org/2000/svg'><line x1='10' y1='200' x2='200' y2='200' stroke='black' stroke-width='2' /><line x1='20' y1='10' x2='20' y2='210' stroke='black' stroke-width='2' /><line x1='0' y1='40' x2='200' y2='160' stroke='blue' stroke-width='2' /><text x='205' y='200' font-family='Arial' font-size='12'>x</text><text x='10' y='10' font-family='Arial' font-size='12'>y</text><text x='25' y='45' font-family='Arial' font-size='10'>80</text><circle cx='20' cy='52' r='3' fill='black' /></svg>",
      "question_chart_description": "A graph of a linear function in the xy-plane. The line crosses the y-axis at y=80 and has a negative slope.",
      "question": "The graph of the linear function <math><mi>f</mi></math> is shown. What is the <math><mi>y</mi></math>-intercept of the graph of <math><mi>y</mi><mo>=</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>?",
      "options": {
        "A": "(0, 0)",
        "B": "(0, 80)",
        "C": "(80, 0)",
        "D": "(0, 40)"
      },
      "answer": "B",
      "explanation": "The <math><mi>y</mi></math>-intercept is the point where the line crosses the <math><mi>y</mi></math>-axis (where <math><mi>x</mi><mo>=</mo><mn>0</mn></math>). The graph clearly intersects the vertical axis at the marked value of 80. Thus, the coordinate is <math><mo>(</mo><mn>0</mn><mo>,</mo><mn>80</mn><mo>)</mo></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "The y-intercept is always located where the graph intersects the vertical axis.",
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
      "question": "A rectangle has a length of 12 centimeters and a width of 5 centimeters. What is the area, in square centimeters, of the rectangle?",
      "options": null,
      "answer": "60",
      "explanation": "The area of a rectangle is calculated as <math><mi>length</mi><mo>×</mo><mi>width</mi></math>. Therefore, <math><mn>12</mn><mo>×</mo><mn>5</mn><mo>=</mo><mn>60</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Memorize basic geometric formulas: Area of a rectangle = l * w.",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Algebra",
      "skill": "Systems of 2 linear equations in 2 variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The system of equations below is defined as follows:\n<math><mn>2</mn><mi>x</mi><mo>-</mo><mi>y</mi><mo>=</mo><mn>4</mn></math>\n<math><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>7</mn></math>\nWhat is the value of <math><mi>x</mi></math> in the solution <math><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></math> to the system?",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "5"
      },
      "answer": "C",
      "explanation": "From the first equation, isolate <math><mi>y</mi></math>: <math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>4</mn></math>. Substitute this into the second equation: <math><mi>x</mi><mo>+</mo><mn>2</mn><mo>(</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>7</mn></math>. Simplify: <math><mi>x</mi><mo>+</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>8</mn><mo>=</mo><mn>7</mn></math>, so <math><mn>5</mn><mi>x</mi><mo>=</mo><mn>15</mn></math>, which gives <math><mi>x</mi><mo>=</mo><mn>3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For systems of equations, substitution is often efficient when one variable is easily isolated.",
      "additional_data": null
    },
    {
      "question_number": 6,
      "domain": "Advanced Math",
      "skill": "Equivalent expressions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which of the following expressions is equivalent to <math><mn>3</mn><mi>x</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo><mo>-</mo><mn>2</mn><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn><mo>)</mo></math>?",
      "options": {
        "A": "<math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>",
        "B": "<math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>",
        "C": "<math><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>",
        "D": "<math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn></math>"
      },
      "answer": "B",
      "explanation": "Distribute the terms: <math><mn>3</mn><mi>x</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>+</mo><mn>3</mn><mi>x</mi><mo>(</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi></math> and <math><mo>-</mo><mn>2</mn><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>)</mo><mo>-</mo><mn>2</mn><mo>(</mo><mo>-</mo><mn>1</mn><mo>)</mo><mo>=</mo><mo>-</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn></math>. Combine like terms: <math><mo>(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>)</mo><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Be careful with signs when distributing negative numbers into parentheses.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: distributions and measures of center and spread",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The data set <math><mi>S</mi></math> consists of the numbers <math><mn>10</mn><mo>,</mo><mn>12</mn><mo>,</mo><mn>15</mn><mo>,</mo><mn>18</mn><mo>,</mo><mn>20</mn></math>. If a new number, <math><mn>45</mn></math>, is added to the set to create a new data set <math><mi>T</mi></math>, what is the difference between the mean of set <math><mi>T</mi></math> and the mean of set <math><mi>S</mi></math>?",
      "options": null,
      "answer": "5",
      "explanation": "Mean of S: <math><mfrac><mrow><mn>10</mn><mo>+</mo><mn>12</mn><mo>+</mo><mn>15</mn><mo>+</mo><mn>18</mn><mo>+</mo><mn>20</mn></mrow><mn>5</mn></mfrac><mo>=</mo><mfrac><mn>75</mn><mn>5</mn></mfrac><mo>=</mo><mn>15</mn></math>. Mean of T: <math><mfrac><mrow><mn>75</mn><mo>+</mo><mn>45</mn></mrow><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>120</mn><mn>6</mn></mfrac><mo>=</mo><mn>20</mn></math>. The difference is <math><mn>20</mn><mo>-</mo><mn>15</mn><mo>=</mo><mn>5</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Adding an outlier much larger than the current mean will always increase the mean.",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Algebra",
      "skill": "Linear equations in 2 variables",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A line in the <math><mi>x</mi><mi>y</mi></math>-plane passes through the points <math><mo>(</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo>)</mo></math> and <math><mo>(</mo><mn>6</mn><mo>,</mo><mn>17</mn><mo>)</mo></math>. What is the slope of this line?",
      "options": null,
      "answer": "3",
      "explanation": "The formula for slope <math><mi>m</mi></math> is <math><mfrac><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>-</mo><msub><mi>y</mi><mn>1</mn></msub></mrow><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>-</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></mfrac></math>. Calculating: <math><mfrac><mrow><mn>17</mn><mo>-</mo><mn>5</mn></mrow><mrow><mn>6</mn><mo>-</mo><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mn>12</mn><mn>4</mn></mfrac><mo>=</mo><mn>3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Slope represents the 'rise over run', or the change in y divided by the change in x.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 150,150 150,50' fill='none' stroke='black' stroke-width='2' /><rect x='140' y='140' width='10' height='10' fill='none' stroke='black' /><text x='155' y='100' font-family='Arial' font-size='12'>h</text><text x='90' y='165' font-family='Arial' font-size='12'>12</text><text x='80' y='90' font-family='Arial' font-size='12'>13</text><text x='150' y='45' font-family='Arial' font-size='12'>B</text><text x='40' y='160' font-family='Arial' font-size='12'>A</text><text x='150' y='165' font-family='Arial' font-size='12'>C</text></svg>",
      "question_chart_description": "A right triangle ABC with the right angle at C. The hypotenuse AB is 13, and the leg AC is 12.",
      "question": "In the right triangle shown, the length of side <math><mi>A</mi><mi>C</mi></math> is 12 and the length of the hypotenuse <math><mi>A</mi><mi>B</mi></math> is 13. What is the value of <math><mi>tan</mi><mo>(</mo><mi>A</mi><mo>)</mo></math>?",
      "options": {
        "A": "<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>",
        "B": "<math><mfrac><mn>12</mn><mn>13</mn></mfrac></math>",
        "C": "<math><mfrac><mn>5</mn><mn>13</mn></mfrac></math>",
        "D": "<math><mfrac><mn>12</mn><mn>5</mn></mfrac></math>"
      },
      "answer": "A",
      "explanation": "First, find the length of side <math><mi>B</mi><mi>C</mi></math> using the Pythagorean theorem: <math><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mn>12</mn><mn>2</mn></msup><mo>=</mo><msup><mn>13</mn><mn>2</mn></msup></math> implies <math><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>144</mn><mo>=</mo><mn>169</mn></math>, so <math><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><mn>25</mn></math> and <math><mi>a</mi><mo>=</mo><mn>5</mn></math>. <math><mi>tan</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mi>opposite</mi><mi>adjacent</mi></mfrac><mo>=</mo><mfrac><mrow><mi>B</mi><mi>C</mi></mrow><mrow><mi>A</mi><mi>C</mi></mrow></mfrac><mo>=</mo><mfrac><mn>5</mn><mn>12</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember SOH CAH TOA. Tangent is Opposite over Adjacent.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The population of a bacterial colony doubles every 3 hours. If the initial population is 500 bacteria, which equation models the population, <math><mi>P</mi></math>, after <math><mi>t</mi></math> hours?",
      "options": {
        "A": "<math><mi>P</mi><mo>=</mo><mn>500</mn><mo>(</mo><mn>2</mn><msup><mo>)</mo><mi>t</mi></msup></math>",
        "B": "<math><mi>P</mi><mo>=</mo><mn>500</mn><mo>(</mo><mn>2</mn><msup><mo>)</mo><mfrac><mi>t</mi><mn>3</mn></mfrac></msup></math>",
        "C": "<math><mi>P</mi><mo>=</mo><mn>500</mn><mo>(</mo><mn>3</mn><msup><mo>)</mo><mi>t</mi></msup></math>",
        "D": "<math><mi>P</mi><mo>=</mo><mn>2</mn><mo>(</mo><mn>500</mn><msup><mo>)</mo><mfrac><mi>t</mi><mn>3</mn></mfrac></msup></math>"
      },
      "answer": "B",
      "explanation": "The general form for exponential growth is <math><mi>P</mi><mo>=</mo><mi>Initial</mi><mo>(</mo><mi>Rate</mi><msup><mo>)</mo><mfrac><mi>t</mi><mi>period</mi></mfrac></msup></math>. Here, initial population is 500, the rate is 2 (doubles), and the period is 3 hours. Thus, <math><mi>P</mi><mo>=</mo><mn>500</mn><mo>(</mo><mn>2</mn><msup><mo>)</mo><mfrac><mi>t</mi><mn>3</mn></mfrac></msup></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Check the exponent: when t = 3, the exponent should be 1, doubling the initial value.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Algebra",
      "skill": "Linear equations in one variable",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The equation <math><mi>k</mi><mi>x</mi><mo>-</mo><mn>5</mn><mo>=</mo><mn>3</mn><mo>(</mo><mi>x</mi><mo>+</mo><mi>k</mi><mo>)</mo></math> has no solution for <math><mi>x</mi></math>. What is the value of the constant <math><mi>k</mi></math>?",
      "options": {
        "A": "-3",
        "B": "3",
        "C": "5",
        "D": "0"
      },
      "answer": "B",
      "explanation": "Distribute the 3 on the right side: <math><mi>k</mi><mi>x</mi><mo>-</mo><mn>5</mn><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>k</mi></math>. For a linear equation to have no solution, the coefficients of <math><mi>x</mi></math> must be equal, but the constant terms must be different. Therefore, <math><mi>k</mi><mo>=</mo><mn>3</mn></math>. Checking the constants: <math><mo>-</mo><mn>5</mn><mo>≠</mo><mn>3</mn><mo>(</mo><mn>3</mn><mo>)</mo></math>, so <math><mo>-</mo><mn>5</mn><mo>≠</mo><mn>9</mn></math>, which is true.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Equations of the form ax + b = cx + d have no solution if a = c and b ≠ d.",
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
      "question": "What is the sum of the solutions to the equation <math><msqrt><mn>3</mn><mi>x</mi><mo>+</mo><mn>10</mn></msqrt><mo>=</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>?",
      "options": {
        "A": "-1",
        "B": "1",
        "C": "2",
        "D": "3"
      },
      "answer": "C",
      "explanation": "Square both sides: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>10</mn><mo>=</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo>)</mo><mn>2</mn></msup></math>. Expand: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>10</mn><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn></math>. Rearrange to <math><mn>0</mn><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>-</mo><mn>6</mn></math>. Factor: <math><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Potential solutions are <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>3</mn></math> and <math><mi>x</mi><mo>=</mo><mn>2</mn></math>. Check for extraneous roots: for <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>3</mn></math>, LHS is <math><msqrt><mn>1</mn></msqrt><mo>=</mo><mn>1</mn></math>, RHS is <math><mo>-</mo><mn>1</mn></math> (not equal). For <math><mi>x</mi><mo>=</mo><mn>2</mn></math>, LHS is <math><msqrt><mn>16</mn></msqrt><mo>=</mo><mn>4</mn></math>, RHS is 4 (valid). The only solution is <math><mi>x</mi><mo>=</mo><mn>2</mn></math>. Thus, the sum of the solutions is 2.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always plug solutions back into radical equations to check for extraneous roots.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A survey asked 200 adults whether they prefer coffee or tea. The results showed that 120 adults prefer coffee, and of those, 80 are morning people. Of the adults who prefer tea, 30 are morning people. If an adult is selected at random from those who are morning people, what is the probability that this adult prefers tea?",
      "options": {
        "A": "<math><mfrac><mn>3</mn><mn>11</mn></mfrac></math>",
        "B": "<math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>",
        "C": "<math><mfrac><mn>30</mn><mn>200</mn></mfrac></math>",
        "D": "<math><mfrac><mn>30</mn><mn>80</mn></mfrac></math>"
      },
      "answer": "A",
      "explanation": "Total morning people = (Morning Coffee Drinkers) + (Morning Tea Drinkers). We know 80 coffee drinkers are morning people. We know 30 tea drinkers are morning people. Total morning people = <math><mn>80</mn><mo>+</mo><mn>30</mn><mo>=</mo><mn>110</mn></math>. The question asks for probability of preferring tea GIVEN they are a morning person. <math><mi>P</mi><mo>(</mo><mi>Tea</mi><mo>|</mo><mi>Morning</mi><mo>)</mo><mo>=</mo><mfrac><mn>30</mn><mn>110</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>11</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For conditional probability, restrict your denominator to the 'given' group.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The equation of a circle in the <math><mi>x</mi><mi>y</mi></math>-plane is <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>=</mo><mn>0</mn></math>. What is the radius of the circle?",
      "options": null,
      "answer": "5",
      "explanation": "Complete the square for both <math><mi>x</mi></math> and <math><mi>y</mi></math>. For <math><mi>x</mi></math>: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn></math>. For <math><mi>y</mi></math>: <math><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>y</mi><mo>+</mo><mn>16</mn></math>. Add constants to the right side: <math><mn>9</mn><mo>+</mo><mn>16</mn><mo>=</mo><mn>25</mn></math>. The equation becomes <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><msup><mo>)</mo><mn>2</mn></msup><mo>+</mo><mo>(</mo><mi>y</mi><mo>+</mo><mn>4</mn><msup><mo>)</mo><mn>2</mn></msup><mo>=</mo><mn>25</mn></math>. The radius squared is 25, so the radius is 5.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To find the center and radius from general form, complete the square for x and y terms.",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Advanced Math",
      "skill": "Systems of equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "How many distinct real solutions does the following system of equations have?\n<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>5</mn></math>\n<math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "Infinitely many"
      },
      "answer": "A",
      "explanation": "Set the equations equal: <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>5</mn><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>. Simplify to <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>=</mo><mn>0</mn></math>. Calculate the discriminant <math><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></math>: <math><msup><mn>1</mn><mn>2</mn></msup><mo>-</mo><mn>4</mn><mo>(</mo><mn>1</mn><mo>)</mo><mo>(</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>1</mn><mo>-</mo><mn>16</mn><mo>=</mo><mo>-</mo><mn>15</mn></math>. Since the discriminant is negative, there are no real solutions.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Use the discriminant (b^2 - 4ac) to determine the number of real solutions for a quadratic equation.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Algebra",
      "skill": "Linear inequalities in 1 or 2 variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A cargo truck carries boxes of type A and boxes of type B. Type A boxes weigh 40 pounds each, and Type B boxes weigh 65 pounds each. The truck can carry a maximum weight of 2,000 pounds and a maximum of 40 boxes. Let <math><mi>a</mi></math> be the number of Type A boxes and <math><mi>b</mi></math> be the number of Type B boxes. Which system of inequalities represents this situation?",
      "options": {
        "A": "<math><mi>a</mi><mo>+</mo><mi>b</mi><mo>≤</mo><mn>40</mn></math><br/><math><mn>40</mn><mi>a</mi><mo>+</mo><mn>65</mn><mi>b</mi><mo>≤</mo><mn>2000</mn></math>",
        "B": "<math><mi>a</mi><mo>+</mo><mi>b</mi><mo>≥</mo><mn>40</mn></math><br/><math><mn>40</mn><mi>a</mi><mo>+</mo><mn>65</mn><mi>b</mi><mo>≤</mo><mn>2000</mn></math>",
        "C": "<math><mi>a</mi><mo>+</mo><mi>b</mi><mo>≤</mo><mn>40</mn></math><br/><math><mn>40</mn><mi>a</mi><mo>+</mo><mn>65</mn><mi>b</mi><mo>≥</mo><mn>2000</mn></math>",
        "D": "<math><mi>a</mi><mo>+</mo><mi>b</mi><mo>≥</mo><mn>2000</mn></math><br/><math><mn>40</mn><mi>a</mi><mo>+</mo><mn>65</mn><mi>b</mi><mo>≤</mo><mn>40</mn></math>"
      },
      "answer": "A",
      "explanation": "The constraint on the number of boxes is <math><mi>a</mi><mo>+</mo><mi>b</mi><mo>≤</mo><mn>40</mn></math>. The constraint on weight is <math><mn>40</mn><mi>a</mi><mo>+</mo><mn>65</mn><mi>b</mi><mo>≤</mo><mn>2000</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Translate constraints like 'maximum' to 'less than or equal to' inequalities.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Ratios, rates, proportional relationships, and units",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='400' height='300' viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='350' y2='50' stroke='black' stroke-width='2' /><circle cx='100' cy='216' r='3' fill='blue' /><circle cx='150' cy='183' r='3' fill='blue' /><circle cx='200' cy='150' r='3' fill='blue' /><circle cx='250' cy='116' r='3' fill='blue' /><circle cx='300' cy='83' r='3' fill='blue' /><text x='180' y='280' font-family='Arial' font-size='12'>Time (hours)</text><text x='10' y='150' transform='rotate(-90 10,150)' font-family='Arial' font-size='12'>Distance (miles)</text></svg>",
      "question_chart_description": "Scatterplot with 5 points forming a strong linear negative trend, though standard distance graphs are positive. Wait, the context is 'Distance Remaining'.",
      "question": "A car travels toward a destination at a constant speed. The scatterplot shows the distance remaining, <math><mi>d</mi></math>, in miles, after <math><mi>t</mi></math> hours. If the data is modeled by the equation <math><mi>d</mi><mo>=</mo><mn>300</mn><mo>-</mo><mn>60</mn><mi>t</mi></math>, what is the best interpretation of the number 60 in this context?",
      "options": {
        "A": "The initial distance from the destination.",
        "B": "The total time to reach the destination.",
        "C": "The speed of the car in miles per hour.",
        "D": "The distance traveled in 300 minutes."
      },
      "answer": "C",
      "explanation": "The equation is linear in the form <math><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>b</mi></math>. The slope is -60. Since <math><mi>d</mi></math> is distance remaining, a decrease of 60 miles per hour implies the car is traveling at 60 mph.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In linear models <math><mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></math>, <math><mi>a</mi></math> represents the rate of change.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Geometry and Trigonometry",
      "skill": "Lines, angles, and triangles",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 250,150 150,50' fill='none' stroke='black' stroke-width='2' /><line x1='100' y1='100' x2='200' y2='100' stroke='black' stroke-width='2' /><text x='40' y='160'>A</text><text x='260' y='160'>B</text><text x='150' y='40'>C</text><text x='90' y='100'>D</text><text x='210' y='100'>E</text><text x='140' y='115'>x</text><text x='140' y='165'>20</text></svg>",
      "question_chart_description": "Triangle ABC with a line segment DE parallel to base AB. D is on AC and E is on BC. CD = 5, DA = 5, and the base AB = 20. DE is labeled x.",
      "question": "In the figure shown, segment <math><mi>D</mi><mi>E</mi></math> is parallel to base <math><mi>A</mi><mi>B</mi></math>. If <math><mi>C</mi><mi>D</mi><mo>=</mo><mn>5</mn></math>, <math><mi>D</mi><mi>A</mi><mo>=</mo><mn>5</mn></math>, and <math><mi>A</mi><mi>B</mi><mo>=</mo><mn>20</mn></math>, what is the length of <math><mi>D</mi><mi>E</mi></math>?",
      "options": {
        "A": "5",
        "B": "10",
        "C": "12.5",
        "D": "15"
      },
      "answer": "B",
      "explanation": "Triangle CDE is similar to Triangle CAB. The ratio of similarity corresponds to the ratio of side lengths: <math><mfrac><mrow><mi>C</mi><mi>D</mi></mrow><mrow><mi>C</mi><mi>A</mi></mrow></mfrac></math>. <math><mi>C</mi><mi>A</mi><mo>=</mo><mi>C</mi><mi>D</mi><mo>+</mo><mi>D</mi><mi>A</mi><mo>=</mo><mn>5</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>10</mn></math>. The ratio is <math><mfrac><mn>5</mn><mn>10</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. Therefore, <math><mi>D</mi><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mi>A</mi><mi>B</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mn>20</mn><mo>=</mo><mn>10</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For similar triangles, compare corresponding sides. Ensure you use the total side length of the larger triangle.",
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
      "question": "The function <math><mi>f</mi></math> is defined by <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn></math>. The function <math><mi>g</mi></math> is defined by <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></math>. Which of the following is the minimum value of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>?",
      "options": {
        "A": "3",
        "B": "4",
        "C": "7",
        "D": "0"
      },
      "answer": "B",
      "explanation": "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is a parabola with vertex at <math><mo>(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>)</mo></math>, so its minimum value is 4. <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></math> represents a horizontal shift of <math><mi>f</mi></math> to the left by 3 units. A horizontal shift does not affect the vertical position of the vertex. Therefore, the minimum value remains 4.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Transformations like f(x+k) shift the graph horizontally and do not change the range (y-values) of the function.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Algebra",
      "skill": "Linear equations in one variable",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A runner completes a race at an average speed of 8 meters per second. If the runner had run at an average speed of 10 meters per second, the race would have been completed 5 seconds faster. What is the distance, in meters, of the race?",
      "options": null,
      "answer": "200",
      "explanation": "Let <math><mi>d</mi></math> be the distance. Time at 8 m/s is <math><mfrac><mi>d</mi><mn>8</mn></mfrac></math>. Time at 10 m/s is <math><mfrac><mi>d</mi><mn>10</mn></mfrac></math>. The difference in time is 5 seconds: <math><mfrac><mi>d</mi><mn>8</mn></mfrac><mo>-</mo><mfrac><mi>d</mi><mn>10</mn></mfrac><mo>=</mo><mn>5</mn></math>. Find common denominator (40): <math><mfrac><mrow><mn>5</mn><mi>d</mi></mrow><mn>40</mn></mfrac><mo>-</mo><mfrac><mrow><mn>4</mn><mi>d</mi></mrow><mn>40</mn></mfrac><mo>=</mo><mn>5</mn></math>. This simplifies to <math><mfrac><mi>d</mi><mn>40</mn></mfrac><mo>=</mo><mn>5</mn></math>, so <math><mi>d</mi><mo>=</mo><mn>200</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Use the formula Time = Distance / Speed and set up an equation based on the time difference.",
      "additional_data": null
    }
  ]
}

```

## SAT Math Question Difficulty Audit

### 1. Difficulty Distribution Summary
- **Declared Distribution:** Easy 4, Medium 6, Hard 10
- **Audited Distribution:** Easy 8, Medium 11, Hard 1
- **Alignment Score:** 45% (9/20)

### 2. Mislabeled Questions Log

| Q# | Assigned Difficulty | Assessed Difficulty | Reason for Reclassification |
| :-- | :--- | :--- | :--- |
| 6 | Medium | Easy | Routine distribution and combining like terms only. |
| 8 | Medium | Easy | Direct slope computation from two points. |
| 11 | Hard | Medium | No-solution condition via matching coefficients and constants. |
| 13 | Hard | Medium | Conditional probability with a restricted denominator; standard setup. |
| 14 | Hard | Medium | Completing the square to find radius is procedural. |
| 15 | Hard | Medium | Set functions equal and check discriminant; standard quadratic analysis. |
| 16 | Hard | Medium | Translate two constraints into inequalities; typical modeling. |
| 17 | Hard | Easy | Interpret slope as speed in a linear model. |
| 18 | Hard | Medium | Similar triangles with a 1/2 scale factor. |
| 19 | Hard | Easy | Horizontal shift does not change minimum value. |
| 20 | Hard | Medium | Set up rate-time equation; multi-step but routine. |

### 3. Detailed Analysis (Optional)
- Q12 is appropriately Hard because it requires squaring, solving, and rejecting an extraneous root.
