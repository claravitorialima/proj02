
// 1. Entrada de dados
let salario = parseFloat(prompt("Qual o seu salário mensal?"));
let valorParcela = parseFloat(prompt("Qual o valor da parcela que deseja pagar?"));

// 2. Cálculo do limite (30% do salário)
// Salário vezes 0.30
let limiteParcela = salario * 0.30;

// 3. Lógica de Decisão
if (valorParcela > limiteParcela) {
    // Se a parcela for MAIOR que o limite
    alert("Empréstimo Negado: Parcela muito alta." +
    "\nSua parcela máxima permitida é: R$ " + limiteParcela.toFixed(2));
} else {
    // Se a parcela for igual ou menor que o limite
    alert("Empréstimo Pré-aprovado!" +
    "\nA parcela de R$ " + valorParcela.toFixed(2) + " está dentro do seu limite.");
}