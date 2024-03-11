const botao = document.getElementById('botao')
const lampada = document.getElementById('lamp')
const restaurar = document.getElementById('restaurar')

function vrlamp(){ //verifica se ela está quebrada

    return lampada.src.indexOf('quebrada') > -1

}

function lampbk(){ //quebra a lampada

    lampada.src = "img/quebrada.jpg" 
    
}

lampada.addEventListener('dblclick', lampbk)

function lamprt(){ //restaura a lampada

    if (vrlamp()){
        lampada.src = "img/desligada.jpg" 
    }

}

restaurar.addEventListener('click', lamprt)

function lamplig(){ //liga a lampada
    if (!vrlamp()){
        lampada.src = "img/ligada.jpg"
    }
}

lampada.addEventListener('mouseover', lamplig)

function lampdls(){ //desliga a lampada
    if (!vrlamp()){
        lampada.src = "img/desligada.jpg"
    }
}

lampada.addEventListener('mouseleave', lampdls)

function estlamp(){

    return lampada.src.indexOf('desligada') > -1

}

function botaofunc(){
    if (!vrlamp()){
        if (estlamp()){
            lampada.src = "img/ligada.jpg"
        }    
        else{
            lampada.src = "img/desligada.jpg"
        }
    }

}

botao.addEventListener('click', botaofunc)