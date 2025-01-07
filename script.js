const deleteButton = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const persanteg = document.querySelector(".persanteg");
const divide = document.querySelector(".divide");
const seven = document.querySelector(".seven");
const eigth = document.querySelector(".eigth");
const nine = document.querySelector(".nine");
const multiply = document.querySelector(".multiply");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const minus = document.querySelector(".minus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const plus = document.querySelector(".plus");
const p_m = document.querySelector(".p_m");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
const screen2 = document.querySelector(".screen2");
const screen1 = document.querySelector(".screen1");
const num = document.getElementById("num");
const op = document.getElementById("op");
const num2 = document.getElementById("num2");
let x =""
let y = 0;
let opr="";
let res= "";
// have to edit the sound effect
const audio = new Audio("./audio/2.mp3");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

zero.addEventListener("click", function(){
    x += "0";
    num.innerHTML= x;
})

one.addEventListener("click", function(){
    x += "1";
    num.innerHTML= x;
})

two.addEventListener("click", function(){
    x += "2";
    num.innerHTML= x;
})

three.addEventListener("click", function(){
    x += "3";
    num.innerHTML= x;
})

four.addEventListener("click", function(){
    x+="4";
    num.innerHTML= x;
})

five.addEventListener("click", function(){
    x += "5";
    num.innerHTML= x;
})

six.addEventListener("click", function(){
    x += "6";
    num.innerHTML= x;
})

seven.addEventListener("click",function(){
    x += "7";
    num.innerHTML= x;
})

eigth.addEventListener("click",function(){
    x += "8";
    num.innerHTML= x;
})

nine.addEventListener("click", function(){
    x += "9";
    num.innerHTML= x;
})


divide.addEventListener("click", function(){
    y = Number(x);
    x = "";
    opr = "/"
    op.innerHTML=`÷`
   num.innerHTML=``
   num2.innerHTML=y;
})

multiply.addEventListener("click", function(){
    y = Number(x);
    x = "";
    opr = "*"
    op.innerHTML=`x`
    num.innerHTML=``
    num2.innerHTML=y;
})

minus.addEventListener("click", function(){
    y = Number(x);
    x = "";
    opr = "-"
    op.innerHTML=`-`
    num.innerHTML=``
   num2.innerHTML=y;
})

plus.addEventListener("click", function(){
    y = Number(x);
    x = "";
    opr = "+"
    num.innerHTML=``
    num2.innerHTML=y;
    op.innerHTML=`+`;
})

function showResult (){
    x = res;
        num.innerHTML=Math.round(res*1000)/1000;
        num2.innerHTML=``;
        op.innerHTML=``;

}
equal.addEventListener("click", function(){
    x = Number(x)
    if(opr==="+"){
        res = y + x
        showResult();
        return res;
    }else if(opr==="-"){
        res = y-x;
        showResult();
        return res;
    }else if(opr==="*"){
        res = y*x;
        showResult();
        return res;
    }else if(opr ==="/"){
        if (x==0){
            res = "ERROR!"
            showResult();
            return  res
        }else{
            res = y/x;
            res= Math.round(res*1000)/1000;
            showResult();
             return res;
        }
    }else if(opr==="%"){
        res = x/100;
        op.innerHTML=``
        showResult();
        return res
    }   
})


deleteButton.addEventListener("click", function(){
    if (res==="ERROR!"){
        x="";
        y=0;
        res="";
        num.innerHTML=``;
        op.innerHTML=``;
        num2.innerHTML=``;
    }else{
        x= String(x);
        x=x.slice(0,(x.length)-1) ;
        res =x;
        num.innerHTML=x
    }
   
})

clear.addEventListener("click", function(){
    x="";
    y=0;
    res="";
    num.innerHTML=``;
    num2.innerHTML=``;
    op.innerHTML=``;
})

persanteg.addEventListener("click", function(){
    opr="%";
    op.innerHTML=`%`
})

dot.addEventListener("click", function(){
    x+="."
    num.innerHTML=x
})

p_m.addEventListener("click", function(){
    x += "-"
    num.innerHTML=x
})
