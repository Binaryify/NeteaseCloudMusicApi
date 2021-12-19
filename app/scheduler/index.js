const schedule = require('node-schedule');

const  SyncDatabaseSchedule = ()=>{
  //每半小时执行一次
  schedule.scheduleJob('0 30 * * * *',()=>{

    console.log('SyncDatabaseSchedule:' + new Date());
  });
}

