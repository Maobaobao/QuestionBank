# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 2
* **Critical Errors:** 0
* **Minor Issues/Warnings:** 2 (Chart Mismatches)

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| 16 | Chart Mismatch | The SVG graph displays parabolas opening downwards (SVG y-coordinates are positive, which renders downwards), but the question describes  opening upwards. | Invert the y-coordinates in the SVG paths (e.g., change `4` to `-4` and `7` to `-7`) so the parabolas open upwards relative to the origin . |
| 20 | Chart Mismatch | The question states the second triangle has side lengths **3 times** the first, but the SVG depicts a triangle only **2 times** larger (Base 60 vs 120). | Update the SVG coordinates for the second triangle to reflect a 3x scale factor (Base 60 vs 180) and adjust labels accordingly. |

## Metadata Consistency Findings

* **Focus Domains & Skills:** Accurately reflected in individual questions.
* **Difficulty Distribution:** Matches the metadata exactly (4 Easy, 6 Medium, 10 Hard).
* **Question Types:** Matches the metadata exactly (15 MCQ, 5 SPR).
* **Explanation Quality:** All explanations are mathematically sound and consistent with the provided answers.

---

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
      "Linear equations",
      "Nonlinear functions",
      "Ratios, rates, and proportions",
      "Area and volume"
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
      "question": "If <math><mn>4</mn><mi>x</mi><mo>-</mo><mn>9</mn><mo>=</mo><mn>11</mn></math>, what is the value of <math><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn></math>?",
      "options": {
        "A": "20",
        "B": "23",
        "C": "25",
        "D": "31"
      },
      "answer": "B",
      "explanation": "First, solve for <math><mn>4</mn><mi>x</mi></math> by adding 9 to both sides of the equation: <math><mn>4</mn><mi>x</mi><mo>=</mo><mn>20</mn></math>. Then, substitute <math><mn>20</mn></math> for <math><mn>4</mn><mi>x</mi></math> in the expression <math><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn></math>, which gives <math><mn>20</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>23</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Check if you can solve for the expression directly rather than solving for x first to save time.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Geometry and Trigonometry",
      "skill": "Lines, angles, and triangles",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width=\"300\" height=\"200\" viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"50,150 250,150 150,50\" fill=\"none\" stroke=\"black\" stroke-width=\"2\" /><text x=\"40\" y=\"170\" font-family=\"Arial\" font-size=\"14\">A</text><text x=\"250\" y=\"170\" font-family=\"Arial\" font-size=\"14\">B</text><text x=\"145\" y=\"40\" font-family=\"Arial\" font-size=\"14\">C</text><text x=\"70\" y=\"140\" font-family=\"Arial\" font-size=\"14\">50°</text><text x=\"210\" y=\"140\" font-family=\"Arial\" font-size=\"14\">50°</text><text x=\"140\" y=\"90\" font-family=\"Arial\" font-size=\"14\">x°</text></svg>",
      "question_chart_description": "Triangle ABC with angle A measuring 50 degrees, angle B measuring 50 degrees, and angle C measuring x degrees.",
      "question": "In the triangle shown, what is the value of <math><mi>x</mi></math>?",
      "options": {
        "A": "50",
        "B": "80",
        "C": "100",
        "D": "130"
      },
      "answer": "B",
      "explanation": "The sum of the measures of the interior angles of a triangle is always <math><mn>180</mn><mo>°</mo></math>. The given angles are <math><mn>50</mn><mo>°</mo></math> and <math><mn>50</mn><mo>°</mo></math>. Therefore, <math><mn>50</mn><mo>+</mo><mn>50</mn><mo>+</mo><mi>x</mi><mo>=</mo><mn>180</mn></math>. Solving for x: <math><mn>100</mn><mo>+</mo><mi>x</mi><mo>=</mo><mn>180</mn></math>, so <math><mi>x</mi><mo>=</mo><mn>80</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember that the interior angles of any triangle always sum to 180 degrees.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Algebra",
      "skill": "Linear inequalities in 1 or 2 variables",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which ordered pair <math><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></math> satisfies the inequality <math><mi>y</mi><mo>&gt;</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>?",
      "options": {
        "A": "(1, 0)",
        "B": "(2, 1)",
        "C": "(0, -2)",
        "D": "(2, 5)"
      },
      "answer": "D",
      "explanation": "Substitute the x and y values from each option into the inequality. For option D (2, 5): <math><mn>5</mn><mo>&gt;</mo><mn>3</mn><mo>(</mo><mn>2</mn><mo>)</mo><mo>-</mo><mn>2</mn></math> becomes <math><mn>5</mn><mo>&gt;</mo><mn>6</mn><mo>-</mo><mn>2</mn></math>, or <math><mn>5</mn><mo>&gt;</mo><mn>4</mn></math>, which is true. The other options result in false statements.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When checking points against an inequality, substitute the values carefully and check if the resulting statement is true.",
      "additional_data": null
    },
    {
      "question_number": 4,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Ratios, rates, proportional relationships, and units",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A machine can pack 150 boxes in 10 minutes. At this rate, how many boxes can the machine pack in 25 minutes?",
      "options": {
        "A": "300",
        "B": "350",
        "C": "375",
        "D": "400"
      },
      "answer": "C",
      "explanation": "First, determine the rate per minute: <math><mfrac><mn>150</mn><mn>10</mn></mfrac><mo>=</mo><mn>15</mn></math> boxes per minute. Then, multiply the rate by the new time: <math><mn>15</mn><mo>×</mo><mn>25</mn><mo>=</mo><mn>375</mn></math> boxes.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Calculate the unit rate first (amount per 1 unit of time) to easily scale to any other time frame.",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Algebra",
      "skill": "Linear functions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The total cost <math><mi>C</mi></math>, in dollars, to rent a venue for an event is modeled by the equation <math><mi>C</mi><mo>=</mo><mn>450</mn><mo>+</mo><mn>35</mn><mi>n</mi></math>, where <math><mi>n</mi></math> is the number of attendees. What is the interpretation of the number 35 in this context?",
      "options": {
        "A": "The initial fee to rent the venue",
        "B": "The total cost if zero people attend",
        "C": "The maximum number of attendees allowed",
        "D": "The additional cost for each attendee"
      },
      "answer": "D",
      "explanation": "In the linear equation <math><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>b</mi></math>, the slope <math><mi>m</mi></math> represents the rate of change. Here, 35 is multiplied by <math><mi>n</mi></math>, meaning the cost increases by 35 dollars for every increase of 1 in the number of attendees.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In linear models <math><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>b</mi></math>, <math><mi>m</mi></math> is always the rate (per unit change) and <math><mi>b</mi></math> is the starting amount or flat fee.",
      "additional_data": null
    },
    {
      "question_number": 6,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Two-variable data: models and scatter-plots",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width=\"400\" height=\"300\" viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"260\" x2=\"380\" y2=\"260\" stroke=\"black\" stroke-width=\"2\" /><line x1=\"40\" y1=\"260\" x2=\"40\" y2=\"20\" stroke=\"black\" stroke-width=\"2\" /><text x=\"380\" y=\"280\" font-family=\"Arial\" font-size=\"12\">x</text><text x=\"20\" y=\"20\" font-family=\"Arial\" font-size=\"12\">y</text><line x1=\"40\" y1=\"20\" x2=\"360\" y2=\"260\" stroke=\"blue\" stroke-width=\"2\" stroke-dasharray=\"5,5\" /><circle cx=\"80\" cy=\"60\" r=\"3\" fill=\"black\" /><circle cx=\"120\" cy=\"80\" r=\"3\" fill=\"black\" /><circle cx=\"160\" cy=\"120\" r=\"3\" fill=\"black\" /><circle cx=\"200\" cy=\"130\" r=\"3\" fill=\"black\" /><circle cx=\"240\" cy=\"180\" r=\"3\" fill=\"black\" /><circle cx=\"280\" cy=\"200\" r=\"3\" fill=\"black\" /><text x=\"35\" y=\"260\" font-family=\"Arial\" font-size=\"10\">0</text><text x=\"108\" y=\"280\" font-family=\"Arial\" font-size=\"10\">10</text><text x=\"176\" y=\"280\" font-family=\"Arial\" font-size=\"10\">20</text><text x=\"244\" y=\"280\" font-family=\"Arial\" font-size=\"10\">30</text><text x=\"312\" y=\"280\" font-family=\"Arial\" font-size=\"10\">40</text><text x=\"380\" y=\"280\" font-family=\"Arial\" font-size=\"10\">50</text><text x=\"35\" y=\"140\" font-family=\"Arial\" font-size=\"10\">10</text><text x=\"35\" y=\"20\" font-family=\"Arial\" font-size=\"10\">20</text><text x=\"200\" y=\"295\" font-family=\"Arial\" font-size=\"10\">Time (weeks)</text></svg>",
      "question_chart_description": "A scatterplot showing a negative correlation with a line of best fit decreasing from left to right.",
      "question": "The scatterplot shows the relationship between variable <math><mi>x</mi></math> and variable <math><mi>y</mi></math>. A line of best fit is also shown. Which of the following is the best estimate for the predicted value of <math><mi>y</mi></math> when <math><mi>x</mi><mo>=</mo><mn>25</mn></math>?",
      "options": {
        "A": "2",
        "B": "5",
        "C": "10",
        "D": "15"
      },
      "answer": "C",
      "explanation": "Looking at the line of best fit in the SVG, when x increases, y decreases. At x = 0 (far left), y is around 20. At x = 50 (far right), y approaches 0. By visual interpolation on the trend line for x=25 (midpoint), the y-value is approximately 10.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When using a line of best fit, locate the x-value on the axis, move vertically to the line, and then read the corresponding y-value.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "What is the sum of the solutions to the equation <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>12</mn><mi>x</mi><mo>+</mo><mn>35</mn><mo>=</mo><mn>0</mn></math>?",
      "options": {
        "A": "-12",
        "B": "12",
        "C": "35",
        "D": "-35"
      },
      "answer": "B",
      "explanation": "For a quadratic equation in the form <math><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></math>, the sum of the solutions is given by <math><mo>-</mo><mfrac><mi>b</mi><mi>a</mi></mfrac></math>. Here, <math><mi>a</mi><mo>=</mo><mn>1</mn></math> and <math><mi>b</mi><mo>=</mo><mo>-</mo><mn>12</mn></math>, so the sum is <math><mo>-</mo><mfrac><mrow><mo>-</mo><mn>12</mn></mrow><mn>1</mn></mfrac><mo>=</mo><mn>12</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Memorize the relationship between coefficients and roots: Sum = -b/a, Product = c/a.",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Algebra",
      "skill": "Systems of 2 linear equations in 2 variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which of the following ordered pairs <math><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></math> is the solution to the system of equations <math><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>10</mn></math> and <math><mn>3</mn><mi>x</mi><mo>-</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></math>?",
      "options": {
        "A": "(3, 4)",
        "B": "(4, 2)",
        "C": "(2, 6)",
        "D": "(3, -2)"
      },
      "answer": "A",
      "explanation": "Solve by substitution or elimination. From the first equation, <math><mi>y</mi><mo>=</mo><mn>10</mn><mo>-</mo><mn>2</mn><mi>x</mi></math>. Substitute this into the second equation: <math><mn>3</mn><mi>x</mi><mo>-</mo><mn>2</mn><mo>(</mo><mn>10</mn><mo>-</mo><mn>2</mn><mi>x</mi><mo>)</mo><mo>=</mo><mn>1</mn></math>. This simplifies to <math><mn>3</mn><mi>x</mi><mo>-</mo><mn>20</mn><mo>+</mo><mn>4</mn><mi>x</mi><mo>=</mo><mn>1</mn></math>, so <math><mn>7</mn><mi>x</mi><mo>=</mo><mn>21</mn></math> and <math><mi>x</mi><mo>=</mo><mn>3</mn></math>. Then <math><mi>y</mi><mo>=</mo><mn>10</mn><mo>-</mo><mn>2</mn><mo>(</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Isolate one variable in the simpler equation and substitute it into the other to reduce the system to a single variable equation.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "In a right triangle, angle <math><mi>C</mi></math> is the right angle. If <math><mi>cos</mi><mi>A</mi><mo>=</mo><mfrac><mn>5</mn><mn>13</mn></mfrac></math>, what is the value of <math><mi>sin</mi><mi>B</mi></math>?",
      "options": {
        "A": "5/13",
        "B": "12/13",
        "C": "5/12",
        "D": "13/5"
      },
      "answer": "A",
      "explanation": "In a right triangle with acute angles A and B, the angles are complementary (<math><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>90</mn><mo>°</mo></math>). The sine of an angle is equal to the cosine of its complement. Therefore, <math><mi>sin</mi><mi>B</mi><mo>=</mo><mi>cos</mi><mi>A</mi><mo>=</mo><mfrac><mn>5</mn><mn>13</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember the co-function identity: sin(x) = cos(90-x). In a right triangle, sin(B) always equals cos(A).",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A population of bacteria grows according to the function <math><mi>P</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>200</mn><msup><mrow><mo>(</mo><mn>1.2</mn><mo>)</mo></mrow><mi>t</mi></msup></math>, where <math><mi>t</mi></math> is the time in hours. What is the bacteria population after 2 hours?",
      "options": null,
      "answer": "288",
      "explanation": "Substitute <math><mi>t</mi><mo>=</mo><mn>2</mn></math> into the function: <math><mi>P</mi><mo>(</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>200</mn><msup><mrow><mo>(</mo><mn>1.2</mn><mo>)</mo></mrow><mn>2</mn></msup></math>. Calculate the exponent first: <math><msup><mn>1.2</mn><mn>2</mn></msup><mo>=</mo><mn>1.44</mn></math>. Then multiply: <math><mn>200</mn><mo>×</mo><mn>1.44</mn><mo>=</mo><mn>288</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When evaluating exponential functions, calculate the power term before multiplying by the initial value.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Algebra",
      "skill": "Systems of 2 linear equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The system of equations <math><mi>k</mi><mi>x</mi><mo>-</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>4</mn></math> and <math><mn>4</mn><mi>x</mi><mo>-</mo><mn>5</mn><mi>y</mi><mo>=</mo><mn>7</mn></math> has no solution. What is the value of <math><mi>k</mi></math>?",
      "options": {
        "A": "2.4",
        "B": "3.2",
        "C": "4.5",
        "D": "5.6"
      },
      "answer": "A",
      "explanation": "A system has no solution if the lines are parallel, meaning their slopes are equal but y-intercepts differ. Rewrite both in slope-intercept form (<math><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>b</mi></math>). First eq: <math><mi>y</mi><mo>=</mo><mfrac><mi>k</mi><mn>3</mn></mfrac><mi>x</mi><mo>-</mo><mfrac><mn>4</mn><mn>3</mn></mfrac></math>. Second eq: <math><mi>y</mi><mo>=</mo><mfrac><mn>4</mn><mn>5</mn></mfrac><mi>x</mi><mo>-</mo><mfrac><mn>7</mn><mn>5</mn></mfrac></math>. Set slopes equal: <math><mfrac><mi>k</mi><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>5</mn></mfrac></math>. Solving for k: <math><mn>5</mn><mi>k</mi><mo>=</mo><mn>12</mn></math>, so <math><mi>k</mi><mo>=</mo><mn>2.4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For 'no solution' linear systems, the ratio of x-coefficients must equal the ratio of y-coefficients.",
      "additional_data": null
    },
    {
      "question_number": 12,
      "domain": "Advanced Math",
      "skill": "Equivalent expressions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which of the following is equivalent to <math><mfrac><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>9</mn></mrow><mrow><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn></mrow></mfrac></math> for all <math><mi>x</mi><mo>≠</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></math>?",
      "options": {
        "A": "2x - 3",
        "B": "2x + 3",
        "C": "4x - 3",
        "D": "4x + 3"
      },
      "answer": "B",
      "explanation": "The numerator <math><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>9</mn></math> is a difference of squares: <math><mo>(</mo><mn>2</mn><mi>x</mi><mo>)</mo><msup><mi></mi><mn>2</mn></msup><mo>-</mo><msup><mn>3</mn><mn>2</mn></msup></math>, which factors to <math><mo>(</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></math>. The expression becomes <math><mfrac><mrow><mo>(</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></mrow><mrow><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn></mrow></mfrac></math>. Canceling the common term <math><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn></math> leaves <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Look for difference of squares patterns (<math><msup><mi>a</mi><mn>2</mn></msup><mo>-</mo><msup><mi>b</mi><mn>2</mn></msup></math>) to simplify rational expressions rapidly.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Advanced Math",
      "skill": "Systems of equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "How many distinct real solutions does the system <math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn></math> and <math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math> have?",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "Infinitely many"
      },
      "answer": "A",
      "explanation": "Set the equations equal: <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>. Rearrange to form a quadratic equation: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn></math>. Calculate the discriminant <math><mi>D</mi><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></math>. Here, <math><mi>D</mi><mo>=</mo><msup><mrow><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mn>4</mn><mo>(</mo><mn>1</mn><mo>)</mo><mo>(</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>4</mn><mo>-</mo><mn>8</mn><mo>=</mo><mo>-</mo><mn>4</mn></math>. Since the discriminant is negative, there are no real solutions.",
      "explanation_chart_svg": "<svg width=\"300\" height=\"300\" viewBox=\"-5 -5 10 5\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"-5\" y1=\"0\" x2=\"5\" y2=\"0\" stroke=\"black\" stroke-width=\"0.1\" /><line x1=\"0\" y1=\"-10\" x2=\"0\" y2=\"5\" stroke=\"black\" stroke-width=\"0.1\" /><path d=\"M -2,-7 Q 0,-1 2,-7\" stroke=\"blue\" stroke-width=\"0.1\" fill=\"none\" /><text x=\"-4.5\" y=\"-6\" font-size=\"0.8\" fill=\"blue\">y = x² + 3</text><line x1=\"2\" y1=\"-5\" x2=\"-2\" y2=\"3\" stroke=\"red\" stroke-width=\"0.1\" /><text x=\"1\" y=\"-1\" font-size=\"0.8\" fill=\"red\">y = 2x + 1</text></svg>",
      "explanation_chart_description": "A parabola opening upwards starting above the x-axis, and a straight line passing below the parabola without intersecting.",
      "score_improvement_tip": "For nonlinear systems, equate them to zero and check the discriminant. Negative discriminant means zero real intersections.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Inference from sample statistics and margin of error",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A poll of 1,000 randomly selected residents of a city found that 42% support a new zoning law, with a margin of error of 3% at a 95% confidence level. Which of the following is the most appropriate conclusion?",
      "options": {
        "A": "Exactly 42% of the city residents support the law.",
        "B": "Between 39% and 45% of the city residents support the law.",
        "C": "There is a 95% probability that the true percentage of supporters is between 39% and 45%.",
        "D": "If the poll were repeated many times, 95% of the confidence intervals constructed would contain the true percentage of supporters."
      },
      "answer": "D",
      "explanation": "Confidence intervals describe the reliability of the method, not the probability of the parameter being in a specific interval. Option D correctly defines the 95% confidence level in the context of repeated sampling.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Avoid answers that claim 'exact' values or assign probability to a specific fixed parameter. Choose the option describing the method's reliability over many trials.",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A circle in the xy-plane has the equation <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>=</mo><mn>0</mn></math>. What is the radius of the circle?",
      "options": {
        "A": "5",
        "B": "10",
        "C": "25",
        "D": "50"
      },
      "answer": "A",
      "explanation": "Complete the square for x and y. <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>y</mi><mo>)</mo><mo>=</mo><mn>0</mn></math>. Add <math><msup><mrow><mo>(</mo><mfrac><mn>6</mn><mn>2</mn></mfrac><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>9</mn></math> and <math><msup><mrow><mo>(</mo><mfrac><mn>8</mn><mn>2</mn></mfrac><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>16</mn></math> to both sides: <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>y</mi><mo>+</mo><mn>16</mn><mo>)</mo><mo>=</mo><mn>9</mn><mo>+</mo><mn>16</mn></math>. This simplifies to <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>+</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>25</mn></math>. The radius squared is 25, so the radius is <math><msqrt><mn>25</mn></msqrt><mo>=</mo><mn>5</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To find the center and radius from general form, group x and y terms and complete the square for each variable.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width=\"300\" height=\"300\" viewBox=\"-10 -10 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"-10\" y1=\"0\" x2=\"10\" y2=\"0\" stroke=\"black\" stroke-width=\"0.2\" /><line x1=\"0\" y1=\"-10\" x2=\"0\" y2=\"10\" stroke=\"black\" stroke-width=\"0.2\" /><path d=\"M -2,-4 Q 0,0 2,-4\" fill=\"none\" stroke=\"blue\" stroke-width=\"0.5\" /><path d=\"M -2,-7 Q 0,-3 2,-7\" fill=\"none\" stroke=\"red\" stroke-width=\"0.5\" stroke-dasharray=\"1,1\" /></svg>",
      "question_chart_description": "Graph showing a parabola f(x) with vertex at (0,0) opening upwards (solid line) and a shifted parabola g(x) with vertex at (0,3) (dashed line).",
      "question": "The graph of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></math> is shown in the xy-plane (solid line). If the graph of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> (dashed line) is the result of shifting <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> up by <math><mi>k</mi></math> units, what is the value of <math><mi>g</mi><mo>(</mo><mn>2</mn><mo>)</mo></math> if the vertex of <math><mi>g</mi></math> is at <math><mo>(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>)</mo></math>?",
      "options": {
        "A": "4",
        "B": "5",
        "C": "7",
        "D": "9"
      },
      "answer": "C",
      "explanation": "The vertex of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is <math><mo>(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>)</mo></math>. The vertex of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is <math><mo>(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>)</mo></math>, so the graph is shifted up by 3 units. Therefore, <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn></math>. To find <math><mi>g</mi><mo>(</mo><mn>2</mn><mo>)</mo></math>, substitute <math><mi>x</mi><mo>=</mo><mn>2</mn></math>: <math><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo>=</mo><mn>4</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>7</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "A vertical shift adds a constant to the entire function: g(x) = f(x) + k.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Algebra",
      "skill": "Linear inequalities in 1 or 2 variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A bakery sells cookies for $2.50 each and muffins for $3.50 each. To make a profit, the bakery must earn at least $400 a day. If they sell 80 cookies, what is the minimum number of muffins they must sell to meet their goal?",
      "options": null,
      "answer": "58",
      "explanation": "Let <math><mi>m</mi></math> be the number of muffins. The revenue is <math><mn>2.50</mn><mo>(</mo><mn>80</mn><mo>)</mo><mo>+</mo><mn>3.50</mn><mi>m</mi><mo>≥</mo><mn>400</mn></math>. Simplifying: <math><mn>200</mn><mo>+</mo><mn>3.50</mn><mi>m</mi><mo>≥</mo><mn>400</mn></math>. Subtract 200: <math><mn>3.50</mn><mi>m</mi><mo>≥</mo><mn>200</mn></math>. Divide by 3.50: <math><mi>m</mi><mo>≥</mo><mn>57.14</mn></math>. Since they must sell a whole number of muffins, round up to 58.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In inequality word problems involving items, always round up to the next whole number if the result is a decimal and the context requires integers.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The equation <math><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>12</mn><mi>x</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></math> has exactly one real solution. What is the value of the constant <math><mi>c</mi></math>?",
      "options": null,
      "answer": "12",
      "explanation": "A quadratic equation has exactly one solution when the discriminant is zero (<math><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi><mo>=</mo><mn>0</mn></math>). Here <math><mi>a</mi><mo>=</mo><mn>3</mn></math> and <math><mi>b</mi><mo>=</mo><mn>12</mn></math>. So, <math><msup><mn>12</mn><mn>2</mn></msup><mo>-</mo><mn>4</mn><mo>(</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>c</mi><mo>)</mo><mo>=</mo><mn>0</mn></math>. This simplifies to <math><mn>144</mn><mo>-</mo><mn>12</mn><mi>c</mi><mo>=</mo><mn>0</mn></math>, meaning <math><mn>12</mn><mi>c</mi><mo>=</mo><mn>144</mn></math>, so <math><mi>c</mi><mo>=</mo><mn>12</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Use the discriminant <math><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></math> to determine the nature of roots. =0 means 1 real root, >0 means 2 real roots, <0 means 0 real roots.",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Ratios, rates, proportional relationships, and units",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A metal alloy has a density of 7,800 kilograms per cubic meter. What is the mass, in grams, of a block of this alloy with a volume of 50 cubic centimeters?",
      "options": null,
      "answer": "390",
      "explanation": "First, convert density to g/cm³ or convert volume to m³. <math><mn>1</mn><mtext> kg</mtext><mo>=</mo><mn>1000</mn><mtext> g</mtext></math> and <math><mn>1</mn><msup><mtext> m</mtext><mn>3</mn></msup><mo>=</mo><mn>1</mn><mo>,</mo><mn>000</mn><mo>,</mo><mn>000</mn><msup><mtext> cm</mtext><mn>3</mn></msup></math>. Density = <math><mfrac><mrow><mn>7800</mn><mo>×</mo><mn>1000</mn></mrow><mrow><mn>1000000</mn></mrow></mfrac><mo>=</mo><mn>7.8</mn><mtext> g/cm</mtext><msup><mi></mi><mn>3</mn></msup></math>. Mass = Density × Volume = <math><mn>7.8</mn><mo>×</mo><mn>50</mn><mo>=</mo><mn>390</mn></math> grams.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Be extremely careful with unit conversions, especially when cubes (volume) are involved. (1 m)^3 = (100 cm)^3 = 1,000,000 cm^3.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Geometry and Trigonometry",
      "skill": "Lines, angles, and triangles",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": "<svg width=\"300\" height=\"200\" viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,180 80,180 50,120\" fill=\"none\" stroke=\"black\" stroke-width=\"2\" /><polygon points=\"100,180 280,180 190,0\" fill=\"none\" stroke=\"black\" stroke-width=\"2\" /><text x=\"50\" y=\"195\" font-family=\"Arial\" font-size=\"14\">A</text><text x=\"190\" y=\"195\" font-family=\"Arial\" font-size=\"14\">B</text><text x=\"50\" y=\"110\" font-family=\"Arial\" font-size=\"14\">Triangle 1</text><text x=\"190\" y=\"100\" font-family=\"Arial\" font-size=\"14\">Triangle 2</text></svg>",
      "question_chart_description": "Two similar triangles. Triangle 1 is smaller than Triangle 2.",
      "question": "Two triangles are similar. The lengths of the sides of the second triangle are 3 times the lengths of the corresponding sides of the first triangle. If the area of the first triangle is 15, what is the area of the second triangle?",
      "options": null,
      "answer": "135",
      "explanation": "If two figures are similar with a scale factor of <math><mi>k</mi></math> for their side lengths, the ratio of their areas is <math><msup><mi>k</mi><mn>2</mn></msup></math>. Here, the scale factor is 3, so the area scale factor is <math><msup><mn>3</mn><mn>2</mn></msup><mo>=</mo><mn>9</mn></math>. The area of the second triangle is <math><mn>15</mn><mo>×</mo><mn>9</mn><mo>=</mo><mn>135</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Area ratios are the square of side length ratios. Volume ratios are the cube of side length ratios.",
      "additional_data": null
    }
  ]
}

```
