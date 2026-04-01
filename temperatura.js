// Conversão de temperatura
const cidade = "Curitiba";
const tempCelsius = 18.5; // Corrigido de temCelsius para tempCelsius

const tempFahrenheit = tempCelsius * (9/5) + 32;
const tempKelvin = tempCelsius + 273.15; // Adicionado ponto e vírgula
const variacaoDiaria = 26.3 - tempCelsius; // Corrigido erro de digitação

console.log(`Cidade: ${cidade}`);
console.log(`Celsius: ${tempCelsius} °C`);
console.log(`Fahrenheit: ${tempFahrenheit.toFixed(1)} °F`);
console.log(`Kelvin: ${tempKelvin.toFixed(2)} K`);
console.log(`\nVariação prevista: ${variacaoDiaria.toFixed(1)} °C`);