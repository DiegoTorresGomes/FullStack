//condicionais if

/*var idade = 18;

if (idade >= 18){ 
    console.log("Pode"); //se fosse somente esta linha de comando,
    //não precisaríamos usar {}, porém como se tornou um bloco de comando, 
    //pois excedeu uma linha,
    //se faz necessário o uso de {}
    console.log("Qual o seu pedido?");
}
else{
    console.log("Não pode");
    console.log("Volte futuramente!");
}*/

/*var idade = prompt("Qual a sua idade ?")

if (idade >= 18){ 
    console.log("Pode");
    prompt("Qual o seu pedido?");
}
else{
    console.log("Não pode");
    alert("Volte futuramente!");
}*/

/*var idade = 47;

if (idade >= 35){ 
    console.log("Pode"); 
    console.log("Qual o seu pedido?");
}

else if (idade >= 18){
    console.log("Pode"); 
    console.log("Moste a identidade");
}

else{
    console.log("Não pode");
    console.log("Volte futuramente!");
}*/

/*var idade = 77;

if (idade >= 18 && idade <= 70){ 
    console.log("Pode"); 
    console.log("Qual o seu pedido?");
}

else{
    console.log("Não pode");
    console.log("Volte futuramente!");
}*/

var idade = 19;
//lógica invertida
if (idade < 18 || idade > 70){ 
    console.log("Pode"); 
    console.log("Qual o seu pedido?");
}

else{
    console.log("Não pode");
    console.log("Volte futuramente!");
}