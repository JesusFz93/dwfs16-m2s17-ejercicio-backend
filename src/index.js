const express = require("express");
const app = express();
const PORT = 4000;

// Importaciones
const fs = require("fs");

// middlewares
app.use(express.json());

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
