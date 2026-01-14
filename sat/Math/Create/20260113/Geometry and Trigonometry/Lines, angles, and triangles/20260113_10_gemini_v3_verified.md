# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 5
* **Critical Errors:** 1 (Question 19 Answer Key/Logic)
* **Minor Issues/Warnings:** 4 (Questions 15, 18 Explanation Style/Content; Question 15 Chart Description Ambiguity; Question 18 Content Precision)

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| 15 | Explanation Flaw | The explanation contains prohibited internal monologue ("Wait, let's re-read...", "This is a valid interpretation"). It is confusing and not textbook-style. | Rewrite the explanation to be direct and authoritative. Assume the intended geometric setup (y is an interior angle) and explain the calculation clearly. |
| 15 | Chart Mismatch | The chart description says y is "adjacent to the intersection," which is ambiguous (could be exterior). The math (Answer 60) requires y to be an interior angle. | Update chart description to explicitly state "y is the interior angle" to match the solution logic (). |
| 18 | Content Issue | The question asks for the "smallest integer value of b". Since , negative integers (e.g., -100) are also solutions, meaning there is no "smallest" integer. | Change question text to "smallest **positive** integer value of b". |
| 18 | Explanation Flaw | The explanation contains internal monologue ("Note also that negative integers work...", "Let's edit the question..."). | Rewrite the explanation to directly address the (corrected) "positive integer" constraint. |
| 19 | Mathematical Error | The provided answer is **A (5/13)**, but the correct calculation yields **B (12/13)**. . With AC=12 (Adjacent) and Hyp=13, the value is 12/13. | **Change Answer to B.** Rewrite the explanation to correctly identify the adjacent side and hypotenuse without the internal confusion seen in the original text. |

## Metadata Consistency Findings

* The metadata counts (Difficulty: Easy=4, Medium=6, Hard=10; Types: MCQ=15, SPR=5) match the question set accurately.
* Domain and Skill mappings appear consistent with SAT standards.

---

