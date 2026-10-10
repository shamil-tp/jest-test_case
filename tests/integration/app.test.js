const request = require('supertest');
const { describe, it, expect } = require('vitest');
const app = require('../../app'); // Import your Express app instance (without app.listen)

describe('API Integration Tests', () => {
  it('GET / should return 200 OK', async () => {
    const res = await request(app).get('/');
    
    expect(res.status).toBe(200);
  });
});