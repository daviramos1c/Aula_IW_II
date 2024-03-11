var resultado = document.getElementById('resultado')

function sm(){

    var nm1 = parseInt(document.getElementById('num1').value)
    var nm2 = parseInt(document.getElementById('num2').value)
    
    var soma = nm1 + nm2

    resultado.innerHTML = 'A soma é: ' + soma;
}

function sb(){

    var nm1 = parseInt(document.getElementById('num1').value)
    var nm2 = parseInt(document.getElementById('num2').value)
    
    var subtracao = nm1 - nm2

    resultado.innerHTML = 'A subtração é: ' + subtracao;
}

function dv(){

    var nm1 = parseInt(document.getElementById('num1').value)
    var nm2 = parseInt(document.getElementById('num2').value)
    
    var divisao = nm1 / nm2

    resultado.innerHTML = 'A divisão é: ' + divisao;
}

function mt(){

    var nm1 = parseInt(document.getElementById('num1').value)
    var nm2 = parseInt(document.getElementById('num2').value)
    
    var multiplicacao = nm1 * nm2

    resultado.innerHTML = 'A multiplicação é: ' + multiplicacao;
}

function lp(){

    resultado.innerHTML = '';
    
}

