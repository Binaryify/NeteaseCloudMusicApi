module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  // 暂时不提供更换头像接口
  // gender为0表示保密，1为男性，2为女性
  const gender_type = req.query.gender;
  // birthday 为unix13位时间戳
  // province_number and city_number
  const data = {
    avatarImgId: "0",
    birthday: req.query.birthday,
    city: req.query.city,
    gender: gender_type,
    nickname: req.query.nickname,
    province: req.query.province,
    signature: req.query.signature,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/user/profile/update",
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
};
