// desestruturar um objeto

var aluno = {
    matricula: 1234,
    nome: "Marcos",
    telefone: 987654432,
    cidade: "Barra do priraí"
}

/* var {matricula, nome} = aluno;

console.log(matricula);
console.log(nome); */

/* var {...copia} = aluno;
copia.matricula = 654321;
console.log(copia);
console.log(aluno); */

/* var {nome, ...copia} = aluno; //colocando desta forma, eu separei o nome e ele não faz mas parte da cópia.
copia.matricula = 654321;
console.log(copia);
console.log(aluno);
console.log(nome); */

/* const { matricula, nome, ...resto} = aluno //aqui imprime tudo que não é nome e matrícula.
console.log(resto); */

var aluno1 = {
    matricula: 1234,
    nome: "João",
    telefone: 987654432,
    cidade: "Barra do priraí"
}

var alunos = [aluno, aluno1] //quando se trata de array, a ordem dos obejtos que importa

var [joao, marcos] = alunos

console.log(marcos) //não consigo imprimir o marcos, pois o joão quem vem primeiro