import {api }from './app.js'
api.search("年度之歌",(data)=>{
    console.log(data)
})
api.song('308169',(data)=>{
    console.log(data)
})
api.lrc('5243023',(data)=>{
    console.log(data)
})