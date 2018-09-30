//登录状态
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   createWebAPIRequest(
//     "music.163.com",
//     "/",
//     "GET",
//     {},
//     cookie,
//     music_req => {
//       try {
//         var profile = /GUser\s*=\s*([^;]+);/.exec(music_req)[1];
//         var bindings = /GBinds\s*=\s*([^;]+);/.exec(music_req)[1];
//         profile = eval(`(${profile})`);
//         bindings = eval(`(${bindings})`);
//         res.send({code: 200, profile: profile, bindings: bindings});
//       } catch (error) {
//         res.status(502).send("fetch error");
//       }
//     },
//     err => res.status(502).send("fetch error")
//   );
// };

module.exports = (query, request) => {
    return request(
        'GET', `http://music.163.com`, {},
        {cookie: query.cookie, proxy: query.proxy}
    )
    .then(response => {
        try{
            let profile = eval(`(${/GUser\s*=\s*([^;]+);/.exec(response.body)[1]})`)
            let bindings = eval(`(${/GBinds\s*=\s*([^;]+);/.exec(response.body)[1]})`)
            response.body = {code: 200, profile: profile, bindings: bindings}
            return response
        }
        catch(err){
            response.code = 301
            response.body = {code: 301}
            return Promise.reject(response)
        }
    })
}