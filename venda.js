let nomeCliente = "jhonatas"
let tipoCliente = "pobre"

let nomeProduto = "feijão com farinha"
let preçoProduto = 10.00;
let estoque = 7;
let quantidadePedido = 6;

// tem estoque suficiente?
let estoqueOk = quantidaPedido <= estoque;

if (!estoqueOk) {
    console.log(" PEDIDO RECUSADO - ESTOQUE INSUFICIENTE ")
}