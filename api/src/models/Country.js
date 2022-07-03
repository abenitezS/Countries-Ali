const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    idCountry:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    bandera:{ 
      type: DataTypes.TEXT, 
      validate: {isUrl: true},
      allowNull: false,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type: DataTypes.STRING,
    },
    subregion:{
      type: DataTypes.STRING,

    },
    area:{
      type: DataTypes.REAL,
    },
    population:{
      type: DataTypes.INTEGER,
    }
  });
};
