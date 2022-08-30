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

inserirUsuario("Igor").then(listarUsuarios);
