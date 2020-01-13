const express = require('express')
const server = express()
const hubs = require('./data/hubs-model')
server.use(express.json())

server.get('/', (req, res) => {
    res.send('yo dude')
})

server.get('/api/hubs', (req,res) => {
    hubs.find()
        .then(hubs => {
            res.status(200).json(hubs)
        })
        .catch(err => {
            console.log(err)
        })
})

server.post('/api/hubs', (req,res) => {
    const hubData = req.body
    hubs.add(hubData)
        .then(hubs => {
            res.status(201).json(hubs)
        })
        .catch(err => console.log(err))
})
server.put('.api/hubs/:id', (req,res) => {
    hubs.update(req.params.id, req.body)
        .then(hubs => {
            res.status(201).json(hubs)
        })
        .catch(err => console.log(err))
})

server.delete('/api/hubs/:id', (req,res) => {
    hubs.remove(req.params.id)
        .then(hubs => {
            res.status(204).json(hubs)
        })
        .catch(err => console.log(err))
})

const port = 8000
server.listen(port, () => console.log('running on 8000'))