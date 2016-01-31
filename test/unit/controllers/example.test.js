var request = require('supertest');

describe('GET /swagger/doc', function() {
  it('respond with documentation', function(done) {
    request(sails.hooks.http.app)
      .get('/swagger/doc')
      .expect(200, done);
  });
});
