
const textInput = document.getElementById("encrip");
const textOutput = document.getElementsByClassName("mensaje")[0];

// obtener el botón de encriptar, desencriptar y copiar
const encryptButton = document.querySelector(".encriptar");
const decryptButton = document.querySelector(".desencriptar");
document.getElementsByClassName("copy")[0].addEventListener("click", copiar);

encryptButton.addEventListener("click", function(){

    let text = textInput.value;

    // validar que solo se acepten letras minusculas
    text = text.toLowerCase();
    // remover acentos
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // encriptar el texto
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober"); 
    text = text.replace(/u/g, "ufat") 
   
    textOutput.value = text;
});

decryptButton.addEventListener("click", function(){

    let text = textInput.value;

    // desencriptar el texto
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a"); // Reemplazar todas las "a" por "ai"
    text = text.replace(/ober/g, "o"); // Reemplazar todas las "o" por "ober"
    text = text.replace(/ufat/g, "u") // Reemplazar todas las "o" por " ufat"
    textOutput.value = text;
});

//copiar el texto
function copiar() {
    var text = document.getElementsByClassName("mensaje")[0];
    text.select();
    document.execCommand("copy");
  }

