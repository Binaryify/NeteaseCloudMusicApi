const express = require("express")
const router = express()
const { createRequest } = require("../util/util")

router.get("/", (req, res) => {
  const ids = req.query.ids
  console.log(ids)
  createRequest(`http://music.163.com/api/song/detail?ids=%5B${ids}%5D`, 'GET', null)
    .then(result => {
      res.setHeader("Content-Type", "application/json")
      res.send(result)
    })
    .catch(err => {
      res.status(502).send('fetch error')
    })
})


module.exports = router