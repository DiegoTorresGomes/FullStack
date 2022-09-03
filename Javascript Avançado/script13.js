//fetch

let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"



 function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;

    fetch(url)
    .then((ress) =>{
        return ress.json();

    })

    .then((data)=> {
        
        let rate = data.USDBRL.high;

        let resultado = `${valor} dolares = ${rate * valor} em reais`

        document.getElementById("resultado").innerHTML = resultado;

    })

}


   

