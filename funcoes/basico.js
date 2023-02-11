function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potencia2 = potencia(2)
console.log(potencia2(8))