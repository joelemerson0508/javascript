let num = [5, 8, 2, 9, 3]
num.push(1) // acrescenta um valor no indice ou chave seguinte
num.sort() //coloca os números em ordem crescente 
/* tomar cuidado, pois se colocar o sort em cima do push, vai ficar em ordem, mas o valor colocado em push vai
o final e vai ficar sem ordem*/
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
// Caso não exista o valor, o computado JavaScript ira dizer "-1", que significa que o valor não está lá, não existe
