// client/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },
  getUserInfo:function(){
    let that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            //'withCredentials':true,
            'lang': 'zh_CN',
            success(res) {
              //console.log(res)
              that.setData({
                userInfo:res.userInfo
              });
            }
          })
        }
      }
    })
  },
  login:function(){
    wx.login({
      success:function(res){
        //console.log(res.code);
        //发送请求
        wx.request({
          url: 'https://fp1nvw8x.qcloud.la/login/index',
          method:'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data:{
            code: res.code
          },
          success:function(res){
            //console.log(res.data);
          }
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.login();
    this.getUserInfo();
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