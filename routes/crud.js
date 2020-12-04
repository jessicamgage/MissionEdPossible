const errors = require('restify-errors');
const Client = require('../models/Client');

module.exports = server => {
    server.get('/clients', async (req, res, next) => {
        try{
            const clients = await Client.find({});
            res.send(clients);
            next(); //command is required when handling restify routes
        }catch(err){
            return next(new errors.InvalidContentError(err));
        }
        
    });
}