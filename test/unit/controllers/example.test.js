var request = require('supertest');

describe('GET /docs/index.html', function() {
  it('respond with documentation', function(done) {
    request(sails.hooks.http.app)
      .get('/docs/index.html')
      .expect(200, done);
  });
});
