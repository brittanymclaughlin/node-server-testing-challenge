const db = require('../data/dbConfig.js');
const Sports = require('./sportsModel');

describe("sports model model", () => {
    describe('add', () => {
        beforeAll(async () => {
            await db('sports').truncate();
        })
        it("should add the provided sports into the db", async () => {
            await Sports.add({name: 'tennis'});
            await Sports.add({name: 'rugby'});

            const sports = await db('sports');
            expect(sports).toHaveLength(2);
        });

        it("should return the sport we added", async () => {
            let sport = await Sports.add({name: 'tennis'});
            expect(sport.name).toBe('tennis');

            sport = await Sports.add({name: 'rugby'});
            expect(sport.name).toBe('rugby');
        })
    })

    describe('delete', () => {
        beforeEach(async () => {
            await Sports.find();
        
        })
        it("should delete the provided sports from the db", async () => {
            await Sports.remove(1);
            await Sports.remove(2);

            const sports = await db('sports');
            expect(sports).toHaveLength(2);
        });

        it("should return the sports we deleted", async () => {
            let sports = await Sports.find();
            expect(sports[0].id).toBe(3);
            expect(sports[1].id).toBe(4);

        })
    })
})