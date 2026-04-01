function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!");
}
saudacao("Wellington");

// Função que recebe um valor
function subirDeNivel(nivelAtual) { // Corrigido: 'D' maiúsculo para camelCase
    return nivelAtual + 1;
}

let meuNivel = 10;

// Corrigido: Chamei 'subirDeNivel' e usei 'meuNivel' (sem acento)
let nivelAtualizado = subirDeNivel(meuNivel);

console.log('Seu novo nível: ' + nivelAtualizado);

