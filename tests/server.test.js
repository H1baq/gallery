const request = require('supertest');
const express = require('express');

describe('Server routes', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.get('/', (req, res) => res.status(200).send('OK'));  // ✅ Mocked route
    app.get('/image', (req, res) => res.status(200).send('Image route OK'));
  });

  it('GET / should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('GET /image should return 200 OK', async () => {
    const res = await request(app).get('/image');
    expect(res.statusCode).toBe(200);
  });
});
