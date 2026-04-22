// 1. Pedimos o valor total do café
let valorPedido = parseFloat(prompt("Qual o valor total do pedido?"));
let mensagemFinal = "";

// 2. Primeira decisão: O valor é maior que 50?
if (valorPedido > 50) {
    // Pergunta sobre o cartão fidelidade (1 para Sim, 2 para Não)
    let temFidelidade = prompt("Valor maior que R$ 50,00! Você tem Cartão Fidelidade?\n1 - SIM\n2 - NÃO");
    if (temFidelidade == "1") {
        // Aplica 10% de desconto (multiplica por 0.90)
        let valorComDesconto = valorPedido * 0.90;
        mensagemFinal = "Desconto de 10% aplicado! Valor a pagar: R$ " + valorComDesconto.toFixed(2);
    } else {
        // Não tem cartão, ganha o brinde
        mensagemFinal = "Valor a pagar: R$ " + valorPedido.toFixed(2) + "\nTudo bem! Você ganhou um Cookie de brinde!";
    }

        } else {
            // 3. Se o valor for 50 ou menos
            mensagemFinal = "Valor a pagar: R$ " + valorPedido.toFixed(2);
        }

        // 4. Mostra o resultado final
        alert(mensagemFinal);