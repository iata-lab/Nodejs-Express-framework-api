const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Site root
app.get('/', (req, res) => {
  res.send('Welcome!');
});

// Products routes
app.get('/products', (req, res) => {
  res.send('Product listing');
});

app.post('/products', (req, res) => {
  res.send('Create a product');
});

app.put('/products', (req, res) => {
  res.send('Update a product');
});

app.delete('/products', (req, res) => {
  res.send('Delete a product');
});

// Users routes
app.get('/users', (req, res) => {
  res.send('List users');
});

app.post('/users', (req, res) => {
  res.send('Create a user');
});

app.put('/users', (req, res) => {
  res.send('Update a user');
});

app.delete('/users', (req, res) => {
  res.send('Delete a user');
});

app.listen(port, () => {
  console.log(`Server raised on port ${port}`);
});
