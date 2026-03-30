let num1=null;
let num2=null;
let oper=null;
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
let operators = document.querySelectorAll(".operation")
let equals = document.querySelector("#equals")
operarr = Array.from(operators)
let display = document.querySelector('#display')
console.log(numbers);
numarr = Array.from(numbers);
numarr.forEach((num)=>num.addEventListener("click",function(){
    numStr=num.textContent;
    display.textContent+=numStr;
}))

operarr.forEach((opr)=>opr.addEventListener("click",function(){
    num1 = parseFloat(display.textContent);
    oper = opr.textContent;
    display.textContent="";
}))

Clear.addEventListener("click", ()=> display.textContent="");