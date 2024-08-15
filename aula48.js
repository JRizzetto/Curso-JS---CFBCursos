const pArray=document.querySelector("#array");
const btnVerificar=document.querySelector("#btnVerificar");
const resultado=document.querySelector("#resultado");

const elementos_array=[24,25,17,20,18,18,22];
array.innerHTML="[" + elementos_array + "]"

btnVerificar.addEventListener("click", (evt)=>{
        const ret=elementos_array.every((e,i,a)=>{
            i=i+1;
            if(e<18){
                resultado.innerHTML="Array não conforme na posição: " + i;
            }
        return e>=18;
    })

    if(ret==true){
        resultado.innerHTML="OK"
    }

    // console.log(ret);
})