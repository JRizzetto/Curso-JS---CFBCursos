

// O comando Switch case ele avalia uma expressão e de acordo com o resultado ele compara com os cases que ele está programado para resultado, caso algum caso conincida com a avaliação da expressão ele executa seu bloco de comandos, se nenhum caso estiver correspondência ele cai em um bloco de execução chamado defalt.  

let colocacao=2;

switch(colocacao){
    case 1: 
        console.log("Primero Lugar")
        break;
    case 2:
        console.log("Segundo Lugar");
        break;
    case 3:
        console.log("Terceiro Lugar");
        break;
    case 4: case 5: case 6:
        console.log("Prêmio de participação");
        break;    
    default:
        console.log("Não ganhou medalha");
        break;
}