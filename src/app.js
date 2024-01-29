const express = require('express');
const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
} = require('./controllers/patientsController');

const { getAllPlans } = require('./controllers/plansController');

const app = express();
app.use(express.json());

app.get('/patients/plans', getAllPatientsPlans);
app.get('/patients/surgeries', getAllPatientsSurgeries);
app.get('/plans/:id', getAllPlans);

// Não remova a linha abaixo, pois pode causar problema nos testes
app.get('/', (_req, res) => res.send('ok'));

module.exports = app;