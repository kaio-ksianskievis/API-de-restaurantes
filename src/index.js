const FileApp = require('./app')
const Table = require('../models/SetDB')

FileApp.App.listen(process.env.PORT ,()=>{
    console.log('Aplicação rodando...'+`${process.env.PORT}`)
})  