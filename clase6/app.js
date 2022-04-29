const express = require('express');
const Contenedor = require('../clase4/contenedor')

const contenedor = new Contenedor('./productos.json');
const app = express();
const PORT = 8080;

const productoRandom = () => {

    const productos = contenedor.getAll();
    const idRandom = Math.floor(Math.random() * (productos.length - 1)) + 1;
    return contenedor.getById(idRandom);
}

app.listen(PORT);
console.log(`Servidor Http escuchando en el puerto ${PORT}`);

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue">Bienvenido al servidor express </h1>')
});

// Desafio Clase 6
app.get('./productos', (req, res) => {
    res.send(contenedor.getAll())
});

app.get('./productoRandom', (req, res) => {
    res.send(productoRandom())
});
