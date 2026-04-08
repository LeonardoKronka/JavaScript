// Capturando todos os elementos do HTML pelo seu ID para podermos manipulá-los no JS
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

// Expressão regular (Regex) para verificar se o formato do e-mail digitado é válido
let mascaraEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// Adicionado o 'let' aqui para escopo correto
let forcaSenha = ""; 

// Validação de campos, com a senha sendo validada em tempo real
// Evento para mostrar/ocultar a senha principal
botaoSenha.addEventListener("click", function() {
    // Se o input for do tipo 'password' (oculto), transforma em 'text' (visível)
    if (senha.type === "password") {
        senha.setAttribute('type', 'text');
        // Troca a classe do ícone para o "olho cortado"
        botaoSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        // Se já estiver visível, transforma de volta em 'password' e volta o ícone original
        senha.setAttribute('type', 'password');
        botaoSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});

// Evento para mostrar/ocultar a confirmação de senha (mesma lógica acima)
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
// Evento "keyup" (quando o usuário solta uma tecla) para analisar a força da senha em tempo real
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

// Validação do formulário, validando senha, email, telefone e endereço ao clicar em "Cadastrar"
botaoCadastro.addEventListener("click", function() {
    // Verifica se algum dos campos obrigatórios está vazio
    if (nome.value.trim() === "" || email.value.trim() === "" || endereco.value.trim() === "" || telefone.value.trim() === "") {
        mensagem.textContent = "Por favor, preencha todos os campos principais.";
        mensagem.style.color = "#ef4444";
    // Testa o email contra a máscara Regex definida no topo
    } else if (!mascaraEmail.test(email.value)) {
        mensagem.textContent = "Por favor, insira um e-mail válido.";
        mensagem.style.color = "#ef4444";
    // Impede o cadastro se a senha for classificada como fraca ou estiver vazia
    } else if (forcaSenha === "fraca" || senha.value.trim() === "") {
        mensagem.textContent = "Por favor, insira uma senha mais forte.";
        mensagem.style.color = "#ef4444";
    // Verifica se a confirmação de senha foi preenchida
    } else if (confirmarSenha.value.trim() === "") {
        mensagem.textContent = "Por favor, confirme sua senha.";
        mensagem.style.color = "#ef4444";
    // Verifica se a senha e a confirmação são exatamente iguais
    } else if (senha.value !== confirmarSenha.value) {
        mensagem.textContent = "As senhas não coincidem.";
        mensagem.style.color = "#ef4444";
    // Verifica se o telefone contém apenas números e tem 10 ou 11 dígitos
    } else if (!/^\d{10,11}$/.test(telefone.value)) {
        mensagem.textContent = "Por favor, insira um telefone válido (10 ou 11 dígitos, só números).";
        mensagem.style.color = "#ef4444";
    // Exige que o endereço tenha pelo menos 5 caracteres
    } else if (endereco.value.length < 5) {
        mensagem.textContent = "Por favor, insira um endereço válido (mínimo 5 caracteres).";
        mensagem.style.color = "#ef4444";
    // Se passar por todas as verificações acima, o cadastro é um sucesso
    } else {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "#10b981";
    } 
});

// Adicionar mais campos de telefone dinamicamente
botaoAdicionarNumero.addEventListener("click", function () {
    // Impede adicionar campos extras se o principal não estiver preenchido
    if (telefone.value.trim() === "") {
        alert("Preencha o campo de telefone principal primeiro!");
    } else {
        // Criação de um <li> para manter a semântica correta do HTML (novo item da lista)
        let novoItemDaLista = document.createElement("li");
        
        // Cria um novo campo de input de texto para o telefone extra
        let novoInput = document.createElement("input");
        novoInput.type = "text";
        novoInput.placeholder = "Outro telefone";
        novoInput.className = "input-telefone-extra";
        
        // Cria o botão de excluir aquele telefone extra específico
        let novobotao = document.createElement("button");
        novobotao.type = "button";
        novobotao.innerHTML = '<i class="bi bi-trash-fill"></i>'; // Ícone de lixeira do Bootstrap
        novobotao.className = "btn-remover";

        // Adiciona o input e o botão para dentro do item da lista (<li>)
        novoItemDaLista.appendChild(novoInput);
        novoItemDaLista.appendChild(novobotao);
        // Adiciona o item da lista completo para dentro da <ul> lá no HTML
        listaNumeros.appendChild(novoItemDaLista);

        //telefone.value = ""; // Opcional: limpa o input principal

        // Evento para remover o telefone extra recém-criado, caso o usuário clique na lixeira
        novobotao.addEventListener("click", function () {
            let confirmar = confirm("Certeza que deseja remover esse número?");
            if (confirmar) {
                // Remove o item da lista correspondente do HTML
                listaNumeros.removeChild(novoItemDaLista);
            }
        });
    }
});