let n = 0
let max = 1000
let pares = 0

/* while (n < max) {
    console.log("Teste - " + n)

    if (n > 10) {
        break
    }
    n++
} */

console.log("Fim do programa")

for (let i = n; i < max; i++) {
    console.log("Teste - " + i)

    if(i % 2 != 0) {
        continue
    }
    pares++
}

console.log("Quantidade de pares - " + pares)
console.log("Fim do programa")