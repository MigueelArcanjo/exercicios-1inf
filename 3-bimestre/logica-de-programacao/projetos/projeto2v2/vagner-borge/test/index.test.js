const {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    freteStatus,
    valorFrete,
    valorFinal,
    pagamentoStatus,
    troco,
    statusCompra,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados da compra", () => {

    expect(cliente).toBe("Sérgio Aragão")
    expect(produto).toBe("Mesa Digitalizadora")
    expect(preco).toBe(480)
    expect(quantidade).toBe(1)
    expect(estoque).toBe(16)
    expect(valorPago).toBe(580)

})


test("Deve calcular o subtotal corretamente", () => {

    expect(subtotal).toBe(480)

})


test("Deve verificar corretamente a disponibilidade em estoque", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve calcular corretamente a situação do frete", () => {

    expect(freteStatus).toBe("Frete: R$ 30")
    expect(valorFrete).toBe(30)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(510)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(70)

})


test("Deve verificar corretamente a situação final da compra", () => {

    expect(statusCompra).toBe("Compra confirmada")

})


test("Deve gerar um resumo contendo as informações da compra", () => {

    expect(resumo).toContain("Sérgio Aragão")
    expect(resumo).toContain("Mesa Digitalizadora")
    expect(resumo).toContain("480")
    expect(resumo).toContain("480")
    expect(resumo).toContain("Frete: R$ 30")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("70")
    expect(resumo).toContain("Compra confirmada")

})
