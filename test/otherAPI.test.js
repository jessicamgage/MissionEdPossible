const request = require('request-promise');
const chai = require('chai');
const chaiHttp = require('chai-http');

var app = require('../app.js');
var expect = require('chai').expect;
chai.use(chaiHttp);


describe.skip("#request", async function () {
    it("pulls data from GET request to parse info to usable data",
    async function () {
        const response = await request.get({url: 'http://www.dnd5eapi.co/api/monsters/goblin' , json: true});

        expect(response.index).to.eql("goblin");
    })
})

describe.skip("#request", async function () {
    it("pulls data from multiple GET requests",
    async function () {
        const response = await request.get({url: 'http://www.dnd5eapi.co/api/monsters/adult-black-dragon', json: true});
        const response2 = await request.get({url: 'http://www.dnd5eapi.co/api/monsters/gnoll', json: true})

        expect(response.size).to.eql("Huge");
        expect(response2.size).to.eql("Medium");
    })
})

// // describe("#request", async function () {
// //     it("pulls information from CDC site for testing of food schema",
// //     async function (){
// //         const response = await request.get(
// //             {url: 'https://www.cdc.gov/mmwr/preview/mmwrhtml/mm6105-table.htm', 
// //             json: true });
// //     })
// // })