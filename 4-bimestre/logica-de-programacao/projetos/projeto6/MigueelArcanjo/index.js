const prompt = require("prompt-sync")()

const quantidadeDeDias = Number(prompt("Digite a quantidade de dias que serão registrados: "))
const metaDiaria = Number(prompt("Digite a meta de vendas diárias: "))
const metaSemanal = Number(prompt("Digite a meta de vendas da semana: "))
let totalVendido = 0
let diasAcimaDaMeta = 0
let melhorDia = 0 
let situacaoSemana = ""

for (let i = 1; i <= quantidadeDeDias; i++) {
    let venda = Number(prompt(`Digite a venda do dia ${i}: `))
    totalVendido = totalVendido + venda

    if (venda >= metaDiaria) {
        diasAcimaDaMeta++
    }

    if (venda > melhorDia) {
        melhorDia = venda
    }
}

let mediaVendas = totalVendido / quantidadeDeDias
situacaoSemana = totalVendido>=metaSemanal?"Meta semanal atingida" : "Meta semanal não atingida"

const resumo = `
Total vendido: ${totalVendido}
Média diária: ${mediaVendas}
Quantidade de dias acima da meta: ${diasAcimaDaMeta}
Melhor dia de vendas: ${melhorDia}
Situação da semana: ${situacaoSemana}
`

console.log(resumo)

module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}