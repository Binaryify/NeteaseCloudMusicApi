const axios = require("axios");
const {Banner} = require("../../myapi/app/models/index");

module.exports.syncDB = (t, host) => {
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
      Banner.truncate()
        .then(r => {
          banners.forEach(el=> {
            Banner.create({
              imageUrl: el.imageUrl
            });
          });
        });
    })
    .catch((err) => {
      console.log(err)
    })
}
