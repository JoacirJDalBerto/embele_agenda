const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome:{
        type: String,
        required: true,
    },
    telefone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    senha:{
        type: String,
        required: true,
    },
    foto:{
        type: String,
        required: true,
    },
    dataNascimento:{
        type: String, // YYY-MM-DD
        required: true,
    },
    sexo:{
        type: String,
        enum: ['M', 'F'],
        required: true,
    },
    status:{
        type: String,
        required: true,
        enum: ['A', 'I'],
        default: 'A'
    },
    contaBancaria: {
        titular: {
            type: String,
            required: true
        },
        cpfCnpj: {
            type: String,
            required: true
        },
        Banco: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        agencia: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        dv: {
            type: String,
            required: true
        }
    },
    recipientId:{
        type: String,
        required: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.export = mongoose.model('Cliente', cliente);