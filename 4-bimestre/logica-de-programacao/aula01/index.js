const prompt = require("prompt-sync")()

const meta = Number(prompt("Meta de caixas: "))

let caixas = 0
while (caixas < meta) {
    caixas++
}

console.log(`Meta atingida! Foram produzidas ${caixas} caixas.`)

module.exports = caixas