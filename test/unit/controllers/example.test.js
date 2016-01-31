var request = require('supertest');

describe('GET /docs/', function(){
  it('respond with documentation', function(done){
    request(sails.hooks.http.app)
      .get('/docs/')
      .expect(200, done);
  });
});
