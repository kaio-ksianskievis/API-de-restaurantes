const DB = require('./ConectionDB')
const FileApp = require('../src/app')
let count;
const TableName = process.env.TABLE_NAME

const Restaurantes = DB.sequelize.define(TableName,{
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

module.exports = {Restaurantes}