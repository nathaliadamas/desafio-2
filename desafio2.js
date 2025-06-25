let nomeDoHeroi = "Cealane";

function numeroDeVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

let saldoVitorias = numeroDeVitorias(77, 5);
let nivel = saldoVitorias

if (nivel <= 10) {
    nivel = "ferro";
} else if (nivel > 10 && nivel <= 20) {
    nivel = "bronze";
} else if (nivel > 20 && nivel <= 50) {
    nivel = "prata";
} else if ( nivel > 50 && nivel <= 80) {
    nivel = "ouro";
} else if (nivel > 80 && nivel <= 90) {
    nivel = "diamante";
} else if (nivel > 90 && nivel <= 100) {
    nivel = "lendário";
} else if (nivel > 100) {
    nivel = "imortal";
}

console.log(`O herói ${nomeDoHeroi} tem o saldo de vitórias ${saldoVitorias} e está no nível ${nivel}.`);