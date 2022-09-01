// reduce


function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Márcia", 29),
    novoAluno("Joao", 35),
]

function idadeDaTurma (total, aluno){
    return total + aluno.idade;
}

console.log(alunos.reduce(idadeDaTurma, 0)); //vai somar a idade de todos os alunos / é possível fazer com strings também