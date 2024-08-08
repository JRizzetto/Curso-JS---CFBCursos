


const soma=(...valores)=>{ // Arrow function parametrizada com parametro rest.
    const somar=val=>{
        let res=0
        for(v of val)
            res+=v
        return res
    }
    return somar(valores)
}

console.log(soma(5,10,15))

valor=[5,10,15]
console.log(soma(...valor))