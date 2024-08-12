const caixa1=document.querySelector("#caixa1");

const novoArray=["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

novoArray.map((el,chave)=>{
    chave = chave + 1;
    const novoElemento=document.createElement("div");
    novoElemento.setAttribute("id", "c"+chave); 
    novoElemento.setAttribute("class", "curso c1");   
    novoElemento.innerHTML=el;

    const btnLixeira=document.createElement("img");
    btnLixeira.setAttribute("src", "./aula41-img-lixeira.png")
    btnLixeira.setAttribute("class", "btnLixeira")
    btnLixeira.addEventListener("click", (evt)=>{
        caixa1.removeChild(evt.target.parentNode);        
    })

    novoElemento.appendChild(btnLixeira);
    caixa1.appendChild(novoElemento);
})

