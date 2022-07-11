//JUNTANDO TUDO ATÉ AQUI

//Nome do aluno - nota 1 - nota 2 - média - Aprovado / Reprovado

var nomes = ["Igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];


function media (n1, n2){
    return (n1 + n2)/2;
}

function passou (media){

    var resultado = "reprovado"; // estou dizendo de cara que ele está reprovado sem a necessidade de fazer o else

     if (media > 7){
        resultado = "Aprovado";
     }

     return resultado;

}

for (var index in nomes) {

    var nota1 = notasA[index]; // utilizei estas variáveis para substituir na hora de passar para o console.log conforme abaixo, assim o nome no console.log não ficaria tão grande
    var nota2 = notasB[index];
    var nomeAlunos = nomes[index];

    var m = media(nota1, nota2);

    console.log(nomeAlunos + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m));
}