function over(element) {
    alert("mouseover");    
}
    
function out(element) {
    alert("mouseout"); 
    element.remove()   
}



// Los dos van a seleccionar la etiqueta hl
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
var logoImg = document.querySelector(".nav img");
var navH1 = document.querySelector(".nav h1");
var nav = document.querySelector(".nav");


console.log(h1)
console.log(title)
console.log(logoImg)




function cambioIMG(par){
    console.log(logoImg.src)
    if ( par== true )
    {   
        console.log(true)
        logoImg.src = './img/img.jpeg'
    } else{
        console.log(false)
        logoImg.src = './img/img2.avif'
    }

}

function cambioColor(){
    console.log(nav.style.backgroundColor)


    let option = nav.style.backgroundColor

    switch(option){
        case "blue" :
            console.log(1)
            nav.style.backgroundColor ="red"
            break;
        case "red" : 
            console.log(2)
            nav.style.backgroundColor ="blue"
            break;
        default:
            console.log("default")
    }

}


function cambio(){
    var h3 = document.querySelector("h3");
    if (h3.innerText == "New Title"){
        h3.innerText = "Lorem Ipsem";
        h1.innerText = h3.innerText
        navH1.innerText = h1.innerText
        cambioIMG(true)
        cambioColor()
    }
    else{
        h3.innerText = "New Title"
        h1.innerText = h3.innerText
        navH1.innerText = h1.innerText
        cambioIMG(false)
        cambioColor()
    }
    
}

function setActive(element) {
    
    if(element.classList.includes("dark-mode")) {
        element.innerText = "Cambiar al modo claro";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Cambiar al modo oscuro";
        element.classList.add("dark-mode");
    }
}