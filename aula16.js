// VARIAÇÕES DO LOOP FOR QUE SÃO FOR IN E FOR OFF

// let num=[10,20,30,40,50];


/*
for(let i=0; i<num.length; i++){
     console.log(num[i]);
}
*/

/*
for(n in num){
    console.log(num[n]);
}
*/

/*
for(n of num){
    console.log(n);
}
*/


const objEl=document.getElementsByTagName("div");

for(n of objEl){
    console.log(n);
}

for(n in objEl){
    console.log(n);
}

