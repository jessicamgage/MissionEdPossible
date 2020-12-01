const express = require('express');
const request = require('request-promise');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

var app = require('../app.js');
var expect = require('chai').expect;

const appTest = express();

appTest.use(bodyParser.json());
appTest.use(methodOverride());

describe("#request", async function () {
    it("pulls data from GET request to parse info to usable data",
    async function () {
        console.log(await request.get({url: 'http://www.dnd5eapi.co/api/monsters/goblin'}));
        const response = await request.get({url: 'http://www.dnd5eapi.co/api/monsters/goblin' , json: true});

        expect(response.index).to.eql("goblin");
    })
})