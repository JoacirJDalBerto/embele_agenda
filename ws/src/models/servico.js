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
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

salao.index({ geo: '2dsphere'});

module.export = mongoose.model('Servico', servico);