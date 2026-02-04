console.log("Olá, JavaScript!");
        // Operadores Aritméticos
        let a = 10;
        let b = 3;

        console.log("OPERADORES ARITMÉTICOS");

        console.log("Soma: " + (a + b)); 
        console.log("Subtração: " + (a - b)); 
        console.log("Multiplicação: " + (a * b)); 
        console.log("Divisão: " + (a / b)); 
        console.log("Resto: " + (a % b)); 
        console.log("Exponenciação: " + (a **b));

        // Incremento e Decremento
        console.log("INCREMENTO E DECREMENTO");
        let contador = 5;
        contador++;
        console.log("Incremento de 5" + " = " + contador);
        let contador2 = 5;
        contador2--;
        console.log("Decremento de 5" + " = " + contador2);

        // Media de 3 numeros
        console.log("MÉDIA DE 3 NÚMEROS");
        function media(n1, n2, n3) {
            return (n1 + n2 + n3) / 3;
        }
        console.log("Média: " + media(7, 8, 9));

        // Resto de uma divisão
        console.log("RESTO DE DIVISÃO");
        let num1 = 10;
        let num2 = 3;
        console.log("Resto de " + num1 + " / " + num2 + " = " + (num1 % num2));

        // Operadores Relacionais
        console.log("OPERADORES RELACIONAIS");
        let x = 10;
        let y = "10";

        console.log("x == y: " + (x == y));
        console.log("x === y: " + (x === y ));
        console.log("x != y: " + (x != y));
        console.log("x !== y: " + (x !== y));




// EXERCICIOS
console.log("EXERCÍCIOS");
// 3.Comparar idade para verificar se é maior de idade
        console.log("COMPARAR IDADE");
        //function verificarMaioridade(idade) {
            //if (idade >= 18) {
                //return "Maior de idade";
            //} else {
                //return "Menor de idade";
            //}
        //}
        //console.log(verificarMaioridade(20));
        //console.log(verificarMaioridade(16));

        let idade = 20;

        if (idade >= 18) {
            console.log("Maior de idade");
        }else {
            console.log("Menor de idade");
        }

// 4. Comparar dois números e mostrar qual é o maior
        console.log("COMPARAR DOIS NÚMEROS");

        let numA = 15;
        let numB = 25;

        if (numA > numB) {
            console.log(numA + " é maior que " + numB)
        }else if (numA < numB) {
            console.log(numB + " é maior que " + numA)
        }else {
            console.log(numA + " é igual a " + numB)
        }


// Operadores Lógicos
        console.log("OPERADORES LÓGICOS");
        let idadePessoa = 20;
        let temCarteira = true;
        console.log("&& (E lógico)");
        console.log(idadePessoa >= 18 && temCarteira);


        let chovendo = false;
        let guardaChuva = true;
        console.log("|| (OU lógico)");
        console.log(chovendo || guardaChuva);


        let ligado = false;
        console.log("! (NÃO lógico)");
        console.log(!ligado); // True


        // 5. Verificar se um aluno foi aprovado(nota >= 7 e a frequencia >= 75%)
        console.log("VERIFICAR APROVAÇÃO DO ALUNO");
        let nota = 8;
        let frequencia = 80;

        if (nota >= 7 && frequencia >= 75) {
            console.log("Aluno aprovado");
        } else {
            console.log("Aluno reprovado");
        }


        // 6. Verificar acesso com login ou token
        console.log("VERIFICAR ACESSO");
        let login = true;
        let token = false;

        if (login || token) {
            console.log("Acesso concedido");
        } else {
            console.log("Acesso negado");
        }


        