const express = require('express');
const app = express();
app.use(express.json());

const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.end(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  responseObject = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(responseObject);
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
module.exports = app;
