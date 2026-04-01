let botaoCadastro = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let confirmarSenha = document.querySelector("#confirmarSenha");
let endereco = document.querySelector("#endereco");
let telefone = document.querySelector("#telefone");
let botaoSenha = document.querySelector("#botaoSenha");
let botao_confirmar_senha = document.querySelector("#botaoConfirmarSenha");
let mensagem_senha = document.querySelector("#mensagem_senha");
let botaoAdicionarNumero = document.querySelector("#addnumero");
let listaNumeros = document.querySelector("#lista-numeros");
let mascaraEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// Adicionado o 'let' aqui para escopo correto
let forcaSenha = ""; 

// Validação de campos, com a senha sendo validada em tempo real
botaoSenha.addEventListener("click", function() {
    if (senha.type === "password") {
        senha.setAttribute('type', 'text');
        botaoSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        senha.setAttribute('type', 'password');
        botaoSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});

botao_confirmar_senha.addEventListener("click", function() {
    if (confirmarSenha.type === "password") {
        confirmarSenha.setAttribute('type', 'text');
        botao_confirmar_senha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        confirmarSenha.setAttribute('type', 'password');
        botao_confirmar_senha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});

// -----------------------------------------------
senha.addEventListener("keyup", function () {
    if (senha.value.length < 6) {
        mensagem_senha.textContent = "Senha fraca!";
        mensagem_senha.style.color = "#ef4444"; // Vermelho moderno
        forcaSenha = "fraca";
    } else if (senha.value.length <= 10) {
        mensagem_senha.textContent = "Senha aceitável!";
        mensagem_senha.style.color = "#f59e0b"; // Laranja moderno
        forcaSenha = "aceitavel";
    } else {
        mensagem_senha.textContent = "Senha forte!";
        mensagem_senha.style.color = "#10b981"; // Verde moderno
        forcaSenha = "forte";
    }
});

// Validação do formulário, validando senha, email, telefone e endereço
botaoCadastro.addEventListener("click", function() {
    if (nome.value.trim() === "" || email.value.trim() === "" || endereco.value.trim() === "" || telefone.value.trim() === "") {
        mensagem.textContent = "Por favor, preencha todos os campos principais.";
        mensagem.style.color = "#ef4444";
    } else if (!mascaraEmail.test(email.value)) {
        mensagem.textContent = "Por favor, insira um e-mail válido.";
        mensagem.style.color = "#ef4444";
    } else if (forcaSenha === "fraca" || senha.value.trim() === "") {
        mensagem.textContent = "Por favor, insira uma senha mais forte.";
        mensagem.style.color = "#ef4444";
    } else if (confirmarSenha.value.trim() === "") {
        mensagem.textContent = "Por favor, confirme sua senha.";
        mensagem.style.color = "#ef4444";
    } else if (senha.value !== confirmarSenha.value) {
        mensagem.textContent = "As senhas não coincidem.";
        mensagem.style.color = "#ef4444";
    } else if (!/^\d{10,11}$/.test(telefone.value)) {
        mensagem.textContent = "Por favor, insira um telefone válido (10 ou 11 dígitos, só números).";
        mensagem.style.color = "#ef4444";
    } else if (endereco.value.length < 5) {
        mensagem.textContent = "Por favor, insira um endereço válido (mínimo 5 caracteres).";
        mensagem.style.color = "#ef4444";
    } else {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "#10b981";
    } 
});

// Adicionar mais campos de telefone
botaoAdicionarNumero.addEventListener("click", function () {
    if (telefone.value.trim() === "") {
        alert("Preencha o campo de telefone principal primeiro!");
    } else {
        // Criação de um <li> para manter a semântica correta do HTML
        let novoItemDaLista = document.createElement("li");
        
        let novoInput = document.createElement("input");
        novoInput.type = "text";
        novoInput.placeholder = "Outro telefone";
        novoInput.className = "input-telefone-extra";
        
        let novobotao = document.createElement("button");
        novobotao.type = "button";
        novobotao.innerHTML = '<i class="bi bi-trash-fill"></i>'; // Ícone de lixeira do Bootstrap
        novobotao.className = "btn-remover";

        novoItemDaLista.appendChild(novoInput);
        novoItemDaLista.appendChild(novobotao);
        listaNumeros.appendChild(novoItemDaLista);

        //telefone.value = ""; // Opcional: limpa o input principal

        novobotao.addEventListener("click", function () {
            let confirmar = confirm("Certeza que deseja remover esse número?");
            if (confirmar) {
                listaNumeros.removeChild(novoItemDaLista);
            }
        });
    }
});