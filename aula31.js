const c1El=document.getElementById("c1");
const c2El=document.getElementById("c2");
const c3El=document.getElementById("c3");
const c4El=document.getElementById("c4");
const c5El=document.getElementById("c5");
const c6El=document.getElementById("c6");

const arrayElements=[c1El, c2El, c3El, c4El, c5El, c6El]

// const colecaoHTML=[...document.getElementsByTagName("div")];

let colecaoHTML=[...document.getElementsByTagName("div")];
colecaoHTML=[...colecaoHTML]

console.log(colecaoHTML);

colecaoHTML.map((e)=>{
    console.log(e);
})


// console.log(arrayElements);
// console.log(colecaoHTML);