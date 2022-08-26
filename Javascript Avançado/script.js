"use strict";

//var x  = 7;

function imprimir () {

    x = 7; // não vai funcionar se chamarmos "use strict", pois ele obriga a declarar a varíável, precisamos colocar a declaração da variável para a função funcionar
    console.log(x)
}

imprimir();
//console.log(x)
console.log(window)