// #scenario-based questions
// 1. Eligibility Check
// Write a condition to check if a student is eligible for a scholarship. The criteria are:
// - The student’s grade is A or B.
// - The student’s attendance is above 75%.
// Use a ternary operator to assign "Eligible" or "Not Eligible" to a variable.

var A =68;
var B =77;
var percentage = 75;

var scholarship =(A >= percentage)?
" A is eligible for scholarship":
(B>=percentage)?" B eligible for scholarship":
"Both are  not-eligible for scharship";
console.log(scholarship)
