const mongoose = require('mongoose');
const { dbConnection, dbHost, dbPort, dbDatabase } = require('../config/database.js');

mongoose.connect(`${dbConnection}://${dbHost}:${dbPort}/${dbDatabase}`, { useNewUrlParser:true});
