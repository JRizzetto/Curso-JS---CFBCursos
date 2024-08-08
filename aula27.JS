// Funções Geradoras - Uma função geradora ela tem o retorno adiado até o momento que precisamos dessa função, um ponto importante é que ela são o pilar de uma função assíncrona. Quando uma função normaç é chamada quem fica com o controle dessa função é a própria função. Com as funções geradoras a própria função pode ter esse controle quando quer chamar alguma coisa. 

/*
function* cores(){
    yield "Vermelho"
    yield "Verde"
    yield "Azul"
}

let itc=cores();
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
*/

/*
function* perguntas(){
    const nome=yield "Qual o seu nome?"
    const esporte=yield "Qual seu esporte favorito?"
    return "Seu nome é: " + nome + " seu esporte favorito é: " + esporte;
}

const itp=perguntas();
console.log(itp.next().value);
console.log(itp.next("Bruno").value);
console.log(itp.next("Natação").value);
*/

function* contador(){
    let i=0;
    while(true){
        yield i++;
        if(i>5){
            break;
        }
    }
}
const itc=contador();

// for(let i=0; i<10; i++){
//     console.log(itc.next().value);
// }

for(let num of itc){
    console.log(num);
}
