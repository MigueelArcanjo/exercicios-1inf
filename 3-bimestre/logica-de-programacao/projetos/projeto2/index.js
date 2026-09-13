const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000
const descontoPercentual = 10

const subtotal = preco*quantidade
let estoqueDisponivel = 1
const valorDesconto = (subtotal*descontoPercentual)/100
const valorFinal = subtotal-valorDesconto
let pagamentoStatus = 1
const troco = valorPago-valorFinal
let statusPedido = 1

if (quantidade <= estoque) {
    estoqueDisponivel = "Sim"
} else {
    estoqueDisponivel = "Não"
}

if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento reprovado"
}

if (quantidade <= estoque) {
    statusPedido = "Pedido disponível para finalização"
} else {
    statusPedido = "Pedido não pode ser finalizado por falta de estoque"
}

const resumo = `
==============================================================
 ███   ███  █   █ █████ ████   ███  ███  ███  █     
█     █   █ ██ ██ █     █   █ █      █  █   █ █     
█     █   █ █ █ █ ████  ████  █      █  █████ █     
█     █   █ █   █ █     █  █  █      █  █   █ █     
 ███   ███  █   █ █████ █   █  ███  ███ █   █ █████ 
==============================================================

Cliente: ${cliente}
Produto: ${produto}
Preço do produto :R$ ${preco}
Quantidade: ${quantidade}
Preço da quantidade solicitada: R$ ${subtotal}
Desconto: ${descontoPercentual}%
Valor do desconto: R$ ${valorDesconto}
Valor final: R$ ${valorFinal}
Situação do estoque: ${estoqueDisponivel}
Valor pago: ${valorPago}
Situação do pagamento: ${pagamentoStatus}
Situação do pedido: ${statusPedido}
`
console.log(resumo)

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}