const express = require("express");
const app = express();
const PORT = 4000;

// Importaciones
const fs = require("fs");

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  //   res.send("Jesus Fernandez");

  return res.json({
    msg: "Nombre recibido",
    data: "Jesus Fernandez",
  });
});

// Crear un archivo
app.get("/archivo/crear", (req, res) => {
  fs.writeFile("archivo.txt", "Hola mundo", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Archivo creado");
    }
  });

  return res.json({
    msg: "Archivo creado",
    data: [],
  });
});

// Leer un archivo
app.get("/archivo/leer", (req, res) => {
  fs.readFile("archivo.txt", "utf8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });

  return res.json({
    msg: "Archivo leido",
  });
});

// Actualizar un archivo
app.get("/archivo/actualizar", (req, res) => {
  fs.appendFile("archivo2.txt", "\nAdios mundo", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Archivo actualizado");
    }
  });

  return res.json({
    msg: "Archivo actualizado",
  });
});

// Eliminar archivo
app.get("/archivo/eliminar", (req, res) => {
  fs.unlink("archivo.txt", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Archivo eliminado");
    }
  });

  return res.json({
    msg: "Archivo eliminado",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
