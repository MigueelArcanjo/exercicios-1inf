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

    expect(cliente).toBe("Henrique Sobral")
    expect(produto).toBe("Monitor 24 polegadas")
    expect(preco).toBe(800)
    expect(quantidade).toBe(2)
    expect(estoque).toBe(12)
    expect(valorPago).toBe(960)

})


test("Deve calcular o subtotal corretamente", () => {

    expect(subtotal).toBe(1600)

})


test("Deve verificar corretamente a disponibilidade em estoque", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve calcular corretamente a situação do frete", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(valorFrete).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(1600)

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

    expect(resumo).toContain("Henrique Sobral")
    expect(resumo).toContain("Monitor 24 polegadas")
    expect(resumo).toContain("800")
    expect(resumo).toContain("1600")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento insuficiente")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Compra não pode ser confirmada")

})
