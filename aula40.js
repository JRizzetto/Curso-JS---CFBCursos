const caixa1=document.querySelector("#caixa1");

const novoArray=["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

novoArray.map((el,chave)=>{
    chave = chave + 1;
    const novoElemento=document.createElement("div");
    novoElemento.setAttribute("id", "c"+chave); 
    novoElemento.setAttribute("class", "curso c1");   
    novoElemento.innerHTML=el;
    caixa1.appendChild(novoElemento);
})