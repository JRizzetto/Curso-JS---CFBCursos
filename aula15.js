// Loops ou estretura de repetição: Basicamente vai repetir um bloco de comandos, as repetições do loop são chamadas de iterações, cada repetição que o loop executar é uma iteração que o loop está executando. Podemos classificar em definidos e indefinidos. Quando eu sei quantas repetições vão ter são definidos e quando não sabemos ao certo são indefinidos. Para entendermos a estrutura vamos para os comandos. 

// DEFINIDOS - FOR 
for(let index=0; index<20; index++){
    if(index%2==0){
        console.log(index + " é par")
    }else{
        console.log(index + " é impar")
    }
}

console.log("Fim do programa")

// INDEFINIDOS - "WHILE" E "DO WHILE"