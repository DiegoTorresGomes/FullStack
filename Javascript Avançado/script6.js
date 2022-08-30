//async / await

let usuarios = ["Adriano", "Marcia", "Jose"];

function inserirUsuario(nome){

    return new Promise (function (resolve, reject) {

        setTimeout(() => { 
            usuarios.push(nome); 
            
            let error = false;

            if(!error){
                resolve();
            }else{
                reject({msg: "Erro de qualquer coisa"});
            }


        }, 1000);

    });


    
    

}

function listarUsuarios() {
    console.log(usuarios);
}

async function executar() { // ele resolveu a Promise lá em cima, ficou esperando ela rodar e só depois ele rodou a função de inserir o Igor e logo em segida ele listou com o Igor inserido
    await inserirUsuario("Igor");
    listarUsuarios();
}
executar();