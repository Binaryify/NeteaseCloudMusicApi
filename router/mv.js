const express = require("express")
const router = express()
const { createRequest } = require("../util/util")
const request=require("request")
router.get("/", (req, res) => {
  const mvid = req.query.mvid
  createRequest(`/api/mv/detail/?id=${mvid}&type=mp4`, 'GET', null)
    .then(result => {
      res.setHeader("Content-Type", "application/json")
      res.send(result)
    })
    .catch(err => {
      res.status(502).send('fetch error')
    })
})


module.exports = router