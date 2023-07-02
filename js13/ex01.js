const objs= document.getElementsByTagName("div")

let num= [10, 20, 30, 40, 50]

for(let i = 0; i < num.length; i++ ) {
    console.log(num[i])
}

//Muito usados para correr coleções

for (o of objs) { // of vai mostrar o elemento
    console.log(o)
}

for (o in objs) { //in vai mostrar a posição do elemento
    console.log(o)
}