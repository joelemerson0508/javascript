var agora = new Date()
var DiaSem = agora.getDay()
/* No java scripts os dias da semana funcionam da seguinte maneira:
0= Domingo
1= Segunda
2= Terça
3= Quarta
4= Quinta
5= Sexta
6= Sábado
*/
switch(DiaSem) { // o switch é bom para testar dados pontuais(so funciona com números inteiros e strings), já o if é para intervalos.
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERROR] Dia inválido!')
        break
}