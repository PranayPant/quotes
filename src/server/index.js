const express = require('express');

const app  = express()
const port = process.env.SERVER_PORT || 3001

app.get("/", (req, res) => {
    res.sendStatus(200)
})

app.listen(port, () => console.log(`Listening on ${port}`))
