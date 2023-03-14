const carrinho = [
    { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
    { nome: "Impressora", qtde: 1, preco: 649.50, fragil: true },
    { nome: "Caderno", qtde: 4, preco: 27.10, fragil: false },
    { nome: "Lápis", qtde: 3, preco: 5.82, fragil: false },
    { nome: "Tesoura", qtde: 1, preco: 19.20, fragil: true }
]

const fraqil = item => item.fragil
const total = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el

    return{
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const mediaIncial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
.filter(fraqil)
.map(total)
.reduce(getMedia, mediaIncial).media

console.log("Media", media)