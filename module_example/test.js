const { login_cellphone, user_cloud, album_sublist } = require('../main')
async function test() {
  try {
    const result = await login_cellphone({
      phone: '手机号',
      password: '密码'
    })
    console.log(result)
    const result2 = await user_cloud({
      cookie: result.body.cookie
    })
    console.log(result2.body)
    const result3 = await album_sublist({
      cookie: result.body.cookie
    })
    console.log(result3.body)
      
  } catch (error) {
    console.log(error)
  }
}
test()