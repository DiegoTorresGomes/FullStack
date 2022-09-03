//tratamento de erros

let nome = "";

try{

    if (nome == ""){
        throw "O nome não pode ser vazio" // se 
    }

    console.log(nome);

}catch (err){

    console.log("Houve um erro", err);

}finally{


    console.log("Boa noite");
}



