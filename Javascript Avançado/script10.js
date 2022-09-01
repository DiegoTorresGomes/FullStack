//spread operator

/* var pessoa = {
    name: "José Silva",
    idade: 32,
}

var contato = {
    telefone: 8765432,
    email: "jose@gmail.com"
}


var copia = {...pessoa, cidade: "Rio de Janeiro", ...contato}
copia.idade = 88;

console.log(pessoa)
console.log(copia) */

var notas_turma1 = [10, 8, 4, 3];

var notas_turma2 = [4, 5, 4, 6];

var todas_notas = [...notas_turma1, ...notas_turma2]

console.log(todas_notas)
