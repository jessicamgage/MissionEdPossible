const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

var app = require('../app.js');
var expect = require('chai').expect;

const appTest = express();

appTest.use(bodyParser.json());
appTest.use(methodOverride());

describe("#request", function () {
    it("pulls data from a GET request to parse the info to usable data",
    function () {
       expect(request.get({
            url: 'http://www.dnd5eapi.co/api/monsters/goblin',
            qs: {
                query: JSON.stringify ({
                    index: "~goblin"
                })
            }
        }
       )).to.equal(
        "goblin"
       ) 
    })
})