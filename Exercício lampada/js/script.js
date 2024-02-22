const ligar = document.getElementById('botao')
const lampada = document.getElementById('lamp')
const restaurar = document.getElementById('restaurar')

function estlamp(){

    return lampada.src.indexOf('quebrada') > -1
    //retorna verdadeiro ou falso

}

function mdlamp(){

    return lampada.src.indexOf('ligada') > -1
    //retorna verdadeiro ou falso

}

function 

function lampbk(){
    lampada.src = "img/quebrada.jpg"
}
lampada.addEventListener('dblclick',lampbk)

function lamprt(){

    if (estlamp()){
        lampada.src = "img/desligada.jpg"
    }

}