const FileApp = require('../src/app')

const NameDB = process.env.DB_NAME
const UserDB = process.env.DB_USER
const PassDB = process.env.DB_PASS
const HostDB = process.env.DB_HOST
const DialectDB = process.env.DB_DIALECT

const sequelize = new FileApp.Sequelizer(NameDB,UserDB,PassDB,{
    host: HostDB,
    dialect: DialectDB
})

sequelize.authenticate().then(()=>{
    console.log('conectado')
}).catch((err)=>{
    console.log(`erro: ${err}`)
})

module.exports = {sequelize}