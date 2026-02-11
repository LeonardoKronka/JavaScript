//--------Uma Função que Mostre a Hora Atual--------//
function mostrarHora() {
    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    console.log("Hora Atual: " + hora + ":" + minutos);
}

mostrarHora();

//--------Uma função que receba dois numeros e mostre a soma e média---------//
let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");

function calcularSomaEMedia(num1, num2) {
    let soma = parseFloat(num1) + parseFloat(num2);
    let media = soma / 2;
    console.log("Soma: " + soma);
    console.log("Média: " + media);
}

calcularSomaEMedia(num1, num2);

//--------Uma Função que receba um nome e mostre a quantidade de letras e o nome em maiusculo---------//
let nome = prompt("Digite um nome: ")

function quantEmaiusculo(nome) {
    let quant = nome.length;
    let maiusculo = nome.toUpperCase();
    console.log("Quantidade de letras: " + quant);
    console.log("Nome em Maiúsculo: " + maiusculo);
}

quantEmaiusculo(nome)

//---------Uma Função que receba uma frase e verifica se contém a palavra "HTML"-------------//
let frase = prompt("Digite uma Frase: ")

function verificarFrase(frase) {
    if (frase.toUpperCase().includes("HTML")) {
        console.log("A frase tem a palavra 'HTML'.")
    } else{
        console.log("A frase não tem a palavra 'HTML'.")
    }
}

verificarFrase(frase)
