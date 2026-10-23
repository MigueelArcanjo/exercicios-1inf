const prompt = require("prompt-sync")()

let totalProduzido = 0
const dias = Number(prompt("Quantos dias? "))

for (let i = 1; i <= dias; i++) {
    totalProduzido += Number(prompt(`Digite a produção do dia ${i}: `))
}

console.log(`Total produzido: ${totalProduzido}`)

module.exports = totalProduzido