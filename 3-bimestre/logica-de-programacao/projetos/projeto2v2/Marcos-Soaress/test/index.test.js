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

    expect(cliente).toBe("Priscila Monteiro")
    expect(produto).toBe("Notebook Ultrafino")
    expect(preco).toBe(3200)
    expect(quantidade).toBe(2)
    expect(estoque).toBe(10)
    expect(valorPago).toBe(6800)

})


test("Deve calcular o subtotal corretamente", () => {

    expect(subtotal).toBe(6400)

})


test("Deve verificar corretamente a disponibilidade em estoque", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve calcular corretamente a situação do frete", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(valorFrete).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(6400)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(400)

})


test("Deve verificar corretamente a situação final da compra", () => {

    expect(statusCompra).toBe("Compra confirmada")

})


test("Deve gerar um resumo contendo as informações da compra", () => {

    expect(resumo).toContain("Priscila Monteiro")
    expect(resumo).toContain("Notebook Ultrafino")
    expect(resumo).toContain("3200")
    expect(resumo).toContain("6400")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("400")
    expect(resumo).toContain("Compra confirmada")

})
