

/* os dois exemplos mostram como fazer a mesma coisa de duas formas, porém a primeira ten seu nome de dobro e a 
segunda é anonima */
/*function dobro (x) {
    console.log(2 * x);
}

dobro(5);*/
/*
let dobro = function (x) {
    console.log(2 * x);
}

dobro(15);*/

/* o exemplo abaixo já começamos na Arrow Functions */

// se a arrow function tiver apenas um argumento, não vamos precisar dos parenteses do x
/*let dobro = x => {
    return (2 * x);
}

console.log(dobro(7));*/


// se a função for só retornar um valor, podemos ter ela como exemplo abaixo
let dobro = x => 2 * x

console.log(dobro(9));