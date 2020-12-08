const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const ClientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
});

ClientsSchema.plugin(timestamp);

const Clients = mongoose.model('Clients', ClientsSchema);
module.exports = Clients;