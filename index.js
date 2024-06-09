// config inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas da API
const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes);

// rota inicial / endpoint
app.get('/', (req, res) => {
  // mostar req

  res.json({ message: 'Oi Express!' });
});

// entregar uma porta
const DB_USER = 'rupeliojunior445';
const DB_PASSWORD = encodeURIComponent('GjhIVot7WR9I5Pc6');

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.qxr8234.mongodb.net/?retryWrites=true&w=majority&appName=APICluste`
  )
  .then(() => {
    console.log('Conectamos ao MongoDB!');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
