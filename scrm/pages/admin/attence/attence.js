let app = getApp();
let that = null;
let aid = 1;
// 显示/关闭考勤
function attenceStatus(e){
  that = this;
  aid = e.target.id;
  console.log(e.target.id)
  this.setData({
    attenceStatus: !this.data.attenceStatus
  })
  attenceData(0);
}
module.exports.attenceStatus = attenceStatus;
// 点击状态
function attenceAllDay(e){
  attenceData(e.target.id);
  that.setData({
    attenceAllDay: e.currentTarget.id
  })
}
module.exports.attenceAllDay = attenceAllDay;
function attenceData(status){
  const data = {'aid':aid};
  const url = 'user/getUserStatus';
  app.getRequest(data,url,function(res){
    console.log(res.data.data);//当天
    console.log(res.data.rows);//全部
    if (status == 0){
      that.setData({
        attenceData: res.data.data
      })
    }else{
      that.setData({
        attenceData: res.data.rows
      })
    }
    console.log(that.data.attenceData)
  })
}