const axios = require("axios");
const host = global.host || 'http://localhost:4000';
const {Album} = require("../../myapi/app/models/index");

module.exports.syncDB = (t) => {
  axios
    .get(`${host}/banner`, {
    })
    .then(({ status, data }) => {
      if (status !== 200) {
        return
      }
      const banners = data.banners;
      if (banners.length === 0) {
        return
      }
      // 清除表之后，再同步
      Banner.truncate({transaction: t})
        .then(r => {
          banners.forEach(el=> {
            Banner.create({
              imageUrl: el.imageUrl
            }, {transaction: t});
          });
        });
    })
    .catch((err) => {
      console.log(err)
    })
}
