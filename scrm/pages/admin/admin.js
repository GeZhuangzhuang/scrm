// pages/admin/admin.js
var app = getApp();
app.getOpid('https://api.weixin.qq.com/sns/jscode2session');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const that = this;
    // const url = 'http://test4.easyinlab.org/scrm/activity/getAllActivity';
    // const index = 1
    // app.getActivityData(index,url,function (data) {
    //   var activity = data.data.rows;
    //   that.setData({
    //     activity: activity
    //   })
    // });
    const opid = wx.getStorageSync("opid");
    console.log(opid);
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})