//callback

//é uma função que tem como argumento outra função
// usamos o callback quando não sabemos quando alguma coisa vai acontecer, mas queremos que a função seja executada depois que acontecer
//let dobro = function (n) {return 2 * n};

function ola() {
    console.log("olá");
}

function saudacao(s, nome) {

    s();
    console.log(nome);

}

saudacao(ola, "Igor");

let usuarios = ["Adriano", "Marcia", "Jose"];

function inserirUsuario(nome, callback){

    setTimeout(() => { 
        usuarios.push(nome); 
        callback();
    }, 1000);

}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario("Igor", listarUsuarios);
listarUsuarios()
