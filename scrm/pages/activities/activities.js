// pages/activities/activities.js
let app = getApp();
// 引入screening.js方法
let screening = require("../admin/screening/screening.js");
// 引入share.js方法
let share = require("./share/share.js");
// 引入particulars.js
let particulars = require("./particulars/particulars.js");
//显示的个数
let size = 20;

Page({
  /**
   * 页面的初始数据
   */
  data: {
     maskHidden: true
    //分享
    , shareStatus: false
    //详情
    , particularsStatus: false 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      num: 1,
      size: size
    });
    const code = {
      'that':this,
      "uid":wx.getStorageSync("user").id,
      'num': 1,
      'size': size
    };
    const url = 'activity/getListActivity';
    screening.activityData(code,url);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
     
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉刷新了")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let that = this;
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/pages/logs/logs',
      imageUrl: 'http://oz1h9kuzx.bkt.clouddn.com/17_11510107853669.jpg'
      , complete: function () {
        that.setData({
          shareStatus: false
        })
      }
    }
  },
  /**
   * 申请代理
   */
  qrcodeStatus: function () {
    let user = wx.getStorageSync('user');
    console.log(user);
    wx.showModal({
      title: '提示',
      content: '是否代理'+e.target.dataset.name,
      success: function (res){
        console.log(res.confirm);//确定
        console.log(res.cancel);//取消
        if (res.confirm){
          const data = { 'aid': e.target.id,'uid':user.id};
          const url = 'agentactivity/handleAgentActivityInfo';
          app.getRequest(data,url,function(res){
            wx.showModal({
              title: '提示',
              content: res.data.message
            })
          })
        }
      }
    })
  },
  /**
   * 分享
   */
  shareStatus: share.shareStatus,
  /**
   * 详情
   */
  particularsStatus: particulars.particularsStatus,
  /**
   * 下拉
   */
  upper: function(){
    this.setData({
      num: 1,
      size: size
    });
    const code = {
      "uid": wx.getStorageSync("user").id,
      'num': 1,
      'size': size
    };
    const url = 'activity/getListActivity';
    screening.activityData(code, url);
  },
  /**
   * 上拉
   */
  lower: function(){
    const code = {
      "uid": wx.getStorageSync("user").id,
      'num': ++this.data.num,
      'size': size
    };
    console.log(this.data.num)
    const url = 'activity/getListActivity';
    screening.activityData(code, url);
  }
})