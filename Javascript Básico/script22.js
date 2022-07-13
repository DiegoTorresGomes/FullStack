//OBJETOS - CONSTRUTORES
/*
var calcMedia = function (){
    return (this.nota1 + this.nota2) / 2;
}

var turma = [
    {
        nome: "Igor",
        nota1: 9,
        nota2: 7,
        media: calcMedia
    },
    {
        nome: "João",
        nota1: 4,
        nota2: 3,
        media: calcMedia
    }




]

var aluno = turma[1];
console.log(aluno);
console.log(aluno.media()); //quando colocamos o parentese significa que estamos executando a função
*/

/*

function criarAluno(nome, n1, n2){ // para a função retornar o que eu quero, preciso colocar os elementos que eu quero dentro dos argumentos, neste caso dentro dos parenteses
    //e depois colocar no return abaixo.

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return(this.nota1 + this.nota2) / 2;
        }
    }


}

var turma = [ //aqui é um array de uma turma
    criarAluno("Igor", 9, 6), //aqui estou criando os alunos e as notas como solicitado na função acima
    criarAluno("João", 7, 4)
    
]

var aluno = turma[1];

console.log(aluno);
console.log(aluno.media())

*/

/*
function criarAluno(nome, n1, n2){ 

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return(this.nota1 + this.nota2) / 2;
        }
    }


}

var turma = [
    criarAluno("Igor", 9, 6),
    criarAluno("João", 7, 4),
    criarAluno("Marcela", 8, 7.5)
    
]
 
// posso usar o "FOR" para varrer o array e criar a minha lista de alunos e notas
var aluno = turma[1];

turma.forEach(function(elemento){ // este forEach (que é um método) vai varrer o array e criar uma lista, simplificando o código e o que estou passando dentro do forEach é uma função que faz isso pra mim.

    console.log(elemento);

})

for ( var aluno of turma){ //ou podemos fazer uma lista usando este for, pegando aluno dentro de turma.
    console.log(aluno.nome)
}
*/

function criarAluno(nome, n1, n2){ 

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return(this.nota1 + this.nota2) / 2;
        }
    }


}

function aluno(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    }

}

var a = new aluno ("Igor", 8, 7);
var a = new aluno ("João", 8, 7); //aqui eu peguei uma instancia de um objeto, e transformei ele de fato em um objeto

console.log(a.media());


