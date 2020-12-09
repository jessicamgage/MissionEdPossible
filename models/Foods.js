const mongoose = require('mongoose');

const FoodsScehma = new mongoose.Schema({
    group: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    }
});

const Foods = mongoose.model('Foods', FoodsScehma);
module.exports = Foods;