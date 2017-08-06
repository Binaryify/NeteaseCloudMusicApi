const express = require("express")
const router = express()
const { createRequest } = require("../util/util")

router.get("/", (req, res) => {
    const cat = req.query.cat || 2001
    const offset = req.query.offset || 0
    const limit = req.query.limit || 50
    const initial = req.query.initial
    createRequest(`/api/artist/list?categoryCode=${cat}&offset=${offset}&total=false&limit=${limit}&initial=${initial}`, 'GET', null)
        .then(result => {
            res.setHeader("Content-Type", "application/json")
            res.send(result)
        })
        .catch(err => {
            res.status(502).send('fetch error')
        })
})


module.exports = router