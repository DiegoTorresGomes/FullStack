
let lista = document.getElementById("lista");

//let num = parseInt(lista.getAttribute("num"));

let num = parseInt(lista.dataset.n);//este n é o antigo num, faz a mesma coisa

//console.log(lista.dataset.num);

let conte = ""

for(let i = 0; i < num; i++) {

    conte += "<li>" + i + "</li>";



}

 lista.innerHTML = conte;