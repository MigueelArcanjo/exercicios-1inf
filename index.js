const prompt = require("prompt-sync")()

let nomeTurno = prompt(`Digite seu turno: `)
let meta = Number(prompt(`Digite a meta da produção: `))
let producaoInicial = Number(prompt(`Digite a produção inicial `))
let pecasPorCaixa = Number(prompt(`Digite a quantidade de itens por caixa: `))
let caixasNecessarias = 0
let producaoFinal = producaoInicial

while (producaoFinal < meta) {
    producaoFinal++
}

do {
    caixasNecessarias++
    producaoFinal = producaoFinal - pecasPorCaixa
} while (producaoFinal > 0)
producaoFinal = meta
    
let situacaoMeta = producaoFinal >= meta?"Meta atingida":"Meta não atingida"

const resumo = `
Turno: ${nomeTurno}
Meta: ${meta}
Produção inicial: ${producaoInicial}
Peças por cada caixa: ${pecasPorCaixa}
Produção final: ${producaoFinal}
Caixas necessárias: ${caixasNecessarias}
Situação: ${situacaoMeta}
`
console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}