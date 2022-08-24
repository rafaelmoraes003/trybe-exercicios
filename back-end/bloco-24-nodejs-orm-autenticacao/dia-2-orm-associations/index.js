const bodyParser = require('body-parser');
const { Plan, Patient, Surgery, PatientSurgery } = require('./models');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/patientsAndPlans', async (_req, res) => {
  //Crie um endpoint que liste todos os pacientes e seus respectivos planos.
  try {
    const patientsAndPlans = await Patient.findAll({
      include: { model: Plan, as: 'plans', attributes: { exclude: ['plan_id'] } },
    });
  
    return res.status(200).json(patientsAndPlans);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get('/patientsAndSurgeries', async (_req, res) => {
  // Crie um endpoint que liste todos os pacientes e suas respectivas cirurgias realizadas.
  try {
    const patientsAndSurgeries = await Patient.findAll({
      include: [{
        model: Surgery,
        as: 'surgeries',
        through: { attributes: [] },
        attributes: { exclude: ['surgery_id'] }
      }],
    });
  
    return res.status(200).json(patientsAndSurgeries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get('/plansWithPatients/:id', async (req, res) => {
  //Crie um endpoint que de acordo com o id de um plano, 
  //que deve ser recebido via requisição, liste os pacientes que o possuem.
  try {
    const { id } = req.params;
    const plansWithPatients = await Plan.findAll({
      where: { plan_id: id },
      include: [{
        model: Patient, 
        as: 'patients',
        attributes: { exclude: ['plan_id'] }
      }],
    });

    return res.status(200).json(plansWithPatients);
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
});

app.post('/patient', async (req, res) => {
  // Crie um endpoint capaz de adicionar um novo paciente.
  try {
    const { fullName, plan_id } = req.body;
    await Patient.create({ fullName, plan_id });
    res.status(201).json({ message: 'Paciente criado!' });
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
});

app.get('/patientsAndSurgeriesWithoutDocName', async (_req, res) => {
  // Crie um endpoint que liste todos os pacientes e suas cirurgias realizadas, 
  //mas oculte o nome do médico responsável.
  try {
    const patientsAndSurgeries = await Patient.findAll({
      include: {
        model: Surgery,
        as: 'surgeries',
        through: { attributes: [] },
        attributes: { exclude: ['doctor'] }
      },
    });
    res.status(201).json(patientsAndSurgeries);
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
});

app.get('/surgeries/:docName', async (req, res) => {
  // Crie um endpoint que de acordo com o nome do médico, 
  //que deve ser recebido via requisição, 
  //liste todas as cirurgias realizadas pelo mesmo, um get na url
  try {
    const { docName } = req.params;
    const doctor = await Surgery.findAll({
      where: { doctor: docName },
      include: [{
        model: Patient,
        as: 'patients',
        through: { attributes: [] },
      }],
    });
    return res.status(200).json(doctor);
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});