const request = require('request-promise');
const chai = require('chai');
const chaiHttp = require('chai-http');

var app = require('../app.js');
var expect = require('chai').expect;
chai.use(chaiHttp);

describe("#request", async function () {
    it("pulls data from GET request to parse info to usable data",
    async function (){
        const response = await request.get({url: 'http://localhost:8000/api/v1/client', 
            json: true});

        console.log(response);

        expect(response).to.eql([]);
    })
})