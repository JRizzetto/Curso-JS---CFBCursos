const valores=[10,8,9,5];
const it_valores=valores[Symbol.iterator]();

const texto="youtube"
const it_texto=texto[Symbol.iterator]();

for(let i=0; i<=texto.length; i++){
    console.log(it_texto.next());
}


// console.log(it_texto.next());
// console.log(it_texto.next());
// console.log(it_texto.next());
// console.log(it_texto.next());
// console.log(it_texto.next());
// console.log(it_texto.next());
// console.log(it_texto.next());
// console.log(it_texto.next());


