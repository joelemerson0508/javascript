let valores = [1, 5, 7, 3, 9, 8]
console.log(valores)
/*for (let pos = 0;pos < valores.length;pos++ ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
/* Essa é a versão mais atualizada do EcmaScript, funcionando apenas para arrays(vetores) e objetos. 
ps: todo array em js é object */
