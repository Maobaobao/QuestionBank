# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 2
* **Critical Errors:** 1 (Content Mismatch in Q12)
* **Minor Issues/Warnings:** 1 (Internal Note in Explanation)

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| 12 | Mathematical/Content Error | The question text uses the constant `5` in the first equation (), but the explanation and logic for "no solution" rely on the constant being `7`. With `5`, the ratio of constants () would equal the ratio of coefficients (), resulting in *infinite* solutions, not *no* solution. | Change the equation in the question text to . This ensures the constant ratio () differs from the coefficient ratio (). |
| 12 | Explanation Flaw | The explanation contains internal drafting notes ("Wait—if the constants ratio matches...", "**Correction for valid test design:**..."). | Rewrite the explanation to be a clean, student-facing instructional text that explains the "parallel lines" condition without the internal monologue. |

## Metadata Consistency Findings

* **Domains:**
* Algebra: 35% (7/20) - **Matches** target.
* Advanced Math: 30% (6/20) - **Acceptable** (close to 35%).
* Problem-Solving & Data Analysis: 15% (3/20) - **Matches** target.
* Geometry & Trigonometry: 20% (4/20) - **Acceptable** (close to 15%).


* **Question Types:**
* MCQ: 15 (75%) - **Matches** target.
* SPR: 5 (25%) - **Matches** target.


