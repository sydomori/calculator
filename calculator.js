let sum;
function Add(num1,num2){
 sum = num1 += num2;
 return sum;
};
Add(2,5);
console.log(sum);

let subtraction;
function subtract(num1,num2){
 subtraction = num1 -= num2;
 return subtraction;
}
subtract(2,5);
console.log(subtraction);

let multiplication;
function multiply(num1,num2){
 multiplication = num1 *= num2;
 return multiplication;
}
multiply(2,5);
console.log(multiplication);

let division;
function divide(num1,num2){
 division = num1 /= num2;
 return division;
}
console.log(divide(2,5));


let number1;
let number2;
let operator;

function operate(num1,num2,operator){
 if(operator === '+'){
  return Add(num1,num2);
 }else if(operator === '-'){
  return subtract(num1,num2)
 }else if(operator === '*'){
  return multiply(num1,num2)
 }else if(operator === '/'){
  return divide(num1,num2);
 }
}







