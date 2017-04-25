const express = require("express");
const crypto = require('crypto')
const router = express();
const { createWebAPIRequest } = require("../util/util");

router.get("/", (req, res) => {

    const md5sum = crypto.createHash('md5')
    console.log(md5sum.update(req.query))

    const cookie = req.get('Cookie') ? req.get('Cookie') : ''

    const data ={"csrf_token": ""};

    createWebAPIRequest(
        'music.163.com',
        '/weapi/feedback/weblog',
        'POST',
        data,
        cookie,
        (music_req, cookie) => {
            console.log(music_req)
            res.send(music_req)
        },
        err => res.status(502).send('fetch error')
    )

});





module.exports = router