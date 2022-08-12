let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

//para linhas o projeto abaixo
/*ctx.moveTo(0,0);// ponto zero da tela
ctx.lineWidth = 5; //espessura da linha, precisa ser dado antes do stroke, pois ele quem faz a linha
ctx.lineTo(250, 250);//
ctx.lineTo(500, 0);
ctx.strokeStyle = "#ff0000"
ctx.stroke(); //se eu der vários strokes eu aumento a espessura da linha, mas não é o jeito certo
*/

/*
//Para retangulos o projeto abaixo
ctx.fillStyle = "blue"; //aqui defino a cor do retangulo
ctx.fillRect(10, 10, 100, 200); //aqui eu desenho o retangulo e uso o fillrect para passar as coordenadas
//o retangulo fillRect é o retangulo preenchido
//RECT- É para criar um retangulo
ctx.strokeStyle = "red"
ctx.strokeRect(10, 10, 200, 200);
*/
/*
//retangulo azul com as bordas vermelhas
ctx.rect(10, 10, 100, 200);
ctx.fillStyle = "blue";
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.fill();
ctx.stroke();

//para limpar só a parte azul criando um quadradinho
ctx.clearRect(20, 20, 30, 30) //20 20 são as coordenadas e 30 30 é o tamanho
*/

//inicio e o fim do caminho path.

/*
ctx.beginPath(); // Path é o caminho da linha

ctx.lineWidth = 4;
ctx.strokeStyle = "red";
ctx.moveTo(10, 10);
ctx.lineTo(400, 300);
ctx.stroke();*/

//se eu quero começar uma nova linha eu preciso fazer o mesmo paço de cima;

/*
ctx.beginPath();

ctx.lineWidth = 4;
ctx.strokeStyle = "blue";
ctx.moveTo(50, 10);
ctx.lineTo(300, 300);
ctx.stroke();
*/
//para fechar o caminho, neste caso a linha, eu preciso usar o comando CLOSEPATH.
/*
ctx.beginPath();

ctx.lineWidth = 7;
ctx.strokeStyle = "blue";
ctx.fillStyle = "green";
ctx.moveTo(50, 10);
ctx.lineTo(300, 300);
ctx.lineTo(200, 300);
ctx.closePath();
ctx.fill();
ctx.stroke();
*/

//circulos no canvas
 /*
let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;
let fim = 2* Math.PI;


ctx.beginPath();
ctx.strokeStyle = "red";
*/

//o ciculo é um arco que se fecha e com isso o primeiro comando é o ARC

//ctx.arc(x, y, raio, inicio, fim)
/*
x = distanciamento para a borda - é o centro do circulo
y = distanciamento para a cima - é o centro do circulo
Raio = é o tamanho do circulo
inicio = o angulo que ele começa - eles são em radianos ou seja, um circulo inteiro tem 2pi radianos
fim = o angulo que ele termina - é o radiano

*/

//ctx.stroke();
//MEIO CIRCULO
/*
let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;
let fim = 1* Math.PI;
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "blue";

ctx.arc(x, y, raio, inicio, fim)

ctx.fill();
ctx.stroke();
*/

/*
//ANIMAÇÕES

let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;
let fim = 1* Math.PI;

let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0,
    antiH: false, //cirado depois para dar o efeito de apagar
}

function drawCircle (c) {

    ctx.beginPath(); //este aqui faz criar o quadrado bege toda vez que o if passar aqui
    ctx.rect (0, 0, 500, 500);
    ctx.fillStyle = "beige";
    ctx.fill();


    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";

    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiH); //c.antiH é para colocar o circulo para se apagar, fazendo ele girar no sentido anti horário.

    ctx.fill();
    ctx.stroke();

}

setInterval(function aparecerCirculo() { //essa função é executada e cria um novo circulo e um quadrado bege

    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.3;
        //circle.x += 3;
        
    }
    
    drawCircle(circle)
    

},100);*/

//IMAGENS NO CANVAS

let img = new Image();

img.src = "./Imagens/mariorun1.gif";

img.onload = desenharImg;

function desenharImg(){

    ctx.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2);
}

