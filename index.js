// Simple calculator logic in javascript
let num1 = 10;
let num2 = 5;
let operator = '*';

if (operator === '+') {
    console.log(num1 + num2);
}
else if (operator === '-') {
    console.log(num1 - num2);
}
else if (operator === '*') {
    console.log(num1 * num2);
}
else if (operator === '/') {
    if (num2 != 0) {
        console.log(num1 / num2);
    }
    else {
    console.log('Cannot divide by zero');
    }
}   
else {
    console.log('Invalid operator');
} 
    
// Create a variable `marks` to store student marks (0–100).


// Add bonus marks using an assignment operator (+=).


// Determine the grade using if-else:
// 90–100 → Grade A
// 70–89 → Grade B
// 50–69 → Grade C
// Below 50 → Grade F


// Determine Pass/Fail using a ternary operator:
// (marks >= 50 ? "Pass" : "Fail")


// Give remarks based on grade using a switch statement:
// A → "Excellent!"
// B → "Good"
// C → "Average"
// F → "Needs Improvement"


// Print the results in the console:
// Marks, Grade, Result, Remark

let marks = 75;
let bonus = 5;
marks += bonus;
let grade;
if (marks >= 90 && marks <= 100) {
    grade = 'A';
} else if (marks >= 70 && marks < 90) {
    grade = 'B';
} else if (marks >= 50 && marks < 70) {
    grade = 'C';
} else {
    if (marks > 100 && marks < 0) {
        console.log('Invalid marks');
    }
    else {
    grade = 'F';
    }
}

let result = (marks >= 50) ? "Pass" : "Fail";
let remark;
switch (grade) {
    case 'A':
        remark = 'Excellent!';
        break;
    case 'B':
        remark = 'Good';
        break;
    case 'C':
        remark = 'Average';
        break;
    case 'F':
        remark = 'Needs Improvement';
        break;
    default:
        remark = 'Invalid grade';
}
console.log('Marks:' + marks);
console.log('Grade:' + grade);
console.log('Result:' + result);
console.log('Remark:' + remark);
console.log(`Marks: ${marks}, Grade: ${grade}, Result: ${result}, Remark: ${remark}`);  