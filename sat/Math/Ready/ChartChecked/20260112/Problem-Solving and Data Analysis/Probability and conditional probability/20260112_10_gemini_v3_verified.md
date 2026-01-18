# Math Test JSON Verification Report

## Summary
- Total Questions: 20
- Issues Found: 2
- Critical Errors: 1 (Mathematical Error in Q16)
- Minor Issues/Warnings: 1 (Rounding Error in Q17)

## Detailed Issue Log
| Q# | Category | Issue Description | Proposed Correction |
| :-- | :--- | :--- | :--- |
| 16 | Mathematical Error | The problem states 10 red marbles and asks for k blue marbles such that P(RR) = 1/3. The equation derived is $(10+k)(9+k) = 270$, which has no integer solution for $k$. | Change the number of red marbles to 6. This leads to $(6+k)(5+k) = 90$, which yields the integer solution $k=4$. Update the answer to 4. |
| 17 | Rounding Error | The calculated probability is $\approx 0.14993$. The question asks to round to the nearest thousandth. The provided answer is `0.149`, but correct rounding is `0.150`. | Update answer to `0.150`. Clean up explanation to remove internal monologue and state the rounding clearly. |

## Metadata Consistency Findings
- The metadata accurately reflects the focus on "Probability and conditional probability".
- Difficulty distribution (4/6/10) and Question Type distribution (15 MCQ / 5 SPR) match the content exactly.

---

# Corrected JSON File

