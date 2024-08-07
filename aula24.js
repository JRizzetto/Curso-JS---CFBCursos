

// Funções Anonimas = São funções que não possuem um nome associados ao seu conteúdo, são chamadas em tempos de execução, fica guardada aguardado ser chamada, ela funciona como uma função padrão, porém, sem um nome. 

/*
const f=function (v1, v2){
    return v1+v2;
}

console.log(f(10, 5)); 
*/

/*
const f=function(...parametros){
    let res=0;
    for(v of parametros){
        res+=v;
    }
    return res;
}

console.log(f(10, 15));
*/



const f=new Function("n1", "n2", "n3", "return n1+n2+n3") // FUNÇÃO CONSTRUTOR ANONIMA

console.log(f(20,15,10));