# CORRECTED JSON FILE

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
      "Lines, angles, and triangles",
      "Linear equations in 1 variable",
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
      "skill": "Linear equations in 1 variable",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "If <math><mn>4</mn><mi>x</mi><mo>-</mo><mn>9</mn><mo>=</mo><mn>23</mn></math>, what is the value of <math><mn>2</mn><mi>x</mi></math>?",
      "options": {
        "A": "8",
        "B": "16",
        "C": "32",
        "D": "64"
      },
      "answer": "B",
      "explanation": "First, solve for <math><mi>x</mi></math>. Add 9 to both sides: <math><mn>4</mn><mi>x</mi><mo>=</mo><mn>32</mn></math>. Divide by 4: <math><mi>x</mi><mo>=</mo><mn>8</mn></math>. The question asks for the value of <math><mn>2</mn><mi>x</mi></math>, so multiply 8 by 2 to get 16.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always check what the question is asking for. If it asks for <math><mn>2</mn><mi>x</mi></math>, do not stop after finding <math><mi>x</mi></math>.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Geometry and Trigonometry",
      "skill": "Lines, angles, and triangles",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='70' x2='350' y2='70' stroke='black' stroke-width='2' /><line x1='50' y1='130' x2='350' y2='130' stroke='black' stroke-width='2' /><line x1='100' y1='150' x2='300' y2='50' stroke='black' stroke-width='2' /><text x='230' y='65' font-family='Arial' font-size='14'>k</text><text x='230' y='145' font-family='Arial' font-size='14'>m</text><text x='195' y='95' font-family='Arial' font-size='14'>130&#176;</text><text x='160' y='115' font-family='Arial' font-size='14'>x&#176;</text></svg>",
      "question_chart_description": "Two parallel horizontal lines, k and m, are intersected by a transversal line. The obtuse angle formed by the transversal and the top line (k) is 130 degrees. The acute angle formed by the transversal and the bottom line (m), which is consecutive interior to the 130 degree angle, is labeled x degrees.",
      "question": "In the figure, line <math><mi>k</mi></math> is parallel to line <math><mi>m</mi></math>. What is the value of <math><mi>x</mi></math>?",
      "options": {
        "A": "40",
        "B": "50",
        "C": "130",
        "D": "230"
      },
      "answer": "B",
      "explanation": "Since lines <math><mi>k</mi></math> and <math><mi>m</mi></math> are parallel, consecutive interior angles (angles on the same side of the transversal and between the parallel lines) are supplementary. Therefore, <math><mi>x</mi><mo>+</mo><mn>130</mn><mo>=</mo><mn>180</mn></math>. Solving for <math><mi>x</mi></math> gives <math><mi>x</mi><mo>=</mo><mn>50</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember that for parallel lines, consecutive interior angles sum to 180 degrees, while alternate interior angles are equal.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Ratios, rates, proportional relationships, and units",
      "difficulty": "Easy",
      "question_type": "SPR",
      "question": "A machine produces 150 widgets every 10 minutes. At this rate, how many widgets does the machine produce in 1 hour?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "900",
      "explanation": "First, find the rate per minute: <math><mfrac><mn>150</mn><mn>10</mn></mfrac><mo>=</mo><mn>15</mn></math> widgets per minute. Since there are 60 minutes in 1 hour, multiply the rate by 60: <math><mn>15</mn><mo>&#215;</mo><mn>60</mn><mo>=</mo><mn>900</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Ensure units match before calculating. Convert hours to minutes if the rate is given in minutes.",
      "additional_data": null
    },
    {
      "question_number": 4,
      "domain": "Algebra",
      "skill": "Linear inequalities in 1 or 2 variables",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question": "Which value of <math><mi>x</mi></math> is a solution to the inequality <math><mn>3</mn><mi>x</mi><mo>-</mo><mn>5</mn><mo>&gt;</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "-4",
        "B": "-3",
        "C": "-2",
        "D": "0"
      },
      "answer": "A",
      "explanation": "Subtract <math><mn>3</mn><mi>x</mi></math> from both sides: <math><mo>-</mo><mn>5</mn><mo>&gt;</mo><mi>x</mi><mo>-</mo><mn>2</mn></math>. Add 2 to both sides: <math><mo>-</mo><mn>3</mn><mo>&gt;</mo><mi>x</mi></math>, or <math><mi>x</mi><mo>&lt;</mo><mo>-</mo><mn>3</mn></math>. Of the options provided, only -4 is less than -3.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When multiplying or dividing an inequality by a negative number, remember to flip the inequality sign.",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question": "What is the sum of the solutions to the given equation? <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>12</mn><mi>x</mi><mo>+</mo><mn>35</mn><mo>=</mo><mn>0</mn></math>",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "-12",
        "B": "12",
        "C": "35",
        "D": "-35"
      },
      "answer": "B",
      "explanation": "For a quadratic equation in the form <math><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></math>, the sum of the solutions is <math><mo>-</mo><mfrac><mi>b</mi><mi>a</mi></mfrac></math>. Here, <math><mi>a</mi><mo>=</mo><mn>1</mn></math> and <math><mi>b</mi><mo>=</mo><mo>-</mo><mn>12</mn></math>. Thus, the sum is <math><mo>-</mo><mfrac><mrow><mo>-</mo><mn>12</mn></mrow><mn>1</mn></mfrac><mo>=</mo><mn>12</mn></math>. Alternatively, factor the equation as <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>7</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>, giving solutions 5 and 7, which sum to 12.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Memorize the relationship between coefficients and roots: sum = <math><mo>-</mo><mi>b</mi><mo>/</mo><mi>a</mi></math> and product = <math><mi>c</mi><mo>/</mo><mi>a</mi></math>.",
      "additional_data": null
    },
    {
      "question_number": 6,
      "domain": "Algebra",
      "skill": "Systems of 2 linear equations in 2 variables",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question": "If <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>17</mn></math> and <math><mi>x</mi><mo>-</mo><mi>y</mi><mo>=</mo><mn>1</mn></math>, what is the value of <math><mi>x</mi><mo>+</mo><mi>y</mi></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "7",
      "explanation": "From the second equation, <math><mi>x</mi><mo>=</mo><mi>y</mi><mo>+</mo><mn>1</mn></math>. Substitute this into the first equation: <math><mn>2</mn><mo>(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>17</mn></math>. Simplifying gives <math><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>17</mn></math>, so <math><mn>5</mn><mi>y</mi><mo>=</mo><mn>15</mn></math>, meaning <math><mi>y</mi><mo>=</mo><mn>3</mn></math>. Then <math><mi>x</mi><mo>=</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>4</mn></math>. The value of <math><mi>x</mi><mo>+</mo><mi>y</mi></math> is <math><mn>4</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>7</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Substitution is often faster when one variable has a coefficient of 1 or -1.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Geometry and Trigonometry",
      "skill": "Lines, angles, and triangles",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='20,180 120,180 70,80' fill='none' stroke='black' stroke-width='2'/><polygon points='160,180 260,180 210,30' fill='none' stroke='black' stroke-width='2'/><text x='15' y='195'>A</text><text x='120' y='195'>B</text><text x='65' y='75'>C</text><text x='155' y='195'>D</text><text x='260' y='195'>E</text><text x='205' y='25'>F</text></svg>",
      "question_chart_description": "Two similar triangles, ABC and DEF. Triangle ABC is smaller than Triangle DEF. In triangle ABC, AC = 8 and BC = 10. In triangle DEF, DF = 12 and EF = 15.",
      "question": "Triangles <math><mi>A</mi><mi>B</mi><mi>C</mi></math> and <math><mi>D</mi><mi>E</mi><mi>F</mi></math> are similar, where <math><mi>A</mi></math> corresponds to <math><mi>D</mi></math>, and <math><mi>B</mi></math> corresponds to <math><mi>E</mi></math>. If <math><mi>A</mi><mi>C</mi><mo>=</mo><mn>8</mn></math>, <math><mi>D</mi><mi>F</mi><mo>=</mo><mn>12</mn></math>, and the perimeter of triangle <math><mi>A</mi><mi>B</mi><mi>C</mi></math> is 24, what is the perimeter of triangle <math><mi>D</mi><mi>E</mi><mi>F</mi></math>?",
      "options": {
        "A": "30",
        "B": "36",
        "C": "48",
        "D": "52"
      },
      "answer": "B",
      "explanation": "Calculate the scale factor between the corresponding sides: <math><mfrac><mrow><mi>D</mi><mi>F</mi></mrow><mrow><mi>A</mi><mi>C</mi></mrow></mfrac><mo>=</mo><mfrac><mn>12</mn><mn>8</mn></mfrac><mo>=</mo><mn>1.5</mn></math>. The perimeter of the similar triangle scales by the same factor. <math><mn>24</mn><mo>&#215;</mo><mn>1.5</mn><mo>=</mo><mn>36</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For similar triangles, the ratio of perimeters is equal to the ratio of corresponding side lengths (the scale factor).",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question": "A table shows the distribution of 50 students in a band class by instrument and grade level. There are 20 juniors and 30 seniors. Among the juniors, 8 play the flute. Among the seniors, 12 play the flute. If a flute player is selected at random, what is the probability that the student is a senior?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "0.40",
        "B": "0.50",
        "C": "0.60",
        "D": "0.75"
      },
      "answer": "C",
      "explanation": "First, calculate the total number of flute players: <math><mn>8</mn><mo>(</mo><mtext>juniors</mtext><mo>)</mo><mo>+</mo><mn>12</mn><mo>(</mo><mtext>seniors</mtext><mo>)</mo><mo>=</mo><mn>20</mn></math>. The condition is 'if a flute player is selected', so the sample space is restricted to these 20 students. The number of seniors in this group is 12. The probability is <math><mfrac><mn>12</mn><mn>20</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>=</mo><mn>0.60</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Pay close attention to the 'given' condition in probability problems; it defines the denominator.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Advanced Math",
      "skill": "Equivalent expressions",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question": "For all positive values of <math><mi>x</mi></math>, the expression <math><mfrac><msup><mrow><mo>(</mo><mn>3</mn><msup><mi>x</mi><mn>4</mn></msup><mo>)</mo></mrow><mn>2</mn></msup><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></math> is equivalent to <math><mi>k</mi><msup><mi>x</mi><mi>n</mi></msup></math>, where <math><mi>k</mi></math> and <math><mi>n</mi></math> are constants. What is the value of <math><mi>k</mi><mo>+</mo><mi>n</mi></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "9",
      "explanation": "Simplify the numerator: <math><msup><mrow><mo>(</mo><mn>3</mn><msup><mi>x</mi><mn>4</mn></msup><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mn>3</mn><mn>2</mn></msup><mo>&#183;</mo><msup><mrow><mo>(</mo><msup><mi>x</mi><mn>4</mn></msup><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>9</mn><msup><mi>x</mi><mn>8</mn></msup></math>. Divide by the denominator: <math><mfrac><mrow><mn>9</mn><msup><mi>x</mi><mn>8</mn></msup></mrow><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>3</mn><msup><mi>x</mi><mrow><mn>8</mn><mo>-</mo><mn>2</mn></mrow></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>6</mn></msup></math>. Here, <math><mi>k</mi><mo>=</mo><mn>3</mn></math> and <math><mi>n</mi><mo>=</mo><mn>6</mn></math>. The value of <math><mi>k</mi><mo>+</mo><mi>n</mi></math> is <math><mn>3</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>9</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Apply exponent rules carefully: <math><msup><mrow><mo>(</mo><msup><mi>x</mi><mi>a</mi></msup><mo>)</mo></mrow><mi>b</mi></msup><mo>=</mo><msup><mi>x</mi><mrow><mi>a</mi><mi>b</mi></mrow></msup></math> and <math><mfrac><msup><mi>x</mi><mi>a</mi></msup><msup><mi>x</mi><mi>b</mi></msup></mfrac><mo>=</mo><msup><mi>x</mi><mrow><mi>a</mi><mo>-</mo><mi>b</mi></mrow></msup></math>.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Algebra",
      "skill": "Linear functions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question": "A landscaping company charges a flat fee of $50 for a consultation plus $40 per hour for labor. If a customer's total bill was $290, how many hours of labor were charged?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "4",
        "B": "5",
        "C": "6",
        "D": "7"
      },
      "answer": "C",
      "explanation": "Set up the linear equation where <math><mi>h</mi></math> is the number of hours: <math><mn>40</mn><mi>h</mi><mo>+</mo><mn>50</mn><mo>=</mo><mn>290</mn></math>. Subtract 50 from both sides: <math><mn>40</mn><mi>h</mi><mo>=</mo><mn>240</mn></math>. Divide by 40: <math><mi>h</mi><mo>=</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the variable (slope/rate) and the constant (intercept/flat fee) to construct the linear model correctly.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Algebra",
      "skill": "Systems of 2 linear equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question": "The system of equations <math><mi>k</mi><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>12</mn></math> and <math><mn>4</mn><mi>x</mi><mo>+</mo><mn>5</mn><mi>y</mi><mo>=</mo><mn>20</mn></math> has no solution. What is the value of <math><mi>k</mi></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "2.4",
      "explanation": "A system of linear equations has no solution if the lines are parallel, meaning they have the same slope but different y-intercepts. The ratio of the x-coefficients must equal the ratio of the y-coefficients. <math><mfrac><mi>k</mi><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac></math>. Solving for <math><mi>k</mi></math>: <math><mn>5</mn><mi>k</mi><mo>=</mo><mn>12</mn></math>, so <math><mi>k</mi><mo>=</mo><mn>2.4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For 'no solution' in linear systems, set the slopes (or coefficient ratios) equal: <math><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>B</mi><mn>1</mn></msub><msub><mi>B</mi><mn>2</mn></msub></mfrac><mo>&#8800;</mo><mfrac><msub><mi>C</mi><mn>1</mn></msub><msub><mi>C</mi><mn>2</mn></msub></mfrac></math>.",
      "additional_data": null
    },
    {
      "question_number": 12,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question": "The equation of a circle in the xy-plane is given by <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>=</mo><mn>11</mn></math>. What is the length of the radius of the circle?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "6",
        "B": "11",
        "C": "25",
        "D": "36"
      },
      "answer": "A",
      "explanation": "Complete the square for both <math><mi>x</mi></math> and <math><mi>y</mi></math>. For <math><mi>x</mi></math>: <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>)</mo></math>. For <math><mi>y</mi></math>: <math><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>y</mi><mo>+</mo><mn>16</mn><mo>)</mo></math>. Add these constants to the right side: <math><mn>11</mn><mo>+</mo><mn>9</mn><mo>+</mo><mn>16</mn><mo>=</mo><mn>36</mn></math>. The equation becomes <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo><msup><mn>2</mn></msup><mo>+</mo><mo>(</mo><mi>y</mi><mo>+</mo><mn>4</mn><mo>)</mo><msup><mn>2</mn></msup><mo>=</mo><mn>36</mn></math>. The radius squared is 36, so the radius is <math><msqrt><mn>36</mn></msqrt><mo>=</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To complete the square for <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi></math>, add <math><msup><mrow><mo>(</mo><mfrac><mi>b</mi><mn>2</mn></mfrac><mo>)</mo></mrow><mn>2</mn></msup></math>.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question": "For what positive value of <math><mi>x</mi></math> is the equation <math><mo>|</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>9</mn><mo>|</mo><mo>-</mo><mn>12</mn><mo>=</mo><mo>-</mo><mn>3</mn></math> true?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "6",
      "explanation": "First, isolate the absolute value term: <math><mo>|</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>9</mn><mo>|</mo><mo>=</mo><mn>9</mn></math>. This splits into two cases: <math><mn>3</mn><mi>x</mi><mo>-</mo><mn>9</mn><mo>=</mo><mn>9</mn></math> or <math><mn>3</mn><mi>x</mi><mo>-</mo><mn>9</mn><mo>=</mo><mo>-</mo><mn>9</mn></math>. For the first case: <math><mn>3</mn><mi>x</mi><mo>=</mo><mn>18</mn></math> so <math><mi>x</mi><mo>=</mo><mn>6</mn></math>. For the second case: <math><mn>3</mn><mi>x</mi><mo>=</mo><mn>0</mn></math> so <math><mi>x</mi><mo>=</mo><mn>0</mn></math>. The question asks for the *positive* value, so <math><mi>x</mi><mo>=</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember that absolute value equations <math><mo>|</mo><mi>A</mi><mo>|</mo><mo>=</mo><mi>B</mi></math> typically yield two solutions: <math><mi>A</mi><mo>=</mo><mi>B</mi></math> and <math><mi>A</mi><mo>=</mo><mo>-</mo><mi>B</mi></math>.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Inference from sample statistics and margin of error",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question": "A researcher estimates that 42% of the residents in a city support a new policy, with a margin of error of 3% at a 95% confidence level. Which of the following is the most appropriate conclusion based on this estimate?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "Exactly 42% of residents support the policy.",
        "B": "We can be 95% confident that the true percentage of supporters is between 39% and 45%.",
        "C": "The true percentage of supporters is 42% or greater.",
        "D": "If the study were repeated, 95% of the sample proportions would be exactly 42%."
      },
      "answer": "B",
      "explanation": "A margin of error defines a confidence interval. <math><mn>42</mn><mo>%</mo><mo>&#177;</mo><mn>3</mn><mo>%</mo></math> results in an interval of 39% to 45%. The confidence level (95%) describes the likelihood that this method produces an interval containing the true population parameter.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Margin of error creates a range (Estimate - MOE to Estimate + MOE). It does not guarantee exact values.",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Geometry and Trigonometry",
      "skill": "Lines, angles, and triangles",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='50' x2='250' y2='50' stroke='black' stroke-width='2'/><line x1='50' y1='150' x2='250' y2='150' stroke='black' stroke-width='2'/><line x1='50' y1='50' x2='250' y2='150' stroke='black' stroke-width='2'/><line x1='50' y1='150' x2='250' y2='50' stroke='black' stroke-width='2'/><text x='110' y='75' font-size='14'>y&#176;</text><text x='180' y='75' font-size='14'>48&#176;</text><text x='140' y='110' font-size='14'>x&#176;</text></svg>",
      "question_chart_description": "Parallel horizontal lines intersected by two transversals that also intersect each other between the parallel lines. The transversals form an 'X' shape. The top intersection angle on the right transversal is 48 degrees. The interior angle at the top-left intersection is labeled y degrees. The angle x is the vertical angle at the intersection of the two transversals.",
      "question": "In the figure, two parallel lines are intersected by two transversals that intersect each other between the parallel lines. If <math><mi>y</mi><mo>=</mo><mn>72</mn></math>, what is the value of <math><mi>x</mi></math>?",
      "options": {
        "A": "60",
        "B": "68",
        "C": "70",
        "D": "80"
      },
      "answer": "A",
      "explanation": "The two transversals and the top parallel line form a triangle. The angles of this triangle are given as <math><mn>48</mn><mo>&#176;</mo></math>, <math><mi>y</mi><mo>&#176;</mo></math>, and the vertical angle to <math><mi>x</mi><mo>&#176;</mo></math>. Since vertical angles are equal, the third angle of the triangle is equal to <math><mi>x</mi></math>. The sum of the angles in any triangle is <math><mn>180</mn><mo>&#176;</mo></math>. Therefore, the equation is <math><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>48</mn><mo>=</mo><mn>180</mn></math>. Substituting <math><mi>y</mi><mo>=</mo><mn>72</mn></math>: <math><mi>x</mi><mo>+</mo><mn>72</mn><mo>+</mo><mn>48</mn><mo>=</mo><mn>180</mn></math>. Simplifying: <math><mi>x</mi><mo>+</mo><mn>120</mn><mo>=</mo><mn>180</mn></math>, so <math><mi>x</mi><mo>=</mo><mn>60</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In 'X' shapes with parallel lines, the vertical angles are part of two similar triangles. The sum of the angles in any triangle is 180.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question": "The function <math><mi>f</mi></math> is defined by <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn></math>. The graph of <math><mi>f</mi></math> in the xy-plane is shifted 5 units to the left and 2 units down to obtain the graph of <math><mi>g</mi></math>. Which equation defines <math><mi>g</mi></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": {
        "A": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>8</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>2</mn></math>",
        "B": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>2</mn></math>",
        "C": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>6</mn></math>",
        "D": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>8</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>6</mn></math>"
      },
      "answer": "B",
      "explanation": "The vertex of <math><mi>f</mi></math> is <math><mo>(</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>)</mo></math>. Shifting 5 units left affects the x-coordinate: <math><mn>3</mn><mo>-</mo><mn>5</mn><mo>=</mo><mo>-</mo><mn>2</mn></math>. Shifting 2 units down affects the y-coordinate: <math><mn>4</mn><mo>-</mo><mn>2</mn><mo>=</mo><mn>2</mn></math>. The new vertex is <math><mo>(</mo><mo>-</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>)</mo></math>. In vertex form <math><mi>a</mi><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>k</mi></math>, this corresponds to <math><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>2</mn></math>, or <math><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>2</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To shift a function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> left by <math><mi>c</mi></math> units, replace <math><mi>x</mi></math> with <math><mo>(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mo>)</mo></math>. To shift down by <math><mi>d</mi></math>, subtract <math><mi>d</mi></math> from the entire function.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Two-variable data: models and scatter-plots",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='270' x2='270' y2='270' stroke='black' stroke-width='1'/><line x1='30' y1='270' x2='30' y2='30' stroke='black' stroke-width='1'/><circle cx='50' cy='250' r='3' /><circle cx='80' cy='230' r='3' /><circle cx='110' cy='200' r='3' /><circle cx='140' cy='180' r='3' /><circle cx='170' cy='150' r='3' /><circle cx='200' cy='120' r='3' /><circle cx='230' cy='90' r='3' /><circle cx='260' cy='50' r='3' /></svg>",
      "question_chart_description": "A scatterplot showing a strong positive exponential or quadratic trend. As x increases, y increases at an increasing rate (curving upwards).",
      "question": "The scatterplot shows the relationship between two variables, <math><mi>x</mi></math> and <math><mi>y</mi></math>. Which of the following equations is the most appropriate model for the data shown?",
      "options": {
        "A": "<math><mi>y</mi><mo>=</mo><mn>0.5</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>",
        "B": "<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>0.5</mn><mi>x</mi><mo>+</mo><mn>10</mn></math>",
        "C": "<math><mi>y</mi><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mn>1.3</mn><mo>)</mo></mrow><mi>x</mi></msup></math>",
        "D": "<math><mi>y</mi><mo>=</mo><mn>10</mn><msup><mrow><mo>(</mo><mn>0.8</mn><mo>)</mo></mrow><mi>x</mi></msup></math>"
      },
      "answer": "C",
      "explanation": "The data points show an increasing trend that curves upward, indicating exponential growth. A linear model (Option A) would be a straight line. Option B is decreasing. Option D is exponential decay (base < 1). Option C represents exponential growth (base > 1), which fits the curve shown.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Check the shape of the data: straight line = linear; J-curve = exponential. Check direction: increasing = growth; decreasing = decay.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Advanced Math",
      "skill": "Absolute value, quadratic, exponential, polynomial, rational, and other nonlinear equations",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question": "What is the smallest positive integer value of <math><mi>b</mi></math> for which the equation <math><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mn>5</mn><mo>=</mo><mn>0</mn></math> has two distinct real solutions?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "8",
      "explanation": "For a quadratic equation to have two distinct real solutions, the discriminant <math><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></math> must be greater than 0. Here <math><mi>a</mi><mo>=</mo><mn>3</mn></math> and <math><mi>c</mi><mo>=</mo><mn>5</mn></math>. So <math><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mo>(</mo><mn>3</mn><mo>)</mo><mo>(</mo><mn>5</mn><mo>)</mo><mo>&gt;</mo><mn>0</mn></math>, which simplifies to <math><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>60</mn><mo>&gt;</mo><mn>0</mn></math>, or <math><msup><mi>b</mi><mn>2</mn></msup><mo>&gt;</mo><mn>60</mn></math>. Since we are looking for the smallest *positive* integer <math><mi>b</mi></math>, we test squares of integers. <math><msup><mn>7</mn><mn>2</mn></msup><mo>=</mo><mn>49</mn></math>, which is not greater than 60. <math><msup><mn>8</mn><mn>2</mn></msup><mo>=</mo><mn>64</mn></math>, which is greater than 60. Therefore, the smallest positive integer value is 8.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Discriminant <math><mo>&gt;</mo><mn>0</mn></math>: 2 real roots. Discriminant <math><mo>=</mo><mn>0</mn></math>: 1 real root. Discriminant <math><mo>&lt;</mo><mn>0</mn></math>: no real roots.",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 250,150 250,50' fill='none' stroke='black' stroke-width='2'/><rect x='230' y='130' width='20' height='20' fill='none' stroke='black' /><text x='40' y='165'>A</text><text x='255' y='165'>C</text><text x='255' y='45'>B</text><text x='150' y='165'>12</text><text x='260' y='100'>5</text></svg>",
      "question_chart_description": "Right triangle ABC with the right angle at C. Leg AC has length 12. Leg BC has length 5. Angle A is at the bottom left.",
      "question": "In the right triangle shown, what is the value of <math><mi>sin</mi><mo>(</mo><mn>90</mn><mo>&#176;</mo><mo>-</mo><mi>A</mi><mo>)</mo></math>?",
      "options": {
        "A": "<math><mfrac><mn>5</mn><mn>13</mn></mfrac></math>",
        "B": "<math><mfrac><mn>12</mn><mn>13</mn></mfrac></math>",
        "C": "<math><mfrac><mn>5</mn><mn>12</mn></mfrac></math>",
        "D": "<math><mfrac><mn>13</mn><mn>12</mn></mfrac></math>"
      },
      "answer": "B",
      "explanation": "First, find the hypotenuse <math><mi>AB</mi></math> using the Pythagorean theorem: <math><msup><mn>5</mn><mn>2</mn></msup><mo>+</mo><msup><mn>12</mn><mn>2</mn></msup><mo>=</mo><mn>25</mn><mo>+</mo><mn>144</mn><mo>=</mo><mn>169</mn></math>, so <math><mi>AB</mi><mo>=</mo><mn>13</mn></math>. The expression <math><mi>sin</mi><mo>(</mo><mn>90</mn><mo>&#176;</mo><mo>-</mo><mi>A</mi><mo>)</mo></math> is equivalent to <math><mi>cos</mi><mo>(</mo><mi>A</mi><mo>)</mo></math> based on the co-function identity. In the right triangle, <math><mi>cos</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mtext>Adjacent</mtext><mtext>Hypotenuse</mtext></mfrac></math>. The side adjacent to angle <math><mi>A</mi></math> is <math><mi>AC</mi></math>, which has length 12. The hypotenuse is 13. Therefore, <math><mi>sin</mi><mo>(</mo><mn>90</mn><mo>&#176;</mo><mo>-</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mn>12</mn><mn>13</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember the identity <math><mi>sin</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>cos</mi><mo>(</mo><mn>90</mn><mo>-</mo><mi>x</mi><mo>)</mo></math>.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Algebra",
      "skill": "Linear equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question": "Line <math><mi>p</mi></math> passes through the points <math><mo>(</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>)</mo></math> and <math><mo>(</mo><mn>7</mn><mo>,</mo><mn>11</mn><mo>)</mo></math>. Line <math><mi>k</mi></math> is perpendicular to line <math><mi>p</mi></math> and passes through the point <math><mo>(</mo><mn>0</mn><mo>,</mo><mn>10</mn><mo>)</mo></math>. Line <math><mi>k</mi></math> intersects the x-axis at the point <math><mo>(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo>)</mo></math>. What is the value of <math><mi>x</mi></math>?",
      "question_chart_svg": null,
      "question_chart_description": null,
      "options": null,
      "answer": "15",
      "explanation": "First, find the slope of line <math><mi>p</mi></math>: <math><mi>m</mi><mo>=</mo><mfrac><mrow><mn>11</mn><mo>-</mo><mn>5</mn></mrow><mrow><mn>7</mn><mo>-</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mfrac><mn>6</mn><mn>4</mn></mfrac><mo>=</mo><mn>1.5</mn></math> or <math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>. The slope of perpendicular line <math><mi>k</mi></math> is the negative reciprocal: <math><mo>-</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></math>. The equation of line <math><mi>k</mi></math> is <math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>x</mi><mo>+</mo><mn>10</mn></math> (since y-intercept is 10). To find the x-intercept, set <math><mi>y</mi><mo>=</mo><mn>0</mn></math>: <math><mn>0</mn><mo>=</mo><mo>-</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>x</mi><mo>+</mo><mn>10</mn></math>. <math><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>x</mi><mo>=</mo><mn>10</mn></math>. <math><mn>2</mn><mi>x</mi><mo>=</mo><mn>30</mn></math>. <math><mi>x</mi><mo>=</mo><mn>15</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Perpendicular lines have slopes that are negative reciprocals (product is -1).",
      "additional_data": null
    }
  ]
}

