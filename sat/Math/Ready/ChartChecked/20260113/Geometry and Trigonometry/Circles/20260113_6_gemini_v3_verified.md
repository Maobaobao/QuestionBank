# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 2
* **Critical Errors:** 0
* **Minor Issues/Warnings:** 2

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| Metadata | Metadata Inconsistency | The `question_type_distribution` in `test_metadata` lists `multiple_choice: 15` and `student_produced_response: 5`. However, a count of the actual questions reveals **14 MCQs** and **6 SPRs** (Q4, Q10, Q17, Q18, Q19, Q20). | Update `question_type_distribution` to `{"multiple_choice": 14, "student_produced_response": 6}`. |
| 5 | Chart Mismatch | The SVG graph for Q5 (System of Equations) is generic and mathematically inaccurate for the specific functions given ( and ). The blue line in the original SVG depicts  (slope 1) and the red line depicts  (slope -1), intersecting at the visual center (0,0) instead of the calculated intersection . | Replace the `explanation_chart_svg` with a new SVG where the lines are plotted correctly (Slope 2 and -1) and intersect at  relative to the axes. |

## Metadata Consistency Findings

* The `difficulty_distribution` matches the actual question difficulty counts (Easy: 4, Medium: 6, Hard: 10).
* Domain and Skill mappings are consistent with SAT standards.

---

# Corrected JSON File

