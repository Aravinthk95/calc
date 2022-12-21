let maincontainer=document.createElement("div");
maincontainer.setAttribute("class","maincont");
maincontainer.innerHTML="calculator";


let parent=document.createElement('div');
parent.setAttribute('class','difi');
maincontainer.append(parent);


let parent1=document.createElement('div');
parent1.setAttribute('class','subcont');
parent.append(parent1);

let parent2=document.createElement('input');
parent2.setAttribute('type','text');
// parent2.setAttribute('placeholder','0');
parent2.setAttribute('id','usernum');
parent1.append(parent2);

let line1=document.createElement('div');
line1.setAttribute('class','row');
parent1.append(line1);

let seven=document.createElement('button');
// seven.setAttribute('onClick',display);
// seven.setAttribute('placeholder','7');
seven.setAttribute('class','button7');
seven.addEventListener('click',display('7'));
seven.textContent=7;
line1.append(seven);

let eight=document.createElement('button');
// eight.setAttribute('onClick',display);
// seven.setAttribute('placeholder','8');
eight.setAttribute('class','button8');
eight.addEventListener('click',display('8'));
eight.textContent=8;
line1.append(eight);

let nine=document.createElement('button');
// nine.setAttribute('onClick',display);
// seven.setAttribute('placeholder','9');
nine.setAttribute('class','button9');
nine.addEventListener('click',display('9'));
nine.textContent=9;
line1.append(nine);

let ADD=document.createElement('button');
// ADD.setAttribute('onClick',display);
// seven.setAttribute('placeholder','+');
ADD.setAttribute('class','buttonadd');
ADD.addEventListener('click',display('+'));
ADD.textContent=" + ";
line1.append(ADD);

let line2=document.createElement('div');
line2.setAttribute('class','row2');
parent1.append(line2);

let four=document.createElement('button');
// four.setAttribute('onClick',display);
// seven.setAttribute('placeholder','7');
four.setAttribute('class','button4');
four.addEventListener('click',display('4'));
four.textContent=4;
line2.append(four);

let five=document.createElement('button');
// five.setAttribute('onClick',display);
// seven.setAttribute('placeholder','8');
five.setAttribute('class','button5');
five.addEventListener('click',display('5'));
five.textContent=5;
line2.append(five);

let six=document.createElement('button');
// six.setAttribute('onClick',display);
// seven.setAttribute('placeholder','9');
six.setAttribute('class','button6');
six.addEventListener('click',display('6'));
six.textContent=6;
line2.append(six);

let SUB=document.createElement('button');
// SUB.setAttribute('onClick',display);
// seven.setAttribute('placeholder','+');
SUB.setAttribute('class','buttonsub');
SUB.addEventListener('click',display('-'));
SUB.textContent=" - ";
line2.append(SUB);

let line3=document.createElement('div');
line3.setAttribute('class','row3');
parent1.append(line3);

let one=document.createElement('button');
// one.setAttribute('onClick',display);
// seven.setAttribute('placeholder','7');
one.setAttribute('class','button1');
one.addEventListener('click',display('1'));
one.textContent=1;
line3.append(one);

let two=document.createElement('button');
two.setAttribute('onClick',display);
// seven.setAttribute('placeholder','8');
two.setAttribute('class','button2');
two.addEventListener('click',display('2'));
two.textContent=2;
line3.append(two);

let three=document.createElement('button');
// three.setAttribute('onClick',display);
// seven.setAttribute('placeholder','9');
three.setAttribute('class','button3');
three.addEventListener('click',display('3'));
three.textContent=3;
line3.append(three);

let MUL=document.createElement('button');
// MUL.setAttribute('onClick',display);
// seven.setAttribute('placeholder','+');
MUL.setAttribute('class','buttonsub');
MUL.addEventListener('click',display('*'));
MUL.textContent=" * ";
line3.append(MUL);

let line4=document.createElement('div');
line4.setAttribute('class','row4');
parent1.append(line4);

let zero=document.createElement('button');
// zero.setAttribute('onClick',display('0'));
// seven.setAttribute('placeholder','7');
zero.setAttribute('class','button0');
zero.addEventListener('click',display('0'));
zero.textContent=0;
line4.append(zero);

let dot=document.createElement('button');
// dot.setAttribute('onClick',display);
// seven.setAttribute('placeholder','8');
dot.setAttribute('class','buttondote');
dot.addEventListener('click',display('.'));
dot.textContent=".";
line4.append(dot);

let clear=document.createElement('button');
clear.setAttribute('onClick',display);
// seven.setAttribute('placeholder','9');
clear.setAttribute('class','buttonc');
// clear.addEventListener('click',clea());
clear.textContent="C";
line4.append(clear);

let DIV=document.createElement('button');
// DIV.setAttribute('onClick',display);
// seven.setAttribute('placeholder','+');
DIV.setAttribute('class','buttondiv');
DIV.addEventListener('click',display('/'));
DIV.textContent=" / ";
line4.append(DIV);

let line5=document.createElement('div');
line5.setAttribute('class','row5');
parent1.append(line5);

let clearall=document.createElement('button');
// clearall.setAttribute('onClick',display);
// seven.setAttribute('placeholder','7');
clearall.setAttribute('class','buttonce');
// clearall.addEventListener('click',clearall());
clearall.textContent="CE";
line5.append(clearall);

let percent=document.createElement('button');
// percent.setAttribute('onClick',display);
// seven.setAttribute('placeholder','8');
percent.setAttribute('class','buttonper');
// percent.addEventListener('click',percentage());
percent.textContent="%";
line5.append(percent);

let delet=document.createElement('button');
// delet.setAttribute('onClick',display);
// seven.setAttribute('placeholder','9');
delet.setAttribute('class','buttondel');
// delet.addEventListener('click',del());
delet.textContent="DEL";
line5.append(delet);

let equal=document.createElement('button');
// equal.setAttribute('onClick',display);
// seven.setAttribute('placeholder','+');
equal.setAttribute('class','buttonequ');
equal.addEventListener('click',calculate);
equal.textContent=" = ";
line5.append(equal);


document.body.append(maincontainer);



let cod=document.getElementById('usernum');

function display(value){
    return () => {
        cod.value+=value;
    }
    
}
function calculate(){
    try{
        cod.value = eval(cod.value);
    }
    catch(err)
    {
        alert("invalid input");
    }
    }