const FileApp = require('./app')
require('../models/SetDB')
require('../routes/RoutesRestaurantes')

FileApp.App.listen(process.env.PORT ,()=>{
    console.log('Aplicação rodando...'+`${process.env.PORT}`)
})  