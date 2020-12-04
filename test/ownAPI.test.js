// const chai = require('chai');
// const chai_http = require('chai-http');
//
// var chaiApp = require('../app.js');
// chai.use(chai_http);
//
// chai.request(chaiApp)
//     .get('/api/v1/clients')
//     .end(async (error, response) => {
//         if(error){
//             console.log(error);
//         }else{
//             chai.assert.equal(response.status, 200,
//                 'Response was not ok');
//             chai.assert.equal(response.text, [],
//                 'Response did not return ok');
//
//             console.log("All tests in chai suite passing");
//             return
//         }
//     });


const request = require('request-promise');
const chai = require('chai');
const chaiHttp = require('chai-http');

var app = require('../app.js');
var expect = require('chai').expect;
chai.use(chaiHttp);

describe("#request", async function () {
  it("pulls data from GET request to parse info to usable data",
    async function () {
      const response = await request.get({url: 'http://localhost:8000/api/v1/clients' , json: true});
      console.log(response);
      // expect(response.index).to.eql("goblin");
    })
})
