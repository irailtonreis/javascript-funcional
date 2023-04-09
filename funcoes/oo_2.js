class Produto {
    constructor(nome, preco, desc = 0.50){
        this._nome = nome
        this._preco = preco
        this.desc = desc
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

const p1 = new Produto('Caneta', 10)
console.log(p1.nome)
p1.preco = -20
console.log(p1.preco)
const p2 = new Produto('Geladeira', 10000)
console.log(p2.preco)
console.log(p2.precoFinal)