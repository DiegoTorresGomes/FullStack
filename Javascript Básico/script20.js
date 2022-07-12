//OBJETOS - PROPRIEDADES

//var objeto = { nome: "Igor", nota1: 7.5 } // para criar um objeto em js é necessário abrir e fechar chaves
// diferença entre um objeto e um array - No array podemos acessar um elemento ou alguma coisa que está dentro dele através do índice, no obejto podemos criar uma chamada chave para acessar algum elemento
// nós sempre teremos, em um objeto, uma chave e um valor e uma vígula para separar, como no exemplo acima.

/*var aluno = { nome: "João",
               nota1: 7.5 } //este exmplo é para mostrar que também podemos organizar desta forma, que é até mesmo usual.

console.log(aluno["nome"]); //podemos colocar desta forma também - o array e o objeto são muito parecidos e a diferença é que ao invés de usar o index, usaremos uma chave para chamar um elemento
console.log(aluno.nota1);
*/

/*
var aluno = { 
    nome: "João",
    notas: [7.5, 5.0]
}


console.log(aluno);
console.log(aluno.notas[0]); //primeiro jeito de chamar um array dentro de um objeto
console.log(aluno["notas"][1]); //segundo jeito de chamar um array dentro de um objeto

*/

var aluno = { 
    nome: "João",
    notas: [7.5, 5.0]
}

var novaProp= "LastName";

aluno.matricula = 12345; //esta é uma forma de incluir elementos dentro do objeto

//aluno["sobrenome"] = "Oliveira"; //esta é uma outra forma de incluir elementos dentro do objeto

aluno[novaProp] = "Oliveira"; //desta forma é possivel criar uma variável e ao inves de escrever como acima, sobrenome, só precisamos passar o nome da variável

console.log(aluno);


