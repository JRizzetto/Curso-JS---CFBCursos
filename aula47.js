const tArray=document.querySelector("#array");
const txt_pesquisar=document.querySelector("#txt_pesquisar");
const btnPesquisar=document.querySelector("#btnPesquisar");
const resultado=document.querySelector("#resultado");

const numeroArray=[10, 5, 8, 2, 9, 15, 20]
tArray.innerHTML="[" + numeroArray + "]";

btnPesquisar.addEventListener("click", ()=>{
    resultado.innerHTML="Valor não encontrado"
    const ret=numeroArray.find((e, i)=>{
        if(e==txt_pesquisar.value){
            i= i+1;
            resultado.innerHTML="O valor encontrado é: " + e + " na posição " + i;
            return e
        }
    })
})