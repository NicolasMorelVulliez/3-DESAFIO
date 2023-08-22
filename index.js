const express = require('express');
const app = express();
const PORT = 8080;


const products = [
    { id: 1, name: 'Producto 1', precio:'20_000' },
    { id: 2, name: 'Producto 2', precio:'5_000' },
    { id: 3, name: 'Producto 3', precio:'10_000' },
    { id: 4, name: 'Producto 4', precio:'45_000' },
    { id: 5, name: 'Producto 5', precio:'12_000' },
    { id: 6, name: 'Producto 6', precio:'2_000' },
    { id: 7, name: 'Producto 7', precio:'124_000' },
    { id: 8, name: 'Producto 8', precio:'65_000' },
    { id: 9, name: 'Producto 9', precio:'56_000' },
    { id: 10, name: 'Producto 10', precio:'80_000' },
];

app.get('/products', (req, res) => {
    const limit = parseInt(req.query.limit) || products.length;
    res.json(products.slice(0, limit));
});

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
    console.log(`Todos los productos en: http://localhost:8080/products `);
    console.log(`Solo 5 prodcutos en: http://localhost:8080/products?limit=5 `);
    console.log(`Solo producto 2 en:http://localhost:8080/products/2 `);
    console.log(`Error 404 en: http://localhost:8080/products/34123123  `);

});
