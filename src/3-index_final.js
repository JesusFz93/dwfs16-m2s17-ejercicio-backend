const express = require("express");
const app = express();
const PORT = 4000;

// Importaciones
const fs = require("fs");

// middlewares
app.use(express.json());

app.get("/ejercicio", (req, res) => {
  const { nombre_archivo } = req.body;

  fs.readFile(nombre_archivo, "utf-8", (error, data) => {
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

app.post("/ejercicio", (req, res) => {
  const { nombre_archivo, contenido_archivo } = req.body;

  fs.writeFile(nombre_archivo, contenido_archivo, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Archivo creado");
    }
  });

  return res.json({
    msg: "Archivo creado",
  });
});

app.get("/usuarios", (req, res) => {
  return res.json({
    msg: "Usuarios obtenidos",
  });
});

app.post("/usuarios", (req, res) => {
  return res.json({
    msg: "Usuario creado",
  });
});

app.put("/usuarios", (req, res) => {
  return res.json({
    msg: "Usuario actualizado",
  });
});

app.delete("/usuarios", (req, res) => {
  return res.json({
    msg: "Usuario eliminado",
  });
});

app.get("/productos", (req, res) => {
  return res.json({
    msg: "Productos obtenidos",
  });
});

app.post("/productos", (req, res) => {
  return res.json({
    msg: "Producto creado",
  });
});

app.put("/productos", (req, res) => {
  return res.json({
    msg: "Producto actualizado",
  });
});

app.delete("/productos", (req, res) => {
  return res.json({
    msg: "Producto eliminado",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
