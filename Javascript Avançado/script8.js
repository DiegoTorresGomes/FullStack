// map


function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno ("Mario", 23),
    novoAluno ("Jose", 45),
    novoAluno ("Marcia", 29),
    novoAluno ("Joao", 35)
]

/* function nomeEidade (aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos";
} */

function alunoDaquiA5Anos (aluno) {
    return {
        nome: aluno.nome,
        idade: aluno.idade + 5
    }
}


console.log(alunos.map(alunoDaquiA5Anos));