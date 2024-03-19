import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function documentSelect(name) {
  socket.emit("selecionar-documento", name)
}

function emitirTextoEditor(textDocumentName) {
  socket.emit("texto_editor", textDocumentName);
};

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

export { emitirTextoEditor, documentSelect};
