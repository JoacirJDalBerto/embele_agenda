const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
    nome: {
        type: String,
        required: true [true, 'Nome é obrigatorio']
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        required: true [true, 'E-mail é obrigatorio']
    },
    senha:  {
        type: String,
       default: null,
    },
    endereco:{
        cidade: String,
            cep: String,
            cep: String,
            numero: String,
            pais: String,
    },
    geo:{
        tipo: String,
        coordinates: Array,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

salao.index({ geo: '2dsphere'});

module.export = mongoose.model('Salao', salao);