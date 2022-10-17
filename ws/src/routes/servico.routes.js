const express = require('express')
const router = express.Router()
const Busboy = require('busboy')
const aws = require('../services/aws')
const salao = require('../models/salao')
const Arquivo = require('../models/arquivo')
const servicos = require('../models/servico')

router.post('/')