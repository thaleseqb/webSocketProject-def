import { documentSelect, emitirTextoEditor } from "./socket-front-documento.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("nome");

const textoEditor = document.getElementById("editor-texto");
const documentTitle = document.getElementById("titulo-documento");

documentTitle.innerHTML = documentName

documentSelect(documentName);

textoEditor.addEventListener("keyup", () => {
  emitirTextoEditor({ 
    text: textoEditor.value,
    documentName
  });
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}

export { atualizaTextoEditor };
