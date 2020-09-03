const supertest = require('supertest')
const server = require('../../src/server');

afterEach((done) => {
  server.close()
  done()
})


describe('Route User', () => {
  it('redn page user adapté', (done) => {
    supertest(server).get('/user/1').send()
    .then((res) => {
      expect(res.status).toBe(200)
      expect(res.text).toContain("Je m'appelle ben toto ")
      done()
    })
  });

});