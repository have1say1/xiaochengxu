// pages/detail/detailIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarTitle: '活动名称',
    groupTitle: '',
    place: '',
    stTime: '',
    endTime: '',
    titleImageSrc: '',
    qrCodeShow: false,
  },

  camera:function(){
    wx.navigateTo({
      url: '../camera/camera'
    })
  },
  
  onQRCodeClickShow() {
    this.setData({ qrCodeShow: true });
    console.log('show')
    
  },

  onQRCodeClickHide() {
    this.setData({ qrCodeShow: false });
    console.log('close')
  },

  noop() { }, 


  // 点击标题栏左上角返回
  onTitleClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mid = options.mid
    wx.request({
      url: 'http://123.56.96.92:3000/api/v1/meeting/detail',
      data: {
         meetingid: mid
      },
      method: "GET",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded' // 默认值
      },
      // 使用箭头函数
      success: (res) => {
        console.log(res.data.data)
        this.setData({
          groupTitle: res.data.data.mname, 
          place: res.data.data.location.describe, 
          stTime: res.data.data.checktime.timespace.start, 
          endTime: res.data.data.checktime.timespace.end
        })
      }
    })
    
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