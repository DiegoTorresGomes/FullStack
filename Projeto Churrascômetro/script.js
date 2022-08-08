

let inputAdultos = document.getElementById("adultos"); //aqui estou linkando para receber os dados que serão digitados
let inputCriancas = document.getElementById("criancas"); //aqui estou linkando para receber os dados que serão digitados
let inputDuracao = document.getElementById("duracao"); //aqui estou linkando para receber os dados que serão digitados

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value; //aqui estou trabalhando com os dados digitados
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);

    let qdtTotalCarne = carne * adultos + (carne / 2 * criancas);
    let qdtTotalCerveja = cerveja * adultos;
    let qdtTotalBebidas = bebidas * adultos + (bebidas / 2 * criancas);


   resultado.innerHTML = `<p>${qdtTotalCarne / 1000}  Kg de Carne</p>`
   resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
   resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2L de Bebidas</p>`


}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}