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

    expect(cliente).toBe("Patrícia Farias")
    expect(produto).toBe("Headset Gamer")
    expect(preco).toBe(350)
    expect(quantidade).toBe(2)
    expect(estoque).toBe(10)
    expect(valorPago).toBe(1100)

})


test("Deve calcular o subtotal corretamente", () => {

    expect(subtotal).toBe(700)

})


test("Deve verificar corretamente a disponibilidade em estoque", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve calcular corretamente a situação do frete", () => {

    expect(freteStatus).toBe("Frete: R$ 30")
    expect(valorFrete).toBe(30)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(730)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(370)

})


test("Deve verificar corretamente a situação final da compra", () => {

    expect(statusCompra).toBe("Compra confirmada")

})


test("Deve gerar um resumo contendo as informações da compra", () => {

    expect(resumo).toContain("Patrícia Farias")
    expect(resumo).toContain("Headset Gamer")
    expect(resumo).toContain("350")
    expect(resumo).toContain("700")
    expect(resumo).toContain("Frete: R$ 30")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("370")
    expect(resumo).toContain("Compra confirmada")

})
