const express = require('express');
const Sports = require('../sports/sportsModel');
const server = express();

server.use(express.json());


server.get('/', (req, res)=>{
    res.status(200).json({api: "Server is up and running"})
});

server.get('/sports', async(req, res) => {
    try {
        const sports = await Sports.find()
        res.status(200).json(sports)
    } catch (error) {
        res.status(500).json({error : 'cannot connect to server'})
    }
})

server.post('/sports', async(req, res) => {
    try {
        const sport = await Sports.add(req.body)
        res.status(201).json(sport)
    } catch (error) {
        res.status(500).json({error : 'cannot connect to server'})
    }
})

server.delete(`/hobbits/:id`, async (req, res) => {
    try {
        const sport = await Sports.remove(req.params)
        res.status(201).json(sport)
    } catch (error) {
        res.status(500).json({error : 'cannot connect to server'})
    }
})

module.exports = server;