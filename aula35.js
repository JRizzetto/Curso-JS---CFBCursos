const btnAll=[...document.querySelectorAll(".curso")];
const btnCop=document.getElementById("btn_copiar");
const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")

btnAll.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso=evt.target;
        curso.classList.toggle("selecionar");
    })
})

btnCop.addEventListener("click", ()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionar")];
    const semSelecao=[...document.querySelectorAll(".curso:not(.selecionar)")];

    console.log(semSelecao);

     cursosSelecionados.map((el)=>{
        caixa2.appendChild(el);
    })

    semSelecao.map((el)=>{
        caixa1.appendChild(el);
    })
})


