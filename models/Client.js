const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const ClientSchema = new mongoose.Schema({
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

ClientSchema.plugin(timestamp);

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;