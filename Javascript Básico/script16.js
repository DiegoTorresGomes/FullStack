// Arrays
/*
var alunos = new Array("Igor", "Jose", "Marcos", "Mariana");

console.log(alunos [0]);
*/

/*var alunos = ["Igor", "Jose", "Marcos", "Mariana", "Joana"];

console.log(alunos.length); //PARA DESCOBRIR O TAMANHO DO ARRAY PRECISAMOS COLOCAR A VARIÁVEL.LENGTH
*/

/*var alunos = ["Igor", "Jose", "Marcos", "Mariana", "Joana", "Leo"]; // o índice é o primeiro elemento do array, mas ele pode ser modificado, eu posso dizer (var i = 1 ou 2 e por ai vai)

for (var i = 0; i < alunos.length; i++) { //vai imprimir todos os nomes do array / var i pois ele precisa tornar o índice uma variável
    console.log(alunos[i])

}
*/

/*var alunos = ["Igor", "Jose", "Marcos", "Mariana", "Joana", "Leo"];

for (var i in alunos) {
    console.log(i)

}
*/

var alunos = ["Igor", "Jose", "Marcos", "Mariana", "Joana", "Leo"];

for (var aluno of alunos) { // isso significa que ele vai pegar o aluno dentro do array de alunos // o of faz pegar o elemento, o valor mesmo que está dentro do array
    console.log(aluno)

}