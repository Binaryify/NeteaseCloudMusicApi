const express = require("express");
const router = express();
const request = require("request");
router.get("/", (req, res) => {
    let path = req.query.path;
    request(path, (err, status, body) => {
        if (!err && status.statusCode == 200) {
            return res.send({success: true, message: 'ok'});
        } else {
            return res.send({success: false, message: '亲爱的,暂无版权'});
        }
    });
});


module.exports = router;