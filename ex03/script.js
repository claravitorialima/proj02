// 1. Entrada de dados
let valorCompra = parseFloat(prompt("Digite o valor total da compra:"));
let regiao = prompt("Selecione a região de entrega:\n1 - Sudeste\n2 - Sul\n3 - Outras");
        
let valorFrete = 0;

// 2. Lógica de Decisão
// Primeiro, verifica a regra especial de Frete Grátis
if (valorCompra > 250) {
    valorFrete = 0;
    alert("Parabéns! Sua compra superou R$ 250,00 e o Frete é GRÁTIS.");
} 
// Se não for grátis (else), verificamos a região (condicional composta)
else if (regiao == "1") {
    valorFrete = 10; // Sudeste
} else if (regiao == "2") {
    valorFrete = 20; // Sul
} else if (regiao == "3") {
    valorFrete = 30; // Outras
} else {
    alert("Região inválida! Usando valor padrão de R$ 30,00.");
    valorFrete = 30;
}

// 3. Cálculo final e exibição
let valorTotal = valorCompra + valorFrete;

alert("RESUMO DO PEDIDO:" +
"\nValor da Compra: R$ " + valorCompra.toFixed(2) +
"\nValor do Frete: R$ " + valorFrete.toFixed(2) +
"\n--------------------------" +
"\nTOTAL A PAGAR: R$ " + valorTotal.toFixed(2));