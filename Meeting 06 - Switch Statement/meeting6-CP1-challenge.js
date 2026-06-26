var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;
var operators = ['x', '+', '-', ':'];
var random = Math.floor(Math.random() * 4);
var choosenOperator = operators[random];
var total;
 
console.log("num1 = " + num1 + " | num2 = " + num2 + " | operator = " + choosenOperator);
 
switch (choosenOperator) {
  case 'x':
    total = num1 * num2;
    console.log(total);
    break;
  case '+':
    total = num1 + num2;
    console.log(total);
    break;
  case '-':
    total = num1 - num2;
    console.log(total);
    break;
  case ':':
    total = num1 / num2;
    console.log(total);
    break;
}
 