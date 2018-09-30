// module.exports = (req, res, createWebAPIRequest, request) => {
//   const options = {
//     url: "http://music.163.com/discover",
//     method: "GET",
//     headers: {
//       "Referer": "http://music.163.com",
//       "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3380.0 Safari/537.36"
//     }
//   };
//   request(options, (error, response, body) => {
//     if (error) {
//       res.status(502).send("fetch error");
//     } else {
//       try {
//         const banners = /Gbanners\s*=\s*([^;]+);/.exec(body)[1];
//         res.send(JSON.stringify(eval(`({code:200,banners:${banners}})`)));
//       } catch (error) {
//         res.status(502).send("fetch error");
//       }
//     }
//   });
// };

module.exports = (query, request) => {
    return request(
        'GET', `http://music.163.com/discover`, {},
        {ua: 'pc', proxy: query.proxy}
    )
    .then(response => {
        try{
            const banners = eval(`(${/Gbanners\s*=\s*([^;]+);/.exec(response.body)[1]})`)
            response.body = {code: 200, banners: banners}
            return response
        }
        catch(err){
            response.code = 500
            response.body = {code: 500, msg: err.stack}
            return Promise.reject(response)
        }
    })
}