```json
{
  "test_metadata": {
    "focus_domains": [
      "Geometry and Trigonometry",
      "Algebra",
      "Advanced Math",
      "Problem-Solving and Data Analysis"
    ],
    "focus_skills": [
      "Circles",
      "Linear equations in 1 variable",
      "Systems of 2 linear equations in 2 variables",
      "Nonlinear functions"
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
      "question": "If <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>5</mn><mo>=</mo><mn>17</mn></math>, what is the value of <math><mi>x</mi></math>?",
      "options": {
        "A": "6",
        "B": "11",
        "C": "12",
        "D": "22"
      },
      "answer": "A",
      "explanation": "Subtract 5 from both sides: <math><mn>2</mn><mi>x</mi><mo>=</mo><mn>12</mn></math>. Divide by 2: <math><mi>x</mi><mo>=</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Isolate the variable term first by performing inverse operations on the constant term.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Ratios, rates, proportional relationships, and units",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A car travels <math><mn>300</mn></math> miles in <math><mn>5</mn></math> hours at a constant speed. What is the speed of the car in miles per hour?",
      "options": {
        "A": "50",
        "B": "55",
        "C": "60",
        "D": "1500"
      },
      "answer": "C",
      "explanation": "Speed is distance divided by time. <math><mfrac><mn>300</mn><mn>5</mn></mfrac><mo>=</mo><mn>60</mn></math> miles per hour.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember the formula: Rate = Distance / Time.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A circle in the <math><mi>x</mi><mi>y</mi></math>-plane is defined by the equation <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>+</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>49</mn></math>. What is the radius of the circle?",
      "options": {
        "A": "4",
        "B": "7",
        "C": "24.5",
        "D": "49"
      },
      "answer": "B",
      "explanation": "The standard equation of a circle is <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mi>k</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>r</mi><mn>2</mn></msup></math>. Here <math><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>49</mn></math>, so the radius <math><mi>r</mi><mo>=</mo><msqrt><mn>49</mn></msqrt><mo>=</mo><mn>7</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In the circle equation, the number on the right side is the radius squared, not the radius itself.",
      "additional_data": null
    },
    {
      "question_number": 4,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Easy",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The function <math><mi>f</mi></math> is defined by <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>3</mn></math>. What is the value of <math><mi>f</mi><mo>(</mo><mn>4</mn><mo>)</mo></math>?",
      "options": null,
      "answer": "29",
      "explanation": "Substitute <math><mn>4</mn></math> for <math><mi>x</mi></math>: <math><mi>f</mi><mo>(</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mn>3</mn><mo>=</mo><mn>2</mn><mo>(</mo><mn>16</mn><mo>)</mo><mo>-</mo><mn>3</mn><mo>=</mo><mn>32</mn><mo>-</mo><mn>3</mn><mo>=</mo><mn>29</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Follow the order of operations: square the input first, then multiply by the coefficient, then subtract.",
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
      "question": "The system of equations <math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math> and <math><mi>y</mi><mo>=</mo><mo>-</mo><mi>x</mi><mo>+</mo><mn>7</mn></math> is graphed in the <math><mi>x</mi><mi>y</mi></math>-plane. What is the <math><mi>x</mi></math>-coordinate of the intersection point?",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "5"
      },
      "answer": "B",
      "explanation": "Set the equations equal: <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo>=</mo><mo>-</mo><mi>x</mi><mo>+</mo><mn>7</mn></math>. Add <math><mi>x</mi></math> to both sides: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>7</mn></math>. Subtract 1: <math><mn>3</mn><mi>x</mi><mo>=</mo><mn>6</mn></math>. Divide by 3: <math><mi>x</mi><mo>=</mo><mn>2</mn></math>.",
      "explanation_chart_svg": "<svg width='400' height='300' viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='0' y1='150' x2='400' y2='150' stroke='black' stroke-width='1'/><line x1='200' y1='0' x2='200' y2='300' stroke='black' stroke-width='1'/><line x1='160' y1='210' x2='260' y2='10' stroke='blue' stroke-width='2'/><line x1='160' y1='-30' x2='360' y2='170' stroke='red' stroke-width='2'/><circle cx='240' cy='50' r='4' fill='black'/><text x='250' y='50' font-size='12'>(2, 5)</text></svg>",
      "explanation_chart_description": "Graph of two intersecting lines. The line y=2x+1 (blue) has a positive slope and the line y=-x+7 (red) has a negative slope. They intersect at the point (2, 5).",
      "score_improvement_tip": "When both equations are solved for y, set them equal to each other to solve for x immediately.",
      "additional_data": null
    },
    {
      "question_number": 6,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A bag contains <math><mn>10</mn></math> red marbles and <math><mn>15</mn></math> blue marbles. If one marble is selected at random, what is the probability that it is blue?",
      "options": {
        "A": "0.4",
        "B": "0.6",
        "C": "0.67",
        "D": "1.5"
      },
      "answer": "B",
      "explanation": "Total marbles = <math><mn>10</mn><mo>+</mo><mn>15</mn><mo>=</mo><mn>25</mn></math>. Probability of blue = <math><mfrac><mn>15</mn><mn>25</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>=</mo><mn>0.6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Probability is the number of favorable outcomes divided by the total number of possible outcomes.",
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
      "question": "What is the sum of the solutions to the equation <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>0</mn></math>?",
      "options": {
        "A": "1",
        "B": "5",
        "C": "6",
        "D": "-5"
      },
      "answer": "B",
      "explanation": "Factor the quadratic: <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Solutions are <math><mi>x</mi><mo>=</mo><mn>2</mn></math> and <math><mi>x</mi><mo>=</mo><mn>3</mn></math>. Sum is <math><mn>2</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>5</mn></math>. Alternatively, use <math><mo>-</mo><mfrac><mi>b</mi><mi>a</mi></mfrac><mo>=</mo><mo>-</mo><mfrac><mrow><mo>-</mo><mn>5</mn></mrow><mn>1</mn></mfrac><mo>=</mo><mn>5</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For a quadratic equation ax^2 + bx + c = 0, the sum of the roots is always -b/a.",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "An angle has a measure of <math><mn>480</mn></math> degrees. What is the measure of the angle in radians?",
      "options": {
        "A": "<math><mfrac><mrow><mn>4</mn><mi>π</mi></mrow><mn>3</mn></mfrac></math>",
        "B": "<math><mfrac><mrow><mn>8</mn><mi>π</mi></mrow><mn>3</mn></mfrac></math>",
        "C": "<math><mn>3</mn><mi>π</mi></math>",
        "D": "<math><mfrac><mrow><mn>16</mn><mi>π</mi></mrow><mn>3</mn></mfrac></math>"
      },
      "answer": "B",
      "explanation": "Multiply degrees by <math><mfrac><mi>π</mi><mn>180</mn></mfrac></math>: <math><mn>480</mn><mo>×</mo><mfrac><mi>π</mi><mn>180</mn></mfrac><mo>=</mo><mfrac><mrow><mn>48</mn><mi>π</mi></mrow><mn>18</mn></mfrac><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi></mrow><mn>3</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To convert degrees to radians, multiply by π/180. Simplify the resulting fraction.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Algebra",
      "skill": "Linear inequalities in 1 or 2 variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A student has a budget of <math><mi>$</mi><mn>500</mn></math> for a project. They have already spent <math><mi>$</mi><mn>200</mn></math> on supplies. The remaining supplies cost <math><mi>$</mi><mn>15</mn></math> per unit. Which inequality represents the maximum number of units, <math><mi>x</mi></math>, the student can purchase?",
      "options": {
        "A": "<math><mn>15</mn><mi>x</mi><mo>+</mo><mn>200</mn><mo>≤</mo><mn>500</mn></math>",
        "B": "<math><mn>15</mn><mi>x</mi><mo>-</mo><mn>200</mn><mo>≤</mo><mn>500</mn></math>",
        "C": "<math><mn>200</mn><mi>x</mi><mo>+</mo><mn>15</mn><mo>≤</mo><mn>500</mn></math>",
        "D": "<math><mn>15</mn><mi>x</mi><mo>+</mo><mn>200</mn><mo>≥</mo><mn>500</mn></math>"
      },
      "answer": "A",
      "explanation": "The total cost is the initial <math><mn>200</mn></math> plus <math><mn>15</mn></math> times the number of units <math><mi>x</mi></math>. This total must be less than or equal to the budget of <math><mn>500</mn></math>. So, <math><mn>15</mn><mi>x</mi><mo>+</mo><mn>200</mn><mo>≤</mo><mn>500</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Translate the word problem directly into math: 'per' usually means multiplication, and 'budget' or 'maximum' implies less than or equal to.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "If <math><msup><mn>2</mn><mi>x</mi></msup><mo>=</mo><mn>32</mn></math>, what is the value of <math><mi>x</mi></math>?",
      "options": null,
      "answer": "5",
      "explanation": "Recognize that <math><mn>32</mn></math> is a power of <math><mn>2</mn></math>. <math><msup><mn>2</mn><mn>1</mn></msup><mo>=</mo><mn>2</mn><mo>,</mo><msup><mn>2</mn><mn>2</mn></msup><mo>=</mo><mn>4</mn><mo>,</mo><msup><mn>2</mn><mn>3</mn></msup><mo>=</mo><mn>8</mn><mo>,</mo><msup><mn>2</mn><mn>4</mn></msup><mo>=</mo><mn>16</mn><mo>,</mo><msup><mn>2</mn><mn>5</mn></msup><mo>=</mo><mn>32</mn></math>. Therefore, <math><mi>x</mi><mo>=</mo><mn>5</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Memorize the first few powers of small integers (2, 3, 4, 5) to solve exponential equations quickly.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Advanced Math",
      "skill": "Systems of equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "What is the solution to the system of equations <math><mi>y</mi><mo>=</mo><msqrt><mrow><mi>x</mi><mo>+</mo><mn>4</mn></mrow></msqrt></math> and <math><mi>y</mi><mo>=</mo><mi>x</mi><mo>-</mo><mn>2</mn></math>?",
      "options": {
        "A": "<math><mi>x</mi><mo>=</mo><mn>0</mn></math>",
        "B": "<math><mi>x</mi><mo>=</mo><mn>5</mn></math>",
        "C": "<math><mi>x</mi><mo>=</mo><mn>0</mn></math> and <math><mi>x</mi><mo>=</mo><mn>5</mn></math>",
        "D": "No solution"
      },
      "answer": "B",
      "explanation": "Substitute <math><mi>y</mi></math>: <math><msqrt><mrow><mi>x</mi><mo>+</mo><mn>4</mn></mrow></msqrt><mo>=</mo><mi>x</mi><mo>-</mo><mn>2</mn></math>. Square both sides: <math><mi>x</mi><mo>+</mo><mn>4</mn><mo>=</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn></math>. Simplify: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>5</mn><mi>x</mi><mo>=</mo><mn>0</mn></math>, so <math><mi>x</mi><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Possible solutions: <math><mn>0</mn><mo>,</mo><mn>5</mn></math>. Check <math><mi>x</mi><mo>=</mo><mn>0</mn></math>: <math><msqrt><mn>4</mn></msqrt><mo>=</mo><mn>2</mn></math> but <math><mn>0</mn><mo>-</mo><mn>2</mn><mo>=</mo><mo>-</mo><mn>2</mn></math> (Extraneous). Check <math><mi>x</mi><mo>=</mo><mn>5</mn></math>: <math><msqrt><mn>9</mn></msqrt><mo>=</mo><mn>3</mn></math> and <math><mn>5</mn><mo>-</mo><mn>2</mn><mo>=</mo><mn>3</mn></math> (Valid).",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always check for extraneous solutions when solving equations involving square roots by plugging the answers back into the original equation.",
      "additional_data": null
    },
    {
      "question_number": 12,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The equation <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>8</mn><mi>y</mi><mo>=</mo><mn>0</mn></math> defines a circle in the <math><mi>x</mi><mi>y</mi></math>-plane. What is the diameter of this circle?",
      "options": {
        "A": "5",
        "B": "10",
        "C": "25",
        "D": "50"
      },
      "answer": "B",
      "explanation": "Complete the square for <math><mi>x</mi></math> and <math><mi>y</mi></math>. <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>8</mn><mi>y</mi><mo>+</mo><mn>16</mn><mo>)</mo><mo>=</mo><mn>0</mn><mo>+</mo><mn>9</mn><mo>+</mo><mn>16</mn></math>. This gives <math><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>25</mn></math>. The radius squared is <math><mn>25</mn></math>, so <math><mi>r</mi><mo>=</mo><mn>5</mn></math>. The diameter is <math><mn>2</mn><mi>r</mi><mo>=</mo><mn>10</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To convert a circle equation to standard form, complete the square for both variables. Don't forget to add the constants to both sides of the equation.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Inference from sample statistics and margin of error",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A poll of <math><mn>1</mn><mo>,</mo><mn>000</mn></math> likely voters shows that <math><mn>52</mn><mo>%</mo></math> support Candidate A, with a margin of error of <math><mn>3</mn><mo>%</mo></math> at a <math><mn>95</mn><mo>%</mo></math> confidence level. Which of the following is the best interpretation of these results?",
      "options": {
        "A": "Candidate A will definitely win the election.",
        "B": "We are 95% confident that the true proportion of voters supporting Candidate A is between 49% and 55%.",
        "C": "There is a 3% chance that Candidate A will not receive 52% of the vote.",
        "D": "Exactly 52% of the population supports Candidate A."
      },
      "answer": "B",
      "explanation": "The margin of error creates an interval around the sample proportion. <math><mn>52</mn><mo>%</mo><mo>±</mo><mn>3</mn><mo>%</mo></math> is <math><mn>49</mn><mo>%</mo></math> to <math><mn>55</mn><mo>%</mo></math>. The confidence level indicates how sure we are that the true population parameter lies within this interval.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Margin of error describes the range of likely values for the population parameter, not the certainty of a single outcome.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Algebra",
      "skill": "Linear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "In the equation <math><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>10</mn></math>, <math><mi>a</mi></math> and <math><mi>b</mi></math> are constants. If the equation has infinitely many solutions for <math><mi>x</mi></math>, what is the value of <math><mi>a</mi><mo>+</mo><mi>b</mi></math>?",
      "options": {
        "A": "4",
        "B": "10",
        "C": "14",
        "D": "40"
      },
      "answer": "C",
      "explanation": "For a linear equation to have infinitely many solutions, the variable terms must be identical and the constant terms must be identical on both sides. Thus, <math><mi>a</mi><mo>=</mo><mn>4</mn></math> and <math><mi>b</mi><mo>=</mo><mn>10</mn></math>. <math><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>4</mn><mo>+</mo><mn>10</mn><mo>=</mo><mn>14</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "If an equation is true for all values of x (infinitely many solutions), the left side must be mathematically identical to the right side.",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'><line x1='150' y1='0' x2='150' y2='300' stroke='black' stroke-width='1'/><line x1='0' y1='150' x2='300' y2='150' stroke='black' stroke-width='1'/><circle cx='150' cy='150' r='50' fill='none' stroke='black' stroke-width='2'/><line x1='150' y1='150' x2='190' y2='120' stroke='blue' stroke-width='2' stroke-dasharray='4'/><circle cx='190' cy='120' r='3' fill='red'/><line x1='150' y1='66.6' x2='230' y2='173.3' stroke='green' stroke-width='2'/><text x='160' y='145' font-size='12'>C(2, -3)</text><text x='200' y='115' font-size='12'>P(5, 1)</text></svg>",
      "question_chart_description": "Circle with center C and a tangent line passing through point P on the circle. The radius CP is perpendicular to the tangent line.",
      "question": "A circle in the <math><mi>x</mi><mi>y</mi></math>-plane has its center at <math><mo>(</mo><mn>2</mn><mo>,</mo><mo>-</mo><mn>3</mn><mo>)</mo></math>. A line is tangent to this circle at the point <math><mo>(</mo><mn>5</mn><mo>,</mo><mn>1</mn><mo>)</mo></math>. What is the slope of this tangent line?",
      "options": {
        "A": "<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>",
        "B": "<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>",
        "C": "<math><mo>-</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math>",
        "D": "<math><mo>-</mo><mfrac><mn>4</mn><mn>3</mn></mfrac></math>"
      },
      "answer": "C",
      "explanation": "First, find the slope of the radius connecting the center <math><mo>(</mo><mn>2</mn><mo>,</mo><mo>-</mo><mn>3</mn><mo>)</mo></math> to the point of tangency <math><mo>(</mo><mn>5</mn><mo>,</mo><mn>1</mn><mo>)</mo></math>: <math><mi>m</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>-</mo><mo>(</mo><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mrow><mn>5</mn><mo>-</mo><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac></math>. The tangent line is perpendicular to the radius, so its slope is the negative reciprocal: <math><mo>-</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Tangent lines to a circle are always perpendicular to the radius at the point of contact. Perpendicular slopes are negative reciprocals.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Advanced Math",
      "skill": "Equivalent expressions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "For all positive values of <math><mi>a</mi></math>, which of the following is equivalent to <math><mfrac><msup><mi>a</mi><mn>5</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>·</mo><msup><mi>a</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup></math>?",
      "options": {
        "A": "<math><mi>a</mi></math>",
        "B": "<math><msup><mi>a</mi><mn>2</mn></msup></math>",
        "C": "<math><msup><mi>a</mi><mn>3</mn></msup></math>",
        "D": "<math><msup><mi>a</mi><mn>6</mn></msup></math>"
      },
      "answer": "B",
      "explanation": "Apply exponent rules: <math><mfrac><msup><mi>a</mi><mn>5</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>=</mo><msup><mi>a</mi><mrow><mn>5</mn><mo>-</mo><mn>2</mn></mrow></msup><mo>=</mo><msup><mi>a</mi><mn>3</mn></msup></math>. Then multiply by <math><msup><mi>a</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup></math>: <math><msup><mi>a</mi><mn>3</mn></msup><mo>·</mo><msup><mi>a</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>a</mi><mrow><mn>3</mn><mo>+</mo><mo>(</mo><mo>-</mo><mn>1</mn><mo>)</mo></mrow></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When multiplying terms with the same base, add exponents. When dividing, subtract exponents.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Circle A is defined by the equation <math><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mn>5</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>16</mn></math>. Circle B is obtained by shifting Circle A <math><mn>4</mn></math> units to the right and <math><mn>1</mn></math> unit up. If the equation of Circle B is written as <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>12</mn><mi>y</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></math>, what is the value of <math><mi>c</mi></math>?",
      "options": null,
      "answer": "24",
      "explanation": "Center of A is <math><mo>(</mo><mo>-</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo>)</mo></math>. Shifting right 4 and up 1 gives new center <math><mo>(</mo><mn>2</mn><mo>,</mo><mn>6</mn><mo>)</mo></math>. Radius remains <math><mn>4</mn></math> (<math><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>16</mn></math>). New equation: <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mn>6</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>16</mn></math>. Expand: <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>12</mn><mi>y</mi><mo>+</mo><mn>36</mn><mo>)</mo><mo>=</mo><mn>16</mn></math>. Combine constants: <math><mn>4</mn><mo>+</mo><mn>36</mn><mo>-</mo><mn>16</mn><mo>=</mo><mn>24</mn></math>. So <math><mi>c</mi><mo>=</mo><mn>24</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Apply translations to the center coordinates (h, k) directly, then write the new standard equation and expand it.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The mean of a data set consisting of <math><mn>5</mn></math> numbers is <math><mn>20</mn></math>. When a sixth number is added to the data set, the mean increases to <math><mn>22</mn></math>. What is the value of the sixth number?",
      "options": null,
      "answer": "32",
      "explanation": "Sum of first 5 numbers = <math><mn>5</mn><mo>×</mo><mn>20</mn><mo>=</mo><mn>100</mn></math>. Sum of 6 numbers = <math><mn>6</mn><mo>×</mo><mn>22</mn><mo>=</mo><mn>132</mn></math>. The sixth number is <math><mn>132</mn><mo>-</mo><mn>100</mn><mo>=</mo><mn>32</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Work with the sum of the data values when calculating changes in the mean.",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The function <math><mi>y</mi><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>7</mn></math> is graphed in the <math><mi>x</mi><mi>y</mi></math>-plane. What is the minimum value of <math><mi>y</mi></math>?",
      "options": null,
      "answer": "7",
      "explanation": "This is a parabola in vertex form <math><mi>y</mi><mo>=</mo><mi>a</mi><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>k</mi></math>. Since <math><mi>a</mi><mo>=</mo><mn>2</mn></math> is positive, the parabola opens upward, and the minimum value is the <math><mi>y</mi></math>-coordinate of the vertex, <math><mi>k</mi></math>. Here, the vertex is <math><mo>(</mo><mn>4</mn><mo>,</mo><mn>7</mn><mo>)</mo></math>, so the minimum value is <math><mn>7</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In vertex form y=a(x-h)^2+k, the vertex is (h,k). If a>0, k is the minimum. If a<0, k is the maximum.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "What is the value of <math><mi>cos</mi><mo>(</mo><mfrac><mrow><mn>19</mn><mi>π</mi></mrow><mn>3</mn></mfrac><mo>)</mo></math>?",
      "options": null,
      "answer": "0.5",
      "explanation": "Simplify the angle by subtracting full rotations (<math><mn>2</mn><mi>π</mi></math> or <math><mfrac><mrow><mn>6</mn><mi>π</mi></mrow><mn>3</mn></mfrac></math>). <math><mfrac><mrow><mn>19</mn><mi>π</mi></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><mn>18</mn><mi>π</mi></mrow><mn>3</mn></mfrac><mo>+</mo><mfrac><mi>π</mi><mn>3</mn></mfrac><mo>=</mo><mn>6</mn><mi>π</mi><mo>+</mo><mfrac><mi>π</mi><mn>3</mn></mfrac></math>. <math><mn>6</mn><mi>π</mi></math> represents 3 full rotations, so the terminal side is at <math><mfrac><mi>π</mi><mn>3</mn></mfrac></math>. <math><mi>cos</mi><mo>(</mo><mfrac><mi>π</mi><mn>3</mn></mfrac><mo>)</mo><mo>=</mo><mn>0.5</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Subtract multiples of 2π to find the coterminal reference angle in the first rotation.",
      "additional_data": null
    }
  ]
}

```

