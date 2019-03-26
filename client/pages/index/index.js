Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchKeywords: '',
    inputShowed: false,
    videoSwiperList: [],
    interval: 5000,
    duration: 1000,
    videoList:[]
  },
  inputTyping(e){
    this.setData({
      searchKeywords:e.detail.value
    });
  },
  clearInput(){
    this.setData({
      searchKeywords:''
    });
  },
  showInput(){
    this.setData({
      inputShowed:true
    });
  },
  hideInput(){
    this.setData({
      inputShowed:false
    });
  },
  getSwiperList(){
    let that = this;
    wx.request({
      url: 'https://fp1nvw8x.qcloud.la/video/imgs',
      success(res){
        if(res.data.code===0){
          that.setData({
            videoSwiperList:res.data.data
          });
        }
      }
    });
  },
  getVideoList(){
    let that = this;
    wx.request({
      url: 'https://fp1nvw8x.qcloud.la/video/top10',
      success(res){
        if(res.data.code===0){
          that.setData({
            videoList:res.data.data
          });
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoList();
    this.getSwiperList();
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