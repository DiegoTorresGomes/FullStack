//DATAS - CRIAÇÃO DE DATAS

//var d = new Date(year, month, days, hours, minutes, seconds, milliseconds);

//em datas, o mês é representado por um array, onde 0 é janeiro e 11 é dezembro
/*
var d = new Date(2018, 0, 12);

console.log(d);

var dt = new Date(2018, 1, 12, 22, 45);

console.log(dt);


var dtd = new Date(2018); //se eu passar só um numero no campo de datas, ele vai entender como milisegundos e não como uma data

console.log(dtd);


var dt = new Date(1000 * 60 * 5); //aqui estou pegando os milisegundos e miltiplicando por 60 que são minutos e multiplicando por 5 que são 5 minutos

console.log(dt);

var dt = new Date(1000 * 60 * 60 * 24);//aqui estou passando para o proximo dia, multiplicando 60 minutos por 24

console.log(dt);
*/

/*
var dt = new Date("2022 june 29 23:25"); //é possivel criar por string

console.log(dt);

*/

/*Formas de instanciar uma Data:

var d = new Date();
var d = new Date(milliseconds);
var d = new Date(dateString);
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);​
*/



/*
var d = new Date("05-15-1999");

var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

console.log(d.getFullYear()) //isso não é uma propriedade, isso é um método e como é uma função precisa do parentese depois para executar
console.log(dias[d.getDay()])
*/

var d = new Date("05-15-1999 23:55");

console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMonth());
console.log(d.setDate(20)) // aqui eu estou mudando a minha data
console.log(d.setFullYear("2022"))
//console.log(d.getTime());

