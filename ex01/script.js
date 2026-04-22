alert("Olá, seja muito bem vindo ao nosso sistema de concesionária de veículos!");
alert("Aqui você pode escolher a forma de pagamento acessível para você. E melhor ainda, com descontos!");

// 1. Entrada de dados: Valor do carro e opção
let valorCarro = parseFloat(prompt("Digite o valor do carro:"));
let opcao = prompt("Escolha a forma de pagamento:\n1 - PIX (15% desconto)\n2 - Cartão (5% juros)\n3 - Financiamento (20% juros)");

// 2. Lógica de decisão (Condicionais Compostas)
if (opcao == "1") {
    // Cálculo do PIX
     let valorFinal = valorCarro * 0.85;
    alert("Pagamento: PIX\nValor final: R$ " + valorFinal.toFixed(2));

} else if (opcao == "2") {
    // Cálculo do Cartão
    let parcelas = parseInt(prompt("Em quantas vezes no cartão? (Até 24x)"));
    if (parcelas > 0 && parcelas <= 24) {
    let valorFinal = valorCarro * 1.05;
    let valorParcela = valorFinal / parcelas;
    alert("Pagamento: Cartão\nTotal: R$ " + valorFinal.toFixed(2) + "\nParcelas: " + parcelas + "x de R$ " + valorParcela.toFixed(2));
    } else {
        alert("Número de parcelas inválido para Cartão!");
        }

} else if (opcao == "3") {
    // Cálculo do Financiamento
    let parcelas = parseInt(prompt("Em quantas vezes o financiamento? (Até 48x)"));
    if (parcelas > 0 && parcelas <= 48) {
        let valorFinal = valorCarro * 1.20;
        let valorParcela = valorFinal / parcelas;
            alert("Pagamento: Financiamento\nTotal: R$ " + valorFinal.toFixed(2) + "\nParcelas: " + parcelas + "x de R$ " + valorParcela.toFixed(2));
            } else {
                alert("Número de parcelas inválido para Financiamento!");
            }

} else {
            alert("Opção inválida! Escolha 1, 2 ou 3.");
        }