```json
{
  "test_metadata": {
    "focus_domains": [
      "Problem-Solving and Data Analysis"
    ],
    "focus_skills": [
      "Probability and conditional probability"
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
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A bag contains <math><mn>5</mn></math> red marbles, <math><mn>3</mn></math> blue marbles, and <math><mn>2</mn></math> green marbles. If one marble is selected at random from the bag, what is the probability that the marble is blue?",
      "options": {
        "A": "<math><mn>0.2</mn></math>",
        "B": "<math><mn>0.3</mn></math>",
        "C": "<math><mn>0.5</mn></math>",
        "D": "<math><mn>0.8</mn></math>"
      },
      "answer": "B",
      "explanation": "The total number of marbles is <math><mn>5</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>10</mn></math>. The number of favorable outcomes (blue marbles) is <math><mn>3</mn></math>. The probability is <math><mfrac><mn>3</mn><mn>10</mn></mfrac><mo>=</mo><mn>0.3</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Probability is the ratio of favorable outcomes to the total number of possible outcomes.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><style>text{font-family:Arial;font-size:14px;text-anchor:middle}</style><rect x='10' y='10' width='380' height='180' fill='none' stroke='black'/><line x1='10' y1='60' x2='390' y2='60' stroke='black'/><line x1='10' y1='110' x2='390' y2='110' stroke='black'/><line x1='10' y1='160' x2='390' y2='160' stroke='black'/><line x1='130' y1='10' x2='130' y2='190' stroke='black'/><line x1='210' y1='10' x2='210' y2='190' stroke='black'/><line x1='290' y1='10' x2='290' y2='190' stroke='black'/><text x='70' y='40'>Grade</text><text x='170' y='40'>Bus</text><text x='250' y='40'>Walk</text><text x='340' y='40'>Total</text><text x='70' y='90'>9th</text><text x='170' y='90'>40</text><text x='250' y='90'>10</text><text x='340' y='90'>50</text><text x='70' y='140'>10th</text><text x='170' y='140'>30</text><text x='250' y='140'>20</text><text x='340' y='140'>50</text><text x='70' y='180'>Total</text><text x='170' y='180'>70</text><text x='250' y='180'>30</text><text x='340' y='180'>100</text></svg>",
      "question_chart_description": "A contingency table showing transportation methods for 9th and 10th graders. 9th: 40 Bus, 10 Walk. 10th: 30 Bus, 20 Walk.",
      "question": "The table above shows the distribution of 9th and 10th-grade students based on how they get to school. If a student is selected at random from the group, what is the probability that the student takes the bus?",
      "options": {
        "A": "<math><mn>0.3</mn></math>",
        "B": "<math><mn>0.4</mn></math>",
        "C": "<math><mn>0.7</mn></math>",
        "D": "<math><mn>0.75</mn></math>"
      },
      "answer": "C",
      "explanation": "The total number of students is <math><mn>100</mn></math>. The total number of students who take the bus is <math><mn>70</mn></math>. The probability is <math><mfrac><mn>70</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.7</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the 'favorable' group (Bus) and the 'total' group (All students) from the table margins.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The probability that it will rain tomorrow is <math><mn>0.35</mn></math>. What is the probability that it will NOT rain tomorrow?",
      "options": {
        "A": "<math><mn>0.35</mn></math>",
        "B": "<math><mn>0.55</mn></math>",
        "C": "<math><mn>0.65</mn></math>",
        "D": "<math><mn>0.75</mn></math>"
      },
      "answer": "C",
      "explanation": "The sum of the probabilities of an event happening and not happening is <math><mn>1</mn></math>. <math><mi>P</mi><mo>(</mo><mtext>Not Rain</mtext><mo>)</mo><mo>=</mo><mn>1</mn><mo>-</mo><mi>P</mi><mo>(</mo><mtext>Rain</mtext><mo>)</mo><mo>=</mo><mn>1</mn><mo>-</mo><mn>0.35</mn><mo>=</mo><mn>0.65</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Remember the complement rule: P(not A) = 1 - P(A).",
      "additional_data": null
    },
    {
      "question_number": 4,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A number is chosen at random from the set <math><mo>{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mo>...</mo><mo>,</mo><mn>20</mn><mo>}</mo></math>. What is the probability that the number chosen is a multiple of <math><mn>5</mn></math>?",
      "options": {
        "A": "<math><mfrac><mn>1</mn><mn>20</mn></mfrac></math>",
        "B": "<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>",
        "C": "<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>",
        "D": "<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>"
      },
      "answer": "B",
      "explanation": "The multiples of <math><mn>5</mn></math> in the set are <math><mn>5</mn><mo>,</mo><mn>10</mn><mo>,</mo><mn>15</mn><mo>,</mo><mn>20</mn></math>. There are <math><mn>4</mn></math> favorable outcomes. The total number of outcomes is <math><mn>20</mn></math>. <math><mi>P</mi><mo>=</mo><mfrac><mn>4</mn><mn>20</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>5</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "List the outcomes that satisfy the condition to ensure an accurate count.",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><style>text{font-family:Arial;font-size:14px;text-anchor:middle}</style><rect x='10' y='10' width='380' height='180' fill='none' stroke='black'/><line x1='10' y1='60' x2='390' y2='60' stroke='black'/><line x1='10' y1='110' x2='390' y2='110' stroke='black'/><line x1='10' y1='160' x2='390' y2='160' stroke='black'/><line x1='130' y1='10' x2='130' y2='190' stroke='black'/><line x1='210' y1='10' x2='210' y2='190' stroke='black'/><line x1='290' y1='10' x2='290' y2='190' stroke='black'/><text x='70' y='40'>Preference</text><text x='170' y='40'>Action</text><text x='250' y='40'>Comedy</text><text x='340' y='40'>Total</text><text x='70' y='90'>Group A</text><text x='170' y='90'>45</text><text x='250' y='90'>15</text><text x='340' y='90'>60</text><text x='70' y='140'>Group B</text><text x='170' y='140'>25</text><text x='250' y='140'>35</text><text x='340' y='140'>60</text><text x='70' y='180'>Total</text><text x='170' y='180'>70</text><text x='250' y='180'>50</text><text x='340' y='180'>120</text></svg>",
      "question_chart_description": "Table showing movie preferences. Group A: 45 Action, 15 Comedy. Group B: 25 Action, 35 Comedy.",
      "question": "The table above shows the movie preferences for two groups of people. If a person is selected at random from those who prefer Action movies, what is the probability that the person is from Group A?",
      "options": {
        "A": "<math><mfrac><mn>9</mn><mn>14</mn></mfrac></math>",
        "B": "<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>",
        "C": "<math><mfrac><mn>9</mn><mn>24</mn></mfrac></math>",
        "D": "<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>"
      },
      "answer": "A",
      "explanation": "This is a conditional probability question. The condition is 'from those who prefer Action movies'. The total number of people who prefer Action is <math><mn>70</mn></math>. Among them, <math><mn>45</mn></math> are from Group A. The probability is <math><mfrac><mn>45</mn><mn>70</mn></mfrac><mo>=</mo><mfrac><mn>9</mn><mn>14</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For conditional probability P(A|B), the denominator is the total count of condition B.",
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
      "question": "Two independent events, A and B, have probabilities <math><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mn>0.6</mn></math> and <math><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo><mo>=</mo><mn>0.5</mn></math>. What is the probability that both events occur?",
      "options": {
        "A": "<math><mn>0.11</mn></math>",
        "B": "<math><mn>0.30</mn></math>",
        "C": "<math><mn>0.80</mn></math>",
        "D": "<math><mn>1.10</mn></math>"
      },
      "answer": "B",
      "explanation": "Since A and B are independent, <math><mi>P</mi><mo>(</mo><mi>A</mi><mtext> and </mtext><mi>B</mi><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>×</mo><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo><mo>=</mo><mn>0.6</mn><mo>×</mo><mn>0.5</mn><mo>=</mo><mn>0.30</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "If events are independent, multiply their probabilities to find the probability of both happening.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "In a survey of <math><mn>200</mn></math> people, <math><mn>120</mn></math> like tea, <math><mn>80</mn></math> like coffee, and <math><mn>40</mn></math> like both. If a person is selected at random, what is the probability that they like tea or coffee?",
      "options": {
        "A": "<math><mn>0.4</mn></math>",
        "B": "<math><mn>0.6</mn></math>",
        "C": "<math><mn>0.8</mn></math>",
        "D": "<math><mn>1.0</mn></math>"
      },
      "answer": "C",
      "explanation": "Use the formula <math><mi>P</mi><mo>(</mo><mi>T</mi><mo>&#8746;</mo><mi>C</mi><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>T</mi><mo>)</mo><mo>+</mo><mi>P</mi><mo>(</mo><mi>C</mi><mo>)</mo><mo>-</mo><mi>P</mi><mo>(</mo><mi>T</mi><mo>&#8745;</mo><mi>C</mi><mo>)</mo></math>. Number liking T or C is <math><mn>120</mn><mo>+</mo><mn>80</mn><mo>-</mo><mn>40</mn><mo>=</mo><mn>160</mn></math>. Probability is <math><mfrac><mn>160</mn><mn>200</mn></mfrac><mo>=</mo><mn>0.8</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Subtract the intersection (both) to avoid double counting when finding the union (or).",
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
      "question": "A spinner is divided into <math><mn>8</mn></math> equal sections numbered <math><mn>1</mn></math> through <math><mn>8</mn></math>. What is the probability of spinning a number that is either prime or even?",
      "options": {
        "A": "<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>",
        "B": "<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>",
        "C": "<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math>",
        "D": "<math><mn>1</mn></math>"
      },
      "answer": "C",
      "explanation": "Primes: <math><mo>{</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo>}</mo></math>. Evens: <math><mo>{</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>8</mn><mo>}</mo></math>. Union: <math><mo>{</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>7</mn><mo>,</mo><mn>8</mn><mo>}</mo></math>. Note <math><mn>2</mn></math> is in both, but listed once in the set. There are <math><mn>7</mn></math> unique numbers. <math><mi>P</mi><mo>=</mo><mfrac><mn>7</mn><mn>8</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "List the outcomes for each condition and combine them, ensuring no duplicates.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A bag contains <math><mi>x</mi></math> green marbles and <math><mn>5</mn></math> yellow marbles. If the probability of drawing a green marble is <math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>, what is the value of <math><mi>x</mi></math>?",
      "options": null,
      "answer": "10",
      "explanation": "<math><mi>P</mi><mo>(</mo><mtext>Green</mtext><mo>)</mo><mo>=</mo><mfrac><mi>x</mi><mrow><mi>x</mi><mo>+</mo><mn>5</mn></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></math>. Cross-multiply: <math><mn>3</mn><mi>x</mi><mo>=</mo><mn>2</mn><mo>(</mo><mi>x</mi><mo>+</mo><mn>5</mn><mo>)</mo><mo>&#8594;</mo><mn>3</mn><mi>x</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>10</mn><mo>&#8594;</mo><mi>x</mi><mo>=</mo><mn>10</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Set up an equation where probability equals favorable over total, then solve for the unknown.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A survey of <math><mn>50</mn></math> people found that <math><mn>30</mn></math> own a dog, <math><mn>20</mn></math> own a cat, and <math><mn>12</mn></math> own both. If a person is selected at random from those who own a dog, what is the probability that they also own a cat? (Express your answer as a decimal)",
      "options": null,
      "answer": "0.4",
      "explanation": "Condition: Own a dog (Total = <math><mn>30</mn></math>). Favorable: Own both (Total = <math><mn>12</mn></math>). <math><mi>P</mi><mo>(</mo><mtext>Cat</mtext><mo>|</mo><mtext>Dog</mtext><mo>)</mo><mo>=</mo><mfrac><mn>12</mn><mn>30</mn></mfrac><mo>=</mo><mn>0.4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Focus on the subset defined by the 'given' condition.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Events A and B are such that <math><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mn>0.4</mn></math>, <math><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo><mo>=</mo><mn>0.5</mn></math>, and <math><mi>P</mi><mo>(</mo><mi>A</mi><mo>&#8746;</mo><mi>B</mi><mo>)</mo><mo>=</mo><mn>0.7</mn></math>. Which of the following statements is true?",
      "options": {
        "A": "Events A and B are independent.",
        "B": "Events A and B are mutually exclusive.",
        "C": "Events A and B are neither independent nor mutually exclusive.",
        "D": "Events A and B are both independent and mutually exclusive."
      },
      "answer": "A",
      "explanation": "First find <math><mi>P</mi><mo>(</mo><mi>A</mi><mo>&#8745;</mo><mi>B</mi><mo>)</mo></math>. <math><mi>P</mi><mo>(</mo><mi>A</mi><mo>&#8746;</mo><mi>B</mi><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>+</mo><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo><mo>-</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>&#8745;</mo><mi>B</mi><mo>)</mo></math>. <math><mn>0.7</mn><mo>=</mo><mn>0.4</mn><mo>+</mo><mn>0.5</mn><mo>-</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>&#8745;</mo><mi>B</mi><mo>)</mo></math>, so <math><mi>P</mi><mo>(</mo><mi>A</mi><mo>&#8745;</mo><mi>B</mi><mo>)</mo><mo>=</mo><mn>0.2</mn></math>. Now check independence: <math><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo><mo>=</mo><mn>0.4</mn><mo>×</mo><mn>0.5</mn><mo>=</mo><mn>0.2</mn></math>. Since <math><mi>P</mi><mo>(</mo><mi>A</mi><mo>&#8745;</mo><mi>B</mi><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo></math>, they are independent.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Check independence by verifying if P(A and B) equals P(A) * P(B).",
      "additional_data": null
    },
    {
      "question_number": 12,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='90' fill='white' stroke='black' /><circle cx='100' cy='100' r='60' fill='lightgray' stroke='black' /><circle cx='100' cy='100' r='30' fill='gray' stroke='black' /></svg>",
      "question_chart_description": "A target with three concentric circles. Radii are 3, 6, and 9.",
      "question": "A dart hits the circular target shown above at a random point. The radii of the three concentric circles are <math><mn>3</mn></math>, <math><mn>6</mn></math>, and <math><mn>9</mn></math>. What is the probability that the dart lands in the gray region (the smallest circle)?",
      "options": {
        "A": "<math><mfrac><mn>1</mn><mn>9</mn></mfrac></math>",
        "B": "<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>",
        "C": "<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>",
        "D": "<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>"
      },
      "answer": "A",
      "explanation": "Probability is the ratio of areas. Area of smallest circle: <math><mi>&#960;</mi><msup><mrow><mo>(</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>9</mn><mi>&#960;</mi></math>. Total Area: <math><mi>&#960;</mi><msup><mrow><mo>(</mo><mn>9</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>81</mn><mi>&#960;</mi></math>. Probability: <math><mfrac><mrow><mn>9</mn><mi>&#960;</mi></mrow><mrow><mn>81</mn><mi>&#960;</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>9</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For geometric probability, use Area of Favorable Region / Total Area.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><style>text{font-family:Arial;font-size:14px;text-anchor:middle}</style><rect x='10' y='10' width='380' height='180' fill='none' stroke='black'/><line x1='10' y1='60' x2='390' y2='60' stroke='black'/><line x1='10' y1='110' x2='390' y2='110' stroke='black'/><line x1='10' y1='160' x2='390' y2='160' stroke='black'/><line x1='130' y1='10' x2='130' y2='190' stroke='black'/><line x1='210' y1='10' x2='210' y2='190' stroke='black'/><line x1='290' y1='10' x2='290' y2='190' stroke='black'/><text x='70' y='40'>Region</text><text x='170' y='40'>Option 1</text><text x='250' y='40'>Option 2</text><text x='340' y='40'>Total</text><text x='70' y='90'>North</text><text x='170' y='90'>120</text><text x='250' y='90'>80</text><text x='340' y='90'>200</text><text x='70' y='140'>South</text><text x='170' y='140'>180</text><text x='250' y='140'>120</text><text x='340' y='140'>300</text><text x='70' y='180'>Total</text><text x='170' y='180'>300</text><text x='250' y='180'>200</text><text x='340' y='180'>500</text></svg>",
      "question_chart_description": "Contingency table. North: Option 1 (120), Option 2 (80). South: Option 1 (180), Option 2 (120).",
      "question": "The table above shows the distribution of voters in two regions. Based on the data, which of the following statements is true about the events 'selecting a voter from the North region' and 'selecting a voter who prefers Option 1'?",
      "options": {
        "A": "The events are mutually exclusive.",
        "B": "The events are independent.",
        "C": "The events are not independent because <math><mn>0.6</mn><mo>&#8800;</mo><mn>0.4</mn></math>.",
        "D": "The events are not independent because <math><mn>0.6</mn><mo>&#8800;</mo><mn>0.24</mn></math>."
      },
      "answer": "B",
      "explanation": "Events A and B are independent if <math><mi>P</mi><mo>(</mo><mi>A</mi><mo>|</mo><mi>B</mi><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo></math> or if <math><mi>P</mi><mo>(</mo><mi>A</mi><mo>&#8745;</mo><mi>B</mi><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo></math>. <math><mi>P</mi><mo>(</mo><mtext>Option 1</mtext><mo>)</mo><mo>=</mo><mfrac><mn>300</mn><mn>500</mn></mfrac><mo>=</mo><mn>0.6</mn></math>. <math><mi>P</mi><mo>(</mo><mtext>Option 1</mtext><mo>|</mo><mtext>North</mtext><mo>)</mo><mo>=</mo><mfrac><mn>120</mn><mn>200</mn></mfrac><mo>=</mo><mn>0.6</mn></math>. Since <math><mi>P</mi><mo>(</mo><mtext>Option 1</mtext><mo>|</mo><mtext>North</mtext><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mtext>Option 1</mtext><mo>)</mo></math>, the events are independent.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Check for independence by comparing the conditional probability of an event to its marginal probability.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A weighted coin has a probability of <math><mn>0.4</mn></math> of landing on heads. If the coin is flipped <math><mn>3</mn></math> times, what is the probability of getting at least one head?",
      "options": {
        "A": "<math><mn>0.064</mn></math>",
        "B": "<math><mn>0.216</mn></math>",
        "C": "<math><mn>0.784</mn></math>",
        "D": "<math><mn>0.936</mn></math>"
      },
      "answer": "C",
      "explanation": "<math><mi>P</mi><mo>(</mo><mtext>At least 1 H</mtext><mo>)</mo><mo>=</mo><mn>1</mn><mo>-</mo><mi>P</mi><mo>(</mo><mtext>No H</mtext><mo>)</mo></math>. <math><mi>P</mi><mo>(</mo><mtext>T</mtext><mo>)</mo><mo>=</mo><mn>1</mn><mo>-</mo><mn>0.4</mn><mo>=</mo><mn>0.6</mn></math>. <math><mi>P</mi><mo>(</mo><mtext>TTT</mtext><mo>)</mo><mo>=</mo><msup><mn>0.6</mn><mn>3</mn></msup><mo>=</mo><mn>0.216</mn></math>. <math><mi>P</mi><mo>(</mo><mtext>At least 1</mtext><mo>)</mo><mo>=</mo><mn>1</mn><mo>-</mo><mn>0.216</mn><mo>=</mo><mn>0.784</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For 'at least one' problems, calculate 1 minus the probability of 'none'.",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "In a certain population, <math><mn>1</mn><mo>%</mo></math> of people have a specific disease. A test for the disease is <math><mn>90</mn><mo>%</mo></math> accurate for those who have the disease (True Positive) and <math><mn>95</mn><mo>%</mo></math> accurate for those who do not (True Negative). If a person tests positive, what is the approximate probability that they actually have the disease?",
      "options": {
        "A": "<math><mn>0.15</mn></math>",
        "B": "<math><mn>0.45</mn></math>",
        "C": "<math><mn>0.85</mn></math>",
        "D": "<math><mn>0.90</mn></math>"
      },
      "answer": "A",
      "explanation": "Assume 1000 people. Disease: 10 people. No Disease: 990. \nPositives: <math><mn>0.9</mn><mo>×</mo><mn>10</mn><mo>=</mo><mn>9</mn></math> (True Pos). <math><mn>0.05</mn><mo>×</mo><mn>990</mn><mo>=</mo><mn>49.5</mn></math> (False Pos). Total Pos = <math><58.5</mn></math>. <math><mi>P</mi><mo>(</mo><mtext>Disease</mtext><mo>|</mo><mtext>Pos</mtext><mo>)</mo><mo>=</mo><mfrac><mn>9</mn><mn>58.5</mn></mfrac><mo>&#8776;</mo><mn>0.15</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Use a hypothetical population (e.g., 1000) to build a contingency table for these types of problems.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A jar contains <math><mn>6</mn></math> red marbles and <math><mi>k</mi></math> blue marbles. If the probability of drawing two red marbles in a row without replacement is <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>, what is the value of <math><mi>k</mi></math>?",
      "options": null,
      "answer": "4",
      "explanation": "<math><mi>P</mi><mo>(</mo><mtext>RR</mtext><mo>)</mo><mo>=</mo><mfrac><mn>6</mn><mrow><mn>6</mn><mo>+</mo><mi>k</mi></mrow></mfrac><mo>×</mo><mfrac><mn>5</mn><mrow><mn>5</mn><mo>+</mo><mi>k</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></math>. <math><mn>90</mn><mo>=</mo><mo>(</mo><mn>6</mn><mo>+</mo><mi>k</mi><mo>)</mo><mo>(</mo><mn>5</mn><mo>+</mo><mi>k</mi><mo>)</mo></math>. <math><msup><mi>k</mi><mn>2</mn></msup><mo>+</mo><mn>11</mn><mi>k</mi><mo>+</mo><mn>30</mn><mo>=</mo><mn>90</mn></math>. <math><msup><mi>k</mi><mn>2</mn></msup><mo>+</mo><mn>11</mn><mi>k</mi><mo>-</mo><mn>60</mn><mo>=</mo><mn>0</mn></math>. <math><mo>(</mo><mi>k</mi><mo>-</mo><mn>4</mn><mo>)</mo><mo>(</mo><mi>k</mi><mo>+</mo><mn>15</mn><mo>)</mo><mo>=</mo><mn>0</mn></math>. Since <math><mi>k</mi><mo>></mo><mn>0</mn></math>, <math><mi>k</mi><mo>=</mo><mn>4</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For 'without replacement' problems, remember to decrease the numerator and denominator for the second event.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "There are <math><mn>5</mn></math> people in a room. If each person is assigned a random day of the week (Monday through Sunday) for a meeting, what is the probability that all <math><mn>5</mn></math> people are assigned to different days? (Round your answer to the nearest thousandth)",
      "options": null,
      "answer": "0.150",
      "explanation": "Total possibilities: <math><msup><mn>7</mn><mn>5</mn></msup></math>. Favorable: <math><mn>7</mn><mo>×</mo><mn>6</mn><mo>×</mo><mn>5</mn><mo>×</mo><mn>4</mn><mo>×</mo><mn>3</mn></math>. <math><mi>P</mi><mo>=</mo><mfrac><mn>2520</mn><mn>16807</mn></mfrac><mo>&#8776;</mo><mn>0.1499</mn></math>. Rounding to the nearest thousandth gives <math><mn>0.150</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For 'all different', use permutations for the numerator and exponents for the denominator.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A system consists of two components, A and B. Component A has a <math><mn>0.9</mn></math> probability of working, and Component B has a <math><mn>0.8</mn></math> probability of working. The components work independently. What is the probability that exactly one of the components works?",
      "options": null,
      "answer": "0.26",
      "explanation": "<math><mi>P</mi><mo>(</mo><mtext>Exactly 1</mtext><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>&#8745;</mo><mtext>Not </mtext><mi>B</mi><mo>)</mo><mo>+</mo><mi>P</mi><mo>(</mo><mtext>Not </mtext><mi>A</mi><mo>&#8745;</mo><mi>B</mi><mo>)</mo></math>. <math><mo>(</mo><mn>0.9</mn><mo>×</mo><mn>0.2</mn><mo>)</mo><mo>+</mo><mo>(</mo><mn>0.1</mn><mo>×</mo><mn>0.8</mn><mo>)</mo><mo>=</mo><mn>0.18</mn><mo>+</mo><mn>0.08</mn><mo>=</mo><mn>0.26</mn></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Break down complex events into mutually exclusive cases (e.g., A works/B fails OR A fails/B works).",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><style>text{font-family:Arial;font-size:14px;text-anchor:middle}</style><rect x='10' y='10' width='380' height='180' fill='none' stroke='black'/><line x1='10' y1='60' x2='390' y2='60' stroke='black'/><line x1='10' y1='110' x2='390' y2='110' stroke='black'/><line x1='10' y1='160' x2='390' y2='160' stroke='black'/><line x1='130' y1='10' x2='130' y2='190' stroke='black'/><line x1='210' y1='10' x2='210' y2='190' stroke='black'/><line x1='290' y1='10' x2='290' y2='190' stroke='black'/><text x='70' y='40'>Age</text><text x='170' y='40'>Yes</text><text x='250' y='40'>No</text><text x='340' y='40'>Total</text><text x='70' y='90'>18-25</text><text x='170' y='90'>40</text><text x='250' y='90'>60</text><text x='340' y='90'>100</text><text x='70' y='140'>26-35</text><text x='170' y='140'>70</text><text x='250' y='140'>30</text><text x='340' y='140'>100</text><text x='70' y='180'>Total</text><text x='170' y='180'>110</text><text x='250' y='180'>90</text><text x='340' y='180'>200</text></svg>",
      "question_chart_description": "Survey results on voting by age group. 18-25: 40 Yes, 60 No. 26-35: 70 Yes, 30 No.",
      "question": "The table above shows the responses to a survey about voting intent. If a respondent is chosen at random, what is the probability that they are in the 18-25 age group, given that they answered 'No'?",
      "options": {
        "A": "<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>",
        "B": "<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>",
        "C": "<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>",
        "D": "<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>"
      },
      "answer": "B",
      "explanation": "Condition: Answered 'No' (Total = <math><90</mn></math>). Favorable: 18-25 and 'No' (Count = <math><60</mn></math>). Probability <math><mo>=</mo><mfrac><mn>60</mn><mn>90</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the total for the 'given' condition first (denominator), then find the intersection (numerator).",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "Probability and conditional probability",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='80' fill='white' stroke='black'/><path d='M100,100 L180,100 A80,80 0 0,0 100,20 Z' fill='gray' stroke='black'/><text x='110' y='90'>90&#176;</text></svg>",
      "question_chart_description": "A circle with a shaded sector. The central angle of the sector is 90 degrees.",
      "question": "A point is selected at random inside the circle shown above. If the shaded sector has a central angle of <math><mn>90</mn><mo>&#176;</mo></math>, what is the probability that the selected point lies in the shaded region?",
      "options": {
        "A": "<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>",
        "B": "<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>",
        "C": "<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>",
        "D": "<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>"
      },
      "answer": "A",
      "explanation": "The probability is the ratio of the sector's area to the circle's area, which is the same as the ratio of the central angle to <math><mn>360</mn><mo>&#176;</mo></math>. <math><mfrac><mn>90</mn><mn>360</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For geometric probability involving circles, use the ratio of angles: Angle / 360.",
      "additional_data": null
    }
  ]
}
```
---


