//filter

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno ("Mario", 23),
    novoAluno ("Jose", 45),
    novoAluno ("Marcia", 29),
    novoAluno ("Joao", 35)
]

/* for (let aluno of alunos){
    if(aluno.idade < 30) {
        console.log(aluno.nome)
    }
} */

function temMenosDe30 (aluno) {
    return aluno.idade < 30
}

/* let alunosComMenosDe30 = alunos.filter(temMenosDe30)

console.log(alunosComMenosDe30); */

/* function filtro(callback){

    let alunosFiltrados = [];
    for (let aluno of alunos){
        if (callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados;
}
console.log(filtro(temMenosDe30)) */

function filtro(callback){

    let alunosFiltrados = [];
    for (let aluno of this){ // agora este filtro serve para qualquer array
        if (callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados;
}

alunos.filtro = filtro;

console.log(alunos.filtro(temMenosDe30))