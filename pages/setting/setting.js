// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    columns: ['男', '女']
  },

  onChange(event) {
    const { picker, value, index } = event.detail;
  },
  
  submit: function () {
    // wx.request({
    //   url: 'http://123.56.96.92:3000/api/v1/user/login', //仅为示例，并非真实的接口地址
    //   data: "{phonenumnber: '12345678',password: '12345678'}",
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   method:"POST",
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
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