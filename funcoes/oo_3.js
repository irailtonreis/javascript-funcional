class Produto {
    constructor(nome, preco, desc = 0.50){
        this._nome = nome
        this._preco = preco
        this._desc = desc
    }
    get nome(){
        return `Produto: ${this._nome}`
    }
    set nome(novoNome){
        return this._nome = novoNome.toUpperCase()
    }
    set preco(novoPreco){
        if(novoPreco >= 0){
            this._preco = novoPreco
        }
    }
    get preco(){
        return this._preco
    }
    get precoFinal() {
        return this.preco * (1 - this.desc)
    }
   
}
Produto.prototype.log = function(){
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function(){
        return this._desc
    },
    set: function(novoDesc){
        if(novoDesc >= 0 && novoDesc <= 1){
            return this._desc = novoDesc
        }
    }
})
Object.defineProperty(Produto.prototype, 'descString', {
    get: function(){
        return `${this._desc *100}%`
    }
})

const p1 = new Produto('Caneta', 10)
p1.log()
console.log(p1.nome)
p1.preco = -20
console.log(p1.preco)
const p2 = new Produto('Geladeira', 10000)
console.log(p2.preco)
console.log(p2.precoFinal)
p2.desc = 0.99
console.log(p2.desc)
console.log(p2.descString)