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
        const response = await request.get({url: 'http://www.dnd5eapi.co/api/monsters/goblin' , json: true});

        expect(response.index).to.eql("goblin");
    })
})

describe("#request", async function () {
    it("pulls data from multiple GET requests",
    async function () {
        const response = await request.get({url: 'http://www.dnd5eapi.co/api/monsters/adult-black-dragon', json: true});
        const response2 = await request.get({url: 'http://www.dnd5eapi.co/api/monsters/gnoll', json: true})

        expect(response.size).to.eql("Huge");
        expect(response2.size).to.eql("Medium");
    })
})

describe("#request", async function () {
    it("pulls information from CDC site for testing of food schema",
    async function (){
        const response = await request.get({url: '', json: true });
    })
})