//relacionamentos
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema({

    salaoId:{
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
   },
   clienteId:{
    type: mongoose.Types.ObjectId,
    ref: 'Colaborador',
    required: true
    },
    status:{
        type: String,
        required: true,
        enum: ['A', 'I'],
        default: 'A'
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});


module.export = mongoose.model('SalaoCliente', salaoCliente);