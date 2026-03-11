//Atividade 1 - Mudar cor do título - vermelho e azul
let vermelho = document.querySelector("#vermelho");
let azul = document.querySelector("#azul");

vermelho.addEventListener("click", function () {
    document.querySelector("h1").style.color = "red";
});

azul.addEventListener("click", function () {
    document.querySelector("h1").style.color = "blue";
});

//Atividade 2 - Mostrar e esconder mensagem
let mostrar = document.getElementById("mostrar");
let mensagem = document.getElementById("mensagem");

mostrar.addEventListener("click", function () {
    mensagem.classList.toggle("oculto");
});

//Atividade 3 - Contador de caracteres
let input = document.getElementById("entrada");

input.addEventListener("input", function () {
    let contador = document.getElementById("contador");
    contador.textContent = "Caracteres Digitados: " + input.value.length;
});

//Atividade 4 - Contador de cliques
let contadorCliques = 0;
let contadorElemento = document.getElementById("contadorCliques");
let botaoContar = document.getElementById("clique");

botaoContar.addEventListener("click", function () {
    contadorCliques++;
    contadorElemento.textContent = "Cliques: " + contadorCliques;
});

//Atividade 5 e 6 + extra - Criar elementos dinamicamente 
let inputItem = document.getElementById("inputItem");
let botaoItem = document.getElementById("botaoItem");
let listaItens = document.getElementById("listaItens");

botaoItem.addEventListener("click", function () {
    if (inputItem.value.trim() === "") {
        alert("Preencha o campo para listar!");
    } else {
        let novoItem = document.createElement("li");
        novoItem.textContent = inputItem.value;
        listaItens.appendChild(novoItem);
        inputItem.value = ""; // Limpa o input após adicionar o item
        novoItem.addEventListener("click", function () {
            let confirmar = confirm("Certeza que deseja remover esse item?");
            if (confirmar) {
                listaItens.removeChild(novoItem);
            }
        });
    }
});

//Desafio HARD input pra o usuario digitar o nome; botao "enviar"; paragrafo pra exibir a mensagem; se o campo estiver vazio --> mostrar mensagem em vermelho; se estiver preenchido --> mensagem em verde
let inputNome = document.getElementById("inputNome");
let botaoEnviar = document.getElementById("botaoEnviar");
let mensagemNome = document.getElementById("mensagemSaudacao");

botaoEnviar.addEventListener("click", function () {
    if (inputNome.value.trim() === "") {
        mensagemNome.textContent = "Preencha o campo para enviar!";
        mensagemNome.style.color = "red";
    } else {
        mensagemNome.textContent = "Olá, " + inputNome.value + "! Mensagem enviada com sucesso.";
        mensagemNome.style.color = "green";
        inputNome.value = ""; 
    }
}
);