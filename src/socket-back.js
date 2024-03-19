import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);
  
  socket.on("selecionar-documento", (documentName) => {
    socket.join(documentName)
  });

  socket.on("texto_editor", ({text, documentName}) => {
    socket.to(documentName).emit("texto_editor_clientes", text);
  });

});
