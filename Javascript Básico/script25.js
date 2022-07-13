// CONST LET VAR

/*var numero1 = 4;
let numero2 = 5;
const numero3 = 6;// é uma constante e uma vez que foi atribuido um número a ele não podemos atribuir mais nada.
//o valor de uma constante pode mudar, ela não pode ser reatribuída, ou seja, não podemos pegar numero3 e reatribuir uma valor a ele

numero3 = 7


console.log(numero1);
console.log(numero2);
console.log(numero3);
*/

/*
const numero3 = [4]; //neste exmplo nós não atribuimos um novo valor, não colocamos um novo array, mas modificamos o array incluindo mais um número nele

numero3.push(7); //push é um método que nos permite adicionar um novo elemento no array

console.log(numero3);
*/
/*
const numero3 = {};

numero3.nome = "Diego"; // neste exemplo de objeto, nós só adicinamos o nome dentro do objeto já existente, não atribuimos um novo objeto ao numero3

console.log(numero3);
*/
/*
const numero3 = {}; //aqui existe um objeto, porém vazio

numero3 = {nome: "Diego"}; //este é um exemplo onde vai ocorrer um erro, sempre, pois estamos tentando atribuir um novo objeto a um objeto já existente.
//neste caso tentando atribuir ao objeto numero3 anteriormente vazio e agora passando um nome a ele, ao inves de inserir, como no exemplo anterior.

console.log(numero3);
*/

{
var numero1 = 4;
let numero2 = 5;
const numero3 = 6;
}
numero2 = 7; // a diferença do let para o var vai se dar no escopo, o escopo é onde a variável existe e eu posso acessar ela e onde ela não existe.

//quando temos um bloco, o let e o const só vão funcionar dentro do bloco, o var tem escopo global e o console log consegue ler ele mesmo que esteja dentro do bloco
//const e let são utilizados somente dentro do bloco, ou seja, só possuem escopo local.

console.log(numero1);
console.log(numero2);
console.log(numero3);