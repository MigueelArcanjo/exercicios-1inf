# 🚀 PROJETO 2 (v2) — SISTEMA DE VERIFICAÇÃO DE COMPRA ONLINE

# 📋 O QUE FAZER

Crie um programa que verifica uma compra.

Dados da compra:

```
Cliente: Patrícia Farias
Produto: Headset Gamer
Preço: R$ 350
Quantidade: 2
Estoque: 10
Valor pago: R$ 1100
```

# ✅ O QUE O PROGRAMA DEVE CALCULAR

1. `subtotal` = preço × quantidade
2. `estoqueDisponivel` = `"Estoque suficiente"` se quantidade ≤ estoque, senão `"Estoque insuficiente"`
3. `freteStatus` e `valorFrete`:
   - se subtotal ≥ 1000 → `"Frete grátis"` e `0`
   - senão → `"Frete: R$ 30"` e `30`
4. `valorFinal` = subtotal + valorFrete
5. `pagamentoStatus` = `"Pagamento aprovado"` se valor pago ≥ valorFinal, senão `"Pagamento insuficiente"`
6. `troco` = valorPago - valorFinal (se aprovado), senão `0`
7. `statusCompra` = `"Compra confirmada"` se estoque suficiente **e** pagamento aprovado, senão `"Compra não pode ser confirmada"`
8. `resumo`: uma template string com essas informações

# 🧩 EXEMPLO (com outros nomes, só para mostrar o formato)

```jsx
const nome = "Pessoa Exemplo"
const idade = 20

if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}
```

# 📤 Resultado esperado para os dados desta compra

```
subtotal: 700
estoqueDisponivel: Estoque suficiente
freteStatus: Frete: R$ 30
valorFrete: 30
valorFinal: 730
pagamentoStatus: Pagamento aprovado
troco: 370
statusCompra: Compra confirmada
```

# 📂 Estrutura do projeto

```
projeto2v2
 ┣ test
 ┃ ┗ index.test.js
 ┣ index.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

Crie o arquivo `index.js`. No final, cole isso para os testes funcionarem:

```jsx
module.exports = {
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
}
```
