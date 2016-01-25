var request = require('supertest');

describe('GET /', function(){
  it('respond with homepage', function(done){
    request(sails.hooks.http.app)
      .get('/')
      .expect(200, done);
  });
});
