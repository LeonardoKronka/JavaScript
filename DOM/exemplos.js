// ===== MANIPULANDO CONTEÚDO E ATRIBUTOS =====
// Define conteúdo HTML dentro de um elemento (interpreta tags HTML)
document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM! (innerHTML)</p>";

// Define apenas texto simples, sem interpretar HTML (mais seguro)
document.getElementById("mensagem").textContent = "Texto simples, sem HTML. (textContent)";

// Define o atributo "src" de uma imagem
document.getElementById("foto").setAttribute("src", "https://i.ytimg.com/vi/o43EGLHrkSg/maxresdefault.jpg")

// ===== OBTENDO ATRIBUTOS =====
// Obtém o valor do atributo "href" de um link e o armazena em uma variável
let url = document.getElementById("link").getAttribute("href");
// Exibe no console o valor obtido
console.log(url); // "https://example.com"

// ===== ALTERANDO ESTILOS CSS =====
// Modifica a cor de fundo de um elemento para azul claro
document.getElementById("caixa").style.backgroundColor = "lightblue";

// ===== MANIPULANDO CLASSES CSS =====
// Adiciona a classe "destaque" ao elemento
document.getElementById("alerta").classList.add("destaque");
// Remove a classe "oculto" do elemento
document.getElementById("alerta").classList.remove("oculto");

// ===== CRIANDO E ADICIONANDO NOVOS ELEMENTOS =====
// Cria um novo elemento parágrafo (<p>)
let novoParagrafo = document.createElement("p");

// Define o texto do novo parágrafo
novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript.";

// Adiciona o parágrafo criado como filho do elemento "container"
document.getElementById("container").appendChild(novoParagrafo);

// Cria um novo item de lista (<li>)
let novoItem = document.createElement("li");
// Define o texto do novo item
novoItem.textContent = "Item novo";
// Adiciona o novo item à lista
document.getElementById("lista").appendChild(novoItem);

// ===== REMOVENDO ELEMENTOS =====
// Obtém o elemento com id "Item1"
let item = document.getElementById("Item1");
// Remove o elemento "item" de seu elemento pai
document.getElementById("list").removeChild(item);