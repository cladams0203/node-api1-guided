const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('yo dude')
})

const port = 8000
server.listen(port, () => console.log('running on 8000'))