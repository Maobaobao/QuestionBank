# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 2
* **Critical Errors:** 1 (Metadata Mismatch)
* **Minor Issues/Warnings:** 1 (Typo in Option Label)

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| Metadata | Metadata Inconsistency | The `test_metadata` declares 15 multiple-choice questions and 5 student-produced responses. However, the actual count in the `questions` array is 14 MCQs and 6 SPRs (Questions 3, 7, 10, 16, 18, 20 are SPR). | Update `question_type_distribution` to `{ "multiple_choice": 14, "student_produced_response": 6 }`. |
| 11 | Typo/JSON Structure | The key for the fourth option is labeled `"Urban"` instead of `"D"`. | Change `"Urban"` to `"D"`. |

## Metadata Consistency Findings

* **Domains & Skills:** The domains and skills listed in `test_metadata` align accurately with the content of the questions.
* **Difficulty:** The difficulty distribution (Easy: 4, Medium: 6, Hard: 10) matches the actual tags on the questions.

---

# Corrected JSON File

```json
{
  "test_metadata": {
    "focus_domains": [
      "Problem-Solving and Data Analysis",
      "Algebra",
      "Advanced Math",
      "Geometry and Trigonometry"
    ],
    "focus_skills": [
      "Ratios, rates, proportional relationships, and units",
      "Linear equations in 1 variable",
      "Nonlinear functions",
      "Right triangles and trigonometry"
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
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Ratios, rates, proportional relationships, and units",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A certain recipe requires <math><mn>3</mn></math> cups of flour for every <math><mn>2</mn></math> cups of sugar. If a baker uses <math><mn>18</mn></math> cups of flour, how many cups of sugar should be used to maintain the same ratio?",
      "options": {
        "A": "6",
        "B": "9",
        "C": "12",
        "D": "27"
      },
      "answer": "C",
      "explanation": "The ratio of flour to sugar is <math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>. Let <math><mi>s</mi></math> be the amount of sugar. Setting up the proportion: <math><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>18</mn><mi>s</mi></mfrac></math>. Cross-multiplying gives <math><mn>3</mn><mi>s</mi><mo>=</mo><mn>36</mn></math>, so <math><mi>s</mi><mo>=</mo><mn>12</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the ratio and set up a proportion to solve for the missing value efficiently.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Algebra",
      "skill": "Linear equations in 1 variable",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "What is the value of <math><mi>k</mi></math> if <math><mn>4</mn><mo>(</mo><mi>k</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>20</mn></math>?",
      "options": {
        "A": "2",
        "B": "5",
        "C": "8",
        "D": "11"
      },
      "answer": "C",
      "explanation": "Divide both sides by 4: <math><mi>k</mi><mo>-</mo><mn>3</mn><mo>=</mo><mn>5</mn></math>. Add 3 to both sides: <math><mi>k</mi><mo>=</mo><mn>8</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Divide by the constant outside the parentheses first to simplify the equation quickly.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Geometry and Trigonometry",
      "skill": "Area and volume formulas",
      "difficulty": "Easy",
      "question_type": "SPR",
      "question_chart_svg": "<svg viewBox='0 0 200 150' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='40' width='100' height='70' fill='none' stroke='black' stroke-width='2'/><text x='100' y='30' text-anchor='middle'>10</text><text x='160' y='80'>h</text></svg>",
      "question_chart_description": "A rectangle with a length of 10 and height h.",
      "question": "The area of the rectangle shown is <math><mn>70</mn></math> square units. What is the value of <math><mi>h</mi></math>?",
      "options": null,
      "answer": "7",
      "explanation": "The area of a rectangle is length times height: <math><mn>10</mn><mo>×</mo><mi>h</mi><mo>=</mo><mn>70</mn></math>. Dividing by 10 gives <math><mi>h</mi><mo>=</mo><mn>7</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember that Area = length × width (or height) for any rectangle.",
      "additional_data": {
        "numeric_format": "integer"
      }
    },
    {
      "question_number": 4,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Percentages",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A jacket is originally priced at <math><mo>$</mo><mn>80</mn></math>. If the price is reduced by <math><mn>25</mn><mo>%</mo></math>, what is the new price of the jacket?",
      "options": {
        "A": "$20",
        "B": "$55",
        "C": "$60",
        "D": "$75"
      },
      "answer": "C",
      "explanation": "A 25% reduction means the new price is 75% of the original: <math><mn>0.75</mn><mo>×</mo><mn>80</mn><mo>=</mo><mn>60</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To find a discounted price, multiply the original price by (1 - discount rate).",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Algebra",
      "skill": "Linear functions",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='180' x2='180' y2='20' stroke='black' stroke-width='2'/><line x1='20' y1='100' x2='180' y2='100' stroke='gray' stroke-dasharray='4'/><line x1='100' y1='20' x2='100' y2='180' stroke='gray' stroke-dasharray='4'/><text x='110' y='110'>(0, 2)</text><text x='150' y='50'>(3, 8)</text></svg>",
      "question_chart_description": "A line passing through points (0, 2) and (3, 8) on a coordinate plane.",
      "question": "Which of the following equations represents the line shown in the graph?",
      "options": {
        "A": "<math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>",
        "B": "<math><mi>y</mi><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>",
        "C": "<math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn></math>",
        "D": "<math><mi>y</mi><mo>=</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>"
      },
      "answer": "A",
      "explanation": "The y-intercept is 2. The slope is <math><mfrac><mrow><mn>8</mn><mo>-</mo><mn>2</mn></mrow><mrow><mn>3</mn><mo>-</mo><mn>0</mn></mrow></mfrac><mo>=</mo><mfrac><mn>6</mn><mn>3</mn></mfrac><mo>=</mo><mn>2</mn></math>. Thus, the equation is <math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Use the slope formula <math><mi>m</mi><mo>=</mo><mfrac><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>-</mo><msub><mi>y</mi><mn>1</mn></msub></mrow><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>-</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></mfrac></math> and the y-intercept from the graph.",
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
      "question": "The function <math><mi>f</mi></math> is defined by <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>8</mn></math>. What is the minimum value of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>?",
      "options": {
        "A": "-2",
        "B": "-1",
        "C": "3",
        "D": "8"
      },
      "answer": "B",
      "explanation": "The x-coordinate of the vertex is <math><mi>x</mi><mo>=</mo><mo>-</mo><mfrac><mi>b</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>=</mo><mo>-</mo><mfrac><mrow><mo>-</mo><mn>6</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mn>3</mn></math>. The minimum value is <math><mi>f</mi><mo>(</mo><mn>3</mn><mo>)</mo><mo>=</mo><msup><mn>3</mn><mn>2</mn></msup><mo>-</mo><mn>6</mn><mo>(</mo><mn>3</mn><mo>)</mo><mo>+</mo><mn>8</mn><mo>=</mo><mn>9</mn><mo>-</mo><mn>18</mn><mo>+</mo><mn>8</mn><mo>=</mo><mo>-</mo><mn>1</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For a quadratic <math><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi></math>, the vertex occurs at <math><mi>x</mi><mo>=</mo><mo>-</mo><mfrac><mi>b</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math>.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A bag contains 5 red marbles, 7 blue marbles, and 8 green marbles. If one marble is selected at random, what is the probability that it is blue?",
      "options": null,
      "answer": "0.35",
      "explanation": "Total marbles = <math><mn>5</mn><mo>+</mo><mn>7</mn><mo>+</mo><mn>8</mn><mo>=</mo><mn>20</mn></math>. Probability of blue = <math><mfrac><mn>7</mn><mn>20</mn></mfrac><mo>=</mo><mn>0.35</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Probability is always (favorable outcomes) / (total possible outcomes).",
      "additional_data": {
        "numeric_format": "decimal"
      }
    },
    {
      "question_number": 8,
      "domain": "Algebra",
      "skill": "Systems of 2 linear equations in 2 variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Consider the system of equations:<br><math><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>10</mn></math><br><math><mi>x</mi><mo>-</mo><mi>y</mi><mo>=</mo><mn>2</mn></math><br>What is the value of <math><mi>x</mi></math>?",
      "options": {
        "A": "2",
        "B": "4",
        "C": "6",
        "D": "8"
      },
      "answer": "B",
      "explanation": "Add the two equations: <math><mo>(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>)</mo><mo>+</mo><mo>(</mo><mi>x</mi><mo>-</mo><mi>y</mi><mo>)</mo><mo>=</mo><mn>10</mn><mo>+</mo><mn>2</mn></math> leads to <math><mn>3</mn><mi>x</mi><mo>=</mo><mn>12</mn></math>, so <math><mi>x</mi><mo>=</mo><mn>4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "The elimination method is often faster than substitution when coefficients of one variable are opposites.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg viewBox='0 0 200 150' xmlns='http://www.w3.org/2000/svg'><path d='M 40 110 L 160 110 L 160 30 Z' fill='none' stroke='black' stroke-width='2'/><rect x='150' y='100' width='10' height='10' fill='none' stroke='black'/><text x='100' y='125'>12</text><text x='170' y='75'>5</text><text x='100' y='60'>c</text></svg>",
      "question_chart_description": "A right triangle with legs of length 5 and 12.",
      "question": "In the triangle shown, what is the length of the hypotenuse <math><mi>c</mi></math>?",
      "options": {
        "A": "7",
        "B": "13",
        "C": "15",
        "D": "17"
      },
      "answer": "B",
      "explanation": "Using the Pythagorean theorem: <math><msup><mn>5</mn><mn>2</mn></msup><mo>+</mo><msup><mn>12</mn><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></math>. <math><mn>25</mn><mo>+</mo><mn>144</mn><mo>=</mo><mn>169</mn></math>. <math><msqrt><mn>169</mn></msqrt><mo>=</mo><mn>13</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Recognizing Pythagorean triples like (5, 12, 13) can save time during the test.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: distributions and measures of center and spread",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The mean of a set of five numbers is 12. If a sixth number, 18, is added to the set, what is the new mean?",
      "options": null,
      "answer": "13",
      "explanation": "Original sum = <math><mn>12</mn><mo>×</mo><mn>5</mn><mo>=</mo><mn>60</mn></math>. New sum = <math><mn>60</mn><mo>+</mo><mn>18</mn><mo>=</mo><mn>78</mn></math>. New mean = <math><mn>78</mn><mo>/</mo><mn>6</mn><mo>=</mo><mn>13</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember that Total Sum = Mean × Number of items.",
      "additional_data": {
        "numeric_format": "integer"
      }
    },
    {
      "question_number": 11,
      "domain": "Advanced Math",
      "skill": "Equivalent expressions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which of the following is equivalent to <math><mfrac><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi></mrow><mrow><mn>3</mn><mi>x</mi></mrow></mfrac></math> for <math><mi>x</mi><mo>≠</mo><mn>0</mn></math>?",
      "options": {
        "A": "<math><mi>x</mi><mo>+</mo><mn>2</mn></math>",
        "B": "<math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>",
        "C": "<math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi></math>",
        "D": "<math><mi>x</mi><mo>+</mo><mn>6</mn></math>"
      },
      "answer": "A",
      "explanation": "Factor the numerator: <math><mn>3</mn><mi>x</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></math>. Then <math><mfrac><mrow><mn>3</mn><mi>x</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow><mrow><mn>3</mn><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Factor out common terms in the numerator before dividing.",
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
      "question": "If <math><msqrt><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>6</mn></mrow></msqrt><mo>-</mo><mi>x</mi><mo>=</mo><mo>-</mo><mn>1</mn></math>, what is the solution set of the equation?",
      "options": {
        "A": "{-1, 5}",
        "B": "{5}",
        "C": "{-1}",
        "D": "{1, 5}"
      },
      "answer": "B",
      "explanation": "Rearrange: <math><msqrt><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>6</mn></mrow></msqrt><mo>=</mo><mi>x</mi><mo>-</mo><mn>1</mn></math>. Square both sides: <math><mn>2</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>. <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>5</mn><mo>=</mo><mn>0</mn></math>. <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. <math><mi>x</mi><mo>=</mo><mn>5</mn></math> or <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>1</mn></math>. Checking <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>1</mn></math>: <math><msqrt><mn>4</mn></msqrt><mo>-</mo><mo>(</mo><mo>-</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>3</mn><mo>≠</mo><mo>-</mo><mn>1</mn></math>. Checking <math><mi>x</mi><mo>=</mo><mn>5</mn></math>: <math><msqrt><mn>16</mn></msqrt><mo>-</mo><mn>5</mn><mo>=</mo><mo>-</mo><mn>1</mn></math>. Only 5 is a valid solution.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always check for extraneous solutions when squaring both sides of a radical equation.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A circle in the xy-plane has the equation <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>10</mn><mi>y</mi><mo>=</mo><mo>-</mo><mn>20</mn></math>. What is the radius of the circle?",
      "options": {
        "A": "3",
        "B": "9",
        "C": "<math><msqrt><mn>20</mn></msqrt></math>",
        "D": "<math><msqrt><mn>29</mn></msqrt></math>"
      },
      "answer": "A",
      "explanation": "Complete the square for x and y: <math><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo><mo>+</mo><mo>(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>10</mn><mi>y</mi><mo>+</mo><mn>25</mn><mo>)</mo><mo>=</mo><mo>-</mo><mn>20</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>25</mn></math>. This gives <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>+</mo><mn>5</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>9</mn></math>. The radius is <math><msqrt><mn>9</mn></msqrt><mo>=</mo><mn>3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Completing the square allows you to find the center (h, k) and radius r from the general form of a circle's equation.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Algebra",
      "skill": "Linear inequalities in 1 or 2 variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "If <math><mi>y</mi><mo>&gt;</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn></math> and <math><mi>y</mi><mo>&lt;</mo><mo>-</mo><mi>x</mi><mo>+</mo><mn>9</mn></math>, which of the following ordered pairs <math><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></math> is a solution to the system?",
      "options": {
        "A": "(0, 2)",
        "B": "(2, 8)",
        "C": "(4, 5)",
        "D": "(1, 6)"
      },
      "answer": "D",
      "explanation": "Test (1, 6): <math><mn>6</mn><mo>&gt;</mo><mn>2</mn><mo>(</mo><mn>1</mn><mo>)</mo><mo>+</mo><mn>3</mn></math> (6 > 5 is True) and <math><mn>6</mn><mo>&lt;</mo><mo>-</mo><mn>1</mn><mo>+</mo><mn>9</mn></math> (6 < 8 is True).",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Plug the given options into the inequalities to see which one satisfies both conditions.",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Inference from sample statistics and margin of error",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A survey of 400 randomly selected residents in a town found that 60% support a new park. The margin of error is ±4%. Which of the following is the most appropriate conclusion?",
      "options": {
        "A": "Exactly 60% of all residents support the park.",
        "B": "Between 56% and 64% of all residents support the park.",
        "C": "The survey is invalid because it didn't include every resident.",
        "D": "At least 64% of residents support the park."
      },
      "answer": "B",
      "explanation": "The margin of error defines a range around the sample statistic (60% - 4% to 60% + 4%) within which the true population parameter is likely to fall.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "The margin of error provides a range, not a single exact value, for the population parameter.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Advanced Math",
      "skill": "Systems of equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The graph of the system consisting of <math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>7</mn></math> and <math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>2</mn></math> intersects at exactly one point <math><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></math>. What is the value of <math><mi>x</mi></math>?",
      "options": null,
      "answer": "3",
      "explanation": "Set equations equal: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>7</mn><mo>=</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>. <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>=</mo><mn>0</mn></math>. This is <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>0</mn></math>, so <math><mi>x</mi><mo>=</mo><mn>3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When a line is tangent to a parabola, the resulting quadratic equation has exactly one solution.",
      "additional_data": {
        "numeric_format": "integer"
      }
    },
    {
      "question_number": 17,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Two-variable data: models and scatter-plots",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='350' y2='250' stroke='black'/><line x1='50' y1='50' x2='50' y2='250' stroke='black'/><circle cx='80' cy='220' r='3'/><circle cx='120' cy='190' r='3'/><circle cx='160' cy='170' r='3'/><circle cx='200' cy='140' r='3'/><circle cx='240' cy='110' r='3'/><line x1='50' y1='240' x2='350' y2='40' stroke='blue' stroke-dasharray='4'/></svg>",
      "question_chart_description": "A scatterplot with points following a strong positive linear trend.",
      "question": "A line of best fit for the data is <math><mi>y</mi><mo>=</mo><mn>0.8</mn><mi>x</mi><mo>+</mo><mn>10</mn></math>. Which of the following is the best interpretation of the slope?",
      "options": {
        "A": "The initial value of y is 0.8.",
        "B": "For every 1 unit increase in x, y is predicted to increase by 0.8 units.",
        "C": "For every 0.8 unit increase in x, y increases by 1 unit.",
        "D": "The maximum value of y is 10."
      },
      "answer": "B",
      "explanation": "In a linear model <math><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>b</mi></math>, the slope <math><mi>m</mi></math> represents the change in the predicted value of y for each one-unit increase in x.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Slope always represents the 'rate of change' of the dependent variable per unit of the independent variable.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "In triangle ABC, the measure of angle B is <math><mn>90</mn><mo>°</mo></math>. If <math><mi>sin</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac></math>, what is the value of <math><mi>cos</mi><mo>(</mo><mi>C</mi><mo>)</mo></math>?",
      "options": null,
      "answer": "0.6",
      "explanation": "In a right triangle, the sine of one acute angle is equal to the cosine of the other acute angle: <math><mi>sin</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mi>cos</mi><mo>(</mo><mn>90</mn><mo>-</mo><mi>A</mi><mo>)</mo><mo>=</mo><mi>cos</mi><mo>(</mo><mi>C</mi><mo>)</mo></math>. Thus, <math><mi>cos</mi><mo>(</mo><mi>C</mi><mo>)</mo><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>=</mo><mn>0.6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "The complementary angle theorem states that <math><mi>sin</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>cos</mi><mo>(</mo><mn>90</mn><mo>°</mo><mo>-</mo><mi>x</mi><mo>)</mo></math>.",
      "additional_data": {
        "numeric_format": "decimal"
      }
    },
    {
      "question_number": 19,
      "domain": "Algebra",
      "skill": "Linear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The equation <math><mi>a</mi><mi>x</mi><mo>+</mo><mn>12</mn><mo>=</mo><mn>3</mn><mo>(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>b</mi><mo>)</mo></math> has infinitely many solutions for <math><mi>x</mi></math>. What is the value of <math><mi>b</mi></math>?",
      "options": {
        "A": "4",
        "B": "6",
        "C": "12",
        "D": "36"
      },
      "answer": "A",
      "explanation": "For infinitely many solutions, both sides must be identical. Expanding the right side gives <math><mn>6</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>b</mi></math>. Equating coefficients: <math><mi>a</mi><mo>=</mo><mn>6</mn></math>. Equating constants: <math><mn>12</mn><mo>=</mo><mn>3</mn><mi>b</mi></math>, so <math><mi>b</mi><mo>=</mo><mn>4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "If an equation has infinitely many solutions, the expressions on both sides must be equivalent.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "An exponential function <math><mi>g</mi></math> is defined by <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>a</mi><msup><mi>b</mi><mi>x</mi></msup></math>, where <math><mi>a</mi></math> and <math><mi>b</mi></math> are constants. If <math><mi>g</mi><mo>(</mo><mn>0</mn><mo>)</mo><mo>=</mo><mn>5</mn></math> and <math><mi>g</mi><mo>(</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>80</mn></math>, what is the value of <math><mi>b</mi></math>?",
      "options": null,
      "answer": "4",
      "explanation": "<math><mi>g</mi><mo>(</mo><mn>0</mn><mo>)</mo><mo>=</mo><mi>a</mi><msup><mi>b</mi><mn>0</mn></msup><mo>=</mo><mn>5</mn></math>, so <math><mi>a</mi><mo>=</mo><mn>5</mn></math>. Then <math><mi>g</mi><mo>(</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>5</mn><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mn>80</mn></math>. <math><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mn>16</mn></math>. Since the base of an exponential function must be positive, <math><mi>b</mi><mo>=</mo><mn>4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In <math><mi>y</mi><mo>=</mo><mi>a</mi><msup><mi>b</mi><mi>x</mi></msup></math>, <math><mi>a</mi></math> is always the y-intercept (the value when x = 0).",
      "additional_data": {
        "numeric_format": "integer"
      }
    }
  ]
}

```

