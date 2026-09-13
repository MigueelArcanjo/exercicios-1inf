const aluno = "Leandro Costa"
const plano = "Plano mensal"
const valorMensalidade = 120
const taxaMatricula = 30
const idade = 22
const categoriaEstudante = 1
const valorPago = 110
const valorDesconto = 40

const valorBase = valorMensalidade + taxaMatricula
let idadeStatus
let descontoStatus
const valorFinal = valorBase - valorDesconto
let pagamentoStatus
const troco = valorPago - valorFinal

if (idade >= 16) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

if (categoriaEstudante == 1) {
    descontoStatus ="Desconto para estudante aplicado"
} else {
    descontoStatus ="Desconto para estudante não aplicado"
}

if (valorPago >= valorFinal) {
    pagamentoStatus = "Matrícula quitada"
} else {
    pagamentoStatus = "Matrícula com saldo pendente"
}

const resumo = `
Aluno = ${aluno}
Plano de matrícula = ${plano}
`

console.log(resumo)

module.exports = {
    aluno,
    plano,
    valorMensalidade,
    taxaMatricula,
    idade,
    categoriaEstudante,
    valorPago,
    valorBase,
    idadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusMatricula,
    resumo
}