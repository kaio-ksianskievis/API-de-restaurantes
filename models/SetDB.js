const DB = require('./ConectionDB')
const FileApp = require('../src/app');
const { FORCE } = require('sequelize/lib/index-hints');
let count;

const Restaurantes = DB.sequelize.define("Mytable",{
    foto:{
        type: FileApp.Sequelizer.STRING
    },
    nome:{
        type: FileApp.Sequelizer.STRING
    },
    endereço:{
        type: FileApp.Sequelizer.STRING
    },
    horário:{
        type: FileApp.Sequelizer.STRING
    },
    produtos:{
        type: FileApp.Sequelizer.STRING
    },
})
Restaurantes.sync({force: false})
module.exports = {Restaurantes}