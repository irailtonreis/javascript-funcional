const primeiroElemento = arrayOuString => arrayOuString.toLowerCase()
const letraMinuscula = letra => letra.toLowerCase()
const primeiraLetra = string =>string[0]



new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
.then(console.log)