# SAT Math Question Difficulty Audit Report

## 1. Difficulty Distribution Summary
- **Declared Distribution:** Easy: 4, Medium: 6, Hard: 10
- **Audited Distribution:** Easy: 4, Medium: 8, Hard: 8
- **Alignment Score:** 18/20 (90%)

## 2. Mislabeled Questions Log

| Q# | Assigned Difficulty | Assessed Difficulty | Reason for Reclassification |
| :-- | :--- | :--- | :--- |
| 19 | Hard | Medium | The problem requires calculating a conditional probability from a contingency table ($P(A|B) = \frac{n(A \cap B)}{n(B)}$). This is a standard procedure with a clear path, identical in complexity to Q5 (Medium). |
| 20 | Hard | Medium | The problem requires a direct application of the geometric probability formula for a sector ($\frac{\text{Angle}}{360}$). The calculation ($90/360 = 1/4$) is trivial and requires low cognitive load. |

## 3. Detailed Analysis
- **Q16 (Hard):** Correctly labeled. Requires setting up and solving a quadratic equation derived from a probability scenario without replacement. High cognitive load.
- **Q15 (Hard):** Correctly labeled. Involves Bayes' theorem logic (or constructing a table from percentages) with potential for false positive/negative confusion.
- **Q11 (Hard):** Correctly labeled. Abstract conceptual check of independence and mutual exclusivity using formulas.
