const soma = (a,b) => a + b
const vezes = (a ,b) => a*b

const result = (op, a,b) => op(a,b)

const SelectOp = op => {
    const ops ={
        '+':soma,
        '*': vezes
    }
    return ops[op]

}

const c = soma(12,54)
console.log(c)

const d = vezes(20,54)
console.log(d)



const Splint = (c,d) =>  c/d

const Caughtop = (of,c,d) => of(c,d)
const Apende = of => {
    const Caughtof = {
        "/" : Splint
    }
    return Caughtof[of]
}

const receiveal =  Splint(100,2)
console.log(receiveal)



var alunos =  ["Felipe", "Gustavo", "Matheus Bassi", "Bruno Medeiros", "Airton Graça",
"Pedro Henrique Martins", "Harrisom", "Eduardo", "Daniel Machado" ,"Alfredo"]

console.log(alunos);

for( var i of alunos){
    console.log(alunos, i);
}