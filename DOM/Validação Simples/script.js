let email = document.getElementById("e-mail");
let senha = document.getElementById("senha");
let botaoValidar = document.getElementById("botao-validar");
let mensagem = document.getElementById("mensagem-senha");
forcaSenha = "";

let botaoSenha = document.querySelector("#botaoSenha");

botaoSenha.addEventListener("click", function() {
    if (senha.type === "password") {
        senha.setAttribute('type', 'text');
        // Troca o ícone para o olho cortado
        botaoSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        senha.setAttribute('type', 'password');
        // Volta para o ícone de olho normal
        botaoSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});
// -----------------------------------------------
senha.addEventListener("keyup", function () {
    if (senha.value.length < 6) {
        mensagem.textContent = "Senha fraca!";
        mensagem.style.color = "red"; 
        forcaSenha = "fraca";
    } else if (senha.value.length <=10) {
        mensagem.textContent = "Senha aceitável!";
        mensagem.style.color = "orange"; 
        forcaSenha = "aceitavel";
    } else {
        mensagem.textContent = "Senha forte!";
        mensagem.style.color = "green"; 
        forcaSenha = "forte";
    }
});

botaoValidar.addEventListener("click", function () {
    if (email.value.trim() === "" || !email.value.includes("@") || !email.value.includes(".")) {
        mensagem.textContent = "Por favor, insira um e-mail válido.";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Tudo Certo! Bem vindo!";
        mensagem.style.color = "green";
    }

    if (senha.value === "") {
        mensagem.textContent = "Por favor, insira uma senha.";
        mensagem.style.color = "red";
        return
    }else if (forcaSenha === "aceitavel" || forcaSenha === "forte") {
        mensagem.textContent = "Tudo Certo! Bem vindo!";
        mensagem.style.color = "green";
    }
});
