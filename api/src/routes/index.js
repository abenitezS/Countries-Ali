const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios =require('axios');
const Country = require('../models/Country');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//Info de la Api Coutry
const getApiInfo =async() =>{
     const apiUrl=await axios.get('https://restcountries.com/v3/all')
     const apiInfo =await apiInfo.data.map( pais=> {
        return {
            iCountry: pais.ccn3,
            name: pais.name.common,
            continent: pais.region,
            capital: pais.capital ? pais.capital[0] : 'Capital no encontrada',
            subregion: pais.subregion,
            area: pais.area,
            population: pais.population,
            bandera: pais.flag
        };
        }
        )
    return apiInfo
}
//info de la base de datos Actividades 
const getDbInfo= async () => {
    return await Activity.findAll({
        includes:{ model :Country,
            attributes:['name'], // el Id ya automaticamente me lo trae
            through : {          // mediante los atributos es una comprobacion que se hace siempre parte del codigo
                attributes:[],
            },
        }
    }) 
 
 }
const getAllCoutries= async() =>{
const apiInfo =await getApiInfo();
const dbInfo =await getDbInfo();
const InfoTotal=api.Info.concat(dbInfo);
return InfoTotal
}
router.get('/countries',async(req,res)=>{
    const name=req.query.name
    let countriesTotal=await getAllContries();
    if (name) {
        
    }
})



module.exports = router;
