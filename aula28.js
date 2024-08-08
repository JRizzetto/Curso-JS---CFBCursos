// Função MAP - Tem a funcionalidade de percorrer arrays, percorrer coleções. Utilizaremos quando precisar trabalhar com elemento por elemento de uma coleção, ele vai iterar toda a coleção. Vamos usar quando realmente precisar iterar com todos os elementos dentro da coleção. 

//  const cursos=["HTML", "CSS", "javascript", "PHP", "React"]
 
//  cursos.map((el,i)=>{
//     console.log("Curso: " + el + " - Posição: " + i);
//  })

// let res=cursos.map((el,i)=>{
//     return el;
    
// })

// console.log(res);

// let divEl=document.getElementsByTagName("div");
// divEl=[...divEl]

// divEl.map((e,i)=>{
//     e.innerHTML="CFB Cursos"
// })

// const el=document.getElementsByTagName("div");
// const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML);
// console.log(val);

const convertInt=(e)=>parseInt(e);
const dobrar=(e)=>e*2;

let num=["1", "2", "3", "4", "5"].map(convertInt);
console.log(num);

let numDobrar=["1", "2", "3", "4", "5"].map(dobrar);
console.log(numDobrar);

