// Break e continue 
// Break vai encerrar o looping e continuar a execução do programa.
// Continue, quando executado dentro do looping ele só para aquela iteração, mas ele continua a execução do looping. 

/*
let n=0;
let max=1000;

while(n<max){
    console.log("Programa rodando " + n);
    if(n==10){
        break;
    }
    n++;
}
console.log("Fim do programa")
*/

let n=0;
let max=1000;
let pares=0;

for(let i=n; i<max; i++){
    if(i%2!=0){
        continue;
    }
    pares++;
}
console.log("Quantidade de pares " + pares)
console.log("Fim do Programa")