function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo);
    })
}

function retornarValor(){
return new Promise(resolve =>{
    setTimeout(() => resolve(10), 5000);
})
}

async function retornarValorRapido(){
    return 20
}
async function executar() {
    let valorRapido = await retornarValor()
    let valor = await retornarValor()
    await esperarPor(1500)
    console.log(`Asyn/Await ${valor}...`)
    await esperarPor(1500)
    console.log(`Asyn/Await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Asyn/Await ${valor + 2}...`)
    console.log(`Asyn/Await ${valorRapido}...`)

    return valor + 3
}

executar().then(console.log)