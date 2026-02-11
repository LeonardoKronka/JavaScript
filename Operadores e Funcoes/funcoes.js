//__________
console.log("-----------------------------------")
console.log("FUNÇÕES EM JAVASCRIPT");

function saudacao() {
    console.log("Olá, JavaScript!");
}

saudacao();

//_____________

function nome(nome) {
    console.log("Olá, " + nome);
}

nome("Leo")

function somar(a,b) {
    return a + b;
}

console.log(somar(5,3));



//EXERCICIOS
console.log("EXERCICIOS FUNÇÕES")
//7. Criar função que calcula o IMC = peso/(alt*alt)
console.log("IMC")
let peso = prompt("Digite seu peso em kg:");
let altura = prompt("Digite sua altura em metros:");

function IMC(peso, altura) {
    return peso/(altura*altura);
}
console.log("O imc de uma pessoa com " + peso + "kg e " + altura + " de altura é: " + IMC(peso,altura));

//8. Criar função que verifica se o número é par ou ímpar
console.log("PAR E IMPAR")

let num = prompt("Digite um número:");

function parImpar(num) {
    if (num % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log("O número " + num + " é: " + parImpar(num));




