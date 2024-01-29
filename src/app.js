const express = require('express');

const app = express();
app.use(express.json());

// Não remova a linha abaixo, pois pode causar problema nos testes
app.get('/', (_req, res) => res.send('ok'));

module.exports = app;