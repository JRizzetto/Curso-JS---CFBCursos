const caixaCursos=document.querySelector("#caixaCursos");
const btn_c=[...document.querySelectorAll(".curso")];
const c1_2=document.querySelector("#c1_2");
const cursos=["HTML","CSS","javascript","PHP","React","MySQL", "Reactnative"];
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado");
const btnRemoverCurso=document.getElementById("btnRemoverCurso");
const btnAdicionarNovoCursoAntes=document.getElementById("btnAdicionarNovoCursoAntes");
const btnAdicionarNovoCursoDepois=document.getElementById("btnAdicionarNovoCursoDepois");
const novoCurso=document.getElementById("nomeCurso")

let indice=0;

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div");
    novoElemento.setAttribute("id","c"+indice);
    novoElemento.setAttribute("class","curso c1");
    novoElemento.innerHTML=curso;

    const comandos=document.createElement("div");
    comandos.setAttribute("class","comandos");

    const rb=document.createElement("input");
    rb.setAttribute("type","radio");
    rb.setAttribute("name","rb_curso");

    comandos.appendChild(rb);
    novoElemento.appendChild(comandos);
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el);
    caixaCursos.appendChild(novoElemento);
    indice++;
})

const radioSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")];
    let radioSelecionado=todosRadios.filter((ele,ind,arr)=>{
        return ele.checked 
    })

    return radioSelecionado[0];
}

btnCursoSelecionado.addEventListener("click", (evt)=>{
    const rs=radioSelecionado();
    console.log(rs)
    if(rs!=undefined){
        const cursoSelecionado=rs.parentNode.previousSibling.textContent
        alert("Curso Selecionado: " + cursoSelecionado);
    }else{
        alert("Selecione um curso")
    }
    
    })

    btnRemoverCurso.addEventListener("click", (evt)=>{
        const rs=radioSelecionado();
        try{
            const cursoSelecionado=rs.parentNode.parentNode;
            cursoSelecionado.remove();  
            alert("Curso removido: " + cursoSelecionado.textContent)
        }catch{
            alert("Selecione um curso para remover")
        }

        // if(rs!=undefined){
        //     const cursoSelecionado=rs.parentNode.parentNode;
        //     cursoSelecionado.remove();  
        //     alert("Curso removido: " + cursoSelecionado.textContent); 
        // }else{
        //     alert("Selecione um curso para remover")
        // }
             
    })
    
    btnAdicionarNovoCursoAntes.addEventListener("click", (evt)=>{
        const rs=radioSelecionado();
        if(rs!=undefined){
            if(nomeCurso.value!=""){
                const cursoSelecionado=rs.parentNode.parentNode;
                const novoCurso=criarNovoCurso(nomeCurso.value);
                caixaCursos.insertBefore(novoCurso,cursoSelecionado);
            } else{
                alert("Digite um curso")
            }
           
        }else{
            alert("Selecione um curso")
        }
    })

    btnAdicionarNovoCursoDepois.addEventListener("click", (evt)=>{
        const rs=radioSelecionado();
        if(rs!=undefined){
            if(nomeCurso.value!=""){
                const cursoSelecionado=rs.parentNode.parentNode;
                const novoCurso=criarNovoCurso(nomeCurso.value);
                caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling);
            }else{
                alert("Selecione um curso")
            }
        }else{
            alert("Selecione um curso")
        }
    })