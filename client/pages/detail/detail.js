Page({
  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:{},
    playUrl:''
  },
  getCurrentVideo(id){
    let that = this;
    wx.request({
      url: 'https://fp1nvw8x.qcloud.la/video/detail',
      method:'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        id:id
      },
      success(res){
        that.setData({
          videoInfo:res.data.data[0],
          playUrl:res.data.data[0].vod_play_url.substr(5)
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCurrentVideo(options.id);
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