const nome = "Miguel Arcanjo"
const idade = 17
const categoria = "comum"
let possuiMatricula = true 
let inadimplente = false 
const valorMensalidade = 150
const valorPago = 150
let idadeStatus
let nivelAcesso 
let acessoStatus
let pagamentoStatus
let troco 
let statusAula

if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

if (categoria === "professor" || categoria === "coordenador") {
    nivelAcesso = "Acesso administrativo liberado"
} else {
    nivelAcesso = "Acesso comum"
}

if (idade >= 18 && possuiMatricula === !false && inadimplente === !true) {
    acessoStatus = "Acesso ao laboratório liberado"
} else {
    acessoStatus = "Acesso ao laboratório negado"
}

if (valorPago >= valorMensalidade) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}

if (valorPago >= valorMensalidade) {
    troco = (valorPago - valorMensalidade) 
} else {
    troco = 0 
}

if (acessoStatus === "Acesso ao laboratório liberado" && pagamentoStatus === "Pagamento aprovado") {
    statusAula = "Presença na aula confirmada"
} else {
    statusAula = "Presença na aula não confirmada"
}

const resumo = `
Nome do(a) aluno: ${nome}
Categoria e nível de acesso: ${categoria}, ${nivelAcesso}
Valor da mensalidade: R$ ${valorMensalidade}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusAula}
`

console.log(resumo)

module.exports = {
    nome,
    idade,
    categoria,
    possuiMatricula,
    inadimplente,
    valorMensalidade,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusAula,
    resumo
}
