# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 2
* **Critical Errors:** 0
* **Minor Issues/Warnings:** 2 (Metadata Mismatch, Formatting Cleanup)

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| Metadata | Metadata Inconsistency | The `test_metadata` declares 15 Multiple Choice and 5 Student-Produced Response questions. However, the actual count is 14 Multiple Choice and 6 Student-Produced Response questions (Q4, Q9, Q10, Q16, Q19, Q20 are SPR). | Update `question_type_distribution` to `{"multiple_choice": 14, "student_produced_response": 6}`. |
| 13, 14, 15 | Formatting | Questions 13, 14, and 15 include an "E": null field in the options object. The SAT standard is A-D (4 options). | Remove the `E: null` key-value pair from the options objects in these questions to maintain a clean structure. |

## Metadata Consistency Findings

* **Domains & Skills:** The domains (Algebra, Advanced Math, Problem-Solving and Data Analysis, Geometry and Trigonometry) and skills align perfectly with the official SAT specifications.
* **Difficulty:** The difficulty distribution (4 Easy, 6 Medium, 10 Hard) matches the metadata and the question content.
* **Question Types:** A discrepancy was found in the counts of MCQ vs. SPR types, which has been corrected in the output below.

---

# Corrected JSON File

```json
{
  "test_metadata": {
    "focus_domains": [
      "Algebra"
    ],
    "focus_skills": [
      "Linear inequalities in one or two variables",
      "Systems of two linear equations in two variables"
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
      "skill": "Linear inequalities in one or two variables",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A library has a budget of <math><mn>500</mn></math> dollars to purchase new hardcover and paperback books. Hardcover books cost <math><mn>24</mn></math> dollars each, and paperback books cost <math><mn>12</mn></math> dollars each. If <math><mi>h</mi></math> represents the number of hardcover books and <math><mi>p</mi></math> represents the number of paperback books, which inequality represents the number of books the library can purchase within its budget?",
      "options": {
        "A": "<math><mn>24</mn><mi>h</mi><mo>+</mo><mn>12</mn><mi>p</mi><mo>≤</mo><mn>500</mn></math>",
        "B": "<math><mn>24</mn><mi>h</mi><mo>+</mo><mn>12</mn><mi>p</mi><mo>≥</mo><mn>500</mn></math>",
        "C": "<math><mn>12</mn><mi>h</mi><mo>+</mo><mn>24</mn><mi>p</mi><mo>≤</mo><mn>500</mn></math>",
        "D": "<math><mn>24</mn><mi>h</mi><mo>−</mo><mn>12</mn><mi>p</mi><mo>≤</mo><mn>500</mn></math>"
      },
      "answer": "A",
      "explanation": "The total cost is the cost per hardcover times the count (<math><mn>24</mn><mi>h</mi></math>) plus the cost per paperback times the count (<math><mn>12</mn><mi>p</mi></math>). This total must be less than or equal to the budget (<math><mn>500</mn></math>).",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the unit rates (cost per book) and the total constraint (budget) to construct the linear inequality.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Algebra",
      "skill": "Linear inequalities in one or two variables",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which of the following ordered pairs <math><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></math> is a solution to the inequality <math><mn>5</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>&lt;</mo><mn>10</mn></math>?",
      "options": {
        "A": "<math><mo>(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>)</mo></math>",
        "B": "<math><mo>(</mo><mn>4</mn><mo>,</mo><mn>2</mn><mo>)</mo></math>",
        "C": "<math><mo>(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>)</mo></math>",
        "D": "<math><mo>(</mo><mn>5</mn><mo>,</mo><mo>−</mo><mn>1</mn><mo>)</mo></math>"
      },
      "answer": "C",
      "explanation": "Substitute <math><mi>x</mi><mo>=</mo><mn>2</mn></math> and <math><mi>y</mi><mo>=</mo><mn>1</mn></math> into the inequality: <math><mn>5</mn><mo>(</mo><mn>2</mn><mo>)</mo><mo>−</mo><mn>3</mn><mo>(</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>10</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>7</mn></math>. Since <math><mn>7</mn><mo>&lt;</mo><mn>10</mn></math>, this point is a solution.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To verify a solution, substitute the x and y values directly into the inequality and check if the statement is true.",
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
      "question": "A machine produces <math><mn>150</mn></math> widgets every <math><mn>20</mn></math> minutes. At this rate, how many widgets will the machine produce in <math><mn>2</mn></math> hours?",
      "options": {
        "A": "<math><mn>450</mn></math>",
        "B": "<math><mn>600</mn></math>",
        "C": "<math><mn>900</mn></math>",
        "D": "<math><mn>1,500</mn></math>"
      },
      "answer": "C",
      "explanation": "First, find the rate per hour. <math><mn>20</mn></math> minutes is <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> of an hour. So the rate is <math><mn>150</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>450</mn></math> widgets per hour. In <math><mn>2</mn></math> hours, it produces <math><mn>450</mn><mo>×</mo><mn>2</mn><mo>=</mo><mn>900</mn></math> widgets.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Ensure units match before calculating. Converting minutes to hours often simplifies the final multiplication.",
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
      "question": "If <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn></math>, what is the value of <math><mi>f</mi><mo>(</mo><mn>5</mn><mo>)</mo></math>?",
      "options": null,
      "answer": "54",
      "explanation": "Substitute <math><mn>5</mn></math> for <math><mi>x</mi></math>: <math><mi>f</mi><mo>(</mo><mn>5</mn><mo>)</mo><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mn>5</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><mo>=</mo><mn>2</mn><mo>(</mo><mn>25</mn><mo>)</mo><mo>+</mo><mn>4</mn><mo>=</mo><mn>50</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>54</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Follow the order of operations (PEMDAS): calculate the exponent before multiplying.",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Algebra",
      "skill": "Linear inequalities in one or two variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='300' viewBox='-10 -10 20 20' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='grid' width='1' height='1' patternUnits='userSpaceOnUse'><path d='M 1 0 L 0 0 0 1' fill='none' stroke='gray' stroke-width='0.05'/></pattern></defs><rect x='-10' y='-10' width='20' height='20' fill='url(#grid)' /><line x1='-10' y1='0' x2='10' y2='0' stroke='black' stroke-width='0.1' /><line x1='0' y1='-10' x2='0' y2='10' stroke='black' stroke-width='0.1' /><line x1='-5' y1='-10' x2='5' y2='10' stroke='black' stroke-width='0.2' stroke-dasharray='0.5,0.2' /><polygon points='-5,-10 10,-10 10,10 5,10' fill='blue' fill-opacity='0.2' /><text x='0.5' y='9' font-size='1'>y</text><text x='9' y='-0.5' font-size='1'>x</text></svg>",
      "question_chart_description": "The coordinate plane shows a dashed line passing through (0, 0) and (1, 2). The region to the right (or below) the line is shaded.",
      "question": "Which inequality is represented by the shaded region in the graph?",
      "options": {
        "A": "<math><mi>y</mi><mo>&lt;</mo><mn>2</mn><mi>x</mi></math>",
        "B": "<math><mi>y</mi><mo>&gt;</mo><mn>2</mn><mi>x</mi></math>",
        "C": "<math><mi>y</mi><mo>≤</mo><mn>2</mn><mi>x</mi></math>",
        "D": "<math><mi>y</mi><mo>≥</mo><mn>2</mn><mi>x</mi></math>"
      },
      "answer": "A",
      "explanation": "The boundary line passes through <math><mo>(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>)</mo></math> and <math><mo>(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>)</mo></math>, so the slope is <math><mn>2</mn></math> and the y-intercept is <math><mn>0</mn></math>. The equation of the line is <math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi></math>. The line is dashed, indicating a strict inequality (<math><mo>&lt;</mo></math> or <math><mo>&gt;</mo></math>). Testing a point in the shaded region, such as <math><mo>(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>)</mo></math>: <math><mn>0</mn><mo>&lt;</mo><mn>2</mn><mo>(</mo><mn>3</mn><mo>)</mo></math> is <math><mn>0</mn><mo>&lt;</mo><mn>6</mn></math>, which is true. Therefore, the inequality is <math><mi>y</mi><mo>&lt;</mo><mn>2</mn><mi>x</mi></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "If the boundary line is dashed, eliminate options with 'or equal to' (<math><mo>≤</mo></math>, <math><mo>≥</mo></math>). Test a clearly identifiable point in the shaded area to determine the direction of the inequality.",
      "additional_data": null
    },
    {
      "question_number": 6,
      "domain": "Algebra",
      "skill": "Linear inequalities in one or two variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A freelance graphic designer earns <math><mn>45</mn></math> dollars per hour for logo design and <math><mn>30</mn></math> dollars per hour for website maintenance. The designer wants to earn at least <math><mn>900</mn></math> dollars this week but can work no more than <math><mn>25</mn></math> hours total. If <math><mi>x</mi></math> is the number of hours spent on logo design and <math><mi>y</mi></math> is the number of hours spent on website maintenance, which system of inequalities represents this situation?",
      "options": {
        "A": "<math><mi>x</mi><mo>+</mo><mi>y</mi><mo>≤</mo><mn>25</mn></math> and <math><mn>45</mn><mi>x</mi><mo>+</mo><mn>30</mn><mi>y</mi><mo>≥</mo><mn>900</mn></math>",
        "B": "<math><mi>x</mi><mo>+</mo><mi>y</mi><mo>≥</mo><mn>25</mn></math> and <math><mn>45</mn><mi>x</mi><mo>+</mo><mn>30</mn><mi>y</mi><mo>≥</mo><mn>900</mn></math>",
        "C": "<math><mi>x</mi><mo>+</mo><mi>y</mi><mo>≤</mo><mn>25</mn></math> and <math><mn>45</mn><mi>x</mi><mo>+</mo><mn>30</mn><mi>y</mi><mo>≤</mo><mn>900</mn></math>",
        "D": "<math><mi>x</mi><mo>+</mo><mi>y</mi><mo>≥</mo><mn>25</mn></math> and <math><mn>45</mn><mi>x</mi><mo>+</mo><mn>30</mn><mi>y</mi><mo>≤</mo><mn>900</mn></math>"
      },
      "answer": "A",
      "explanation": "The total hours must be no more than <math><mn>25</mn></math>, so <math><mi>x</mi><mo>+</mo><mi>y</mi><mo>≤</mo><mn>25</mn></math>. The earnings must be at least <math><mn>900</mn></math>, so <math><mn>45</mn><mi>x</mi><mo>+</mo><mn>30</mn><mi>y</mi><mo>≥</mo><mn>900</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Translate key phrases like 'no more than' to <math><mo>≤</mo></math> and 'at least' to <math><mo>≥</mo></math> immediately.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable and systems of equations in 2 variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which of the following equations has the same solutions as <math><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>10</mn><mi>x</mi><mo>+</mo><mn>16</mn><mo>=</mo><mn>0</mn></math>?",
      "options": {
        "A": "<math><msup><mrow><mo>(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>9</mn></math>",
        "B": "<math><msup><mrow><mo>(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mo>−</mo><mn>9</mn></math>",
        "C": "<math><msup><mrow><mo>(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>8</mn></math>",
        "D": "<math><msup><mrow><mo>(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>20</mn></math>"
      },
      "answer": "A",
      "explanation": "Complete the square. Take half of the coefficient of <math><mi>x</mi></math> (<math><mo>−</mo><mn>5</mn></math>) and square it (<math><mn>25</mn></math>). Add <math><mn>25</mn></math> to both sides: <math><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>10</mn><mi>x</mi><mo>+</mo><mn>25</mn><mo>=</mo><mo>−</mo><mn>16</mn><mo>+</mo><mn>25</mn></math>. This simplifies to <math><msup><mrow><mo>(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>9</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Completing the square involves finding <math><msup><mrow><mo>(</mo><mfrac><mi>b</mi><mn>2</mn></mfrac><mo>)</mo></mrow><mn>2</mn></msup></math> and adding it to both sides of the equation.",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A local gym offers Yoga and Pilates classes. The table below shows the number of members enrolled in each class.\n\n| | Yoga | Pilates | Total |\n|---|---|---|---|\n| Morning | 20 | 15 | 35 |\n| Evening | 30 | 25 | 55 |\n| Total | 50 | 40 | 90 |\n\nIf a member is selected at random from those enrolled in a Morning class, what is the probability that the member is enrolled in Pilates?",
      "options": {
        "A": "<math><mfrac><mn>15</mn><mn>90</mn></mfrac></math>",
        "B": "<math><mfrac><mn>15</mn><mn>40</mn></mfrac></math>",
        "C": "<math><mfrac><mn>15</mn><mn>35</mn></mfrac></math>",
        "D": "<math><mfrac><mn>35</mn><mn>90</mn></mfrac></math>"
      },
      "answer": "C",
      "explanation": "The condition 'from those enrolled in a Morning class' limits the sample space to the Morning row (Total = 35). Of these, 15 are in Pilates. The probability is <math><mfrac><mn>15</mn><mn>35</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the denominator first by looking for phrases like 'given that' or 'from those'.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 250,150 250,50' fill='none' stroke='black' stroke-width='2' /><rect x='230' y='130' width='20' height='20' fill='none' stroke='black' /><text x='150' y='170' font-size='16'>12</text><text x='260' y='100' font-size='16'>5</text><text x='70' y='140' font-size='16'>A</text><text x='260' y='160' font-size='16'>C</text><text x='260' y='40' font-size='16'>B</text></svg>",
      "question_chart_description": "A right-angled triangle ABC with the right angle at C. Side AC is the base with length 12. Side BC is the height with length 5.",
      "question": "In the right triangle shown above, what is the value of <math><mi>tan</mi><mo>(</mo><mi>A</mi><mo>)</mo></math>? (Enter your answer as a fraction, e.g., 1/2)",
      "options": null,
      "answer": "5/12",
      "explanation": "The tangent of an angle in a right triangle is the ratio of the opposite side to the adjacent side. For angle A, the opposite side is BC (<math><mn>5</mn></math>) and the adjacent side is AC (<math><mn>12</mn></math>). Thus, <math><mi>tan</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mn>5</mn><mn>12</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember SOH CAH TOA. Tangent = Opposite / Adjacent.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Algebra",
      "skill": "Systems of two linear equations in two variables",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "If <math><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>4</mn></math> and <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>13</mn></math>, what is the value of <math><mi>y</mi></math>?",
      "options": null,
      "answer": "2",
      "explanation": "From the first equation, <math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>4</mn></math>. Substitute this into the second equation: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>13</mn></math>. Simplify: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>x</mi><mo>−</mo><mn>8</mn><mo>=</mo><mn>13</mn></math>, so <math><mn>7</mn><mi>x</mi><mo>=</mo><mn>21</mn></math> and <math><mi>x</mi><mo>=</mo><mn>3</mn></math>. Substitute <math><mi>x</mi><mo>=</mo><mn>3</mn></math> back into the expression for y: <math><mi>y</mi><mo>=</mo><mn>2</mn><mo>(</mo><mn>3</mn><mo>)</mo><mo>−</mo><mn>4</mn><mo>=</mo><mn>2</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Isolate one variable in the simpler equation and substitute it into the other to solve systems efficiently.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Algebra",
      "skill": "Linear inequalities in one or two variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A manufacturer produces two types of components, A and B. Component A requires <math><mn>2</mn></math> hours of machine time and <math><mn>1</mn></math> hour of finishing time. Component B requires <math><mn>3</mn></math> hours of machine time and <math><mn>2</mn></math> hours of finishing time. The factory has at most <math><mn>120</mn></math> hours of machine time and <math><mn>70</mn></math> hours of finishing time available per week. If <math><mi>a</mi></math> represents the number of Component A and <math><mi>b</mi></math> represents the number of Component B produced, which of the following systems best represents the constraints?",
      "options": {
        "A": "<math><mn>2</mn><mi>a</mi><mo>+</mo><mn>3</mn><mi>b</mi><mo>≤</mo><mn>120</mn></math>; <math><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>≤</mo><mn>70</mn></math>",
        "B": "<math><mn>2</mn><mi>a</mi><mo>+</mo><mn>3</mn><mi>b</mi><mo>≥</mo><mn>120</mn></math>; <math><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>≥</mo><mn>70</mn></math>",
        "C": "<math><mn>2</mn><mi>a</mi><mo>+</mo><mn>1</mn><mi>a</mi><mo>≤</mo><mn>120</mn></math>; <math><mn>3</mn><mi>b</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>≤</mo><mn>70</mn></math>",
        "D": "<math><mn>2</mn><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>≤</mo><mn>120</mn></math>; <math><mi>a</mi><mo>+</mo><mn>3</mn><mi>b</mi><mo>≤</mo><mn>70</mn></math>"
      },
      "answer": "A",
      "explanation": "Machine time constraint: <math><mn>2</mn></math> hours for A and <math><mn>3</mn></math> hours for B must be <math><mo>≤</mo><mn>120</mn></math>. So, <math><mn>2</mn><mi>a</mi><mo>+</mo><mn>3</mn><mi>b</mi><mo>≤</mo><mn>120</mn></math>. Finishing time constraint: <math><mn>1</mn></math> hour for A and <math><mn>2</mn></math> hours for B must be <math><mo>≤</mo><mn>70</mn></math>. So, <math><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>≤</mo><mn>70</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Group the coefficients by resource type (machine vs. finishing) rather than by component type.",
      "additional_data": null
    },
    {
      "question_number": 12,
      "domain": "Algebra",
      "skill": "Linear inequalities in one or two variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='300' viewBox='-10 -10 20 20' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='grid' width='1' height='1' patternUnits='userSpaceOnUse'><path d='M 1 0 L 0 0 0 1' fill='none' stroke='gray' stroke-width='0.05'/></pattern></defs><rect x='-10' y='-10' width='20' height='20' fill='url(#grid)' /><line x1='-10' y1='0' x2='10' y2='0' stroke='black' stroke-width='0.1' /><line x1='0' y1='-10' x2='0' y2='10' stroke='black' stroke-width='0.1' /><line x1='-10' y1='-8' x2='10' y2='12' stroke='black' stroke-width='0.15' /><line x1='-10' y1='12' x2='10' y2='-8' stroke='black' stroke-width='0.15' /><polygon points='0,2 10,12 10,-8' fill='green' fill-opacity='0.25' /><text x='5' y='2' font-size='1'>Shaded Region</text></svg>",
      "question_chart_description": "A system of inequalities graph. Line 1 has a positive slope of 1 passing through (0,2). Line 2 has a negative slope of -1 passing through (0,2). The shaded region is to the right of the intersection, bounded by the two lines.",
      "question": "The shaded region in the figure represents the solution set to which system of inequalities?",
      "options": {
        "A": "<math><mi>y</mi><mo>&lt;</mo><mi>x</mi><mo>+</mo><mn>2</mn></math> and <math><mi>y</mi><mo>&gt;</mo><mo>−</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>",
        "B": "<math><mi>y</mi><mo>&lt;</mo><mi>x</mi><mo>+</mo><mn>2</mn></math> and <math><mi>y</mi><mo>&lt;</mo><mo>−</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>",
        "C": "<math><mi>y</mi><mo>&gt;</mo><mi>x</mi><mo>+</mo><mn>2</mn></math> and <math><mi>y</mi><mo>&gt;</mo><mo>−</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>",
        "D": "<math><mi>y</mi><mo>&gt;</mo><mi>x</mi><mo>+</mo><mn>2</mn></math> and <math><mi>y</mi><mo>&lt;</mo><mo>−</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>"
      },
      "answer": "A",
      "explanation": "Both lines intersect at <math><mo>(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>)</mo></math>. One line has slope <math><mn>1</mn></math> (<math><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>) and the other slope <math><mo>−</mo><mn>1</mn></math> (<math><mi>y</mi><mo>=</mo><mo>−</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>). The shaded region contains the point <math><mo>(</mo><mn>5</mn><mo>,</mo><mn>2</mn><mo>)</mo></math>. Testing <math><mo>(</mo><mn>5</mn><mo>,</mo><mn>2</mn><mo>)</mo></math>: For <math><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>, <math><mn>2</mn><mo>&lt;</mo><mn>5</mn><mo>+</mo><mn>2</mn></math> (True), so <math><mi>y</mi><mo>&lt;</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>. For <math><mi>y</mi><mo>=</mo><mo>−</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>, <math><mn>2</mn><mo>&gt;</mo><mo>−</mo><mn>5</mn><mo>+</mo><mn>2</mn></math> (True), so <math><mi>y</mi><mo>&gt;</mo><mo>−</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the equations of the boundary lines first, then test a point clearly inside the shaded region to determine the direction of each inequality.",
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
      "question": "Function <math><mi>f</mi></math> is defined by <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>300</mn><msup><mrow><mo>(</mo><mn>1.05</mn><mo>)</mo></mrow><mi>x</mi></msup></math> and function <math><mi>g</mi></math> is defined by <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>300</mn><mo>+</mo><mn>15</mn><mi>x</mi></math>. Which statement correctly compares the values of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> and <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> for large positive values of <math><mi>x</mi></math>?",
      "options": {
        "A": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> will eventually exceed <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> because linear growth is faster than exponential growth.",
        "B": "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> will eventually exceed <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> because exponential growth is faster than linear growth.",
        "C": "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> will always be greater than <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>.",
        "D": "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> and <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> will grow at the same rate."
      },
      "answer": "B",
      "explanation": "Function <math><mi>f</mi></math> represents exponential growth with a base greater than 1 (<math><mn>1.05</mn></math>). Function <math><mi>g</mi></math> represents linear growth. Exponential growth always eventually exceeds linear growth for sufficiently large values of <math><mi>x</mi></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Recall the hierarchy of growth rates: Exponential > Polynomial > Linear.",
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
      "question": "A poll of <math><mn>1,000</mn></math> randomly selected voters in a city found that <math><mn>54</mn><mo>%</mo></math> support Proposition A. The margin of error for this poll is <math><mn>3</mn><mo>%</mo></math> at a <math><mn>95</mn><mo>%</mo></math> confidence level. Which of the following is the most appropriate conclusion?",
      "options": {
        "A": "Exactly <math><mn>54</mn><mo>%</mo></math> of all voters in the city support Proposition A.",
        "B": "There is a <math><mn>95</mn><mo>%</mo></math> probability that the proportion of all voters who support Proposition A is between <math><mn>51</mn><mo>%</mo></math> and <math><mn>57</mn><mo>%</mo></math>.",
        "C": "It is certain that the majority of voters support Proposition A.",
        "D": "If another poll were conducted, the result would be exactly <math><mn>54</mn><mo>%</mo></math>."
      },
      "answer": "B",
      "explanation": "A margin of error of <math><mn>3</mn><mo>%</mo></math> creates a confidence interval of <math><mn>54</mn><mo>%</mo><mo>±</mo><mn>3</mn><mo>%</mo></math>, or <math><mn>51</mn><mo>%</mo></math> to <math><mn>57</mn><mo>%</mo></math>. The confidence level (<math><mn>95</mn><mo>%</mo></math>) refers to the probability that the true population parameter lies within this interval.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Margin of error describes the range of plausible values for the *population*, not the certainty of a single sample or future samples.",
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
      "question": "The equation of a circle in the xy-plane is given by <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>=</mo><mn>11</mn></math>. What is the radius of the circle?",
      "options": {
        "A": "<math><mn>4</mn></math>",
        "B": "<math><mn>6</mn></math>",
        "C": "<math><msqrt><mn>11</mn></msqrt></math>",
        "D": "<math><mn>36</mn></math>"
      },
      "answer": "B",
      "explanation": "Complete the square for both <math><mi>x</mi></math> and <math><mi>y</mi></math>. For <math><mi>x</mi></math>: <math><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn></math>. For <math><mi>y</mi></math>: <math><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>y</mi><mo>+</mo><mn>16</mn></math>. Add these constants to the right side: <math><mn>11</mn><mo>+</mo><mn>9</mn><mo>+</mo><mn>16</mn><mo>=</mo><mn>36</mn></math>. The standard form is <math><msup><mrow><mo>(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>+</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>36</mn></math>. The radius squared is <math><mn>36</mn></math>, so the radius is <math><mn>6</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember to add the values used to complete the square to *both* sides of the equation.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Algebra",
      "skill": "Linear inequalities in one or two variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A shipping container can hold a maximum weight of <math><mn>2400</mn></math> pounds. It is loaded with crates weighing <math><mn>50</mn></math> pounds each and pallets weighing <math><mn>300</mn></math> pounds each. If there are exactly <math><mn>4</mn></math> pallets loaded, what is the maximum number of crates that can also be loaded?",
      "options": null,
      "answer": "24",
      "explanation": "Let <math><mi>c</mi></math> be the number of crates. The total weight inequality is <math><mn>50</mn><mi>c</mi><mo>+</mo><mn>300</mn><mo>(</mo><mn>4</mn><mo>)</mo><mo>≤</mo><mn>2400</mn></math>. Simplify: <math><mn>50</mn><mi>c</mi><mo>+</mo><mn>1200</mn><mo>≤</mo><mn>2400</mn></math>. Subtract 1200: <math><mn>50</mn><mi>c</mi><mo>≤</mo><mn>1200</mn></math>. Divide by 50: <math><mi>c</mi><mo>≤</mo><mn>24</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Set up the inequality and solve. If the result is a decimal, round down for 'maximum capacity' problems.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "What is the sum of the solutions to the equation <math><mfrac><mn>3</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>1</mn></math>?",
      "options": {
        "A": "<math><mn>0</mn></math>",
        "B": "<math><mn>1</mn></math>",
        "C": "<math><mn>5</mn></math>",
        "D": "<math><mn>6</mn></math>"
      },
      "answer": "B",
      "explanation": "Multiply by the common denominator <math><mo>(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></math>. The equation becomes <math><mn>3</mn><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>−</mo><mn>2</mn><mo>(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></math>. Simplify: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></math> → <math><mi>x</mi><mo>+</mo><mn>5</mn><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></math> → <math><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>6</mn><mo>=</mo><mn>0</mn></math>. Factor: <math><mo>(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Solutions are <math><mn>3</mn></math> and <math><mo>−</mo><mn>2</mn></math>. Sum = <math><mn>3</mn><mo>+</mo><mo>(</mo><mo>−</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>1</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For quadratic <math><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></math>, the sum of solutions is <math><mo>−</mo><mfrac><mi>b</mi><mi>a</mi></mfrac></math>. Here, <math><mo>−</mo><mfrac><mrow><mo>(</mo><mo>−</mo><mn>1</mn><mo>)</mo></mrow><mn>1</mn></mfrac><mo>=</mo><mn>1</mn></math>.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Algebra",
      "skill": "Linear inequalities in one or two variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which of the following inequalities implies that <math><mi>x</mi></math> must be positive?",
      "options": {
        "A": "<math><mn>2</mn><mi>x</mi><mo>−</mo><mn>5</mn><mo>&gt;</mo><mn>3</mn></math>",
        "B": "<math><mn>3</mn><mi>x</mi><mo>+</mo><mn>4</mn><mo>&gt;</mo><mn>2</mn></math>",
        "C": "<math><mo>−</mo><mn>2</mn><mi>x</mi><mo>&lt;</mo><mn>10</mn></math>",
        "D": "<math><mi>x</mi><mo>−</mo><mn>3</mn><mo>&gt;</mo><mo>−</mo><mn>5</mn></math>"
      },
      "answer": "A",
      "explanation": "Solve each: A) <math><mn>2</mn><mi>x</mi><mo>&gt;</mo><mn>8</mn><mo>⇒</mo><mi>x</mi><mo>&gt;</mo><mn>4</mn></math> (must be positive). B) <math><mn>3</mn><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>2</mn><mo>⇒</mo><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>0.66</mn></math> (can be negative). C) <math><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>5</mn></math> (can be negative). D) <math><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>2</mn></math> (can be negative). Only A guarantees <math><mi>x</mi></math> is positive.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Isolate <math><mi>x</mi></math> completely. If the lower bound is a positive number, then <math><mi>x</mi></math> must be positive.",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Advanced Math",
      "skill": "Systems of equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "If the system of equations <math><mi>y</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>5</mn><mi>x</mi><mo>+</mo><mi>c</mi></math> and <math><mi>y</mi><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>1</mn></math> intersects at exactly one point, what is the value of the constant <math><mi>c</mi></math>?",
      "options": null,
      "answer": "9",
      "explanation": "Set equations equal: <math><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>5</mn><mi>x</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>. Rearrange: <math><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>8</mn><mi>x</mi><mo>+</mo><mo>(</mo><mi>c</mi><mo>−</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. For exactly one intersection, the discriminant must be zero. <math><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi><mo>=</mo><mn>0</mn></math>. Here, <math><msup><mrow><mo>(</mo><mo>−</mo><mn>8</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><mo>(</mo><mn>2</mn><mo>)</mo><mo>(</mo><mi>c</mi><mo>−</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. <math><mn>64</mn><mo>−</mo><mn>8</mn><mo>(</mo><mi>c</mi><mo>−</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>0</mn></math> → <math><mn>64</mn><mo>=</mo><mn>8</mn><mo>(</mo><mi>c</mi><mo>−</mo><mn>1</mn><mo>)</mo></math> → <math><mn>8</mn><mo>=</mo><mi>c</mi><mo>−</mo><mn>1</mn></math> → <math><mi>c</mi><mo>=</mo><mn>9</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For systems involving a quadratic and a line, 'one intersection' implies the Discriminant (<math><mi>Δ</mi></math>) of the combined quadratic is zero.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Percentages",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A tank is initially <math><mn>40</mn><mo>%</mo></math> full of water. After adding <math><mn>12</mn></math> gallons of water, the tank is <math><mn>55</mn><mo>%</mo></math> full. What is the total capacity of the tank in gallons?",
      "options": null,
      "answer": "80",
      "explanation": "Let <math><mi>C</mi></math> be the capacity. <math><mn>0.55</mn><mi>C</mi><mo>−</mo><mn>0.40</mn><mi>C</mi><mo>=</mo><mn>12</mn></math>. <math><mn>0.15</mn><mi>C</mi><mo>=</mo><mn>12</mn></math>. <math><mi>C</mi><mo>=</mo><mfrac><mn>12</mn><mn>0.15</mn></mfrac><mo>=</mo><mn>80</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Set up an equation where the difference in percentages equals the added amount.",
      "additional_data": null
    }
  ]
}

```