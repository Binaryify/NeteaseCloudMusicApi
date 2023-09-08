// 游客登录
const crypto = require('crypto')
const ID_XOR_KEY_1 = Buffer.from('3go8&$833h0k(2)2')

function cloudmusic_dll_encode_id(some_id) {
  const xored = Buffer.from(
    [...some_id].map(
      (c, idx) => c.charCodeAt(0) ^ ID_XOR_KEY_1[idx % ID_XOR_KEY_1.length],
    ),
  )
  const digest = crypto.createHash('md5').update(xored).digest()
  return digest.toString('base64')
}

module.exports = async (query, request) => {
  query.cookie.os = 'iOS'
  const deviceId = `NMUSIC`
  const encodedId = Buffer.from(
    `${deviceId} ${cloudmusic_dll_encode_id(deviceId)}`,
  )
  const username = encodedId.toString('base64')
  const data = {
    /* A base64 encoded string. */
    username: username,
  }
  let result = await request(
    'POST',
    `https://music.163.com/api/register/anonimous`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
  if (result.body.code === 200) {
    result = {
      status: 200,
      body: {
        ...result.body,
        cookie: result.cookie.join(';'),
      },
      cookie: result.cookie,
    }
  }
  return result
}
