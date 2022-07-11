// FUNÇÃO PARTE 2

/*function saudacao () { //no javascript uma função pode ser uma variável

    return "Olá Mundo!";
}

var s = saudacao(); // se eu não colocar estes parentes eu digo que a minha função é uma váriável

console.log(s); // e quando eu colocar para imprimir s ele vai entender que a função é um resultado e vai imprimir ela.
*/

/*function media (n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;

    return media;
}

var resultado = media(6, 7);
var m = media;

var resultado2 = m(2, 3)

console.log(resultado)
console.log(resultado2) //em javascritp podemos executar uma função e atribuir em uma variável o resultado dela (oq ela estiver retornando) ou podemos atribruir a própria função a uma variável
//quando uma função vira uma variável, chamamos isso de função anonima.
*/

var media = function (n1, n2) { //criamos uma variável e atribuimos a ela uma função

    return (n1 + n2) / 2; // retornando a média de n1 e n2
}
 console.log(media(5, 6)) // isso é a mesma coisa que => var m = media(5, 6); console.log(m);

