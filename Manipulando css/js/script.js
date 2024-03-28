///// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnPink = document.querySelector('#btpink')

let btnYellow = document.querySelector('#btyellow')

let btnBlue = document.querySelector('#btblue')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnPink.addEventListener('click', modoPink)
btnYellow.addEventListener('click', modoYellow)
btnBlue.addEventListener('click', modoBlue)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("yellow");
    tela.classList.remove("blue");
    
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.add("light");
    tela.classList.remove("pink");
    tela.classList.remove("dark");
    tela.classList.remove("yellow");
    tela.classList.remove("blue");
}

function modoPink() {
    //event.preventDefault();
    console.log('modo pink')
    tela.classList.add("pink");
    tela.classList.remove("light");
    tela.classList.remove("dark");
    tela.classList.remove("yellow");
    tela.classList.remove("blue");
}

function modoYellow() {
    //event.preventDefault();
    console.log('modo yellow')
    tela.classList.add("yellow");
    tela.classList.remove("light");
    tela.classList.remove("dark");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
}

function modoBlue() {
    //event.preventDefault();
    console.log('modo blue')
    tela.classList.add("blue");
    tela.classList.remove("light");
    tela.classList.remove("dark");
    tela.classList.remove("pink");
    tela.classList.remove("yellow");
}