```

---

# SAT Math Question Difficulty Audit

## 1. Difficulty Distribution Summary

The following distribution compares the assigned difficulty levels in the JSON file against the psychometric audit based on cognitive load, number of steps, and conceptual depth.

* **Declared Distribution:**
* 🟢 Easy: 4
* 🟡 Medium: 6
* 🔴 Hard: 10


* **Audited Distribution:**
* 🟢 Easy: 4
* 🟡 Medium: 7
* 🔴 Hard: 9


* **Alignment Score:** **95%** (19/20 questions correctly labeled)

---

## 2. Mislabeled Questions Log

Only one discrepancy was identified where the assigned difficulty exceeded the actual cognitive load required to solve the problem.

| Q# | Assigned Difficulty | Assessed Difficulty | Reason for Reclassification |
| --- | --- | --- | --- |
| **17** | Hard | **Medium** | **Visual Recognition vs. Abstract Reasoning.** This question requires identifying an exponential growth trend from a scatterplot. While it involves data interpretation, the distractors (linear, decay) are visually distinct from the correct answer (exponential growth). Unlike other "Hard" questions in this set (e.g., Q12, Q18) which require multi-step algebraic manipulation or abstract logic, Q17 can be solved via inspection and basic definition of growth. It fits the **Medium** criteria of "interpreting a moderately complex scenario" rather than "non-obvious insight." |

---

## 3. Detailed Analysis of Calibrated Questions

The majority of the test is well-calibrated. Below is a breakdown of specific questions that serve as benchmarks for their respective categories.

### 🟢 Easy (Perfectly Calibrated)

* **Q1 (Linear Equations):** Ideal "Easy" benchmark. It requires a simple 2-step process (solve for , multiply by 2). No distractors or complex language.
* **Q4 (Inequalities):** Correctly categorized. It tests a single mechanic (grouping terms) and one common pitfall (flipping the sign), which is appropriate for Easy/Borderline-Medium.

### 🟡 Medium (Solidly Calibrated)

* **Q5 (Sum of Roots):** This is a quintessential Medium question. It rewards students who know the shortcut () with a fast solution, but remains solvable via factoring for those who don't. This "multiple valid paths" characteristic is a hallmark of Medium difficulty.
* **Q7 (Similar Triangles):** This questions requires bridging two concepts: calculating a scale factor from side lengths and applying it to a perimeter. The two-step conceptual bridge cements it as Medium.

### 🔴 Hard (Well Calibrated)

* **Q11 (No Solution System):** High conceptual depth. The student must translate "no solution" into the abstract algebraic condition "slopes are equal" (). This requires abstract reasoning, fitting the Hard criteria perfectly.
* **Q12 (Circle Equation):** High procedural load. Completing the square for two variables simultaneously is a dense process prone to arithmetic errors.
* **Q18 (Discriminant):** High cognitive load. It combines the discriminant formula with inequality logic () and number theory (smallest integer). This is arguably the hardest question in the set and is correctly labeled.

