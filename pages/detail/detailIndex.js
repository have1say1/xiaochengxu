// pages/detail/detailIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarTitle: '活动名称',
    titleImageSrc: '',
    qrCodeShow: false
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