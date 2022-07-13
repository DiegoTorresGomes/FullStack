//OBJETOS - MÉTODOS

/*
var aluno = {
    nome: "Igor",
    notas: [10, 8],
    // o objeto pode ter propriedades que funcionam como variáveis, mas o objeto também pode ter métodos
    // os metodos de um objeto são as funções deste obejto - sendo assim o obejto quando tem propriedades são variáveis e quando tem métodos são as funções.

    media: function (n1, n2) {
        return(n1 + n2) / 2;
    }


}

console.log(aluno.nome);
//console.log(aluno.media(5, 8)); //aqui vai sempre mostrar o mesmo resultado
console.log(aluno.media(aluno.notas[0], aluno.notas[1])); //aqui estou atribuindo as notas ao aluno
*/

/*function calcMedia (n1, n2) {
    return(n1 + n2) / 2;
}


var aluno = {
    nome: "Igor",
    notas: [7, 8],

    media: calcMedia

}


var aluno1 = {
    nome: "João",
    notas: [10, 8],

    media: calcMedia

}

console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

console.log(aluno1.nome);
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))

*/

/*
function calcMedia (n1, n2) {
    return(n1 + n2) / 2;
}

var aluno = {
    nome: "Igor",
    notas: [7, 8],


    media: function () {
        return(this.notas [0] + this.notas[1]) / 2; //como o método faz parte do objeto, o this vai ser este objeto
        //o this é uma variável que vai mudar de acordo com o contexto, e ele é utilizado sempre no contexto de objetos.
        //então sempre que eu utilizar o this, ele vai ser referente aquele objeto que estamos utilizando, neste caso o this faz parte deste obejto e deste metodo
    }


}

var aluno1 = {
    nome: "Igor",
    notas: [10, 8],


    media: function () {
        return(this.notas [0] + this.notas[1]) / 2; //o this deste é diferente do this de cima, pois como dito anteriormente, ele varia de acordo com o contexto
    }

}


console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno.media());
*/

function calcMedia () {
    return(this.notas [0] + this.notas[1]) / 2; 
}

var aluno = {
    nome: "Igor",
    notas: [1, 8],


    media: calcMedia


}

var aluno1 = {
    nome: "Jose",
    notas: [10, 8],


    media: calcMedia

}


console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());