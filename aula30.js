const c1El=document.getElementById("c1");
const c2El=document.getElementById("c2");
const c3El=document.getElementById("c3");
const c4El=document.getElementById("c4");
const c5El=document.getElementById("c5");
const c6El=document.getElementById("c6");

// console.log(c1);
// console.log(c1.id);
// console.log(c1.innerHTML);

// c1El.innerHTML="Olá Dev Aprendiz"

const arrayElements=[c1El,c2El,c3El,c4El,c5El,c6El];
console.log(arrayElements);

// for(let d of arrayElements){
//     d.innerHTML="OláDev"
// }

arrayElements.map((e)=>{
    console.log(e);
    e.innerHTML="mudou?"
})


