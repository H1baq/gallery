const request = require('supertest');
const app = require('../server'); // adjust the path if needed

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    });
});
