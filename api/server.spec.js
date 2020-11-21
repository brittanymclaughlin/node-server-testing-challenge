const request = require('supertest');
const server = require('./server')

describe('server.js', () =>{
    describe('Get /', () =>{
        let res = {};
        beforeAll(async() =>{
            res = await request(server).get('/');
        })

        it('should return 200 ok', async () => {
            expect(res.status).toBe(200);
        })

        it('should return a JSON object', async () => {
            expect(res.type).toBe('application/json');
        })
    })
})
