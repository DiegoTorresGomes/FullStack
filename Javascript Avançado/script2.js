/*let dog = {
    sound: "Au Au",
    speak: function (){
        console.log(this.sound);
    }
}


let cat = {
    sound: "Miau",
    speak: function (){
        console.log(this.sound);
    }
}


dog.speak();
cat.speak();*/

// este exemplo abaixo vai funcionar da mesma forma do exemplo de cima, pois
// quando o gato e o cachorro falam o THIS do SPEAKGENERIC serão o gato e o cachorro.

/*function speakGeneric() {
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}


let cat = {
    sound: "Miau",
    speak: speakGeneric
}


dog.speak();
cat.speak();*/


function speakGeneric() {
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}


let cat = {
    sound: "Miau",
    speak: speakGeneric
}


dog.speak();
cat.speak();


// este exemplo abaixo vai referenciar o this, ou seja, agora se chamarmos a função speakGeneric() ela não vai dar Undefined e sim vai achar o DOG

let bindeFunction = speakGeneric.bind(dog);

// quando eu chamar assim como está embaixo ele vai apresentar no console do chrome o Au Au
bindeFunction();
