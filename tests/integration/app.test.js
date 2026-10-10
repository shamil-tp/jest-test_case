const request = require('supertest');
const app = require('../../app'); // Path to your app.js file

describe('API Integration Tests', () => {
  it('GET /api/health should return 200 OK', async () => {
    const res = await request(app).get('/api/health');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('GET / Endpoint', () => {
  it('should return status 200 and text "hello"', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
    expect(res.text).toBe('hello');
  });
});