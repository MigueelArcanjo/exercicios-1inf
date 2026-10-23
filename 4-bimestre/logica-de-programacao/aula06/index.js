const prompt = require("prompt-sync")()

const turnos = Number(prompt("Quantos turnos? "))
let turnosAcimaDaMeta = 0
let producao = 0

for (let i = 1; i <= turnos; i++) {
    producao = Number(prompt(`Digite a peças do turno ${i}: `))

    if (producao > 15) {
        turnosAcimaDaMeta++
    }
}
console.log(`Total de turnos acima da meta: ${turnosAcimaDaMeta}`)

module.exports = turnosAcimaDaMeta