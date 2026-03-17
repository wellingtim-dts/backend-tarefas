// Valores iniciais do dia
let valorPorHora = 50;
let horasTrabalhadas = 8; // Expediente padrão

console.log("--- Resumo do Expediente ---");
console.log(`Horas iniciais: ${horasTrabalhadas}h`);

horasTrabalhadas++;
console.log(`Após hora extra (horasTrabalhadas++): ${horasTrabalhadas}h`);

//No dia seguinte ele precisou sair uma hora mais cedo para ir ao médico
horasTrabalhadas--;
console.log(`Após saída antecipada (horasTrabalhadas--): ${horasTrabalhadas}h`);

//Cálculo final
let taxaSistema = 15;
let pagamentoTotal = (horasTrabalhadas * valorPorHora) - taxaSistema;

console.log("\n--- Fechamento ---");
console.log(`Total a receber por ${horasTrabalhadas}h: ${pagamentoTotal}`);