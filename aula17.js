

// Enquanto uma condição for verdadeira o while vai ficar rodando até que a condições seja falsa, saindo do looping. 

/*
let n=8;

while(n<=10){
    console.log(n);
    n++;
}
console.log("Fim do programa")
*/

// PODEMOS USAR O WHILE PARA RESOLVER O RESULTADO DE UM FATORIAL, EX:
// 5! = 5x4x3x2x1 = 120

let n=10;
let fat=1;

while(n>0){
    fat=fat*n;
    n--;
}

console.log(fat)