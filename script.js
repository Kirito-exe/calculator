let num1=0;
let num2=0;
let oper="";
function add(a,b){return a+b};
function sub(a,b){return a-b};
function multi(a,b){return a*b};
function div(a,b){return a/b};
function operation(a,b,oper){
    switch(oper){
        case "+":
            return add(a,b);
        case "-":
            return sub(a,b);
        case "x":
            return multi(a,b);
        case "/":
            return div(a,b);
    }
}
let numbers = document.querySelectorAll(".numbers");
let display = document.querySelector('#display')
console.log(numbers);
numarr = Array.from(numbers);
numarr.forEach((num)=>num.addEventListener("click",function(){
    numStr=num.textContent;
    display.textContent+=numStr;
}))

Clear.addEventListener("click", ()=> display.textContent="");