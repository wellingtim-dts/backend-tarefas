//converção de temperatura

const cidade = "Curitiba";
const temCelsius = 18.5;

const tempFahrenheit = tempCelsius * (9/5) + 32;
const tempKelvin = tempCelsius + 273.15const variacoDiaria = 26.3 - tempCelsius;

console.log(`\nCelsius: ${tempCelsius} Cº`);
console.log(`Fahrenheit: ${tempFahrenheit.toFixed(1)} Fº`);
console.log(`Kelvin: ${tempKelvin} Kº`);
console.log(`\nVariação prevista: ${variacaoDiaria.toFixed(1)} Cº`);

// Tecla Alt Gr + tecla colchetes para fazer o º
