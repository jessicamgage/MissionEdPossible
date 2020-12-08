const mongoose = require('mongoose');

const FoodsScehma = new mongoose.Schema({
    group: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Foods = mongoose.model('Foods', FoodsScehma);
module.exports = Foods;