// 首页轮播图

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
            response.status = 500
            response.body = {code: 500, msg: err.stack}
            return Promise.reject(response)
        }
    })
}