---


```python
import json

file_path = '20260113_6_gemini_v3.json'

with open(file_path, 'r') as f:
    data = json.load(f)

questions = data['questions']

print(f"{'Q#':<5} {'Difficulty':<10} {'Question Snippet':<50}")
print("-" * 70)

for q in questions:
    q_text = q['question']
    # Simplified text for preview
    snippet = (q_text[:47] + '...') if len(q_text) > 47 else q_text
    print(f"{q['question_number']:<5} {q['difficulty']:<10} {snippet}")
    print(f"     Full Q: {q_text}")
    print(f"     Explanation: {q['explanation']}")
    print("-" * 30)



```

```text
Q#    Difficulty Question Snippet                                  
----------------------------------------------------------------------
1     Easy       If <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>5</m...
     Full Q: If <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>5</mn><mo>=</mo><mn>17</mn></math>, what is the value of <math><mi>x</mi></math>?
     Explanation: Subtract 5 from both sides: <math><mn>2</mn><mi>x</mi><mo>=</mo><mn>12</mn></math>. Divide by 2: <math><mi>x</mi><mo>=</mo><mn>6</mn></math>.
------------------------------
2     Easy       A car travels <math><mn>300</mn></math> miles i...
     Full Q: A car travels <math><mn>300</mn></math> miles in <math><mn>5</mn></math> hours at a constant speed. What is the speed of the car in miles per hour?
     Explanation: Speed is distance divided by time. <math><mfrac><mn>300</mn><mn>5</mn></mfrac><mo>=</mo><mn>60</mn></math> miles per hour.
------------------------------
3     Easy       A circle in the <math><mi>x</mi><mi>y</mi></mat...
     Full Q: A circle in the <math><mi>x</mi><mi>y</mi></math>-plane is defined by the equation <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>+</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>49</mn></math>. What is the radius of the circle?
     Explanation: The standard equation of a circle is <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mi>k</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>r</mi><mn>2</mn></msup></math>. Here <math><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>49</mn></math>, so the radius <math><mi>r</mi><mo>=</mo><msqrt><mn>49</mn></msqrt><mo>=</mo><mn>7</mn></math>.
------------------------------
4     Easy       The function <math><mi>f</mi></math> is defined...
     Full Q: The function <math><mi>f</mi></math> is defined by <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>3</mn></math>. What is the value of <math><mi>f</mi><mo>(</mo><mn>4</mn><mo>)</mo></math>?
     Explanation: Substitute <math><mn>4</mn></math> for <math><mi>x</mi></math>: <math><mi>f</mi><mo>(</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mn>3</mn><mo>=</mo><mn>2</mn><mo>(</mo><mn>16</mn><mo>)</mo><mo>-</mo><mn>3</mn><mo>=</mo><mn>32</mn><mo>-</mo><mn>3</mn><mo>=</mo><mn>29</mn></math>.
------------------------------
5     Medium     The system of equations <math><mi>y</mi><mo>=</...
     Full Q: The system of equations <math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math> and <math><mi>y</mi><mo>=</mo><mo>-</mo><mi>x</mi><mo>+</mo><mn>7</mn></math> is graphed in the <math><mi>x</mi><mi>y</mi></math>-plane. What is the <math><mi>x</mi></math>-coordinate of the intersection point?
     Explanation: Set the equations equal: <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo>=</mo><mo>-</mo><mi>x</mi><mo>+</mo><mn>7</mn></math>. Add <math><mi>x</mi></math> to both sides: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>7</mn></math>. Subtract 1: <math><mn>3</mn><mi>x</mi><mo>=</mo><mn>6</mn></math>. Divide by 3: <math><mi>x</mi><mo>=</mo><mn>2</mn></math>.
------------------------------
6     Medium     A bag contains <math><mn>10</mn></math> red mar...
     Full Q: A bag contains <math><mn>10</mn></math> red marbles and <math><mn>15</mn></math> blue marbles. If one marble is selected at random, what is the probability that it is blue?
     Explanation: Total marbles = <math><mn>10</mn><mo>+</mo><mn>15</mn><mo>=</mo><mn>25</mn></math>. Probability of blue = <math><mfrac><mn>15</mn><mn>25</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>=</mo><mn>0.6</mn></math>.
------------------------------
7     Medium     What is the sum of the solutions to the equatio...
     Full Q: What is the sum of the solutions to the equation <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>0</mn></math>?
     Explanation: Factor the quadratic: <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Solutions are <math><mi>x</mi><mo>=</mo><mn>2</mn></math> and <math><mi>x</mi><mo>=</mo><mn>3</mn></math>. Sum is <math><mn>2</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>5</mn></math>. Alternatively, use <math><mo>-</mo><mfrac><mi>b</mi><mi>a</mi></mfrac><mo>=</mo><mo>-</mo><mfrac><mrow><mo>-</mo><mn>5</mn></mrow><mn>1</mn></mfrac><mo>=</mo><mn>5</mn></math>.
------------------------------
8     Medium     An angle has a measure of <math><mn>480</mn></m...
     Full Q: An angle has a measure of <math><mn>480</mn></math> degrees. What is the measure of the angle in radians?
     Explanation: Multiply degrees by <math><mfrac><mi>π</mi><mn>180</mn></mfrac></math>: <math><mn>480</mn><mo>×</mo><mfrac><mi>π</mi><mn>180</mn></mfrac><mo>=</mo><mfrac><mrow><mn>48</mn><mi>π</mi></mrow><mn>18</mn></mfrac><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi></mrow><mn>3</mn></mfrac></math>.
------------------------------
9     Medium     A student has a budget of <math><mi>$</mi><mn>5...
     Full Q: A student has a budget of <math><mi>$</mi><mn>500</mn></math> for a project. They have already spent <math><mi>$</mi><mn>200</mn></math> on supplies. The remaining supplies cost <math><mi>$</mi><mn>15</mn></math> per unit. Which inequality represents the maximum number of units, <math><mi>x</mi></math>, the student can purchase?
     Explanation: The total cost is the initial <math><mn>200</mn></math> plus <math><mn>15</mn></math> times the number of units <math><mi>x</mi></math>. This total must be less than or equal to the budget of <math><mn>500</mn></math>. So, <math><mn>15</mn><mi>x</mi><mo>+</mo><mn>200</mn><mo>≤</mo><mn>500</mn></math>.
------------------------------
10    Medium     If <math><msup><mn>2</mn><mi>x</mi></msup><mo>=...
     Full Q: If <math><msup><mn>2</mn><mi>x</mi></msup><mo>=</mo><mn>32</mn></math>, what is the value of <math><mi>x</mi></math>?
     Explanation: Recognize that <math><mn>32</mn></math> is a power of <math><mn>2</mn></math>. <math><msup><mn>2</mn><mn>1</mn></msup><mo>=</mo><mn>2</mn><mo>,</mo><msup><mn>2</mn><mn>2</mn></msup><mo>=</mo><mn>4</mn><mo>,</mo><msup><mn>2</mn><mn>3</mn></msup><mo>=</mo><mn>8</mn><mo>,</mo><msup><mn>2</mn><mn>4</mn></msup><mo>=</mo><mn>16</mn><mo>,</mo><msup><mn>2</mn><mn>5</mn></msup><mo>=</mo><mn>32</mn></math>. Therefore, <math><mi>x</mi><mo>=</mo><mn>5</mn></math>.
------------------------------
11    Hard       What is the solution to the system of equations...
     Full Q: What is the solution to the system of equations <math><mi>y</mi><mo>=</mo><msqrt><mrow><mi>x</mi><mo>+</mo><mn>4</mn></mrow></msqrt></math> and <math><mi>y</mi><mo>=</mo><mi>x</mi><mo>-</mo><mn>2</mn></math>?
     Explanation: Substitute <math><mi>y</mi></math>: <math><msqrt><mrow><mi>x</mi><mo>+</mo><mn>4</mn></mrow></msqrt><mo>=</mo><mi>x</mi><mo>-</mo><mn>2</mn></math>. Square both sides: <math><mi>x</mi><mo>+</mo><mn>4</mn><mo>=</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn></math>. Simplify: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>5</mn><mi>x</mi><mo>=</mo><mn>0</mn></math>, so <math><mi>x</mi><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Possible solutions: <math><mn>0</mn><mo>,</mo><mn>5</mn></math>. Check <math><mi>x</mi><mo>=</mo><mn>0</mn></math>: <math><msqrt><mn>4</mn></msqrt><mo>=</mo><mn>2</mn></math> but <math><mn>0</mn><mo>-</mo><mn>2</mn><mo>=</mo><mo>-</mo><mn>2</mn></math> (Extraneous). Check <math><mi>x</mi><mo>=</mo><mn>5</mn></math>: <math><msqrt><mn>9</mn></msqrt><mo>=</mo><mn>3</mn></math> and <math><mn>5</mn><mo>-</mo><mn>2</mn><mo>=</mo><mn>3</mn></math> (Valid).
------------------------------
12    Hard       The equation <math><msup><mi>x</mi><mn>2</mn></...
     Full Q: The equation <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>8</mn><mi>y</mi><mo>=</mo><mn>0</mn></math> defines a circle in the <math><mi>x</mi><mi>y</mi></math>-plane. What is the diameter of this circle?
     Explanation: Complete the square for <math><mi>x</mi></math> and <math><mi>y</mi></math>. <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>8</mn><mi>y</mi><mo>+</mo><mn>16</mn><mo>)</mo><mo>=</mo><mn>0</mn><mo>+</mo><mn>9</mn><mo>+</mo><mn>16</mn></math>. This gives <math><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>25</mn></math>. The radius squared is <math><mn>25</mn></math>, so <math><mi>r</mi><mo>=</mo><mn>5</mn></math>. The diameter is <math><mn>2</mn><mi>r</mi><mo>=</mo><mn>10</mn></math>.
------------------------------
13    Hard       A poll of <math><mn>1</mn><mo>,</mo><mn>000</mn...
     Full Q: A poll of <math><mn>1</mn><mo>,</mo><mn>000</mn></math> likely voters shows that <math><mn>52</mn><mo>%</mo></math> support Candidate A, with a margin of error of <math><mn>3</mn><mo>%</mo></math> at a <math><mn>95</mn><mo>%</mo></math> confidence level. Which of the following is the best interpretation of these results?
     Explanation: The margin of error creates an interval around the sample proportion. <math><mn>52</mn><mo>%</mo><mo>±</mo><mn>3</mn><mo>%</mo></math> is <math><mn>49</mn><mo>%</mo></math> to <math><mn>55</mn><mo>%</mo></math>. The confidence level indicates how sure we are that the true population parameter lies within this interval.
------------------------------
14    Hard       In the equation <math><mi>a</mi><mi>x</mi><mo>+...
     Full Q: In the equation <math><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>10</mn></math>, <math><mi>a</mi></math> and <math><mi>b</mi></math> are constants. If the equation has infinitely many solutions for <math><mi>x</mi></math>, what is the value of <math><mi>a</mi><mo>+</mo><mi>b</mi></math>?
     Explanation: For a linear equation to have infinitely many solutions, the variable terms must be identical and the constant terms must be identical on both sides. Thus, <math><mi>a</mi><mo>=</mo><mn>4</mn></math> and <math><mi>b</mi><mo>=</mo><mn>10</mn></math>. <math><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>4</mn><mo>+</mo><mn>10</mn><mo>=</mo><mn>14</mn></math>.
------------------------------
15    Hard       A circle in the <math><mi>x</mi><mi>y</mi></mat...
     Full Q: A circle in the <math><mi>x</mi><mi>y</mi></math>-plane has its center at <math><mo>(</mo><mn>2</mn><mo>,</mo><mo>-</mo><mn>3</mn><mo>)</mo></math>. A line is tangent to this circle at the point <math><mo>(</mo><mn>5</mn><mo>,</mo><mn>1</mn><mo>)</mo></math>. What is the slope of this tangent line?
     Explanation: First, find the slope of the radius connecting the center <math><mo>(</mo><mn>2</mn><mo>,</mo><mo>-</mo><mn>3</mn><mo>)</mo></math> to the point of tangency <math><mo>(</mo><mn>5</mn><mo>,</mo><mn>1</mn><mo>)</mo></math>: <math><mi>m</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>-</mo><mo>(</mo><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mrow><mn>5</mn><mo>-</mo><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac></math>. The tangent line is perpendicular to the radius, so its slope is the negative reciprocal: <math><mo>-</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math>.
------------------------------
16    Hard       For all positive values of <math><mi>a</mi></ma...
     Full Q: For all positive values of <math><mi>a</mi></math>, which of the following is equivalent to <math><mfrac><msup><mi>a</mi><mn>5</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>·</mo><msup><mi>a</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup></math>?
     Explanation: Apply exponent rules: <math><mfrac><msup><mi>a</mi><mn>5</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>=</mo><msup><mi>a</mi><mrow><mn>5</mn><mo>-</mo><mn>2</mn></mrow></msup><mo>=</mo><msup><mi>a</mi><mn>3</mn></msup></math>. Then multiply by <math><msup><mi>a</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup></math>: <math><msup><mi>a</mi><mn>3</mn></msup><mo>·</mo><msup><mi>a</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>a</mi><mrow><mn>3</mn><mo>+</mo><mo>(</mo><mo>-</mo><mn>1</mn><mo>)</mo></mrow></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup></math>.
------------------------------
17    Hard       Circle A is defined by the equation <math><msup...
     Full Q: Circle A is defined by the equation <math><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mn>5</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>16</mn></math>. Circle B is obtained by shifting Circle A <math><mn>4</mn></math> units to the right and <math><mn>1</mn></math> unit up. If the equation of Circle B is written as <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>12</mn><mi>y</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></math>, what is the value of <math><mi>c</mi></math>?
     Explanation: Center of A is <math><mo>(</mo><mo>-</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo>)</mo></math>. Shifting right 4 and up 1 gives new center <math><mo>(</mo><mn>2</mn><mo>,</mo><mn>6</mn><mo>)</mo></math>. Radius remains <math><mn>4</mn></math> (<math><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>16</mn></math>). New equation: <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mn>6</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>16</mn></math>. Expand: <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>12</mn><mi>y</mi><mo>+</mo><mn>36</mn><mo>)</mo><mo>=</mo><mn>16</mn></math>. Combine constants: <math><mn>4</mn><mo>+</mo><mn>36</mn><mo>-</mo><mn>16</mn><mo>=</mo><mn>24</mn></math>. So <math><mi>c</mi><mo>=</mo><mn>24</mn></math>.
------------------------------
18    Hard       The mean of a data set consisting of <math><mn>...
     Full Q: The mean of a data set consisting of <math><mn>5</mn></math> numbers is <math><mn>20</mn></math>. When a sixth number is added to the data set, the mean increases to <math><mn>22</mn></math>. What is the value of the sixth number?
     Explanation: Sum of first 5 numbers = <math><mn>5</mn><mo>×</mo><mn>20</mn><mo>=</mo><mn>100</mn></math>. Sum of 6 numbers = <math><mn>6</mn><mo>×</mo><mn>22</mn><mo>=</mo><mn>132</mn></math>. The sixth number is <math><mn>132</mn><mo>-</mo><mn>100</mn><mo>=</mo><mn>32</mn></math>.
------------------------------
19    Hard       The function <math><mi>y</mi><mo>=</mo><mn>2</m...
     Full Q: The function <math><mi>y</mi><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>7</mn></math> is graphed in the <math><mi>x</mi><mi>y</mi></math>-plane. What is the minimum value of <math><mi>y</mi></math>?
     Explanation: This is a parabola in vertex form <math><mi>y</mi><mo>=</mo><mi>a</mi><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>k</mi></math>. Since <math><mi>a</mi><mo>=</mo><mn>2</mn></math> is positive, the parabola opens upward, and the minimum value is the <math><mi>y</mi></math>-coordinate of the vertex, <math><mi>k</mi></math>. Here, the vertex is <math><mo>(</mo><mn>4</mn><mo>,</mo><mn>7</mn><mo>)</mo></math>, so the minimum value is <math><mn>7</mn></math>.
------------------------------
20    Hard       What is the value of <math><mi>cos</mi><mo>(</m...
     Full Q: What is the value of <math><mi>cos</mi><mo>(</mo><mfrac><mrow><mn>19</mn><mi>π</mi></mrow><mn>3</mn></mfrac><mo>)</mo></math>?
     Explanation: Simplify the angle by subtracting full rotations (<math><mn>2</mn><mi>π</mi></math> or <math><mfrac><mrow><mn>6</mn><mi>π</mi></mrow><mn>3</mn></mfrac></math>). <math><mfrac><mrow><mn>19</mn><mi>π</mi></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><mn>18</mn><mi>π</mi></mrow><mn>3</mn></mfrac><mo>+</mo><mfrac><mi>π</mi><mn>3</mn></mfrac><mo>=</mo><mn>6</mn><mi>π</mi><mo>+</mo><mfrac><mi>π</mi><mn>3</mn></mfrac></math>. <math><mn>6</mn><mi>π</mi></math> represents 3 full rotations, so the terminal side is at <math><mfrac><mi>π</mi><mn>3</mn></mfrac></math>. <math><mi>cos</mi><mo>(</mo><mfrac><mi>π</mi><mn>3</mn></mfrac><mo>)</mo><mo>=</mo><mn>0.5</mn></math>.
------------------------------


```

