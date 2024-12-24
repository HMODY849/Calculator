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
let x =""
let y = 0;
let opr="";
let res= "";

const audio = new Audio("./audio/2.5.mp3");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

zero.addEventListener("click", function(){
    let zero = document.createElement("p");
    zero.textContent="0";
    screen2.appendChild(zero);
    let zero1 = document.createElement("p")
    zero1.textContent="0";
    screen1.appendChild(zero1);
    x += "0";
})

one.addEventListener("click", function(){
    let one = document.createElement("p");
    one.textContent="1";
    screen2.appendChild(one);
    let one1 = document.createElement("p")
    one1.textContent="1";
    screen1.appendChild(one1);
    x += "1";
})

two.addEventListener("click", function(){
    let two = document.createElement("p");
    two.textContent="2";
    screen2.appendChild(two);
    let two1 = document.createElement("p")
    two1.textContent="2";
    screen1.appendChild(two1);
    x += "2";
})

three.addEventListener("click", function(){
    let three = document.createElement("p");
    three.textContent="3";
    screen2.appendChild(three);
    let three1 = document.createElement("p")
    three1.textContent="3";
    screen1.appendChild(three1);
    x += "3";
})

four.addEventListener("click", function(){
    let four = document.createElement("p");
    four.textContent="4";
    screen2.appendChild(four);
    let four1 = document.createElement("p")
    four1.textContent="4";
    screen1.appendChild(four1);
    x+="4";
})

five.addEventListener("click", function(){
    let five = document.createElement("p");
    five.textContent="5";
    screen2.appendChild(five);
    let five1 = document.createElement("p")
    five1.textContent="5";
    screen1.appendChild(five1); 
    x += "5";
})

six.addEventListener("click", function(){
    let six = document.createElement("p");
    six.textContent="6";
    screen2.appendChild(six);
    let six1 = document.createElement("p")
    six1.textContent="6";
    screen1.appendChild(six1);
    x += "6";
})

seven.addEventListener("click",function(){
    let seven = document.createElement("p");
    seven.textContent="7";
    screen2.appendChild(seven);
    let seven1 = document.createElement("p")
    seven1.textContent="7";
    screen1.appendChild(seven1);
    x += "7";
})

eigth.addEventListener("click",function(){
    let eigth = document.createElement("p");
    eigth.textContent="8";
    screen2.appendChild(eigth);
    let eigth1 = document.createElement("p")
    eigth1.textContent="8";
    screen1.appendChild(eigth1);
    x += "8";
})

nine.addEventListener("click", function(){
    let nine = document.createElement("p");
    nine.textContent="9";
    screen2.appendChild(nine);
    let nine1 = document.createElement("p")
    nine1.textContent="9";
    screen1.appendChild(nine1);
    x += "9";
})


divide.addEventListener("click", function(){
    let divide = document.createElement("p");
    divide.textContent="÷";
    screen2.appendChild(divide);
    let divide1 = document.createElement("p")
    divide1.textContent="÷";
    screen1.appendChild(divide1);
    screen2.innerHTML=``
    y = Number(x);
    x = "";
    opr = "/"
})

multiply.addEventListener("click", function(){
    let multiply = document.createElement("p");
    multiply.textContent="x";
    screen2.appendChild(multiply);
    let multiply1 = document.createElement("p")
    multiply1.textContent="x";
    screen1.appendChild(multiply1);
    screen2.innerHTML=``
    y = Number(x);
    x = "";
    opr = "*"
})

minus.addEventListener("click", function(){
    let minus = document.createElement("p");
    minus.textContent="-";
    screen2.appendChild(minus);
    let minus1 = document.createElement("p")
    minus1.textContent="-";
    screen1.appendChild(minus1);
    screen2.innerHTML=``
    y = Number(x);
    x = "";
    opr = "-"
})

plus.addEventListener("click", function(){
    let plus = document.createElement("p");
    plus.textContent="+";
    screen2.appendChild(plus);
    let plus1 = document.createElement("p")
    plus1.textContent="+";
    screen1.appendChild(plus1);
    screen2.innerHTML=``
    y = Number(x);
    x = "";
    opr = "+"
})

function showResult (){
    screen2.innerHTML=``;
    x = res;
    let m = document.createElement("p")
        m.innerHTML=`${res}`;
        screen2.appendChild(m);
    let r = document.createElement("p")
        r.innerHTML=`${res}`;
        screen1.appendChild(r);
}
equal.addEventListener("click", function(){
    let equal = document.createElement("p");
    equal.textContent="=";
    screen2.appendChild(equal);
    let equal1 = document.createElement("p");
    equal1.textContent="=";
    screen1.appendChild(equal1);
    screen1.innerHTML=``;
    x =+x
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
    }else if(opr ==="/"){;
        res = y/x;
        showResult();
         return res
    }
})


deleteButton.addEventListener("click", function(){
    screen1.removeChild(screen1.lastChild);
    screen2.removeChild(screen2.lastChild);
    x=x.slice(0,(x.length)-1);
})

clear.addEventListener("click", function(){
    screen2.innerHTML=``;
    screen1.innerHTML=``;
    x="";
    y=0;
    res="";
})

persanteg.addEventListener("click", function(){
    let persanteg = document.createElement("p");
    persanteg.textContent="%";
    screen2.appendChild(persanteg);
})

dot.addEventListener("click", function(){
    let dot = document.createElement("p");
    dot.textContent=".";
    screen2.appendChild(dot);
})
