
let num1 = 1;
let num2 = "1";

// console.log(num1==num2);

// console.log(num1===num2);

/*
let v1 = {nome: "Jefferson"};
let v2 = {nome: "Jefferson"};

console.log(v1===v2);
*/

/*
let v1 = {nome: "Jefferson"};
let v2 = v1;

console.log(v1===v2);
*/

/*
let nome = prompt("Digite seu nome");

console.log(nome);
*/

/*
let n1 = 1;
let n2 = 2;

console.log(!(n1!=n2));
*/

if (navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
){
    console.log("Celular")
} else {
    console.log("PC")
}