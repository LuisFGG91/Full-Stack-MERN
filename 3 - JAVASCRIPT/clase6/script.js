/*
function counter(top,base,val) {    
    for(var num = base; num <= top; num+=val){
        console.log(num);
    }
    return num
}

const valor = counter(10 , 0 ,1);
num = 3
console.log(num)

console.log("Valor = " , valor , valor , "valor", valor )
console.log("Valor = " + valor )
console.log(valor + "Valor = ")
console.log(`valor ${valor} valores  ${valor}  ${valor}   ${valor}      ${valor}`)
console.log()

alert('holamundo')


*/

function loop(){
    mensaje();
    counter();
}

function mensaje(){
    alert('este es un buen curso')
}
var x = 0
function counter(){
    x++;
    alert(x)
}

function example(elemento) {
    console.log("elemento clickeado", elemento);
}

function turnOff(element) {
    if (element.innerText == "Off")
    {
        element.innerText = "On"
    }
    else{
        element.innerText = "Off"
        element.remove();
    }
}

function hide(e){
    console.log(this)
    console.log(e)
    e.remove();
}
