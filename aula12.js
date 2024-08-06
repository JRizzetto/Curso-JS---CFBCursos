
// O operador Spread faz o trabalho de quebrar um conjunto de elementos e devolver elemento a elemento. Vai simplificar diversar operações quando se trata de array e outras coleções de elementos. 

// Copiar um array dentro do outro

/*
let n1=[10,20,20];
let n2=[11,22,33,44,55];
let n3=[...n1];

console.log(n1, n2, n3);
*/

// contatenação de arrays de n1 e n2 

/*
let n1=[10,20,20];
let n2=[11,22,33,44,55];
let n3=[n1 ,n2];

console.log("n3 = " + n3)
console.log("Tipo n3 = " + typeof(n3));
*/

// Fazer o espalhamento dos elementos dentro do array. 

/*
let n1=[10,20,20];
let n2=[11,22,33,44,55];
let n3=[...n1,...n2];

console.log("n3 = " + n3);
console.log("O tipo é: " + typeof(n3))
*/

// Concatenação entre dois objetos, ele mantém as propriedades iguais e adicionam as propriedades diferentes. 

/*
]const jogador1={nome:"Bruno",energia:100,vidas:3,magia:150};
const jogador2={nome:"Jefferson", energia:100,vidas:5,velocidade:80};
const jogador3={...jogador1,...jogador2};

console.log(jogador3);
*/

// Outra vantagem de usar o operador spread é usar em funções. Suponhamos que temos uma função que some três valores:

/*
const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4]
console.log(soma(...valores));
*/


// No HTML fizemos 3 divs. Podemos pegar esse grup de elementos e trabalhar dentro do javascript.
// No primeiro caso eu tenho um HTML Collection e essa coeleção só recebe elementos HTML, que não é a mesma cois que array. Já no segundo caso temos um array que podemos adicionar qualquer tipo de elemento, como fizemos o spread, ele transformou isso em array. 

const obj1=document.getElementsByTagName("div");
const obj2=[...document.getElementsByTagName("div")];

obj2.forEach(Element => {
    Element.innerHTML="Curso";
})

console.log(obj1);
console.log(obj2);

