# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 2
* **Critical Errors:** 0
* **Minor Issues/Warnings:** 2

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| Metadata | Metadata Inconsistency | The `test_metadata` lists `multiple_choice` as 15 and `student_produced_response` as 5. However, the actual count in the `questions` array is 14 MCQs and 6 SPRs. | Update `question_type_distribution` to `{ "multiple_choice": 14, "student_produced_response": 6 }`. |
| 16 | Explanation Flaw | The explanation states, "Option A is the only linear equation with a positive slope." This is incorrect because Option C (`y = 2.5x + 10`) also has a positive slope. The correct distinction is that Option A's slope (0.9) and y-intercept best match the line of best fit (visual slope ≈ 1, intercept ≈ 0), whereas Option C is too steep and has a higher intercept. | Revise explanation to: "The points go up from left to right, indicating a positive slope. The data appears linear, not exponential. Option A has a positive slope (0.9) which matches the visual rise/run of the line (approx. 1). Option C also has a positive slope (2.5), but it is much steeper than the line shown and has a higher y-intercept (10 vs approx 2). Thus, Option A is the best model." |

## Metadata Consistency Findings

* **Focus Domains:** The domains listed (Algebra, Geometry and Trigonometry, Advanced Math, Problem-Solving and Data Analysis) perfectly match the distribution of the questions.
* **Difficulty:** The difficulty distribution (4 Easy, 6 Medium, 10 Hard) is accurately reflected in the question attributes.
* **Skills:** All skills listed map correctly to their respective questions.

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
      "Right triangles and trigonometry",
      "Linear equations in 1 variable",
      "Nonlinear functions",
      "Systems of 2 linear equations in 2 variables"
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
      "question": "If <math><mn>4</mn><mi>x</mi><mo>-</mo><mn>5</mn><mo>=</mo><mn>19</mn></math>, what is the value of <math><mi>x</mi></math>?",
      "options": {
        "A": "3.5",
        "B": "6",
        "C": "14",
        "D": "24"
      },
      "answer": "B",
      "explanation": "Add 5 to both sides of the equation: <math><mn>4</mn><mi>x</mi><mo>=</mo><mn>24</mn></math>. Divide both sides by 4: <math><mi>x</mi><mo>=</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Isolate the variable term first by performing inverse operations (addition/subtraction) before addressing the coefficient (multiplication/division).",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 200,150 50,50' fill='none' stroke='black' stroke-width='2' /><rect x='50' y='135' width='15' height='15' fill='none' stroke='black' /><text x='110' y='170' font-family='Arial' font-size='16'>12</text><text x='25' y='100' font-family='Arial' font-size='16'>5</text><text x='130' y='90' font-family='Arial' font-size='16'>c</text></svg>",
      "question_chart_description": "A right triangle with legs of length 5 and 12. The hypotenuse is labeled c.",
      "question": "The right triangle shown has legs with lengths of 5 units and 12 units. What is the value of <math><mi>c</mi></math>?",
      "options": {
        "A": "13",
        "B": "17",
        "C": "60",
        "D": "119"
      },
      "answer": "A",
      "explanation": "Using the Pythagorean theorem <math><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></math>: <math><msup><mn>5</mn><mn>2</mn></msup><mo>+</mo><msup><mn>12</mn><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></math>. This simplifies to <math><mn>25</mn><mo>+</mo><mn>144</mn><mo>=</mo><mn>169</mn></math>. Taking the square root, <math><mi>c</mi><mo>=</mo><mn>13</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Memorize common Pythagorean triples like 3-4-5 and 5-12-13 to solve these problems instantly without calculation.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Percentages",
      "difficulty": "Easy",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A biologist estimates that a certain bacterial culture contains 250 organisms. If the population increases by 20% over the next hour, how many organisms will be in the culture?",
      "options": null,
      "answer": "300",
      "explanation": "Calculate the increase: <math><mn>250</mn><mo>×</mo><mn>0.20</mn><mo>=</mo><mn>50</mn></math>. Add this to the original amount: <math><mn>250</mn><mo>+</mo><mn>50</mn><mo>=</mo><mn>300</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To increase a number by P%, you can multiply the original number by (1 + P/100). Here, 250 * 1.2 = 300.",
      "additional_data": null
    },
    {
      "question_number": 4,
      "domain": "Algebra",
      "skill": "Linear inequalities in 1 or 2 variables",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which value of <math><mi>x</mi></math> is a solution to the inequality <math><mn>3</mn><mi>x</mi><mo>-</mo><mn>4</mn><mo>&gt;</mo><mn>11</mn></math>?",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
      },
      "answer": "D",
      "explanation": "Add 4 to both sides: <math><mn>3</mn><mi>x</mi><mo>&gt;</mo><mn>15</mn></math>. Divide by 3: <math><mi>x</mi><mo>&gt;</mo><mn>5</mn></math>. Of the options, only 6 is greater than 5.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Treat strict inequalities (like >) carefully; the boundary value itself (5 in this case) is not a solution.",
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
      "question": "The system of equations below has solution <math><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></math>. What is the value of <math><mi>x</mi></math>?<br><math><mtable><mtr><mtd><mi>y</mi><mo>=</mo><mn>4</mn><mi>x</mi></mtd></mtr><mtr><mtd><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>18</mn></mtd></mtr></mtable></math>",
      "options": {
        "A": "3",
        "B": "4.5",
        "C": "6",
        "D": "12"
      },
      "answer": "A",
      "explanation": "Substitute <math><mi>y</mi><mo>=</mo><mn>4</mn><mi>x</mi></math> into the second equation: <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>x</mi><mo>=</mo><mn>18</mn></math>. This simplifies to <math><mn>6</mn><mi>x</mi><mo>=</mo><mn>18</mn></math>, so <math><mi>x</mi><mo>=</mo><mn>3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When one equation is solved for a variable (like y = 4x), the substitution method is usually faster than elimination.",
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
      "question": "The function <math><mi>f</mi></math> is defined by <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>5</mn></math>. What is the value of <math><mi>f</mi><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo></math>?",
      "options": {
        "A": "-19",
        "B": "-7",
        "C": "-3",
        "D": "9"
      },
      "answer": "C",
      "explanation": "Substitute <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>2</mn></math> into the function: <math><mi>f</mi><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>-</mo><mn>5</mn></math>. <math><mo>=</mo><mn>2</mn><mo>(</mo><mn>4</mn><mo>)</mo><mo>-</mo><mn>6</mn><mo>-</mo><mn>5</mn><mo>=</mo><mn>8</mn><mo>-</mo><mn>6</mn><mo>-</mo><mn>5</mn><mo>=</mo><mo>-</mo><mn>3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Be extremely careful when squaring negative numbers. (-2)^2 is positive 4, not -4.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "In a right triangle, the measures of the two acute angles are <math><mi>R</mi></math> and <math><mi>S</mi></math>. If <math><mi>sin</mi><mo>(</mo><mi>R</mi><mo>)</mo><mo>=</mo><mfrac><mn>7</mn><mn>25</mn></mfrac></math>, what is the value of <math><mi>cos</mi><mo>(</mo><mi>S</mi><mo>)</mo></math>?",
      "options": null,
      "answer": "0.28",
      "explanation": "In a right triangle, the acute angles are complementary, meaning <math><mi>R</mi><mo>+</mo><mi>S</mi><mo>=</mo><mn>90</mn><mo>°</mo></math>. A key identity is <math><mi>sin</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>cos</mi><mo>(</mo><mn>90</mn><mo>°</mo><mo>-</mo><mi>x</mi><mo>)</mo></math>. Therefore, <math><mi>sin</mi><mo>(</mo><mi>R</mi><mo>)</mo><mo>=</mo><mi>cos</mi><mo>(</mo><mi>S</mi><mo>)</mo></math>. The value is <math><mfrac><mn>7</mn><mn>25</mn></mfrac></math> or 0.28.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember the complementary angle theorem: Sine of an angle equals the Cosine of its complement.",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Advanced Math",
      "skill": "Equivalent expressions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which expression is equivalent to <math><msup><mi>a</mi><mfrac><mn>4</mn><mn>3</mn></mfrac></msup><mo>·</mo><msup><mi>a</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></math>, where <math><mi>a</mi><mo>&gt;</mo><mn>0</mn></math>?",
      "options": {
        "A": "<math><msup><mi>a</mi><mfrac><mn>2</mn><mn>3</mn></mfrac></msup></math>",
        "B": "<math><msup><mi>a</mi><mfrac><mn>5</mn><mn>6</mn></mfrac></msup></math>",
        "C": "<math><msup><mi>a</mi><mfrac><mn>5</mn><mn>5</mn></mfrac></msup></math>",
        "D": "<math><msup><mi>a</mi><mfrac><mn>11</mn><mn>6</mn></mfrac></msup></math>"
      },
      "answer": "D",
      "explanation": "When multiplying terms with the same base, add the exponents: <math><mfrac><mn>4</mn><mn>3</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. Find a common denominator (6): <math><mfrac><mn>8</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>11</mn><mn>6</mn></mfrac></math>. The result is <math><msup><mi>a</mi><mfrac><mn>11</mn><mn>6</mn></mfrac></msup></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To add fractions with different denominators, always find the Least Common Multiple (LCM) for the denominator first.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: distributions and measures of center and spread",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='350' height='200' viewBox='0 0 350 200' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='150' x2='320' y2='150' stroke='black' stroke-width='2' /><circle cx='50' cy='130' r='5' fill='black' /><circle cx='50' cy='115' r='5' fill='black' /><circle cx='100' cy='130' r='5' fill='black' /><circle cx='100' cy='115' r='5' fill='black' /><circle cx='100' cy='100' r='5' fill='black' /><circle cx='150' cy='130' r='5' fill='black' /><circle cx='200' cy='130' r='5' fill='black' /><circle cx='250' cy='130' r='5' fill='black' /><circle cx='250' cy='115' r='5' fill='black' /><circle cx='250' cy='100' r='5' fill='black' /><circle cx='250' cy='85' r='5' fill='black' /><text x='45' y='170' font-family='Arial'>1</text><text x='95' y='170' font-family='Arial'>2</text><text x='145' y='170' font-family='Arial'>3</text><text x='195' y='170' font-family='Arial'>4</text><text x='245' y='170' font-family='Arial'>5</text></svg>",
      "question_chart_description": "A dot plot showing data values. Value 1 has 2 dots, Value 2 has 3 dots, Value 3 has 1 dot, Value 4 has 1 dot, and Value 5 has 4 dots.",
      "question": "The dot plot shows the distribution of a dataset. What is the median of the data?",
      "options": {
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "5"
      },
      "answer": "B",
      "explanation": "Count the total dots: <math><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>11</mn></math> data points. The median is the <math><mn>6</mn></math>th value when ordered. The first 2 are '1', the next 3 are '2' (positions 3, 4, 5). The 6th value falls in the '3' column.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To find the median position in a set of N numbers, calculate (N+1)/2. For 11 items, (11+1)/2 = 6th item.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Triangle <math><mi>A</mi><mi>B</mi><mi>C</mi></math> is a right triangle with the right angle at <math><mi>B</mi></math>. If <math><mi>tan</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math> and the length of leg <math><mi>A</mi><mi>B</mi></math> is 16, what is the length of leg <math><mi>B</mi><mi>C</mi></math>?",
      "options": null,
      "answer": "12",
      "explanation": "In right triangle ABC with right angle B, <math><mi>tan</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mtext>opposite</mtext><mtext>adjacent</mtext></mfrac><mo>=</mo><mfrac><mrow><mi>B</mi><mi>C</mi></mrow><mrow><mi>A</mi><mi>B</mi></mrow></mfrac></math>. We are given <math><mi>tan</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math> and <math><mi>A</mi><mi>B</mi><mo>=</mo><mn>16</mn></math>. So, <math><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mrow><mi>B</mi><mi>C</mi></mrow><mn>16</mn></mfrac></math>. Multiply by 16: <math><mi>B</mi><mi>C</mi><mo>=</mo><mn>16</mn><mo>×</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>=</mo><mn>12</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Draw a sketch for every trig problem. Identify 'Opposite' and 'Adjacent' sides relative to the specific angle mentioned.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Algebra",
      "skill": "Linear functions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The total cost <math><mi>C</mi></math>, in dollars, to rent a piece of heavy machinery for <math><mi>h</mi></math> hours is given by the equation <math><mi>C</mi><mo>=</mo><mn>125</mn><mo>+</mo><mn>45</mn><mi>h</mi></math>. What is the best interpretation of the value 45 in this context?",
      "options": {
        "A": "The flat fee to rent the machinery.",
        "B": "The total cost to rent the machinery for one day.",
        "C": "The cost per hour of renting the machinery.",
        "D": "The number of hours the machinery can be rented for $125."
      },
      "answer": "C",
      "explanation": "The equation is in the form <math><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>b</mi></math>. The slope, 45, represents the rate of change, which is the cost added for each additional hour of rental.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In linear models, the coefficient of the variable (slope) is always a rate (e.g., dollars per hour), while the constant term (y-intercept) is the starting value or flat fee.",
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
      "question": "For the quadratic equation <math><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>8</mn><mi>x</mi><mo>+</mo><mi>k</mi><mo>=</mo><mn>0</mn></math>, where <math><mi>k</mi></math> is a constant, the equation has exactly one real solution. What is the value of <math><mi>k</mi></math>?",
      "options": {
        "A": "-8",
        "B": "4",
        "C": "8",
        "D": "16"
      },
      "answer": "C",
      "explanation": "A quadratic equation has exactly one real solution when the discriminant <math><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></math> is equal to zero. Here <math><mi>a</mi><mo>=</mo><mn>2</mn></math>, <math><mi>b</mi><mo>=</mo><mo>-</mo><mn>8</mn></math>, and <math><mi>c</mi><mo>=</mo><mi>k</mi></math>. <math><msup><mrow><mo>(</mo><mo>-</mo><mn>8</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mn>4</mn><mo>(</mo><mn>2</mn><mo>)</mo><mo>(</mo><mi>k</mi><mo>)</mo><mo>=</mo><mn>0</mn></math>. <math><mn>64</mn><mo>-</mo><mn>8</mn><mi>k</mi><mo>=</mo><mn>0</mn></math>. <math><mn>8</mn><mi>k</mi><mo>=</mo><mn>64</mn></math>, so <math><mi>k</mi><mo>=</mo><mn>8</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Discriminant rules: Positive = 2 real solutions; Zero = 1 real solution; Negative = No real solutions.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='400' height='150' viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='20' width='300' height='100' fill='none' stroke='black' /><line x1='50' y1='50' x2='350' y2='50' stroke='black' /><line x1='150' y1='20' x2='150' y2='120' stroke='black' /><line x1='250' y1='20' x2='250' y2='120' stroke='black' /><text x='80' y='40' font-family='Arial' font-weight='bold'>Type</text><text x='180' y='40' font-family='Arial' font-weight='bold'>Group A</text><text x='280' y='40' font-family='Arial' font-weight='bold'>Group B</text><text x='80' y='80' font-family='Arial'>Success</text><text x='180' y='80' font-family='Arial'>32</text><text x='280' y='80' font-family='Arial'>18</text><text x='80' y='110' font-family='Arial'>Failure</text><text x='180' y='110' font-family='Arial'>8</text><text x='280' y='110' font-family='Arial'>42</text></svg>",
      "question_chart_description": "A contingency table. Group A: 32 Success, 8 Failure. Group B: 18 Success, 42 Failure.",
      "question": "The table shows the results of an experiment for two groups. If a result is selected at random from the 'Success' category, what is the probability that it came from Group A?",
      "options": {
        "A": "0.32",
        "B": "0.64",
        "C": "0.76",
        "D": "0.80"
      },
      "answer": "B",
      "explanation": "This is a conditional probability. We are limited to the 'Success' row. Total successes = <math><mn>32</mn><mo>+</mo><mn>18</mn><mo>=</mo><mn>50</mn></math>. The number of successes from Group A is 32. Probability = <math><mfrac><mn>32</mn><mn>50</mn></mfrac><mo>=</mo><mn>0.64</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For conditional probability, the denominator is the total of the *condition* (here, all Successes), not the grand total of all data points.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 200,150 50,50' fill='none' stroke='black' stroke-width='2' /><rect x='50' y='135' width='15' height='15' fill='none' stroke='black' /><text x='35' y='100' font-family='Arial'>A</text><text x='210' y='160' font-family='Arial'>C</text><text x='35' y='160' font-family='Arial'>B</text></svg>",
      "question_chart_description": "Right triangle ABC with right angle at B. A is the top vertex, C is the right vertex.",
      "question": "In right triangle <math><mi>A</mi><mi>B</mi><mi>C</mi></math> with right angle <math><mi>B</mi></math>, <math><mi>tan</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mn>5</mn><mn>12</mn></mfrac></math>. If the hypotenuse <math><mi>A</mi><mi>C</mi></math> is 39 units long, what is the perimeter of the triangle?",
      "options": null,
      "answer": "90",
      "explanation": "<math><mi>tan</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>B</mi><mi>C</mi></mrow><mrow><mi>A</mi><mi>B</mi></mrow></mfrac><mo>=</mo><mfrac><mn>5</mn><mn>12</mn></mfrac></math>. This suggests the sides are multiples of a 5-12-13 triangle. The hypotenuse ratio is 13. The actual hypotenuse is 39. Scale factor <math><mi>k</mi><mo>=</mo><mfrac><mn>39</mn><mn>13</mn></mfrac><mo>=</mo><mn>3</mn></math>. The legs are <math><mn>5</mn><mo>(</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>15</mn></math> and <math><mn>12</mn><mo>(</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>36</mn></math>. Perimeter = <math><mn>15</mn><mo>+</mo><mn>36</mn><mo>+</mo><mn>39</mn><mo>=</mo><mn>90</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Recognize primitive Pythagorean triples (5-12-13) to quickly determine scale factors.",
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
      "question": "What is the sum of the x-coordinates of the solutions to the system of equations defined by <math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn></math> and <math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>?",
      "options": {
        "A": "2",
        "B": "5",
        "C": "6",
        "D": "8"
      },
      "answer": "C",
      "explanation": "Set equations equal: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>=</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>. Rearrange: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>5</mn><mo>=</mo><mn>0</mn></math>. Factor: <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Solutions for x are 1 and 5. Sum = <math><mn>1</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>6</mn></math>. Alternatively, use sum of roots formula <math><mo>-</mo><mfrac><mi>b</mi><mi>a</mi></mfrac><mo>=</mo><mo>-</mo><mfrac><mrow><mo>-</mo><mn>6</mn></mrow><mn>1</mn></mfrac><mo>=</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For the sum of roots of a quadratic ax^2 + bx + c = 0, use -b/a directly without solving for each root.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Two-variable data: models and scatter-plots",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'><rect width='300' height='300' fill='white' stroke='black'/><line x1='30' y1='270' x2='270' y2='270' stroke='black' stroke-width='2'/><line x1='30' y1='270' x2='30' y2='30' stroke='black' stroke-width='2'/><circle cx='50' cy='250' r='3' fill='black'/><circle cx='70' cy='230' r='3' fill='black'/><circle cx='90' cy='210' r='3' fill='black'/><circle cx='110' cy='190' r='3' fill='black'/><circle cx='130' cy='170' r='3' fill='black'/><circle cx='150' cy='150' r='3' fill='black'/><circle cx='170' cy='130' r='3' fill='black'/><circle cx='190' cy='110' r='3' fill='black'/><circle cx='210' cy='90' r='3' fill='black'/><circle cx='230' cy='70' r='3' fill='black'/><line x1='30' y1='270' x2='250' y2='50' stroke='red' stroke-dasharray='5,5'/></svg>",
      "question_chart_description": "Scatterplot with points showing a strong positive linear correlation. A line of best fit passes approximately through (30, 270) in SVG coordinates (representing origin) to (250, 50).",
      "question": "A scatterplot showing the relationship between variables <math><mi>x</mi></math> and <math><mi>y</mi></math> is shown along with a line of best fit. Which equation best models the data?",
      "options": {
        "A": "<math><mi>y</mi><mo>=</mo><mn>0.9</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>",
        "B": "<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>0.9</mn><mi>x</mi><mo>+</mo><mn>30</mn></math>",
        "C": "<math><mi>y</mi><mo>=</mo><mn>2.5</mn><mi>x</mi><mo>+</mo><mn>10</mn></math>",
        "D": "<math><mi>y</mi><mo>=</mo><mn>10</mn><msup><mrow><mo>(</mo><mn>1.5</mn><mo>)</mo></mrow><mi>x</mi></msup></math>"
      },
      "answer": "A",
      "explanation": "The points go up from left to right, indicating a positive slope. The data appears linear, not exponential. Option A has a positive slope (0.9) which matches the visual rise/run of the line (approx. 1). Option C also has a positive slope (2.5), but it is much steeper than the line shown and has a higher y-intercept. Thus, Option A is the best model.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "First check the direction (positive/negative slope) and shape (linear/curve) to eliminate options.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The equation of a circle in the xy-plane is <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>=</mo><mn>11</mn></math>. What is the radius of the circle?",
      "options": {
        "A": "6",
        "B": "11",
        "C": "36",
        "D": "64"
      },
      "answer": "A",
      "explanation": "Complete the square for x and y. <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>y</mi><mo>)</mo><mo>=</mo><mn>11</mn></math>. Add <math><msup><mrow><mo>(</mo><mfrac><mn>6</mn><mn>2</mn></mfrac><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>9</mn></math> and <math><msup><mrow><mo>(</mo><mfrac><mn>8</mn><mn>2</mn></mfrac><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>16</mn></math> to both sides. <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>y</mi><mo>+</mo><mn>16</mn><mo>)</mo><mo>=</mo><mn>11</mn><mo>+</mo><mn>9</mn><mo>+</mo><mn>16</mn></math>. <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>+</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>36</mn></math>. <math><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>36</mn></math>, so radius <math><mi>r</mi><mo>=</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To complete the square for x^2 + bx, add (b/2)^2 to both sides of the equation.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Algebra",
      "skill": "Linear equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "For the linear equation <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>5</mn><mi>y</mi><mo>=</mo><mn>7</mn></math>, a second linear equation is <math><mi>a</mi><mi>x</mi><mo>+</mo><mn>15</mn><mi>y</mi><mo>=</mo><mn>20</mn></math>. If the system of these two equations has no solution, what is the value of <math><mi>a</mi></math>?",
      "options": null,
      "answer": "6",
      "explanation": "For a system to have no solution, the lines must be parallel, meaning their slopes are equal (or coefficients of x and y are proportional) but the constants are not. Ratio of y-coefficients is <math><mfrac><mn>15</mn><mn>5</mn></mfrac><mo>=</mo><mn>3</mn></math>. The x-coefficients must have the same ratio: <math><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>=</mo><mn>3</mn></math>. Solving for a gives <math><mi>a</mi><mo>=</mo><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "No solution means parallel lines. This requires the ratio of x-coefficients to equal the ratio of y-coefficients.",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Advanced Math",
      "skill": "Equivalent expressions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which of the following expressions is equivalent to <math><mfrac><mn>2</mn><mrow><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>3</mn></mrow></mfrac></math>?",
      "options": {
        "A": "<math><mfrac><mrow><mn>2</mn><msqrt><mi>x</mi></msqrt><mo>-</mo><mn>6</mn></mrow><mrow><mi>x</mi><mo>-</mo><mn>9</mn></mrow></mfrac></math>",
        "B": "<math><mfrac><mrow><mn>2</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>6</mn></mrow><mrow><mi>x</mi><mo>-</mo><mn>9</mn></mrow></mfrac></math>",
        "C": "<math><mfrac><mrow><mn>2</mn><msqrt><mi>x</mi></msqrt><mo>-</mo><mn>6</mn></mrow><mrow><mi>x</mi><mo>+</mo><mn>9</mn></mrow></mfrac></math>",
        "D": "<math><mfrac><mrow><msqrt><mi>x</mi></msqrt><mo>-</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>-</mo><mn>9</mn></mrow></mfrac></math>"
      },
      "answer": "A",
      "explanation": "Rationalize the denominator by multiplying numerator and denominator by the conjugate <math><msqrt><mi>x</mi></msqrt><mo>-</mo><mn>3</mn></math>. Numerator: <math><mn>2</mn><mo>(</mo><msqrt><mi>x</mi></msqrt><mo>-</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>2</mn><msqrt><mi>x</mi></msqrt><mo>-</mo><mn>6</mn></math>. Denominator: <math><mo>(</mo><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>3</mn><mo>)</mo><mo>(</mo><msqrt><mi>x</mi></msqrt><mo>-</mo><mn>3</mn><mo>)</mo><mo>=</mo><mi>x</mi><mo>-</mo><mn>9</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To remove a square root from a binomial denominator, multiply by the conjugate (change the sign in the middle).",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Geometry and Trigonometry",
      "skill": "Area and volume formulas",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A right circular cylinder has a volume of 400 cubic units. If the radius of the base is halved and the height is doubled, what is the volume of the new cylinder?",
      "options": null,
      "answer": "200",
      "explanation": "Original Volume <math><mi>V</mi><mo>=</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>h</mi><mo>=</mo><mn>400</mn></math>. New radius <math><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mn>0.5</mn><mi>r</mi></math>. New height <math><msub><mi>h</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>h</mi></math>. New Volume <math><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mi>π</mi><msup><mrow><mo>(</mo><mn>0.5</mn><mi>r</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>(</mo><mn>2</mn><mi>h</mi><mo>)</mo><mo>=</mo><mi>π</mi><mo>(</mo><mn>0.25</mn><msup><mi>r</mi><mn>2</mn></msup><mo>)</mo><mo>(</mo><mn>2</mn><mi>h</mi><mo>)</mo><mo>=</mo><mn>0.5</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>h</mi></math>. <math><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>0.5</mn><mo>(</mo><mn>400</mn><mo>)</mo><mo>=</mo><mn>200</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When dimensions change by a factor, square the factor for area/radius components in the formula.",
      "additional_data": null
    }
  ]
}

