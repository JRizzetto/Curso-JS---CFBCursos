

// Funções - Um bloco de comandos que eu posso executar em um momento oportuno ou em algum momento em que eu quiser. É um bloco com vários comandos dentro dele com um nome, quando eu preciso executar eu chamo ele pelo seu nome(). Assim, posso executar sempre que precisar. 

/*
function soma(){
    console.log("A função está rodando ")
}

soma();

console.log("--------------------------------------")

for(let i=0; i<10; i++){
    soma();
}
*/

/*
function soma(){
    let n1=2;
    let n2=10;
    let soma=n1+n2;
    console.log(soma)
}

for(let i=0; i<10; i++){
    soma()
}
*/

function mudartexto(){
    const d1El = document.getElementById("d1");
    d1El.innerHTML = "O texto mudou?"

    const d2El = document.getElementById("d2");
    d2El.innerText = "E o segundo texto?"

    const d3El = document.getElementById("d3");
    d3El.innerHTML = "terceiro?"
}

