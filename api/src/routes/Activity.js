const express = require("express");
const { Router } = require('express');
const router = express.Router();
const {Country,Activity}=require('../db') //debo traerme los datos de la base 
router.use(express.json());
const { Op } = require("sequelize");


//Cargar datos de activities desde el formulario 
router.post('/', async (req, res, next) => {
    const { name, dificultad, duracion, temporada, countries } = req.body;
    try {
      let activityCreate = await Activity.create({
        name,
        dificultad,
        duracion,
        temporada,
      });
      countries.map(async countryId => {
        const foundCountry = await Country.findAll({
          where: { idCountry: countryId },
        });
        if (foundCountry) activityCreate.addCountries(foundCountry);// agrega los paises a la tabla de relacion (
      });
      res.status(201).send('Actividad Creada!');
    } catch (err) {
      next(err);
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const dbData = await Activity.findAll({
        include: { model: Country, attributes: ['name', 'idCountry'] },
      });
      res.json(dbData);
    } catch (err) {
      console.error(err);
    }
  });
  
  router.delete('/:name/delete', (req, res) => {
    Activity.destroy({
      where: {
        name: req.params.name,
      },
    }).then(function (r) {
      res.json({
        status: 1,
        data: r,
      });
    });
  });
  
  module.exports = router;
 