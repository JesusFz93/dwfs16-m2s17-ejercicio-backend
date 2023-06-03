const express = require("express");
const app = express();
const PORT = 4000;

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  //   res.send("Jesus Fernandez");

  return res.json({
    msg: "Nombre recibido",
    data: "Jesus Fernandez",
  });
});

app.get("/busqueda", (req, res) => {
  const { nombre, edad, apellido } = req.query;

  return res.json({
    msg: "Busqueda realizada",
    data: "datos de prueba",
    query_nombre: nombre,
    query_edad: edad,
    query_apellido: apellido,
  });
});

app.get("/cuerpo", (req, res) => {
  const { nombre, edad, apellido } = req.body;

  return res.json({
    msg: "Estas en la ruta cuerpo",
    data: "Datos recibidos",
    cuerpo_nombre: nombre,
    cuerpo_apellido: apellido,
    cuerpo_edad: edad,
  });
});

app.get("/:id/:nombre", (req, res) => {
  const { id, nombre } = req.params;

  return res.json({
    msg: "Id recibido",
    data: "Jesus",
    el_id: id,
    el_nombre: nombre,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
