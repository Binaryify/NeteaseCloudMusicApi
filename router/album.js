const express = require("express")
const router = express()
const { createRequest } = require("../util/util")

router.get("/", (req, res) => {
  const id = req.query.id
  createRequest(`/api/album/${id}`, 'GET', null)
    .then(result => {
      res.setHeader("Content-Type", "application/json")
      res.send(result)
    })
    .catch(err => {
      res.status(502).send('fetch error')
    })
})


module.exports = router