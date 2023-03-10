
const nums = [1, 2, 3, 4, 5]

const dobro = n => n * 2

console.log(nums.map(dobro))

const nomes = ["Ana", "Bia", "Gui", "Lia", "Rafa"]

const primeiraLetra = texto => texto[0]

const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    { nome: "Caneta", qtde: 10, preco: 7.99 },
    { nome: "Impressora", qtde: 0, preco: 649.50 },
    { nome: "Caderno", qtde: 4, preco: 27.10 },
    { nome: "Lápis", qtde: 3, preco: 5.82 },
    { nome: "Tesoura", qtde: 1, preco: 19.20 }
]

const getNome = item => item.nome 

const getTotal = item => item.preco * item.qtde

console.log(carrinho.map(getNome))
console.log(carrinho.map(getTotal))


Array.prototype.meuMap = function(fn){
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }
    return novoArray
}


console.log(carrinho.meuMap(getNome))
console.log(carrinho.meuMap(getTotal))
