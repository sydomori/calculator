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


const displayInput = document.querySelector('.display-input');

let number;
let number2;
let isEnteringSecondNumber = false;

document.querySelectorAll('.number-button').forEach((button)=>{
  button.addEventListener('click',()=>{
    number2 = displayInput.value;
    number = displayInput.value;
    displayInput.value = displayInput.value += button.value;
    console.log(number);
    console.log(number2);
  });
});

let operator = '';

document.querySelectorAll('.operator-button').forEach((button)=>{
  button.addEventListener('click',()=>{
    operator = button.value;
    displayInput.value = displayInput.value += operator;
    console.log(operator);
  });
});

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click',()=>{
  displayInput.value = '';
});


function operate(Num1,Num2,Operator){
  Num1 = Number(number);
  Num2 = Number(number2);
  Operator = operator;
 if(Operator === '+'){
  return Add(Num1,Num2);
 } else if(Operator === '-'){
  return subtract(Num1,Num2);
 }else if(Operator === '*'){
  return multiply(Num1,Num2);
 }else if(Operator === '/'){
  return divide(Num1,Num2);
 }
}

const equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener('click',()=>{
  result = operate(number,number2,operator);
  displayInput.value = result;
});






