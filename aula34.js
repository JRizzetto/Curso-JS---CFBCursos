// function msg(){
//     alert("oládev");
// }

// const msg=()=>{
//     alert("oláDev")
// }

// const c1=document.getElementById("c1");
const todosClick=[...document.querySelectorAll(".curso")]

// const msg=()=>{
//     alert("Clicou Aqui")
// }

todosClick.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el=evt.target;
        el.classList.add("destaque");
        console.log(el.innerHTML + " Foi clickado");
    })
})

// c1.addEventListener("click", (evt)=>{
//     const el=evt.target;
//     el.classList.add("destaque");
// })

