
// As condições IF retornam apenas boolean de verdadeiro ou falso, executando ou não um bloco de comandos. 

/*
let num=100;

if(num>10){
    console.log("Número maior do que 10");
} else {
    console.log("Número menor ou igual a 10");
}

console.log("Fim do programa");
*/

/*
let num = 60;

if(num>10){
    console.log("Número maior que 10");
    if(num>50){
        console.log("Número maior que 50")
    }
} else if (num>6){
    console.log("Número entre 6 e 10");
} else {
    console.log("Número menor ou igual a 5");
}

console.log("Fim do Programa");
*/

let energia=100;
let clima="sol";

if(energia>80 && clima=="sol"){
    console.log("Vamos a praia hoje!")
}else{
    console.log("Não vamos a praia!")
}