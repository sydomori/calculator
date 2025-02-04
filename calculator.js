let sum;
function Add(num1,num2){
 sum = num1 += num2;
 return sum;
};


let subtraction;
function subtract(num1,num2){
 subtraction = num1 -= num2;
 return subtraction;
}


let multiplication;
function multiply(num1,num2){
 multiplication = num1 *= num2;
 return multiplication;
}


let division;
function divide(num1,num2){
 division = num1 /= num2;
 return division;
}
;


let number1;
let number2;
let operator;
let isEnteringSecondNumber = false;

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

const displayInput = document.querySelector(".display-input");
console.log(displayInput.value);

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((button)=>{
  button.addEventListener('click',()=>{
    const value = button.value;
    if(isEnteringSecondNumber){
      if(number2 === null || displayInput === "0"){
        displayInput.value = value;
      }else{
        displayInput.value += value;
      }
      number2 = parseFloat(displayInput.value);
      
    }else{
      if(number1 === null || displayInput === "0"){
        displayInput.value = value;
      }else{
        displayInput.value += value;
      }
      number1 = parseFloat(displayInput.value);
      
    }
  });
});

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((button)=>{
  button.addEventListener('click',()=>{
    const value = button.value;
    if(number1 !== null){
      operator = value;
      displayInput.value = displayInput.value += value;
      isEnteringSecondNumber = true;
      displayInput.value = '';
    }
  });
});

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click',()=>{
  displayInput.value = '';
  number1 = null;
  number2 = null;
  isEnteringSecondNumber = false;
});

const equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener('click',()=>{
  let result = operate(number1,number2,operator);
  displayInput.value = result;
  number1 = result;
  isEnteringSecondNumber = true;
});