# SAT Math Question Difficulty Audit

## 1. Difficulty Distribution Summary

The audit reveals that the difficulty curve is skewed heavily towards "Hard" in the metadata, while the actual cognitive load of several questions aligns more closely with the "Medium" tier.

* **Declared Distribution:** Easy: 4 | Medium: 6 | Hard: 10
* **Audited Distribution:** Easy: 4 | Medium: 9 | Hard: 7
* **Alignment Score:** 85% (3 questions mislabeled)

## 2. Mislabeled Questions Log

| Q# | Assigned Difficulty | Assessed Difficulty | Reason for Reclassification |
| --- | --- | --- | --- |
| **16** | Hard | **Medium** | The problem requires applying standard exponent laws () to a single variable expression. There is no complex modeling, abstract reasoning, or "trap" logic typical of Hard questions. It is a routine algebraic simplification. |
| **18** | Hard | **Medium** | Calculating a missing data point using the change in mean (Total Sum 2 - Total Sum 1) is a standard procedural task. While it requires two steps, the logic is linear and predictable, lacking the high cognitive load or abstraction required for the Hard tier. |
| **19** | Hard | **Medium** | The quadratic function is given explicitly in vertex form . Identifying the minimum value () from this form is a direct interpretation skill, cognitively equivalent to identifying the radius from a circle equation (which is correctly classified as Easy in Q3). It requires no algebraic manipulation (like completing the square) to "unlock" the answer. |

## 3. Detailed Analysis

* **Calibration of Easy Questions:** The questions labeled **Easy (Q1-Q4)** are perfectly calibrated. They represent direct recall (Circle equation, Q3) or single-step applications (Rate formula, Q2), which is ideal for the lower difficulty band.
* **System of Equations (Q5 vs. Q11):** The distinction between Q5 (Medium) and Q11 (Hard) is excellent. Q5 involves linear systems (standard elimination/substitution), while Q11 involves a nonlinear system (radical + linear) requiring extraneous solution checking. This demonstrates a clear and correct progression in difficulty for the same domain.
* **Hard Tier Integrity:** Questions like **Q12 (Circle completion)**, **Q15 (Tangent slope)**, and **Q17 (Circle shift + expansion)** are correctly identified as Hard. They require synthesizing multiple concepts (algebra + geometry) or navigating significant procedural density where a single arithmetic slip ruins the result.
* **Recommendation:** Re-leveling Q16, Q18, and Q19 to "Medium" will create a smoother difficulty curve (4 Easy, 9 Medium, 7 Hard) that better reflects the student experience on the Digital SAT.