---

# SAT Math Question Difficulty Audit

## 1. Difficulty Distribution Summary

The difficulty calibration of the provided question set is skewed. Several questions labeled **Hard** or **Medium** align more closely with lower difficulty tiers based on standard SAT cognitive complexity metrics. The current labeling appears to conflate **Topic** (e.g., "Advanced Math" = Hard) with **Difficulty** (complexity of the specific task).

* **Declared Distribution:** Easy: 4 | Medium: 6 | Hard: 10
* **Audited Distribution:** Easy: 6 | Medium: 9 | Hard: 5
* **Alignment Score:** **65%** (13/20 questions correctly labeled)

## 2. Mislabeled Questions Log

The following questions require reclassification to accurately reflect student performance data and cognitive load expectations.

| Q# | Assigned Difficulty | Assessed Difficulty | Reason for Reclassification |
| --- | --- | --- | --- |
| **5** | Medium | **Easy** | The task is deriving a linear equation from a graph with clear integer intercepts and coordinates. This is a foundational skill requiring only slope calculation, with no ambiguity or complex interpretation. |
| **7** | Medium | **Easy** | This is a single-step probability problem (Part/Whole). It involves no conditional logic ("given that"), combinatorial counting, or complex distinct sets. It is pure recall/arithmetic. |
| **11** | Hard | **Medium** | The expression simplifies via basic factoring of a monomial (). "Hard" rational expressions typically involve adding/subtracting with unlike denominators or factoring complex quadratics. |
| **14** | Hard | **Medium** | Verifying a solution to a system of inequalities by plugging in points is a procedural check. It does not require graphing or generating the solution set from scratch. |
| **17** | Hard | **Medium** | Interpreting slope as a rate of change is a standard definition check. No calculation, data manipulation, or abstract modeling is required. |
| **18** | Hard | **Medium** | While Trigonometry is an "Advanced" topic, this specific question applies a single fundamental identity () or basic triangle ratios. It is a one-step conceptual link. |
| **20** | Hard | **Medium** | Solving for parameters in  given the y-intercept and one other integer point is a standard procedural drill, not a complex modeling task. |

## 3. Detailed Analysis

* **Accurate "Hard" Questions:** Questions **12, 13, 15, 16, and 19** are correctly identified as Hard. They involve distinct "traps" (extraneous solutions in Q12), complex multi-step procedures (completing the square in Q13), or abstract conceptual reasoning (infinite solutions logic in Q19).
* **Topic vs. Difficulty Bias:** The original labeling seems to assume that if a question comes from the "Advanced Math" domain (quadratics, exponentials, rationals), it is automatically "Hard." On the actual SAT, these topics can spawn Easy or Medium questions depending on the specific operation required. For example, Q11 asks for simplification (Medium), whereas a Hard version might ask for the domain of the function.
* **Recommendation:** Re-balance the difficulty tags to reflect the *steps* and *insight* required, not just the subject matter. This will ensure the test accurately predicts student ability rather than just testing exposure to advanced topics.
