// import { api } from '../src/app.js'
// const { api } =require('../src/app.js')
var api=require('../build/app.js').api
api.search("年度之歌",data => {
  console.log("################Search API#################")
  console.log(data)
})


api.song('308169',data => {
  console.log("################Song API#################")
  console.log(data)
})


api.lrc('5243023',data => {
  console.log("################Lrc API#################")
  console.log(data)
})

api.getArtistAlbums('9952', data => {
  console.log('####################Artist Albums##############')
  console.log(data)
})

api.getAlbums('32311', data => {
  console.log("####################Albums####################")
  console.log(data)
})

api.getPlaylists('311785002', data => {
  console.log("####################Playlists####################")
  console.log(data)
})
