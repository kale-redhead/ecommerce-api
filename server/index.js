const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const app = express();

app.use(express.json());

app.get('/api/products', getProducts);
app.get('api/products/:id', getProduct);

// app.get('/api/products/:id', (req, res) => {
//     console.log('PARAMS ', req.params);
//     console.log('QUERY ', req.query);
//     console.log('BODY ', req.body);
//     const foundIndex = products.findIndex(user => user.id === +req.params.id)
//     res.status(200).send(products[foundIndex]);
// })

const port = 6677;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));

