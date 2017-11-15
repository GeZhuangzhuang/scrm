let app = getApp();
let that = null;
let aid = 1;
// 显示/关闭考勤
function attenceStatus(e){
  that = this;
  aid = e.target.id;
  console.log(e.target.id)
  this.setData({
    attenceStatus: !this.data.attenceStatus,
    attnum:1,
    size:that.data.size,
    status: 0,
    aid: aid
  });
  let code = {
    'aid': aid,
    "num":1,
    "size": that.data.size,
  }
  attenceData(0,code);
}
module.exports.attenceStatus = attenceStatus;
// 点击状态
function attenceAllDay(e){
  let code = {
    'aid': aid,
    "num": 1,
    "size": that.data.size,
  }
  attenceData(e.target.id,code);
  that.setData({
    attenceAllDay: e.currentTarget.id,
    status: e.target.id,
    attnum: 1,
    size: that.data.size,
    aid: aid
  })
}
module.exports.attenceAllDay = attenceAllDay;
let data = [];

function attenceData(status,code){
  if (code.status != null){
    status = code.status
  }
  const url = 'user/getUserStatus';
  app.getRequest(code,url,function(res){
    let rows1 = res.data.data;
    let rows2 = res.data.rows;
    console.log(rows1);//当天
    console.log(rows2);//全部
    if (code.num == 1){
      data = [];
    }
    if (status == 0){
      if (rows1.length != null && rows1.length != 0) {
        for (let i = 0; i < rows1.length;i++){
          data.push(rows1[i])
        }
      }
    }else{
      if (rows2.length != null && rows2.length != 0) {
        for (let i = 0; i < rows2.length; i++) {
          data.push(rows2[i])
        }
      }
    }
    that.setData({
      attenceData: data
    })
    console.log(that.data.attenceData)
  })
}
module.exports.attenceData = attenceData;