module.exports = {
  toBoolean(val) {
    if (val === '') return val
    return val === 'true' || val == '1'
  },
  cookieToJson(cookie) {
    if (!cookie ) return {}
    let cookieArr = cookie.split(';');
    let obj = {} 
    cookieArr.forEach((i) => {
      let arr = i.split('=');
      obj[arr[0]] = arr[1];
    });
    return obj
  }
}
