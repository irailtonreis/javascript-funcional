// function somar(param1) {
//     return function (param2) {
//         return function(param3) {
//             return param1 + param2 + param3
//         }
//     }    
// }
// const soma = somar(5)(5)(5)
// console.log(soma)


function calcular(x) {
return function (y) {
        return function(fn) {
           return fn(x, y)
        }
    }
}    
function soma(x, y){    
    return x + y
}
function subtrair(x, y){    
    return x - y
}

const r1 = calcular(5)(5)(soma)
const r2 = calcular(10)(5)(subtrair)

console.log(r1)
console.log(r2)