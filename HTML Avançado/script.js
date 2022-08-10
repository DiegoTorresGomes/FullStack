
let lista = document.getElementById("lista");

let num = parseInt(lista.getAttribute("num"));

let conte = ""

for(let i = 0; i < num; i++) {

    conte += "<li>" + i + "</li>";



}

 lista.innerHTML = conte;