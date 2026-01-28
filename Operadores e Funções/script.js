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
