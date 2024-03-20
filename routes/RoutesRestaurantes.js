const FileApp = require('../src/app')
const control = require('../controllers/controles')

FileApp.App.get("/Restaurantes",(req,res)=>{
    control.ExibeRestaurantes(req,res)
})

FileApp.App.get("/Restaurantes/:nome",(req,res)=>{
    control.ExibeRestaurantesPeloNome(req,res)
})

FileApp.App.post("/Restaurantes",(req,res)=>{
    control.AddRestaurantes(req,res)
})

FileApp.App.delete("/Restaurantes/:nome",(req,res)=>{
    control.DeletaRestaurantesPeloNome(req,res)
})
FileApp.App.put("/Restaurantes/:nome",(req,res)=>{
    control.AtualizaRestaurantes(req,res)
})