* **Difficulty:**
* Easy: 4, Medium: 6, Hard: 10. **Matches** declared metadata.



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
      "Systems of linear equations",
      "Nonlinear functions",
      "Ratios and rates",
      "Lines and angles"
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
      "question": "If <math><mn>4</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>22</mn></math>, what is the value of <math><mi>x</mi></math>?",
      "options": {
        "A": "4",
        "B": "6",
        "C": "8",
        "D": "16"
      },
      "answer": "A",
      "explanation": "Subtract 6 from both sides to get <math><mn>4</mn><mi>x</mi><mo>=</mo><mn>16</mn></math>. Divide both sides by 4 to get <math><mi>x</mi><mo>=</mo><mn>4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Isolate the variable term first by performing inverse operations for addition or subtraction, then handle multiplication or division.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Algebra",
      "skill": "Systems of two linear equations in two variables",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "What is the solution <math><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></math> to the system of equations <math><mi>y</mi><mo>=</mo><mn>3</mn><mi>x</mi></math> and <math><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>12</mn></math>?",
      "options": {
        "A": "(2, 6)",
        "B": "(3, 9)",
        "C": "(4, 8)",
        "D": "(3, 12)"
      },
      "answer": "B",
      "explanation": "Substitute <math><mn>3</mn><mi>x</mi></math> for <math><mi>y</mi></math> in the second equation: <math><mi>x</mi><mo>+</mo><mn>3</mn><mi>x</mi><mo>=</mo><mn>12</mn></math>, which simplifies to <math><mn>4</mn><mi>x</mi><mo>=</mo><mn>12</mn></math>, so <math><mi>x</mi><mo>=</mo><mn>3</mn></math>. Substitute <math><mi>x</mi><mo>=</mo><mn>3</mn></math> into <math><mi>y</mi><mo>=</mo><mn>3</mn><mi>x</mi></math> to find <math><mi>y</mi><mo>=</mo><mn>9</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When one equation is already solved for a variable (like y = 3x), substitution is usually the fastest method.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Two-variable data: models and scatter-plots",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='400' height='300' viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='black' /></marker></defs><line x1='40' y1='260' x2='360' y2='260' stroke='black' stroke-width='2' marker-end='url(#arrow)' /><line x1='40' y1='260' x2='40' y2='20' stroke='black' stroke-width='2' marker-end='url(#arrow)' /><text x='370' y='265' font-family='Arial' font-size='14'>x</text><text x='30' y='15' font-family='Arial' font-size='14'>y</text><circle cx='80' cy='220' r='4' fill='black' /><circle cx='120' cy='190' r='4' fill='black' /><circle cx='160' cy='160' r='4' fill='black' /><circle cx='200' cy='140' r='4' fill='black' /><circle cx='240' cy='110' r='4' fill='black' /><circle cx='280' cy='80' r='4' fill='black' /><line x1='40' y1='250' x2='320' y2='50' stroke='blue' stroke-dasharray='5,5' stroke-width='2' /><text x='35' y='275' font-size='12'>0</text><text x='75' y='275' font-size='12'>10</text><text x='115' y='275' font-size='12'>20</text><text x='155' y='275' font-size='12'>30</text><text x='195' y='275' font-size='12'>40</text><text x='235' y='275' font-size='12'>50</text><text x='275' y='275' font-size='12'>60</text><text x='20' y='220' font-size='12'>20</text><text x='20' y='160' font-size='12'>50</text><text x='20' y='100' font-size='12'>80</text><text x='20' y='40' font-size='12'>110</text></svg>",
      "question_chart_description": "Scatterplot with points showing a positive linear trend. A line of best fit passes roughly through (10, 20) and (60, 95).",
      "question": "The scatterplot shows data points and a line of best fit. Which of the following is the best estimate for the value of <math><mi>y</mi></math> when <math><mi>x</mi><mo>=</mo><mn>30</mn></math>?",
      "options": {
        "A": "20",
        "B": "35",
        "C": "50",
        "D": "80"
      },
      "answer": "C",
      "explanation": "Locate <math><mi>x</mi><mo>=</mo><mn>30</mn></math> on the horizontal axis and move vertically up to the line of best fit. The corresponding y-value on the vertical axis is approximately 50.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When estimating from a line of best fit, draw a straight vertical line from the x-value to the trend line, then a horizontal line to the y-axis.",
      "additional_data": null
    },
    {
      "question_number": 4,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Easy",
      "question_type": "SPR",
      "question_chart_svg": "<svg width='250' height='200' viewBox='0 0 250 200' xmlns='http://www.w3.org/2000/svg'><polygon points='40,160 200,160 40,40' fill='none' stroke='black' stroke-width='2' /><rect x='40' y='140' width='20' height='20' fill='none' stroke='black' /><text x='110' y='180' font-size='14'>8</text><text x='20' y='100' font-size='14'>6</text><text x='130' y='90' font-size='14'>c</text></svg>",
      "question_chart_description": "Right triangle with legs of length 6 and 8. The hypotenuse is labeled c.",
      "question": "The figure shows a right triangle with legs of lengths 6 and 8. What is the length of the hypotenuse, <math><mi>c</mi></math>?",
      "options": null,
      "answer": "10",
      "explanation": "Use the Pythagorean theorem <math><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></math>. Substitute the lengths: <math><msup><mn>6</mn><mn>2</mn></msup><mo>+</mo><msup><mn>8</mn><mn>2</mn></msup><mo>=</mo><mn>36</mn><mo>+</mo><mn>64</mn><mo>=</mo><mn>100</mn></math>. Since <math><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>100</mn></math>, <math><mi>c</mi><mo>=</mo><mn>10</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Memorize common Pythagorean triples like 3-4-5 and 6-8-10 to solve these problems instantly without calculation.",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Algebra",
      "skill": "Linear equations in 2 variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='300' viewBox='-10 -10 20 20' xmlns='http://www.w3.org/2000/svg'><defs><marker id='arrow' viewBox='0 0 10 10' refX='5' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' /></marker></defs><line x1='-10' y1='0' x2='10' y2='0' stroke='black' stroke-width='0.5' marker-end='url(#arrow)' marker-start='url(#arrow)' /><line x1='0' y1='-10' x2='0' y2='10' stroke='black' stroke-width='0.5' marker-end='url(#arrow)' marker-start='url(#arrow)' /><line x1='-5' y1='8' x2='5' y2='-2' stroke='blue' stroke-width='1' /><text x='1' y='-4' font-size='2'>(0, 3)</text><text x='5' y='1' font-size='2'>(3, 0)</text><circle cx='0' cy='-3' r='0.3' fill='black'/><circle cx='3' cy='0' r='0.3' fill='black'/></svg>",
      "question_chart_description": "Graph of a line in the xy-plane passing through the y-intercept (0, 3) and the x-intercept (3, 0).",
      "question": "Which equation represents the line shown in the graph?",
      "options": {
        "A": "<math><mi>y</mi><mo>=</mo><mo>-</mo><mi>x</mi><mo>+</mo><mn>3</mn></math>",
        "B": "<math><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>3</mn></math>",
        "C": "<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>3</mn></math>",
        "D": "<math><mi>y</mi><mo>=</mo><mi>x</mi><mo>-</mo><mn>3</mn></math>"
      },
      "answer": "A",
      "explanation": "The line crosses the y-axis at 3, so the y-intercept <math><mi>b</mi><mo>=</mo><mn>3</mn></math>. The line passes through (0, 3) and (3, 0). The slope <math><mi>m</mi><mo>=</mo><mfrac><mrow><mn>0</mn><mo>-</mo><mn>3</mn></mrow><mrow><mn>3</mn><mo>-</mo><mn>0</mn></mrow></mfrac><mo>=</mo><mo>-</mo><mn>1</mn></math>. The equation is <math><mi>y</mi><mo>=</mo><mo>-</mo><mn>1</mn><mi>x</mi><mo>+</mo><mn>3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the y-intercept first to eliminate options, then determine if the slope is positive or negative.",
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
      "question": "Which expression is equivalent to <math><msup><mrow><mo>(</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>&#183;</mo><msup><mi>x</mi><mn>2</mn></msup></math>?",
      "options": {
        "A": "<math><mn>4</mn><msup><mi>x</mi><mn>7</mn></msup><msup><mi>y</mi><mn>2</mn></msup></math>",
        "B": "<math><mn>4</mn><msup><mi>x</mi><mn>8</mn></msup><msup><mi>y</mi><mn>2</mn></msup></math>",
        "C": "<math><mn>2</mn><msup><mi>x</mi><mn>8</mn></msup><mi>y</mi></math>",
        "D": "<math><mn>4</mn><msup><mi>x</mi><mn>8</mn></msup><mi>y</mi></math>"
      },
      "answer": "B",
      "explanation": "First expand the squared term: <math><msup><mrow><mo>(</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo>&#183;</mo><msup><mrow><mo>(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>)</mo></mrow><mn>2</mn></msup><mo>&#183;</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>6</mn></msup><msup><mi>y</mi><mn>2</mn></msup></math>. Then multiply by <math><msup><mi>x</mi><mn>2</mn></msup></math>: <math><mn>4</mn><msup><mi>x</mi><mn>6</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>&#183;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><msup><mi>x</mi><mrow><mn>6</mn><mo>+</mo><mn>2</mn></mrow></msup><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>8</mn></msup><msup><mi>y</mi><mn>2</mn></msup></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember to square the coefficient as well as the variables. (2x)^2 is 4x^2, not 2x^2.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Algebra",
      "skill": "Systems of two linear equations in two variables",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A local bakery sells bagels for $2.00 each and muffins for $3.50 each. One morning, the bakery sold a total of 50 items (bagels and muffins) and earned a total of $145. If <math><mi>b</mi></math> represents the number of bagels sold and <math><mi>m</mi></math> represents the number of muffins sold, which system of equations represents this situation?",
      "options": {
        "A": "<math><mi>b</mi><mo>+</mo><mi>m</mi><mo>=</mo><mn>145</mn><mspace width='1em'/><mtext>and</mtext><mspace width='1em'/><mn>2</mn><mi>b</mi><mo>+</mo><mn>3.5</mn><mi>m</mi><mo>=</mo><mn>50</mn></math>",
        "B": "<math><mi>b</mi><mo>+</mo><mi>m</mi><mo>=</mo><mn>50</mn><mspace width='1em'/><mtext>and</mtext><mspace width='1em'/><mn>2</mn><mi>b</mi><mo>+</mo><mn>3.5</mn><mi>m</mi><mo>=</mo><mn>145</mn></math>",
        "C": "<math><mi>b</mi><mo>+</mo><mi>m</mi><mo>=</mo><mn>50</mn><mspace width='1em'/><mtext>and</mtext><mspace width='1em'/><mn>3.5</mn><mi>b</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo>=</mo><mn>145</mn></math>",
        "D": "<math><mn>2</mn><mi>b</mi><mo>+</mo><mn>3.5</mn><mi>m</mi><mo>=</mo><mn>50</mn><mspace width='1em'/><mtext>and</mtext><mspace width='1em'/><mi>b</mi><mo>+</mo><mi>m</mi><mo>=</mo><mn>145</mn></math>"
      },
      "answer": "B",
      "explanation": "The total count of items is 50, so <math><mi>b</mi><mo>+</mo><mi>m</mi><mo>=</mo><mn>50</mn></math>. The total revenue is calculated by price times quantity: <math><mn>2</mn><mi>b</mi></math> (revenue from bagels) + <math><mn>3.5</mn><mi>m</mi></math> (revenue from muffins) = 145.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Create two separate equations: one for the 'quantity' of items and one for the 'value' or cost of those items.",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A group of 80 students was surveyed about their preferred science subject. The data showed that 32 students preferred Biology, 24 preferred Chemistry, and the rest preferred Physics. If a student is selected at random from the group, what is the probability that the student preferred Physics? (Enter your answer as a decimal).",
      "options": null,
      "answer": "0.3",
      "explanation": "First, find the number of students who preferred Physics: <math><mn>80</mn><mo>-</mo><mn>32</mn><mo>-</mo><mn>24</mn><mo>=</mo><mn>24</mn></math>. The probability is the part over the whole: <math><mfrac><mn>24</mn><mn>80</mn></mfrac></math>. Dividing 24 by 80 gives <math><mn>0.3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always ensure you calculate the 'target' group correctly (subtraction) before creating the probability fraction.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Advanced Math",
      "skill": "Nonlinear functions",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "For the function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><msup><mrow><mo>(</mo><mn>2</mn><mo>)</mo></mrow><mi>x</mi></msup><mo>+</mo><mn>5</mn></math>, what is the value of <math><mi>f</mi><mo>(</mo><mn>4</mn><mo>)</mo></math>?",
      "options": null,
      "answer": "53",
      "explanation": "Substitute <math><mi>x</mi><mo>=</mo><mn>4</mn></math> into the function: <math><mi>f</mi><mo>(</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>3</mn><msup><mrow><mo>(</mo><mn>2</mn><mo>)</mo></mrow><mn>4</mn></msup><mo>+</mo><mn>5</mn></math>. Calculate the exponent first: <math><msup><mn>2</mn><mn>4</mn></msup><mo>=</mo><mn>16</mn></math>. Then multiply: <math><mn>3</mn><mo>(</mo><mn>16</mn><mo>)</mo><mo>=</mo><mn>48</mn></math>. Finally add 5: <math><mn>48</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>53</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Follow the order of operations strictly (PEMDAS): Exponents before Multiplication, then Addition.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Geometry and Trigonometry",
      "skill": "Circles",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The equation of a circle in the xy-plane is <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>+</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>49</mn></math>. What is the radius of this circle?",
      "options": {
        "A": "3.5",
        "B": "7",
        "C": "24.5",
        "D": "49"
      },
      "answer": "B",
      "explanation": "The standard equation of a circle is <math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mi>k</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>r</mi><mn>2</mn></msup></math>. Here, <math><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>49</mn></math>. Taking the square root gives <math><mi>r</mi><mo>=</mo><mn>7</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember the right side of the circle equation represents r-squared, not the diameter or the radius itself.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Algebra",
      "skill": "Systems of two linear equations in two variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "In the system of equations below, <math><mi>k</mi></math> is a constant. If the system has infinitely many solutions, what is the value of <math><mi>k</mi></math>?\n<math><mn>3</mn><mi>x</mi><mo>+</mo><mi>k</mi><mi>y</mi><mo>=</mo><mn>12</mn></math>\n<math><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>4</mn></math>",
      "options": {
        "A": "3",
        "B": "4",
        "C": "12",
        "D": "16"
      },
      "answer": "C",
      "explanation": "For a system to have infinitely many solutions, the equations must be equivalent (represent the same line). Notice that the constant term in the first equation (12) is 3 times the constant in the second equation (4). Therefore, the coefficients of x and y must also be 3 times larger. The coefficient of x in the first equation (3) is indeed 3 times the coefficient of x in the second (1). Thus, <math><mi>k</mi></math> must be 3 times 4, which is 12.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Compare the ratio of coefficients. For infinitely many solutions, a1/a2 = b1/b2 = c1/c2.",
      "additional_data": null
    },
    {
      "question_number": 12,
      "domain": "Algebra",
      "skill": "Systems of two linear equations in two variables",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The system of equations <math><mi>a</mi><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>7</mn></math> and <math><mn>4</mn><mi>x</mi><mo>+</mo><mn>6</mn><mi>y</mi><mo>=</mo><mn>10</mn></math> has no solution. If <math><mi>a</mi></math> is a constant, what is the value of <math><mi>a</mi></math>?",
      "options": null,
      "answer": "2",
      "explanation": "For a system to have no solution, the lines must be parallel, meaning they have the same slope but different y-intercepts. This implies the ratio of x-coefficients must equal the ratio of y-coefficients: <math><mfrac><mi>a</mi><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>6</mn></mfrac></math>. Solving for <math><mi>a</mi></math> gives <math><mi>a</mi><mo>=</mo><mn>2</mn></math>. We also verify that the constant terms do not have the same ratio: <math><mfrac><mn>7</mn><mn>10</mn></mfrac><mo>&#8800;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, confirming there is no solution.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Parallel lines have the same slope. If the slopes are same but constants differ, there is no solution.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Advanced Math",
      "skill": "Nonlinear equations in 1 variable",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "How many distinct real solutions does the equation <math><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>=</mo><mn>0</mn></math> have?",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "Infinite"
      },
      "answer": "A",
      "explanation": "Use the discriminant <math><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></math>. Here <math><mi>a</mi><mo>=</mo><mn>2</mn></math>, <math><mi>b</mi><mo>=</mo><mo>-</mo><mn>5</mn></math>, <math><mi>c</mi><mo>=</mo><mn>9</mn></math>. Discriminant = <math><msup><mrow><mo>(</mo><mo>-</mo><mn>5</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mn>4</mn><mo>(</mo><mn>2</mn><mo>)</mo><mo>(</mo><mn>9</mn><mo>)</mo><mo>=</mo><mn>25</mn><mo>-</mo><mn>72</mn><mo>=</mo><mo>-</mo><mn>47</mn></math>. Since the discriminant is negative, there are no real solutions.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Calculate b^2 - 4ac. Positive = 2 solutions, Zero = 1 solution, Negative = 0 real solutions.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A biologist is studying the population growth of a bacteria culture. The population, <math><mi>P</mi></math>, can be modeled by the function <math><mi>P</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>500</mn><msup><mrow><mo>(</mo><mn>1.04</mn><mo>)</mo></mrow><mi>t</mi></msup></math>, where <math><mi>t</mi></math> represents time in hours. Which of the following best describes the population growth?",
      "options": {
        "A": "The population increases by 4% every hour.",
        "B": "The population increases by 104% every hour.",
        "C": "The population increases by 4 bacteria every hour.",
        "D": "The population increases by 1.04 bacteria every hour."
      },
      "answer": "A",
      "explanation": "In an exponential model <math><mi>y</mi><mo>=</mo><mi>a</mi><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo>)</mo></mrow><mi>t</mi></msup></math>, <math><mi>r</mi></math> represents the growth rate. Here, the base is <math><mn>1.04</mn></math>, which is <math><mn>1</mn><mo>+</mo><mn>0.04</mn></math>. This corresponds to a growth rate of 0.04, or 4%.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "If the base of the exponent is greater than 1, it's growth. Subtract 1 from the base to find the percentage rate.",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Geometry and Trigonometry",
      "skill": "Right triangles and trigonometry",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='20,180 120,180 120,80' fill='none' stroke='black' stroke-width='2' /><rect x='100' y='160' width='20' height='20' fill='none' stroke='black' /><text x='60' y='175' font-size='12'>A</text><text x='115' y='130' font-size='12'>B</text><text x='115' y='195' font-size='12'>C</text><polygon points='160,180 260,180 260,30' fill='none' stroke='black' stroke-width='2' /><rect x='240' y='160' width='20' height='20' fill='none' stroke='black' /><text x='200' y='175' font-size='12'>D</text><text x='265' y='105' font-size='12'>E</text><text x='265' y='195' font-size='12'>F</text></svg>",
      "question_chart_description": "Two right triangles, ABC and DEF. Triangle ABC has legs AB and BC. Triangle DEF is larger but similar to ABC.",
      "question": "Triangles <math><mi>A</mi><mi>B</mi><mi>C</mi></math> and <math><mi>D</mi><mi>E</mi><mi>F</mi></math> are similar right triangles, where angle <math><mi>C</mi></math> and angle <math><mi>F</mi></math> are the right angles. If <math><mi>sin</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mn>5</mn><mn>13</mn></mfrac></math>, what is the value of <math><mi>cos</mi><mo>(</mo><mi>E</mi><mo>)</mo></math>?",
      "options": {
        "A": "<math><mfrac><mn>5</mn><mn>13</mn></mfrac></math>",
        "B": "<math><mfrac><mn>8</mn><mn>13</mn></mfrac></math>",
        "C": "<math><mfrac><mn>12</mn><mn>13</mn></mfrac></math>",
        "D": "<math><mfrac><mn>13</mn><mn>5</mn></mfrac></math>"
      },
      "answer": "A",
      "explanation": "Since the triangles are similar, <math><mi>sin</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mi>sin</mi><mo>(</mo><mi>D</mi><mo>)</mo></math>. In right triangle DEF, angle D and angle E are complementary (add to 90°). A trigonometric identity states that <math><mi>sin</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>cos</mi><mo>(</mo><mn>90</mn><mo>-</mo><mi>x</mi><mo>)</mo></math>. Therefore, <math><mi>sin</mi><mo>(</mo><mi>D</mi><mo>)</mo><mo>=</mo><mi>cos</mi><mo>(</mo><mi>E</mi><mo>)</mo></math>. Thus <math><mi>cos</mi><mo>(</mo><mi>E</mi><mo>)</mo><mo>=</mo><mfrac><mn>5</mn><mn>13</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In any right triangle, the sine of one acute angle equals the cosine of the other acute angle.",
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
      "question": "What is the positive solution to the equation <math><msqrt><mrow><mn>3</mn><mi>x</mi><mo>+</mo><mn>13</mn></mrow></msqrt><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></math>?",
      "options": null,
      "answer": "4",
      "explanation": "Square both sides: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>13</mn><mo>=</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup></math>. Expand: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>13</mn><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>. Rearrange to form a quadratic: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>12</mn><mo>=</mo><mn>0</mn></math>. Factor: <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Possible solutions are 4 and -3. Checking x=-3: <math><msqrt><mn>4</mn></msqrt><mo>=</mo><mo>-</mo><mn>2</mn></math> (False). Checking x=4: <math><msqrt><mn>25</mn></msqrt><mo>=</mo><mn>5</mn></math> (True). The positive solution is 4.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always check for extraneous solutions when solving radical equations by plugging answers back into the original equation.",
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
      "question": "A shipping company charges $4.50 per pound for standard shipping and $8.00 per pound for express shipping. A customer wants to ship at least 15 pounds of goods but can spend no more than $100. If <math><mi>s</mi></math> is the weight in pounds for standard shipping and <math><mi>e</mi></math> is the weight in pounds for express shipping, which system of inequalities represents these conditions?",
      "options": {
        "A": "<math><mi>s</mi><mo>+</mo><mi>e</mi><mo>&#8805;</mo><mn>15</mn></math> and <math><mn>4.50</mn><mi>s</mi><mo>+</mo><mn>8.00</mn><mi>e</mi><mo>&#8804;</mo><mn>100</mn></math>",
        "B": "<math><mi>s</mi><mo>+</mo><mi>e</mi><mo>&#8804;</mo><mn>15</mn></math> and <math><mn>4.50</mn><mi>s</mi><mo>+</mo><mn>8.00</mn><mi>e</mi><mo>&#8805;</mo><mn>100</mn></math>",
        "C": "<math><mn>4.50</mn><mi>s</mi><mo>+</mo><mn>8.00</mn><mi>e</mi><mo>&#8805;</mo><mn>15</mn></math> and <math><mi>s</mi><mo>+</mo><mi>e</mi><mo>&#8804;</mo><mn>100</mn></math>",
        "D": "<math><mi>s</mi><mo>+</mo><mi>e</mi><mo>&#8805;</mo><mn>100</mn></math> and <math><mn>4.50</mn><mi>s</mi><mo>+</mo><mn>8.00</mn><mi>e</mi><mo>&#8804;</mo><mn>15</mn></math>"
      },
      "answer": "A",
      "explanation": "Total weight is <math><mi>s</mi><mo>+</mo><mi>e</mi></math>, and 'at least 15' means <math><mo>&#8805;</mo><mn>15</mn></math>. Total cost is <math><mn>4.50</mn><mi>s</mi><mo>+</mo><mn>8.00</mn><mi>e</mi></math>, and 'no more than 100' means <math><mo>&#8804;</mo><mn>100</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Translate 'at least' to ≥ (greater than or equal) and 'no more than' to ≤ (less than or equal).",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Advanced Math",
      "skill": "Systems of equations in 2 variables",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A system of equations consists of the line <math><mi>y</mi><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></math> and the parabola <math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>12</mn></math>. At which point(s) do the graphs intersect?",
      "options": {
        "A": "(2, 8) and (5, 17)",
        "B": "(2, 8) only",
        "C": "(5, 17) only",
        "D": "The graphs do not intersect."
      },
      "answer": "A",
      "explanation": "Set the equations equal: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>12</mn></math>. Rearrange: <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>10</mn><mo>=</mo><mn>0</mn></math>. Factor: <math><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Solutions are <math><mi>x</mi><mo>=</mo><mn>2</mn></math> and <math><mi>x</mi><mo>=</mo><mn>5</mn></math>. Substitute back to find y: For <math><mi>x</mi><mo>=</mo><mn>2</mn></math>, <math><mi>y</mi><mo>=</mo><mn>3</mn><mo>(</mo><mn>2</mn><mo>)</mo><mo>+</mo><mn>2</mn><mo>=</mo><mn>8</mn></math>. For <math><mi>x</mi><mo>=</mo><mn>5</mn></math>, <math><mi>y</mi><mo>=</mo><mn>3</mn><mo>(</mo><mn>5</mn><mo>)</mo><mo>+</mo><mn>2</mn><mo>=</mo><mn>17</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When equating a linear and quadratic function, move all terms to one side to form a quadratic equation equal to zero.",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Geometry and Trigonometry",
      "skill": "Area and volume formulas",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Two cylinders are similar. The surface area of cylinder A is <math><mn>50</mn><mi>&#960;</mi></math> square units and the surface area of cylinder B is <math><mn>200</mn><mi>&#960;</mi></math> square units. If the volume of cylinder A is <math><mn>100</mn><mi>&#960;</mi></math> cubic units, what is the volume of cylinder B?",
      "options": {
        "A": "<math><mn>200</mn><mi>&#960;</mi></math>",
        "B": "<math><mn>400</mn><mi>&#960;</mi></math>",
        "C": "<math><mn>800</mn><mi>&#960;</mi></math>",
        "D": "<math><mn>1600</mn><mi>&#960;</mi></math>"
      },
      "answer": "C",
      "explanation": "The ratio of surface areas is <math><mfrac><mn>200</mn><mn>50</mn></mfrac><mo>=</mo><mn>4</mn></math>. This is the square of the scale factor (<math><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn></math>), so the linear scale factor <math><mi>k</mi><mo>=</mo><mn>2</mn></math>. The ratio of volumes is the cube of the scale factor: <math><msup><mi>k</mi><mn>3</mn></msup><mo>=</mo><msup><mn>2</mn><mn>3</mn></msup><mo>=</mo><mn>8</mn></math>. The volume of cylinder B is <math><mn>8</mn><mo>&#215;</mo><mn>100</mn><mi>&#960;</mi><mo>=</mo><mn>800</mn><mi>&#960;</mi></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "If scale factor is k, Area ratio is k^2 and Volume ratio is k^3.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Advanced Math",
      "skill": "Equivalent expressions",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "For all positive values of <math><mi>a</mi></math> and <math><mi>b</mi></math>, which expression is equivalent to <math><mfrac><msup><mi>a</mi><mrow><mn>2</mn><mo>/</mo><mn>3</mn></mrow></msup><msup><mi>b</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msup></mfrac><mo>&#215;</mo><msup><mrow><mo>(</mo><msup><mi>a</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup><msup><mi>b</mi><mrow><mo>-</mo><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msup><mo>)</mo></mrow><mrow><mo>-</mo><mn>1</mn></mrow></msup></math>?",
      "options": {
        "A": "<math><msup><mi>a</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup></math>",
        "B": "<math><msup><mi>a</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup><mi>b</mi></math>",
        "C": "<math><msup><mi>a</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup><msup><mi>b</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup></math>",
        "D": "<math><mn>1</mn></math>"
      },
      "answer": "A",
      "explanation": "Simplify the second term: <math><msup><mrow><mo>(</mo><msup><mi>a</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup><msup><mi>b</mi><mrow><mo>-</mo><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msup><mo>)</mo></mrow><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>a</mi><mrow><mo>-</mo><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup><msup><mi>b</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msup></math>. Multiply by first term: <math><mo>(</mo><msup><mi>a</mi><mrow><mn>2</mn><mo>/</mo><mn>3</mn></mrow></msup><msup><mi>b</mi><mrow><mo>-</mo><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msup><mo>)</mo><mo>&#215;</mo><mo>(</mo><msup><mi>a</mi><mrow><mo>-</mo><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup><msup><mi>b</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msup><mo>)</mo></math>. Note: <math><mfrac><mn>1</mn><msup><mi>b</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msup></mfrac><mo>=</mo><msup><mi>b</mi><mrow><mo>-</mo><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msup></math>. Add exponents for a: <math><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>-</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></math>. Add exponents for b: <math><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mn>0</mn></math>. Result: <math><msup><mi>a</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup><msup><mi>b</mi><mn>0</mn></msup><mo>=</mo><msup><mi>a</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Apply the rule (xy)^n = x^n y^n and x^a * x^b = x^(a+b) systematically.",
      "additional_data": null
    }
  ]
}

```