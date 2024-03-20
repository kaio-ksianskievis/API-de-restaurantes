require('dotenv').config({path: '../.env'})

const Sequelizer = require('sequelize')
const BodyParser = require('body-parser')
const express = require('express')
const App = express()

App.use(BodyParser.urlencoded({extended: false}))
App.use(BodyParser.json())

module.exports = {Sequelizer,BodyParser,express,App}