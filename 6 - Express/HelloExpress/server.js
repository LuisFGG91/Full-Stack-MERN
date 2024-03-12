//import
const express = require("express");

//Declaraciones
const app = express();
const port = 8000;

const users = [
  { firstName: "Reimu", lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae", lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Luis", lastName: "Zoro" },
  { firstName: "Carlos", lastName: "Yamato" },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

//Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Metodos de Modelo+
//GET
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/api-v2", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

const obterner = (req, res) => {
  // req.body contendrá los datos del formulario desde Postman o desde React
  console.log("Ejemplo")
  console.log(req.body);
  // podemos hacer push en el array de usuarios por ahora...
  // más tarde esto se insertará en una base de datos
  users.push(req.body);
  // siempre tendremos que responder con algo
  res.json({ status: "ok" });
}

//POST
app.post("/api/users", obterner );

// si queremos obtener un usuario con un id específico, podemos hacer que el id sea parte de la url
// asegúrate de preceder la variable id con dos puntos `:`
app.get("/api/users/:id", (req, res) => {
  // podemos obtener esta variable `id` de req.params 
  console.log(req.params.id);
  // asumiendo que este id es el índice del array de usuarios podríamos devolver un usuario de esta manera
  res.json(users[req.params.id]);
});

app.put("/api/users/:id", (req, res) => {
  // podemos obtener la variable `id` de req.params
  const id = req.params.id;
  // asumiendo que este id es el índice del array de usuarios podemos reemplazar el usuario así
  users[id] = req.body;
  // siempre debemos responder con algo
  res.json({ status: "ok" });
});

app.delete("/api/users/:id", (req, res) => {
  // podemos obtener la variable `id` de req.params
  const id = req.params.id;
  //  asumiendo que este id es el índice del array de usuarios podemos eliminar el usuario así
  users.splice(id, 1);
  //  siempre debemos responder con algo
  res.json({ status: "ok" });
});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
