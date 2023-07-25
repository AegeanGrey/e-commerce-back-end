// Utilizes the 'dotenv' library from 'package.json' which allows our database, username and password from '.env' to be passed into 'connection.js'
require('dotenv').config();

const Sequelize = require('sequelize');

// When we launch the server it will pass our database, username and password from '.env' to establish a connection
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Exports the 'sequelize' constant to be used in 'server.js'
module.exports = sequelize;
