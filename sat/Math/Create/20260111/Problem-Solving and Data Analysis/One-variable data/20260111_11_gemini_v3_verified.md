# Math Test JSON Verification Report

## Summary

* **Total Questions:** 20
* **Issues Found:** 9
* **Critical Errors:** 7 (Data contradictions, scratchpad text, incorrect answers/logic)
* **Minor Issues/Warnings:** 2 (Metadata mismatch, formatting)

## Detailed Issue Log

| Q# | Category | Issue Description | Proposed Correction |
| --- | --- | --- | --- |
| Meta | Metadata Inconsistency | `question_type_distribution` states 15 MCQ / 5 SPR, but the actual count is 14 MCQ / 6 SPR. | Update metadata to `{"multiple_choice": 14, "student_produced_response": 6}`. |
| 4 | Explanation Flaw / Content | Explanation contains internal "scratchpad" monologue ("Wait, actually it's bimodal...") and suggests changing data. | Change question data to `4, 4, 4, 6, 7, 8, 10, 12` (Mode=4). Rewrite explanation professionally using MathML. |
| 5 | Style/Tone | Explanation for Option D uses informal language ("This is the mode or something."). | Replace with precise mathematical terminology (e.g., "This value does not represent a standard measure of center for this data set."). |
| 6 | Mathematical Error / Explanation | The data provided results in Mean = Median = 80, but the correct answer (A) requires Mean > Median. Explanation contains scratchpad text. | Change frequency of score 100 from 1 to 2. New Mean = 81.25, Median = 80. Rewrite explanation to reflect these calculations. |
| 8 | Ambiguity | The question asks "what happens" to mean/median generically, but the effect on the median depends on the specific data distribution (it doesn't always stay the same). | Replace with a specific data set: `2, 18, 18, 42`. Adding 30 makes the set `2, 18, 18, 30, 42` (Median stays 18, Mean increases). |
| 12 | Mathematical Error | The list of 11 integers sums to 450, not 440 (Mean != 40). The explanation has flawed modular arithmetic logic leading to 68, but 68 results in a non-integer mean. | Change list to `35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45` (Sum=440). Correct Answer is 64. Fix explanation logic. |
| 13 | Content Contradiction | The question states data set Y has 25 values, but the frequency table sums to only 19. | Update Set Y frequencies to `10:6, 11:5, 12:5, 13:5, 14:4` (Sum=25). Verify Mean X > Mean Y holds. |
| 18 | Question Type Mismatch | The question is an SPR (Student Produced Response) but the answer is an algebraic expression "3s". SPRs must be numeric. | Change problem to numeric: "SD is 2... multiplied by 3...". Correct Answer: 6. |
| 19 | Calculation Error | Explanation correctly calculates sum of added values as 31 (91-60), but the provided answer is 32. | Correct `answer` to "31". Update explanation to match. |

## Metadata Consistency Findings

* Domain and Skill mappings are consistent.
* Difficulty distribution counts match the metadata.

---

# Corrected JSON File

```json
{
  "test_metadata": {
    "focus_domains": [
      "Problem-Solving and Data Analysis"
    ],
    "focus_skills": [
      "One-variable data: Distributions and measures of center and spread"
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
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "1, 3, 3, 5, 6, 7, 12\n\nWhat is the median of the seven data values shown?",
      "options": {
        "A": "3",
        "B": "5",
        "C": "6",
        "D": "7"
      },
      "answer": "B",
      "explanation": "Choice B is correct. When a data set has an odd number of values, the median is the middle value when ordered from least to greatest. The set has <math>7</math> values. The ordered list is <math>1, 3, 3, 5, 6, 7, 12</math>. The median is the fourth value, which is <math>5</math>.\n\nChoice A is incorrect. This is the mode.\nChoice C is incorrect. This is the approximate mean.\nChoice D is incorrect. This is the range.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Always order the data values from least to greatest before finding the median.",
      "additional_data": null
    },
    {
      "question_number": 2,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='0' width='400' height='300' fill='white'/><line x1='40' y1='260' x2='360' y2='260' stroke='black'/><line x1='40' y1='260' x2='40' y2='20' stroke='black'/><text x='20' y='265'>0</text><text x='20' y='215'>1</text><text x='20' y='165'>2</text><text x='20' y='115'>3</text><text x='20' y='65'>4</text><text x='5' y='140' transform='rotate(-90,5,140)'>Number of days</text><text x='70' y='280'>0</text><text x='130' y='280'>1</text><text x='190' y='280'>2</text><text x='250' y='280'>3</text><text x='310' y='280'>4</text><text x='200' y='295'>Hours studied</text><rect x='50' y='210' width='40' height='50' fill='blue'/><rect x='110' y='160' width='40' height='100' fill='blue'/><rect x='170' y='60' width='40' height='200' fill='blue'/><rect x='230' y='110' width='40' height='150' fill='blue'/><rect x='290' y='160' width='40' height='100' fill='blue'/></svg>",
      "question_chart_description": "Bar graph showing the number of days a student studied for each number of hours. The x-axis represents 'Hours studied' (0 to 4) and the y-axis represents 'Number of days' (0 to 4). The heights of the bars are: 0 hours (1 day), 1 hour (2 days), 2 hours (4 days), 3 hours (3 days), 4 hours (2 days).",
      "question": "The bar graph summarizes the number of hours a student studied each day for 12 days.\n\nFor how many of these days did the student study for 2 hours?",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "answer": "D",
      "explanation": "Choice D is correct. To find the number of days the student studied for <math>2</math> hours, locate the value <math>2</math> on the horizontal axis labeled 'Hours studied.' The height of the bar above this value corresponds to the number of days. The bar reaches the line for <math>4</math> on the vertical axis, indicating the student studied for <math>2</math> hours on <math>4</math> days.\n\nChoice A is incorrect. This is the number of days the student studied for 0 hours.\nChoice B is incorrect. This is the number of days the student studied for 1 or 4 hours.\nChoice C is incorrect. This is the number of days the student studied for 3 hours.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In bar graphs, read the height of the specific bar corresponding to the value in question.",
      "additional_data": null
    },
    {
      "question_number": 3,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "5, 5, 5, 6, 7, 7, 8, 8, 9\n\nWhich frequency table correctly represents the data listed?",
      "options": {
        "A": "Number\n5\n6\n7\n8\n9\nFrequency\n3\n1\n2\n2\n1",
        "B": "Number\n3\n1\n2\n2\n1\nFrequency\n5\n6\n7\n8\n9",
        "C": "Number\n5\n6\n7\n8\n9\nFrequency\n2\n1\n3\n2\n1",
        "D": "Number\n3\n1\n2\n2\n1\nFrequency\n5\n6\n7\n8\n9"
      },
      "answer": "A",
      "explanation": "Choice A is correct. A frequency table counts how often each data value appears. In the list <math>5, 5, 5, 6, 7, 7, 8, 8, 9</math>:\n- The number <math>5</math> appears <math>3</math> times.\n- The number <math>6</math> appears <math>1</math> time.\n- The number <math>7</math> appears <math>2</math> times.\n- The number <math>8</math> appears <math>2</math> times.\n- The number <math>9</math> appears <math>1</math> time.\nThis matches the table in Choice A.\n\nChoice B is incorrect. The labels for number and frequency are reversed.\nChoice C is incorrect. The frequencies for 5 and 7 are incorrect.\nChoice D is incorrect. This table swaps the values and frequencies.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Systematically count the occurrence of each value to verify frequency tables.",
      "additional_data": null
    },
    {
      "question_number": 4,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Easy",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The data values are 4, 4, 4, 6, 7, 8, 10, 12. What is the mode of the data set?",
      "options": {
        "A": "4",
        "B": "6",
        "C": "7",
        "D": "8"
      },
      "answer": "A",
      "explanation": "Choice A is correct. The mode is the data value that occurs most frequently in a set. Counting the frequencies:\n- <math>4</math> appears <math>3</math> times.\n- <math>6, 7, 8, 10, 12</math> each appear <math>1</math> time.\nSince <math>4</math> has the highest frequency, the mode is <math>4</math>.\n\nChoice B, C, and D are incorrect because these values appear less frequently than 4.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "The mode is the most frequent value; identifying it requires counting the repetitions of each distinct value.",
      "additional_data": null
    },
    {
      "question_number": 5,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "2, 4, 4, 5, 6, 7, 9, 9\n\nWhat is the median of the data set shown?",
      "options": {
        "A": "4",
        "B": "5.5",
        "C": "6",
        "D": "7"
      },
      "answer": "B",
      "explanation": "Choice B is correct. The data set has <math>8</math> values (an even number). The values are already in ascending order: <math>2, 4, 4, 5, 6, 7, 9, 9</math>. The median is the average of the two middle values (the 4th and 5th values). The 4th value is <math>5</math> and the 5th value is <math>6</math>. The median is <math>\\frac{5 + 6}{2} = 5.5</math>.\n\nChoice A is incorrect. This is one of the middle values, but not the median.\nChoice C is incorrect. This is the other middle value.\nChoice D is incorrect. This value is above the median.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "For an even number of data points, average the two middle values to find the median.",
      "additional_data": null
    },
    {
      "question_number": 6,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Scores of 16 Participants in a Quiz\n\n<table><thead><tr><td>Score</td><td>Frequency</td></tr></thead><tbody><tr><td>70</td><td>4</td></tr><tr><td>75</td><td>3</td></tr><tr><td>80</td><td>3</td></tr><tr><td>85</td><td>2</td></tr><tr><td>90</td><td>1</td></tr><tr><td>95</td><td>1</td></tr><tr><td>100</td><td>2</td></tr></tbody></table>\n\nThe table above shows the distribution of scores of the 16 participants in a quiz. Which of the following gives the correct order of the mean, median, and mode of the scores?",
      "options": {
        "A": "mode < median < mean",
        "B": "mode < mean < median",
        "C": "median < mode < mean",
        "D": "mean < mode < median"
      },
      "answer": "A",
      "explanation": "Choice A is correct. \n**Mode:** The score with the highest frequency is <math>70</math> (frequency 4).\n**Median:** There are <math>16</math> scores. The median is the average of the 8th and 9th values. Ordered values:\n- 1st-4th: 70\n- 5th-7th: 75\n- 8th-10th: 80\nBoth the 8th and 9th values are <math>80</math>, so the median is <math>80</math>.\n**Mean:** Calculate the weighted sum: <math>70(4) + 75(3) + 80(3) + 85(2) + 90(1) + 95(1) + 100(2) = 280 + 225 + 240 + 170 + 90 + 95 + 200 = 1300</math>. The mean is <math>\\frac{1300}{16} = 81.25</math>.\nComparing the values: <math>70 < 80 < 81.25</math>, which corresponds to Mode < Median < Mean.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "To compare centers, calculate each measure precisely. For grouped data, find the position of the median using cumulative frequency.",
      "additional_data": null
    },
    {
      "question_number": 7,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Medium",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Data value | Frequency\n5 | 4\n6 | 4\n7 | 9\n8 | 9\n9 | 10\n10 | 12\n11 | 10\n12 | 0\n13 | 7\nThe frequency table summarizes the 65 data values in a data set. What is the maximum data value in the data set?",
      "options": null,
      "answer": "13",
      "explanation": "The maximum data value is the largest value in the 'Data value' column that has a frequency greater than zero. The table lists values up to <math>13</math>. The frequency for <math>13</math> is <math>7</math> (which is greater than 0). Therefore, the maximum data value is <math>13</math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "In frequency tables, scan the value column for the highest number, but ensure its corresponding frequency is not zero.",
      "additional_data": null
    },
    {
      "question_number": 8,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The data set 2, 18, 18, 42 has a mean of 20 and a median of 18. If a new value of 30 is added to the data set, what happens to the mean and median?",
      "options": {
        "A": "Mean increases, median stays the same",
        "B": "Mean stays the same, median increases",
        "C": "Both increase",
        "D": "Both stay the same"
      },
      "answer": "A",
      "explanation": "Choice A is correct. \nOriginal set: <math>2, 18, 18, 42</math>. Sum = <math>80</math>, Mean = <math>20</math>, Median = <math>18</math> (average of 18 and 18).\nNew set with 30 added: <math>2, 18, 18, 30, 42</math>.\n**New Mean:** Sum = <math>80 + 30 = 110</math>. Count = <math>5</math>. Mean = <math>\\frac{110}{5} = 22</math>. The mean increases from 20 to 22.\n**New Median:** The ordered list is <math>2, 18, 18, 30, 42</math>. The middle value (3rd) is <math>18</math>. The median stays the same.\nThus, the mean increases and the median stays the same.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Adding a value greater than the mean increases the mean. The median is determined by position and may or may not change depending on the distribution.",
      "additional_data": null
    },
    {
      "question_number": 9,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The range of a data set is 15, and the minimum is 5. What is the maximum?",
      "options": {
        "A": "10",
        "B": "15",
        "C": "20",
        "D": "25"
      },
      "answer": "C",
      "explanation": "Choice C is correct. The range is defined as the difference between the maximum and minimum values: <math>\\text{Range} = \\text{Maximum} - \\text{Minimum}</math>. \nSubstituting the given values: <math>15 = \\text{Maximum} - 5</math>. \nAdding 5 to both sides: <math>\\text{Maximum} = 20</math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Recall the formula Range = Max - Min. Rearrange it to solve for the missing value.",
      "additional_data": null
    },
    {
      "question_number": 10,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Medium",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which measure of center is most affected by an outlier?",
      "options": {
        "A": "Mode",
        "B": "Median",
        "C": "Mean",
        "D": "Range"
      },
      "answer": "C",
      "explanation": "Choice C is correct. The mean is calculated using the sum of all values. An outlier (an extremely high or low value) significantly changes the sum, thus pulling the mean toward it. The median depends on position and is generally resistant to outliers. The mode is simply the most frequent value and is rarely affected by a single outlier. The range is affected, but it is a measure of spread, not center.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When data is skewed or contains outliers, the median is often a better measure of center than the mean.",
      "additional_data": null
    },
    {
      "question_number": 11,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='0' width='400' height='200' fill='white'/><line x1='40' y1='150' x2='360' y2='150' stroke='black'/><text x='40' y='170'>20</text><text x='93' y='170'>22</text><text x='147' y='170'>24</text><text x='200' y='170'>26</text><text x='253' y='170'>28</text><text x='307' y='170'>30</text><text x='360' y='170'>32</text><text x='10' y='60'>Group A</text><text x='10' y='110'>Group B</text><line x1='40' y1='50' x2='93' y2='50' stroke='black' stroke-width='2'/><rect x='93' y='40' width='107' height='20' fill='none' stroke='black' stroke-width='2'/><line x1='200' y1='40' x2='200' y2='60' stroke='black' stroke-width='2'/><line x1='253' y1='50' x2='307' y2='50' stroke='black' stroke-width='2'/><line x1='67' y1='100' x2='120' y2='100' stroke='black' stroke-width='2'/><rect x='120' y='90' width='107' height='20' fill='none' stroke='black' stroke-width='2'/><line x1='227' y1='90' x2='227' y2='110' stroke='black' stroke-width='2'/><line x1='227' y1='100' x2='280' y2='100' stroke='black' stroke-width='2'/></svg>",
      "question_chart_description": "Two box plots sharing the same x-axis (mass in kg). Group A's box plot spans from 20 to 30, with the box from 22 to 28 and the vertical median line at 26. Group B's box plot spans from 21 to 29, with the box from 23 to 28 and the vertical median line at 25.",
      "question": "The box plots summarize the masses, in kilograms, of two groups of animals. Based on the box plots, which of the following statements must be true?",
      "options": {
        "A": "The mean mass of group A is greater than the mean mass of group B.",
        "B": "The mean mass of group A is less than the mean mass of group B.",
        "C": "The median mass of group A is greater than the median mass of group B.",
        "D": "The median mass of group A is less than the median mass of group B."
      },
      "answer": "C",
      "explanation": "Choice C is correct. In a box plot, the vertical line inside the box represents the median of the data. \n- For Group A, the median line is at <math>26</math> kg.\n- For Group B, the median line is at <math>25</math> kg.\nSince <math>26 > 25</math>, the median mass of Group A is greater than that of Group B. \n\nChoices A and B are incorrect because box plots do not provide enough information to determine the exact mean of the data.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the median in a box plot as the line dividing the box. Do not confuse it with the mean, which cannot be read directly from the plot.",
      "additional_data": null
    },
    {
      "question_number": 12,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Data set B consists of 12 positive integers less than 70. The list shown gives 11 of the integers from data set B.\n\n35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45\nThe mean of these 11 integers is 40. If the mean of data set B is an integer that is greater than 40, what is the value of the largest integer from data set B?",
      "options": null,
      "answer": "64",
      "explanation": "First, calculate the sum of the given 11 integers. Since their mean is <math>40</math>, their sum is <math>11 \\times 40 = 440</math>. \nLet <math>x</math> be the 12th integer. The total sum of the 12 integers is <math>440 + x</math>. \nThe mean of the 12 integers is <math>\\frac{440 + x}{12}</math>. We are told this mean is an integer greater than <math>40</math>. \nLet the mean be <math>k</math>. Then <math>440 + x = 12k</math>, where <math>k > 40</math>. \nAlso, <math>x</math> is an integer less than 70 (<math>x < 70</math>). \nSince <math>k > 40</math>, the sum <math>440 + x</math> must be greater than <math>480</math> (<math>12 \\times 40</math>). This implies <math>x > 40</math>. \nWe need to find the largest <math>x < 70</math> such that <math>440 + x</math> is divisible by <math>12</math>. \n<math>440 \\div 12 = 36</math> with a remainder of <math>8</math> (since <math>36 \\times 12 = 432</math>). \nFor <math>440 + x</math> to be divisible by 12, <math>8 + x</math> must be divisible by 12. \nPossible values for <math>x</math> where <math>x \\equiv 4 \\pmod{12}</math>: \n- <math>4</math> (too small, sum < 480)\n- <math>16</math> (too small)\n- <math>28</math> (too small)\n- <math>40</math> (mean would be exactly 40, need > 40)\n- <math>52</math> (<math>440+52=492</math>, <math>492/12 = 41</math>)\n- <math>64</math> (<math>440+64=504</math>, <math>504/12 = 42</math>)\n- <math>76</math> (greater than 70)\nThe largest valid integer is <math>64</math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Set up an equation for the mean: Total Sum = n * Mean. Use modular arithmetic to find values that satisfy divisibility conditions.",
      "additional_data": null
    },
    {
      "question_number": 13,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Value | Data set X frequency | Data set Y frequency\n10 | 3 | 6\n11 | 4 | 5\n12 | 5 | 5\n13 | 6 | 5\n14 | 7 | 4\nData set X and data set Y each consist of 25 values. The table shows the frequencies of the values for each data set. Which of the following statements best compares the means of the two data sets?",
      "options": {
        "A": "The mean of data set X is greater than the mean of data set Y.",
        "B": "The mean of data set X is less than the mean of data set Y.",
        "C": "The mean of data set X is equal to the mean of data set Y.",
        "D": "There is not enough information to compare the means of the data sets."
      },
      "answer": "A",
      "explanation": "Choice A is correct. To find the means, calculate the weighted sum of values for each set and divide by the total frequency (25).\n**Data Set X:** \nSum = <math>10(3) + 11(4) + 12(5) + 13(6) + 14(7) = 30 + 44 + 60 + 78 + 98 = 310</math>.\nMean X = <math>\\frac{310}{25} = 12.4</math>.\n**Data Set Y:** \nSum = <math>10(6) + 11(5) + 12(5) + 13(5) + 14(4) = 60 + 55 + 60 + 65 + 56 = 296</math>.\nMean Y = <math>\\frac{296}{25} = 11.84</math>.\nSince <math>12.4 > 11.84</math>, the mean of data set X is greater than the mean of data set Y.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Calculate the mean from a frequency table by summing (value * frequency) and dividing by the total number of items.",
      "additional_data": null
    },
    {
      "question_number": 14,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A data set has mean 50 and standard deviation 5. If all values are increased by 10, what is the new mean and standard deviation?",
      "options": {
        "A": "Mean 60, SD 5",
        "B": "Mean 60, SD 15",
        "C": "Mean 50, SD 15",
        "D": "Mean 50, SD 5"
      },
      "answer": "A",
      "explanation": "Choice A is correct. \n- **Mean:** When a constant <math>k</math> is added to every value in a data set, the mean increases by <math>k</math>. New Mean = <math>50 + 10 = 60</math>.\n- **Standard Deviation (SD):** Adding a constant shifts the data but does not change the spread of the data values relative to each other. Therefore, the standard deviation remains the same. New SD = <math>5</math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Adding a constant affects measures of position (mean, median) but has no effect on measures of spread (range, standard deviation).",
      "additional_data": null
    },
    {
      "question_number": 15,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The standard deviation of a data set is 0. What must be true?",
      "options": {
        "A": "All values are the same",
        "B": "The mean is 0",
        "C": "The range is 0",
        "D": "Both A and C"
      },
      "answer": "D",
      "explanation": "Choice D is correct. Standard deviation measures the spread of data around the mean. If the standard deviation is <math>0</math>, there is no spread, meaning every data value is identical (Choice A). If all values are the same, the difference between the maximum and minimum (range) is also <math>0</math> (Choice C). Therefore, both A and C are true.\n\nChoice B is incorrect because the values could be any number (e.g., 5, 5, 5), not necessarily 0.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "A standard deviation of zero implies a completely uniform data set with no variation.",
      "additional_data": null
    },
    {
      "question_number": 16,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A data set has 10 values with a mean of 15. If the largest value is removed, the mean of the remaining 9 values is 14. What was the largest value? (Enter an integer)",
      "options": null,
      "answer": "24",
      "explanation": "Use the formula <math>\\text{Sum} = \\text{Mean} \\times \\text{Count}</math>.\n1. Total sum of the original 10 values: <math>15 \\times 10 = 150</math>.\n2. Total sum of the remaining 9 values: <math>14 \\times 9 = 126</math>.\n3. The removed value is the difference between the two sums: <math>150 - 126 = 24</math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "When values are added or removed, compare the total sums before and after the change to find the value of the item.",
      "additional_data": null
    },
    {
      "question_number": 17,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The data set is 10, 12, 14, x, 18, 20, 22. For the median of this data set to be 16, what must be the value of x?",
      "options": null,
      "answer": "16",
      "explanation": "The data set has <math>7</math> values. The median is the value in the 4th position when ordered. The known values are <math>10, 12, 14, 18, 20, 22</math>. \n- Values less than 16: <math>10, 12, 14</math> (3 values)\n- Values greater than 16: <math>18, 20, 22</math> (3 values)\nFor <math>16</math> to be the median (the 4th value), <math>x</math> must be <math>16</math> so that it sits exactly in the middle: <math>10, 12, 14, \\mathbf{16}, 18, 20, 22</math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Identify the position of the median in the ordered list and determine what value x must take to occupy that position.",
      "additional_data": null
    },
    {
      "question_number": 18,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "A data set has a mean of 10 and a standard deviation of 2. If each value in the data set is multiplied by 3, what is the new standard deviation?",
      "options": null,
      "answer": "6",
      "explanation": "When every value in a data set is multiplied by a positive constant <math>k</math>, the standard deviation is multiplied by <math>k</math>. \nHere, <math>k = 3</math> and the original standard deviation is <math>2</math>. \nNew Standard Deviation = <math>2 \\times 3 = 6</math>.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Multiplying data by a factor scales the standard deviation by that same factor.",
      "additional_data": null
    },
    {
      "question_number": 19,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "SPR",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "The data set 8, 10, 12, 14, 16 has a mean of 12 and a range of 8. Two new values are added to the set. The new set of 7 values has a mean of 13 and a range of 10. What is the sum of the two added values?",
      "options": null,
      "answer": "31",
      "explanation": "First, find the sum of the added values. \n- Original sum (5 values): <math>5 \\times 12 = 60</math>.\n- New sum (7 values): <math>7 \\times 13 = 91</math>.\n- Sum of two added values = <math>91 - 60 = 31</math>.\n(Note: While the range information confirms the values are consistent with the data structure, only the change in total sum is needed to find the sum of the added values.)",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Focus on the change in total Sum (Mean * Count) to find the sum of added or removed values.",
      "additional_data": null
    },
    {
      "question_number": 20,
      "domain": "Problem-Solving and Data Analysis",
      "skill": "One-variable data: Distributions and measures of center and spread",
      "difficulty": "Hard",
      "question_type": "MCQ",
      "question_chart_svg": null,
      "question_chart_description": null,
      "question": "Which of the following data sets has the greatest standard deviation?",
      "options": {
        "A": "1, 2, 3, 4, 5",
        "B": "10, 20, 30, 40, 50",
        "C": "1, 1, 1, 1, 100",
        "D": "5, 5, 5, 5, 5"
      },
      "answer": "C",
      "explanation": "Choice C is correct. Standard deviation measures how far data values are from the mean. \n- Set D has <math>0</math> deviation.\n- Set A is tightly clustered.\n- Set B is spread out, but the values are evenly spaced.\n- Set C contains a massive outlier (<math>100</math>) compared to the other values (<math>1</math>). This creates a very large distance from the mean (approx 20) for the outlier, squaring to a huge contribution to variance. \nVisually or by calculation, the extreme outlier in C produces a larger standard deviation than the uniform spacing in B.",
      "explanation_chart_svg": null,
      "explanation_chart_description": null,
      "score_improvement_tip": "Outliers generally increase standard deviation more than uniform spreading because squared differences weigh large deviations heavily.",
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
| **Easy** | 4 | **6** |
| **Medium** | 6 | **6** |
| **Hard** | 10 | **8** |

* **Alignment Score:** **80%** (16/20 questions correctly labeled)
* **Overall Assessment:** The test is slightly skewed towards higher difficulty labels than warranted. Several questions labeled "Hard" or "Medium" rely on direct retrieval or single-step procedures that fit lower difficulty tiers according to Digital SAT specifications.

---

## 2. Mislabeled Questions Log

The following questions were found to be misclassified based on the number of steps and cognitive load required.

| Q# | Assigned Difficulty | Assessed Difficulty | Reason for Reclassification |
| --- | --- | --- | --- |
| **7** | Medium | **Easy** | **Direct Retrieval:** The problem asks for the maximum data value from a frequency table. This requires only scanning the first column for the highest value with a non-zero frequency. No calculation or conceptual synthesis is required. |
| **9** | Medium | **Easy** | **One-Step Arithmetic:** The problem requires solving . This is a fundamental one-step equation that does not reach the complexity threshold for "Medium." |
| **11** | Hard | **Medium** | **Visual Inspection:** The question asks to compare medians from two box plots. This is a direct visual task (identifying the lines inside the boxes). While box plots can be tricky, simple inequality comparison of visible features is a Medium-tier skill, lacking the abstract reasoning usually required for "Hard." |
| **16** | Hard | **Medium** | **Standard Procedure:** Finding a missing value given the change in mean is a routine procedural problem (). It does not involve abstract variables, complex modeling, or novel insight typical of "Hard" questions. |

---

## 3. Detailed Analysis

* **Well-Calibrated Questions:**
* **Q12 (Hard):** This question is excellently calibrated. It combines mean calculation with modular arithmetic/number theory ( divisible by 12), requiring a high cognitive load and strategic testing of values.
* **Q17 (Hard):** This requires abstract reasoning about the *position* of a variable  within an ordered list to satisfy a median condition. This is a perfect example of a "Hard" SAT data question.
* **Q6 (Medium):** This question requires calculating Mean, Median, and Mode and then ordering them. The multi-step nature and potential for calculation errors make it a solid "Medium."


* **General Observation on "Hard" Stats Questions:**
* The test correctly identifies conceptual properties of Standard Deviation (Q14, Q15, Q18, Q20) as "Hard." In the Digital SAT context, questions that require theoretical knowledge (e.g., "how does adding a constant affect SD?") rather than calculator crunching are often categorized as Hard/Advanced because they test deep understanding over rote procedure. This alignment is good.


* **Recommendation:**
* To balance the difficulty distribution, consider modifying **Q7** and **Q9** to include an extra step (e.g., for Q9, ask for the mean of the min and max, rather than just the max) to justify a "Medium" label. Alternatively, simply re-tag them as "Easy" to reflect the actual student experience.

