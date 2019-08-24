module.exports = {
  toBoolean(val) {
    if (val === '') return val
    return val === 'true' || val == '1'
  }
}
