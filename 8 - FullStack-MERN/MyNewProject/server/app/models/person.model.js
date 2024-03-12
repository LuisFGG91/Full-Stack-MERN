const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });
module.exports.Personas = mongoose.model('personas', PersonSchema);