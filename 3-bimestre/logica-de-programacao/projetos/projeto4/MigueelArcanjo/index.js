const cliente = "Priscila Andrade"
let opcaoMenu = 2
const quantidade = 5
let formaPagamento = "pix"
let statusPedido = "aprovado"
let prato = ""
let precoUnitario = 0 
let freteStatus = ""
let frete = 0
let pagamentoMensagem = ""
let descontoPercentual = 0
let statusMensagem

switch (opcaoMenu) {
    case opcaoMenu = 1:
        prato = "AçaÍ 300ml"
        break
    case opcaoMenu = 2:
        prato = "Açaí 500ml"
        break
    case opcaoMenu = 3:
        prato = "Vitamina"
        break
    case opcaoMenu = 4:
        prato = "Tapioca"
        break
    default:
        prato = "Opção inválida"
}

switch (opcaoMenu) {
    case opcaoMenu = 1:
        precoUnitario = 14
        break
    case opcaoMenu = 2:
        precoUnitario = 20
        break
    case opcaoMenu = 3:
        precoUnitario = 12
        break
    case opcaoMenu = 4:
        precoUnitario = 10
        break
}

const subtotal = precoUnitario * quantidade
subtotal >= 40? freteStatus = "Frete grátis" : freteStatus = "Frete pago"
subtotal >= 40? frete = 0 : frete = 15

switch (formaPagamento) {
    case formaPagamento = "pix":
        pagamentoMensagem = "Pagamento via PIX"
        break
    case formaPagamento = "cartao":
        pagamentoMensagem = "Pagamento via cartão"
        break
    case formaPagamento = "dinheiro":
        pagamentoMensagem = "Pagamento via dinheiro"
        break
default:
    pagamentoMensagem = "Forma de pagamento inválida"
}

switch (formaPagamento) {
    case formaPagamento = "pix":
        descontoPercentual = 10
        break
    case formaPagamento = "cartao":
        descontoPercentual = 10
        break
    case formaPagamento = "dinheiro":
        descontoPercentual = 0
        break
}
const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + frete

switch (statusPedido) {
    case statusPedido = "pendente":
        statusMensagem = "Aguardando pagamento"
        break
    case statusPedido = "aprovado":
        statusMensagem = "Pedido em preparo"
        break
    case statusPedido = "enviado":
        statusMensagem = "Pedido a caminho"
        break
    case statusPedido = "cancelado":
        statusMensagem = "Pedido cancelado"
        break
default:
    statusMensagem = "Status desconhecido"
}

const resumo = `
Nome do cliente: ${cliente}
Prato: ${prato}
Quantidade: ${quantidade}
Preço do pedido: ${subtotal}
Situação do frete: ${freteStatus}
Forma de pagamento: ${pagamentoMensagem}
Desconto: ${desconto}
Total: ${total}
Status do pedido: ${statusMensagem}
`

console.log(resumo)

module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}