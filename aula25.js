

// ARROW FUNCTION OU FUNÇÃO LAMBIDA - São funções lambidas, são mecanismos consisos para representar funções anonimas, ai entramos com conceito de arrow function que é um tipo de declaração anonima.

// const soma=function(v1,v2){return v1+v2} // Padrão anonima 

const soma=(v1,v2)=>{
    return v1+v2
}
console.log(soma(15, 45))

const nome=n=>{return n}
console.log(nome("Jefferson"))

const add=n1=>n1+10
console.log(add(10))



