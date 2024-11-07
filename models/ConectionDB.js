const FileApp = require('../src/app')

const sequelize = new FileApp.Sequelizer("MyDB","root","Password",{
    host: "localhost",
    dialect: "mysql",
    port: "3307"
})

sequelize.authenticate().then(()=>{
    console.log('conectado')
}).catch((err)=>{
    console.log(`erro: ${err}`)
})

module.exports = {sequelize}