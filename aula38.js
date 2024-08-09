const caixa1=document.querySelector("#caixa1");
const btnEl=[...document.querySelectorAll(".curso")];

// console.log(caixa1.lastElementChild)
// console.log(caixa1.firstElementChild)
// console.log(caixa1.children)

// console.log(document.getRootNode())

// console.log(btnEl[0].getRootNode());

console.log(btnEl[0].ownerDocument);