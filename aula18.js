

// While e Do While - Ambos vão executar enquanto uma expressão for verdadeira, eqnaunto a expressão lógica dentro do while retornar verdadeiro. Ambos vão ser usadas em uma situação indefinida, enquanto não souber a quantidade de looping. vAMOS VER A DIFERENÇA DE AMBOS. 

// While - Executa uma expressão e enquanto essa expressão for verdadeira eu executo o bloco de comandos dentro dele. 

// Do While - Eu começo com um DO (faça) e tenho o bloco de comandos, no final da estrutura eu executo o While. 

// A diferença é que no do while eu tenho a garantia de execução de pelo menos uma vez o bloco de comandos do looping.

let n=10;
while(n<10){
    console.log("Programa rodando");
    n++;
}
console.log("Fim do programa");

console.log("---------------------------------------------")

let n1=10;
do{
    console.log("Programa rodando");
    n1++;
}while(n1<10)

console.log("Fim do programa");
console.log(n1);