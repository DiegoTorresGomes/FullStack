//FUNCÇÕES // a função cria um apelito para um bloco de comandos e quando chamamos a função ela executa todo este bloco
 /*
function media() {
var nota1 = 10;
var nota2 = 8;
var media = (nota1 + nota2) / 2;
console.log(media)

} // a função acima foi criada para imprimir a média das notas que são fixas

media(); // para a função rodar, precisamos chamar ela desta forma

*/

function media(n1, n2) { // dentro de média, ou seja, detro da função no parentese estamos colocando argumentos que serão variáveis e não precisam levar o var, nem let
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    //console.log(media); //comentadi para não imprimir mais a média, devido ao return

    return media; // a função tem o poder de retornar um valor e para isso usamos return
    
}
    
var resultado1 = media(6, 7);
var resultado2 = media(8, 7);
console.log(resultado1 + resultado2);
console.log(resultado1 + " e " + resultado2);

//media(6, 7); // aqui estou dizendo quais são os valores que n1 e n2 estarão assumindo, para assim o resultardo ser gerado
//media(8, 7)
