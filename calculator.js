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
divide(2,5);
console.log(division);

const displayParagraph = document.querySelector('.display-paragraph');
let num = '';
document.querySelectorAll('.number-button').forEach((button)=>{
  button.addEventListener('click',()=>{
    num = button.value;
    displayParagraph.innerHTML = displayParagraph.innerHTML += num;
  });
});

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click',()=>{
  displayParagraph.innerHTML = '';
});



