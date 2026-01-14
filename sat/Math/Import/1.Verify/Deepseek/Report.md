# Math Test JSON Verification Report

## Summary
- Total Questions: 20
- Issues Found: 6
- Critical Errors: 3
- Minor Issues/Warnings: 3

## Detailed Issue Log
| Q# | Category | Issue Description | Proposed Correction |
| :-- | :--- | :--- | :--- |
| Metadata | Metadata Inconsistency | total_questions in metadata (20) does not match actual questions count (20) | Set total_questions to 20 |
| 3 | Explanation Flaw | Explanation calculates slopes but misidentifies the segment with the "greatest slope." The explanation correctly identifies magnitude for C-D but then selects B-C. The question asks for "greatest slope" (considering sign), so B-C (slope=1) is actually correct, but the explanation is confusing. | Reword explanation to clarify that while C-D has the steepest magnitude, B-C has the greatest positive value. |
| 7 | Mathematical Error | The explanation finds points (3,5) and (-1,-3), but option C lists (1,1) and (3,5). (1,1) is incorrect. | Correct option C to: `"(3,5) and (-1,-3)"`. The answer is still C, but the option text must be fixed. |
| 11 | Mathematical Error | Answer should be A (The mean is greater than the median) for right-skewed distribution | Set answer to "A" |
| 16 | Mathematical Error | Answer should be 3 | Set answer to "3" |
| 17 | Mathematical Error | Answer should be 3 | Set answer to "3" |

## Metadata Consistency Findings
- The metadata focus domains are ["Problem-Solving and Data Analysis", "Advanced Math"] which align well with the questions.
- The metadata focus skills are ["Evaluating statistical claims: observational studies and experiments", "Nonlinear functions"] which are covered in the questions.
- Some questions are from the "Algebra" domain which is not explicitly listed in focus_domains, but this is acceptable as Algebra is foundational to Advanced Math.

```json

```