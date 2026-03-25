let botao = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let endereco = document.querySelector("#endereco");
let telefone = document.querySelector("#telefone");

botao.addEventListener("click", function () {
    mensagem.textContent = "Cadastrado!";
});