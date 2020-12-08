const request = require('request-promise');
const chai = require('chai');
const chaiHttp = require('chai-http');

var app = require('../app.js');
var expect = require('chai').expect;
chai.use(chaiHttp);

describe("#request", async function () {
    it("pulls data from GET request to parse info to usable data",
    async function () {
        const response = await request.get({url: 'http://localhost:8000/api/v1/client', 
            json: true});

        expect(response).to.eql([]);
    })
})

// describe("#request", async function () {
//     it("tests response code to ensure a valid post request is made",
//     async function () {
//         var data = {
//             "name" : "Ed",
//             "email" : "b@b.com"
//         }

//         const push = await request({
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             uri: 'http://localhost:8000/api/v1/client',
//             body: JSON.stringify(data),
//             method: 'POST'
//         });

//         thisID = push.id;
//         const response = await request.get({url: ('http://localhost:8000/api/v1/client/' + thisID), json: true});

//         expect(response.email).to.eql('b@b.com');
//     })
// })