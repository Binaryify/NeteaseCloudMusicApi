const { Song } = require('../models/index')

//获得用户信息
async function getUserInfo(ctx) {}

//获得用户的所有歌单
async function getUserAllAblum(ctx) {}

//用户收藏歌单
async function addCollectAblum(ctx) {}

//用户取消收藏歌单
async function deleteCollectAblum(ctx) {}

//用户新建歌单
async function addUserAblum(ctx) {}

//用户删除收藏歌单
async function deleteUserAblum(ctx) {}

//获取用户创建的歌单
async function getUserAblum(ctx) {}

//喜欢单曲
async function likeSong() {}

//用户取消喜欢
async function unlikeSong() {}

module.exports = {
  getUserInfo,
  getUserAllAblum,
  addCollectAblum,
  deleteCollectAblum,
  addUserAblum,
  deleteUserAblum,
  getUserAblum,
  likeSong,
  unlikeSong,
}
