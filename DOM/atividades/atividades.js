//Atividade 1 - Mudar cor do título - vermelho e azul
let vermelho = document.querySelector("#vermelho");
let azul = document.querySelector("#azul");

vermelho.addEventListener("click", function() {
    document.querySelector("h1").style.color = "red";
});

azul.addEventListener("click", function() {
    document.querySelector("h1").style.color = "blue";
});

//Atividade 2 - Mostrar e esconder mensagem
let mostrar = document.getElementById("mostrar");
let mensagem = document.getElementById("mensagem");

mostrar.addEventListener("click", function() {
    mensagem.classList.toggle("oculto");
});

//Atividade 3 - Contador de caracteres
let input = document.getElementById("entrada");

input.addEventListener("input", function() {
    let contador = document.getElementById("contador");
    contador.textContent = "Caracteres Digitados: " + input.value.length;
});

//Atividade 4 - Contador de cliques
let contadorCliques = 0;
let contadorElemento = document.getElementById("contadorCliques");
let botaoContar = document.getElementById("clique");

botaoContar.addEventListener("click", function() {
    contadorCliques++;
    contadorElemento.textContent = "Cliques: " + contadorCliques;
});