const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const request = require('request');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(methodOverride());

//Dependencies and middleware required for express-restify-mongoose ^

mongoose.connect('mongodb://localhost:27017/database');

restify.serve(router, mongoose.model('SiteInfo', new mongoose.Schema ({
    GroupNum: {type: int, required: true},
    CategoryNum: {type: int, required: true},
    Group: {type: String, required: true},
    FoodCategory: {type: Array, required: true},
    FNDDS_code: {type: int, required: true},
    FoodDescription: {type: Array, required: true}
})))

app.use(router);

app.listen(3000, () => {
    console.log('Express server listening on port 3000')
});

//Automatically generates CRUD requests for the schema data

request.get({
    url: 'https://www.cdc.gov/mmwr/preview/mmwrhtml/mm6105-table.htm',
    qs: {
        query: JSON.stringify({
            $and: [{
                name: '~Group no.'
            }, {
                name: '~Category no.'
            }
            , {
                name: '~Group'
            }
            , {
                name: '~Food Category'
            }
            , {
                name: '~FNDDS code'
            }
            , {
                name: '~Food description'
            }]
        })
    }
})

//how to use a GET request to download information off a site.