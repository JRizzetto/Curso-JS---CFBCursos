
// const filtromaior18=(valor)=>{
//     if(valor>=18){
//         return valor;
//     }
// }

const idades=[15, 21, 30, 17, 18, 44, 12, 50];
const maior=idades.filter((valor, indice, arr)=>{
    if(valor>=18){
        return valor; 
    }
});

const menor=idades.filter((vMenor, iMenor, arrmenor)=>{
    if(vMenor<18){
        return vMenor;
    }
})

console.log(idades);
console.log(maior);
console.log(menor);