/*
&& -> and e
|| -> or ou
! -> not não
*/

/*
and ->  v v = v
        f v = f
        v f = f
        f f = f

or ->   v v = v
        v f = v
        f v = v
        f f = f

*/

let n1=10, n2=5, n3=15

console.log(!((n1>n2)||(n1>n3)))
console.log(!((n1>n2)&&(n1>n3)))
