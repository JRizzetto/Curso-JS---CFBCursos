// Usando o operador THIS dentro de funções

// function aluno(nome, nota){
//     this.nome=nome;
//     this.nota=nota;

//     console.log(nome);
//     console.log(nota);
// }

// aluno("Jefferson", "100")

function aluno(nome, nota){
    this.nome=nome;
    this.nota=nota;

    this.dados_anonimo=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const aluno1=new aluno("Jefferson", 100);
aluno1.dados_anonimo();
aluno1.dados_arrow();