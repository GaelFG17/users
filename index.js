const express = require('express');
const {connectDb} = require('./data/config');
const cors = require('cors');

const PORT = 3002;

//Crear la instancia de express
const app = express();
app.use(express.json());
app.use(cors());
connectDb();

app.listen(PORT, () => {
  console.log('Products running in http://localhost:'+PORT + '/users');
});