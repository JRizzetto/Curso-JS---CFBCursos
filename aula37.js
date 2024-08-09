const caixa1=document.querySelector("#caixa1");
// const btnC1=document.querySelector("#c1");
const allBtn=[...document.querySelectorAll(".curso")];

caixa1.addEventListener("click", (evt)=>{
    console.log(evt.target);
    console.log("clicou");
})

allBtn.map((el)=>{
    el.addEventListener("click", (evt)=>{
        evt.stopPropagation();
    })
})