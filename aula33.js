const divTodas=[...document.getElementsByTagName("div")];
const cursoTodos=[...document.getElementsByClassName("curso")];
const cursoC1=[...document.getElementsByClassName("c1")];
const cursoC2=[...document.getElementsByClassName("c2")];
const cursoEspecial=document.getElementById("c1");

// const queryDivTodas=document.querySelector("div");

// console.log(queryDivTodas);

// const queryDivTodas=[...document.querySelectorAll(".curso")];
const queryDivTodas=[...document.querySelectorAll("div > p")];
const queryCursoTodos=[...document.querySelectorAll(".curso")];
const queryC1Todos=[...document.querySelectorAll(".c1")];
const queryC2Todos=[...document.querySelectorAll(".c2")];
// const queryCursoEspecial=document.querySelector("#c1");
const queryCursoEspecial=document.querySelectorAll("#c1")[0];

console.log(queryDivTodas);
// console.log(queryCursoTodos);
// console.log(queryC1Todos);
// console.log(queryC2Todos);
// console.log(queryCursoEspecial);

// console.log(divTodas);
// console.log(cursoTodos);
// console.log(cursoC1);
// console.log(cursoC2);
// console.log(cursoEspecial);

// cursoC2.map((el)=>{
//    el.classList.add("destaque")
// })