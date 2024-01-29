// src/services/patientsService.js

const { Patient, Plan, Surgery } = require('../models');

const getAllPatientsPlans = async () => {
  const listOfPatients = await Patient.findAll({ include: { model: Plan, as: 'plan' } });
  
  if (!listOfPatients.length) {
    return ({ message: 'Nenhum paciente encontrado' });
  }

  return listOfPatients;
};

const getAllPatientsSurgeries = async () => {
  const listOfPatients = await Patient.findAll({
    include: { model: Surgery, as: 'surgeries', through: { attributes: [] } },
  });

  if (!listOfPatients.length) {
    return ({ message: 'Nenhum paciente encontrado' });
  }

  return listOfPatients;
};

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
};