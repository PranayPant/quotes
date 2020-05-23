const express = require('express');
const redis = require('redis');

const app  = express()
const port = process.env.SERVER_PORT || 3001
const client = redis.createClient({
    host: 'redis'
})
client.set('clicks', 0)

app.get("/api/click", (req, res) => {
    client.get('clicks', (err, clicks) => {
        res.json({clicks})
        client.set('clicks', parseInt(clicks) + 1)
    })
})

app.listen(port, () => console.log(`Listening on ${port}`))
