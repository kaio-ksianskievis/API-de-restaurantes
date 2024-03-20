const Table = require('../models/SetDB')

function ExibeRestaurantes(req,res){
    res.statusCode = 200
    Table.Restaurantes.findAll({raw: true}).then((Restaurantes)=>res.json(Restaurantes))
}
function ExibeRestaurantesPeloNome(req,res){
    const NameRestaurant = req.params.nome
    res.statusCode = 200
    Table.Restaurantes.findOne({where:{nome:NameRestaurant}}).then((Restaurantes)=>res.json(Restaurantes))
}
function AddRestaurantes(req,res){
    var {foto, nome, endereço, horário, produtos} = req.body
    Table.Restaurantes.create({
        foto: foto,
        nome: nome,
        endereço: endereço,
        horário: horário,
        produtos: produtos
    })
    res.sendStatus(200)
}
function DeletaRestaurantesPeloNome(req,res){
    const NameRestaurant = req.params.nome
    Table.Restaurantes.destroy({where:{nome:NameRestaurant}})
    res.sendStatus(200)
}
function AtualizaRestaurantes(req,res){
    const NameRestaurant = req.params.nome
    var {foto, nome, endereço, horário, produtos} = req.body
    Table.Restaurantes.update({foto,nome,endereço,horário,produtos},{where: {nome: NameRestaurant}})
    res.sendStatus(200)
}

module.exports = {ExibeRestaurantes,ExibeRestaurantesPeloNome,AddRestaurantes,DeletaRestaurantesPeloNome,AtualizaRestaurantes}