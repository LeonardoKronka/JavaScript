//--------Uma Função que Mostre a Hora Atual--------//
function mostrarHora() {
    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    console.log("Hora Atual: " + hora + ":" + minutos);
}

mostrarHora();

//--------Uma função que receba dois numeros e mostre a soma e média---------//
function calcularSomaEMedia(num1, num2) {
    let soma = num1 + num2;
    let media = soma/2;
}

let num1 = prompt("Digite um número: ")
let num2 = prompt("Digite outro número: ")
