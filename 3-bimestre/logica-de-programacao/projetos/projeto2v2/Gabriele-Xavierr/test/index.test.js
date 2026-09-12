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

    expect(cliente).toBe("Bruno Azevedo")
    expect(produto).toBe("Caixa de Som Bluetooth")
    expect(preco).toBe(260)
    expect(quantidade).toBe(2)
    expect(estoque).toBe(12)
    expect(valorPago).toBe(330)

})


test("Deve calcular o subtotal corretamente", () => {

    expect(subtotal).toBe(520)

})


test("Deve verificar corretamente a disponibilidade em estoque", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve calcular corretamente a situação do frete", () => {

    expect(freteStatus).toBe("Frete: R$ 30")
    expect(valorFrete).toBe(30)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(550)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento insuficiente")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final da compra", () => {

    expect(statusCompra).toBe("Compra não pode ser confirmada")

})


test("Deve gerar um resumo contendo as informações da compra", () => {

    expect(resumo).toContain("Bruno Azevedo")
    expect(resumo).toContain("Caixa de Som Bluetooth")
    expect(resumo).toContain("260")
    expect(resumo).toContain("520")
    expect(resumo).toContain("Frete: R$ 30")
    expect(resumo).toContain("Pagamento insuficiente")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Compra não pode ser confirmada")

})
