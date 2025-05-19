const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [
  { id: 1, name: 'Harry Potter Mug', price: 300 },
  { id: 2, name: 'FIFA 22 PS5', price: 1000 },
  { id: 3, name: 'Goku Super Saiyan Figure', price: 100 },
  { id: 4, name: 'Zelda Breath of the Wild', price: 200 },
  { id: 5, name: 'Skin Valorant', price: 120 },
  { id: 6, name: 'Star Wars Mug', price: 220 }
];

// GET /products with filters
app.get('/products', (req, res) => {
  let filtered = [...products];
  const { price, min, max, id, name } = req.query;

  if (price) {
    filtered = filtered.filter(p => p.price == price);
  }
  if (min && max) {
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }
  if (id) {
    filtered = filtered.filter(p => p.id == id);
  }
  if (name) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }

  res.json({
    description: 'Products',
    items: filtered
  });
});

// POST /products - add product
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ error: 'Name and price are required' });
  }
  const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const newProduct = { id: newId, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /products/:id - update product
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;
  res.json(product);
});

// DELETE /products/:id - delete product
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });
  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(port, () => {
  console.log(`Server raised on port ${port}`);
});
