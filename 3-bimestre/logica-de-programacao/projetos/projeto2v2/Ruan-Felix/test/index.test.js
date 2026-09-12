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

    expect(cliente).toBe("Cristina Vieira")
    expect(produto).toBe("Gabinete Gamer")
    expect(preco).toBe(420)
    expect(quantidade).toBe(6)
    expect(estoque).toBe(3)
    expect(valorPago).toBe(3020)

})


test("Deve calcular o subtotal corretamente", () => {

    expect(subtotal).toBe(2520)

})


test("Deve verificar corretamente a disponibilidade em estoque", () => {

    expect(estoqueDisponivel).toBe("Estoque insuficiente")

})


test("Deve calcular corretamente a situação do frete", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(valorFrete).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(2520)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(500)

})


test("Deve verificar corretamente a situação final da compra", () => {

    expect(statusCompra).toBe("Compra não pode ser confirmada")

})


test("Deve gerar um resumo contendo as informações da compra", () => {

    expect(resumo).toContain("Cristina Vieira")
    expect(resumo).toContain("Gabinete Gamer")
    expect(resumo).toContain("420")
    expect(resumo).toContain("2520")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("500")
    expect(resumo).toContain("Compra não pode ser confirmada")

})
