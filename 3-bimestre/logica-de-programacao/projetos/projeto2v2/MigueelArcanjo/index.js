const aluno = "Leandro Costa"
const plano = "Plano Mensal"
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
let statusMatricula 

if (idade >= 16) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

if (categoriaEstudante == 1) {
    descontoStatus ="Desconto de estudante aplicado"
} else {
    descontoStatus ="Desconto de estudante não aplicado"
}

if (valorPago >= valorFinal) {
    pagamentoStatus = "Matrícula quitada"
} else {
    pagamentoStatus = "Matrícula com saldo pendente"
}

if (idade >= 16) {
    if (valorPago >= valorFinal) {
        statusMatricula = "Matrícula confirmada"
    } else {
        statusMatricula = "Matrícula confirmada com saldo pendente"
} }
 else {
     statusMatricula = "Matrícula não pode ser confirmada: idade não permitida"
    }

const resumo = `
Aluno = ${aluno} (${idadeStatus})
Idade = ${idade}
Plano de matrícula = ${plano}
Valor pago = R$ ${valorPago}
Valor da mensalidade = R$ ${valorMensalidade}
Taxa de matrícula = R$ ${taxaMatricula}
Categoria (1 = estudante, 0 = não estudante) = ${categoriaEstudante} (${descontoStatus})
Se for estudante, valor do desconto: ${valorDesconto}
Valor total = R$ ${valorBase}
Valor com desconto estudante = ${valorFinal}
Troco = ${troco}

Status da matrícula = ${statusMatricula}
${pagamentoStatus}
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