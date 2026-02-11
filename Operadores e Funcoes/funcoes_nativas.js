//------------------------------------------------------------------------------------
console.log("-----------------------------------")
console.log("----------FUNÇÕES NATIVAS----------")
console.log("-----------------------------------")

//Data e Hora
console.log("DATA E HORA")

let agora = new Date();
console.log("Data atual: " + agora);


function mostrarDataHora() {
    let data = new Date();

    console.log("Dia Atual: " + data.getDate());
    console.log("Mês Atual: " + (data.getMonth() + 1));//
    console.log("Ano Atual: " + data.getFullYear());
    console.log("Hora Atual: " + data.getHours());
    console.log("Minutos Atuais: " + data.getMinutes());

    console.log("DESAFIO -- Data e Hora Formatada")//Exibir data e hora formatada
    console.log("Data e Hora Formatada: " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + " " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear())
}

mostrarDataHora();


//------------------------------------------------------------------------------------
//Math
console.log("-------------------------------------")
console.log("---------FUNÇÕES MATEMÁTICAS---------")
console.log("-------------------------------------")

console.log(Math.PI);

function calcularOperacoes(numero) {
    console.log("Raiz quadrada de " + numero + ": " + Math.sqrt(numero));
    console.log("Número inteiro mais próximo de " + numero + ": " + Math.round(numero));
    console.log("Número arredondado para cima de " + numero + ": " + Math.ceil(numero));
    console.log("Número arredondado para baixo de " + numero + ": " + Math.floor(numero));
    console.log("DESAFIO");
    console.log("Número " + numero + " elevado ao quadrado: " + Math.pow(numero, 2));
    console.log("Número absoluto de " + numero + ": " + Math.abs(numero));
}

calcularOperacoes(7.5);


//------------------------------------------------------------------------------------
//String
console.log("-----------------------------------")
console.log("---------FUNÇÕES DE STRING---------")
console.log("-----------------------------------")

function analisarTexto(texto) {
    console.log("Tamanho do texto: " + texto.length);
    console.log("Texto em maiúsculo: " + texto.toUpperCase());
    console.log("Texto em minúsculo: " + texto.toLowerCase());
}

analisarTexto("JavaScript");

function verificarFrase(frase) {
    console.log(frase.includes("JavaScript"));
}

verificarFrase("Eu estudo JavaScript!");


function concatena(nome, curso) {
    return "Aluno: " + nome + " | Curso: " + curso;
}

console.log(concatena("José", "Front-end"));