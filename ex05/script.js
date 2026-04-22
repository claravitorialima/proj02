// 1. Definições Iniciais
let precoCheio = 40;
let idade = parseInt(prompt("Qual a sua idade?"));
let ehEstudante = prompt("Você é estudante? (Sim/Não)").toLowerCase();

// 2. Lógica com o operador OU (||)
// Se idade < 12 OU idade > 60 OU estudante for "sim"
if (idade < 12 || idade > 60 || ehEstudante == "sim") {
    let precoFinal = precoCheio / 2;
    alert("Você tem direito à MEIA-ENTRADA!\nValor: R$ " + precoFinal.toFixed(2));
} else {
    alert("Valor do ingresso: INTEIRA\nValor: R$ " + precoCheio.toFixed(2));
}