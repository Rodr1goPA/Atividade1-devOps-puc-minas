const request = require('supertest');
const app = require('../app');

describe('Teste básico do servidor', () => {
  it('Deve responder com status 200', async () => {
    await request(app).get('/').expect(200);
  });
});
