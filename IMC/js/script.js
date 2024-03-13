var resultado = document.getElementById('resultado')

function altura(valor) {
    document.getElementById('valoralt').innerText = valor;
}

function peso(valor) {
    document.getElementById('valorpeso').innerText = valor;
}

function IMC(){

    var sexo = document.getElementById('sexo').value
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)
    var IMC = peso / (altura * altura)

    resultado.innerHTML = IMC;

    if (sexo === 'masculino') {
        if (IMC < 20) {
            resultado.innerHTML = 'Abaixo do peso';
        } else if (IMC >= 20 && IMC < 25) {
            resultado.innerHTML = 'Normal';
        } else if (IMC >= 25 && IMC < 30) {
            resultado.innerHTML = 'Sobrepeso';
        } else if (IMC >= 30 && IMC < 35) {
            resultado.innerHTML = 'Obesidade grau I';
        } else if (IMC >= 40) {
            resultado.innerHTML = 'Obesidade grau III';
        } else {
            resultado.innerHTML = 'Obesidade grau II';
        }
    } else {
        if (IMC < 19) {
            resultado.innerHTML = 'Abaixo do peso';
        } else if (IMC >= 19 && IMC < 24) {
            resultado.innerHTML = 'Normal';
        } else if (IMC >= 24 && IMC < 29) {
            resultado.innerHTML = 'Sobrepeso';
        } else if (IMC >= 29 && IMC < 34) {
            resultado.innerHTML = 'Obesidade grau I';
        } else if (IMC >= 39) {
            resultado.innerHTML = 'Obesidade grau III';
        } else {
            resultado.innerHTML = 'Obesidade grau II';
        }
    }

}