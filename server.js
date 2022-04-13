const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.use(express.json())

app.use(function (req, res, next) {
    console.log("== Request received")
    console.log("  - METHOD:", req.method)
    console.log("  - URL:", req.url)
    console.log("  - HEADERS:", req.headers)
    next()
})

app.get('/', function (req, res, next) {
    res.status(200).send({
        msg: "Hello, world!"
    })
})

app.get('/lodgings', function (req, res, next) {
    res.status(200).send({})
})

app.use('*', function (req, res, next) {
    res.status(404).send({
        err: "This URL was not recognized: " + req.originalUrl
    })
})

app.listen(port, function () {
    console.log("== Server is listening on port:", port)
})
