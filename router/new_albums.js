const express = require("express")
const router = express()
const { createRequest } = require("../util/util")

router.get("/", (req, res) => {
  const offset = req.query.offset || 0
  const limit = req.query.limit || 50
  createRequest(`/api/album/new?area=ALL&offset=${offset}&total=true&limit=${limit}`, 'GET', null)
    .then(result => {
      res.setHeader("Content-Type", "application/json")
      res.send(result)
    })
    .catch(err => {
      res.status(502).send('fetch error')
    })
})


module.exports = router