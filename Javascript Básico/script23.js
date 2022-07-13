//OBJETOS - RESUMO

var a  = {} //quando abrimos e fechamos chaves já estamos criando um objeto, e neste caso é um objeto vazio

var b = [] //neste caso já estou criando um array, só por ter aberto o conchetes

var c  = {nome: "Ygor", sobrenome: "Torres"}

function ob(n, s) { //o objetivo da função é fazer com que eu não escreva a mesma coisa toda hora.
    return{
        nome: n,
        sobrenome: s
    }
}

var d = ob("Diego", "Torres")

console.log(d)



function obj(n, s) { 
   
    this.nome = n;
    this.sobrenome = s;


}

var e = new obj("Diego", "Torres")

console.log(e.nome)


