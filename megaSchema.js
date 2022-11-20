const mongoose = require('mongoose');

const megaSchema = mongoose.Schema({
   tipoSangue: String,
});

module.exports = megaSchema;