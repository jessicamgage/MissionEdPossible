const chai = require('chai');
const chai_http = require('chai-http');

var chaiApp = require('../app.js');
chai.use(chai_http);

chai.request(chaiApp)
    .get('/clients')
    .end(async (error, response) => {
        if(error){
            console.log(error);
        }else{
            chai.assert.equal(response.status, 200, 
                'Response was not ok');
            chai.assert.equal(response.text, [], 
                'Response did not return ok');
            
            console.log("All tests in chai suite passing");
            return
        }
    });
