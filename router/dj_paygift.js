// 付费电台
module.exports = (req, res, createWebAPIRequest, request) => {
    const cookie = req.get("Cookie") ? req.get("Cookie") : "";
    const data = {
        csrf_token: "",
        limit: req.query.limit || 10,
        offset: req.query.offset || 0,
    };
    createWebAPIRequest(
        "music.163.com",
        "/weapi/djradio/home/paygift/list?_nmclfl=1",
        "POST",
        data,
        cookie,
        music_req => {
            res.send(music_req);
        },
        err => res.status(502).send("fetch error")
    );
};
