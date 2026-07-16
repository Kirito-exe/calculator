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
        case "=":
            return a;
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
    oper = opr.textContent;
    if (num1===null){
        num1=parseFloat(display.textContent);
        display.textContent="";
    }else{
        num2=parseFloat(display.textContent);
        num1=operation(num1,num2,oper);
        display.textContent="";
    }
}))
equals.addEventListener("click",function(){
    num2=parseInt(display.textContent);
    num1=operation(num1,num2,oper);
    display.textContent=num1;
})
Clear.addEventListener("click",function(){
    display.textContent='';
    num1=null;
    num2=null;
    oper=null;
});