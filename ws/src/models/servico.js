const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
   salaoId:{
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
   },
   titulo:{
    type: String,
    required: true,
},
    preco:{
    type: Number, 
    required: true,
},
    comissao:{
    type: Number,// % de comissão sobre o preço
    required: true,
},
    duracao:{
        type: Number, //Duração em minutos
        required: true,
},
    recorrencia:{
        type: Number, // Periodo de refação
        required: true,
},
    descricao:{
    type: String, 
    required: true,
},
    status:{
    type: String,
    required: true,
    enum: ['A', 'I', 'E'],
    default: 'A'
},
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

salao.index({ geo: '2dsphere'});

module.export = mongoose.model('Servico', servico);