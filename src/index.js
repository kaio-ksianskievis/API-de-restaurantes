const FileApp = require('./app')
require('../models/SetDB')
require('../routes/RoutesRestaurantes')

FileApp.App.listen(8080 ,()=>{
    console.log('Aplicação rodando...')
})  