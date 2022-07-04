const axios = require('axios');
const { Country } = require('../db');
module.exports
const LoadDB = async () => {
  try {
    const apiInfo = (await axios.get('https://restcountries.com/v3/all')).data;
    await apiInfo.map(element => {
      Country.findOrCreate({
        where: {
          idCountry: element.cca3,
          name: element.name.common,
          bandera: element.flags[1],
          continent: element.continents[0],
          capital: element.capital
            ? element.capital[0]
            : 'Capital not found',
          subregion: element.subregion
            ? element.subregion
            : 'Subregion not found',
          area: element.area,
          population: element.population,
        },
      });
    });
    return 'Countries agregados a la base de datos.';
  } catch (e) {
    console.log('/api/src/routes/apiInfo.js apiInfo error: ' + e);
  }
};

module.exports = LoadDB;