//Exercício 1

function ex1(){
    var nm = prompt("Digite seu nome: ")
    alert("Olá "+ nm +", prazer em conhecer!")
}

//Exercício 2

function ex2(){
    var nm = prompt("Digite seu nome: ")
    txt2.innerHTML = "Olá "+ nm +", prazer em conhecer!"
}

//Exercício 3

function bt1(){
    txt3.innerHTML = "botão 1"
}
function bt2(){
    txt3.innerHTML = "botão 2"
}
function bt3(){
    txt3.innerHTML = "botão 3"
}

//Exercício 4

function vermelho(){
    document.getElementById("txt4").style.color = "rgb(255,0,0)"
    txt4.innerHTML = "Você escolheu vermelho"
}

function azul(){
    document.getElementById("txt4").style.color = "rgb(0,0,255)"
    txt4.innerHTML = "Você escolheu azul"
}

function verde(){
    document.getElementById("txt4").style.color = "rgb(0,255,0)"
    txt4.innerHTML = "Você escolheu verde"
}

//Exercício 5

function ex5 (){
    var produto = prompt("Qual é o produto: ")
    var valor = prompt("Qual o valor do produto R$: ")
    txt5.innerHTML = "Você comprou " + produto + " por R$ " + valor
}

//Exercício 6

function ex6 (){
    var produto = prompt("Qual é o produto: ")
    var valor = prompt("Qual o valor do produto R$: ")
    var pago = prompt("Qual foi o valor dado R$: ")

    if (pago >= valor){        
        var troco = pago - valor
        txt6.innerHTML = "Você comprou: " + produto + ", por R$:" + valor + " recebeu o troco de R$:" + troco
    }

    else{
        txt6.innerHTML = "Valor insuficiênte"
    }
}
    

//Exercício 7

function ex7 (){
    var salario = parseInt (prompt("Digite o seu salario: ")) 
    var porcentagem = parseInt (prompt("Digite a porcentagem do aumento: "))

    var aumento = porcentagem * salario / 100
    var sal = salario + aumento

    txt7_1.innerHTML = "Seu aumento foi de: " + porcentagem + "%, que é aproximadamente R$" + aumento
    txt7_2.innerHTML = "Seu salário atual é de: " + sal
}

//Exercício 8

function ex8() {
    var a = parseInt(prompt("Digite o valor de a: "));
    var b = parseInt(prompt("Digite o valor de b: "));
    var c = parseInt(prompt("Digite o valor de c: "));

    var delta = (b * b) - (4 * a * c);

    txt8_1.innerHTML = "A é " + a + "x² + " + b + "x + " + c + " = 0";
    txt8_2.innerHTML = "O valor de Δ é = " + delta;

}

