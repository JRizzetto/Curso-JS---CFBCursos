const pArray=document.querySelector("#array");
const btnVerificar=document.querySelector("#btnVerificar");
const resultado=document.querySelector("#resultado");

const elementos_array=[16,12,10,16,17,13,11];
array.innerHTML="[" + elementos_array + "]"

btnVerificar.addEventListener("click", (evt)=>{
        const ret=elementos_array.some((e,i,a)=>{
            i=i+1;
            if(e>=18){
                resultado.innerHTML="Ok - Posição: " + i;
            }else{
                resultado.innerHTML="Não existe maior de 18"
            }
            return e>=18;
        })
        // if(ret==false){
        //     resultado.innerHTML="Não existe maior de 18";
        // }else{
        //     resultado.innerHTML="Em conformidade ";
        // }   
    })