```

---

# SAT Math Question Difficulty Audit

## 1. Difficulty Distribution Summary

| Category | Declared Count | Audited Count |
| --- | --- | --- |
| **🟢 Easy** | 4 | 4 |
| **🟡 Medium** | 6 | **7** |
| **🔴 Hard** | 10 | **9** |

**Alignment Score:** **95%** (19/20 questions correctly labeled)

## 2. Mislabeled Questions Log

| Q# | Assigned Difficulty | Assessed Difficulty | Reason for Reclassification |
| --- | --- | --- | --- |
| **11** | **Hard** | **🟡 Medium** | This question asks for the interpretation of the slope () in a standard linear cost model (). While interpretation requires conceptual understanding, the context (rental cost) is familiar and the setup is a direct application of the  form. It does not involve the abstract reasoning, complex modeling, or "non-obvious insight" characteristic of **Hard** questions. |

## 3. Detailed Analysis

### Well-Calibrated Questions

* **Q13 (Probability - Hard):** Correctly classified as **Hard**. While the calculation is simple division, the "conditional" nature (limiting the sample space to "Success") is a common high-value discriminator that traps students who default to the grand total.
* **Q16 (Scatterplot - Hard):** Correctly classified as **Hard**. A superficial look might suggest "Medium" (positive correlation), but distinguishing between Option A () and Option C () requires a specific visual estimation of the slope's magnitude ( vs ), adding a layer of cognitive load beyond simple trend identification.
* **Q17 (Circles - Hard):** Correctly classified as **Hard**. It requires the multi-step procedure of completing the square for *both* variables to reveal the standard circle equation. This is a classic procedural "Hard" task.

### Borderline Cases

* **Q5 (System of Equations - Medium):** This question is on the lower end of **Medium**. Because one equation is already isolated (), the substitution step is immediate. However, it still requires solving a system rather than a single equation, justifying the classification over "Easy."
* **Q9 (Dot Plot Median - Medium):** Finding a median from a frequency distribution (dot plot) rather than a raw list adds just enough procedural variation to lift this out of "Easy" and into "Medium."
