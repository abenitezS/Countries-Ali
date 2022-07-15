const express = require("express");
const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const axios =require('axios');
const {Country,Activity}=require('../db') //debo traerme los datos de la base 
router.use(express.json())
const { Op } = require("sequelize");


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Info de la Api Coutry--- En este caso pide que se guarde en en la base pero puede ser que en otro proyecto no sea asi 
// const getApiInfo =async() =>{
//      const apiUrl=await axios.get('https://restcountries.com/v3/all')
//      const apiInfo =await apiUrl.data.map( pais=> {
//         Country.findOrCreate(
//             {
//             where:{
//             idCountry: pais.ccn3,
//             name: pais.name.common,
//             continent: pais.region,
//             capital: pais.capital ? pais.capital[0] : 'Capital not found',
//             subregion: pais.subregion? pais.subregion : 'Subregion not found',
//             area: pais.area,
//             population: pais.population,
//             bandera: pais.flag,
//             },
//         } )      
//         } )
//     return apiInfo
// }


//info de la base de datos Actividades 
// const getDbInfo= async () => {
//     return await Activity.findAll({
//         includes:{ model :Country,
//             attributes:['name'], // el Id ya automaticamente me lo trae
//             through : {          // mediante los atributos es una comprobacion que se hace siempre parte del codigo
//                 attributes:[],
//             },
//         }
//     }) 
 
//  }
// const getAllCountries= async() =>{
// //const apiInfo =await getApiInfo(); en el caso que deba obtener de API 
// const dbCountry =await Country.findAll();
// const dbInfo =await getDbInfo(); 
// //const InfoTotal=apiInfo.concat(dbInfo); se puede concatenar lo de API con lo de Base!
// const InfoTotal=dbCountry.concat(dbInfo); 

// return InfoTotal
// }
// router.get('/',async(req,res)=>{
//     const name=req.query.name
//     let countriesTotal=await getAllCountries();
//     if (name) { //si  me carga el nombre por url, lo paso todo a minuscula para poder comparar 
//      let countryName=await countriesTotal.filter(el=>el.name.toLowerCase().includes(name.toLocaleLowerCase()))// que este incluido en adelante, atras al medio
//      countryName.length ? //devolvio algo 
//      res.status(200).send(countryName) : res.status(404).send("Country not found, sorry ") ;
//     }
//      else {
//         res.status(200).send(countriesTotal)
//      }

    
// })


// ruta TODOS LOS PAISES
router.get("/", async (req, res) => {
    const { name } = req.query;
    try {
      // si le pusieron nombre 
      if (name) {
        let foundCountry = await Country.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          },
          include: {model: Activity},
        });
        if (foundCountry.length ) return res.status(200).json(foundCountry) 
       return  res.status(404).json('Country not found')
       }
        //     ([{
        //     idCountry: "NOT",
        //     name: "Not Found",
        //     bandera: "https://www.seekpng.com/png/detail/212-2123432_404-error-error-404-in-png.png",
        //     continent: "Not Found",
        //     capital: "Not Found",
        //     subregion: "Not Found ",
        //     area: 0,
        //     population: 0,
        //     createdAt: "Not Found",
        //     updatedAt: "Not Found",
        //     activities: []
        //   }]); 
        
      //si no le pusieron nombre en la query 
      const countryInDB = await Country.findAll({
        include: { model: Activity },
        order:[["name"]]
      });
      res.status(200).json(countryInDB);
    } catch (e) {
     // console.log("/routes/countries get error", e.message);
      return res.status(404).send({ error: "NOT_FOUND", description: "Server error" });
    }
  });

  router.get("/:idPais", async (req, res) => {
    const {idPais } = req.params;
    try {
        let result= await Country.findByPk(idPais.toUpperCase(), {include: {model: Activity}})
        if (!result) return res.status(404).send({error: "No existe ningun pais con ese codigo"})
        res.status(200).json(result)
    } catch (error) {
        
        res.status(400).send(error)
    }
  })
module.exports = router