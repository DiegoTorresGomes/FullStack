
/* let alunoA = {nome: "Igor", idade: "15"};

let alunoB = alunoA

alunoB.idade = 25; */

/* let turmaA = ["Igor", "Jose", "Paula"];

let turmaB = turmaA;

turmaB.push("Joao") */

/* let turmaA = ["Igor", "Jose", "Paula"];

let turmaB = turmaA.slice();

turmaB.push("Joao") */


let alunoA = {nome: "Igor", idade: "15"};

let alunoB = Object.assign({}, alunoA);

alunoB.idade = 25;

