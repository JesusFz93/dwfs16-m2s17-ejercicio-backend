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

// Los query params se usan mucho para realizar busquedas
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

// Este se usa mas para crear elementos con el metodo post o para actualizar un elemento con el metodo put
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

// Este se puede usar para realizar busqueda de algun elemento por el id
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
