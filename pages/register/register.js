// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    phonenumber:'',
    password:'',
    username:'',
    company:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onChange(event) {
    this.setData({
      radio: event.detail
    });
  },

  onClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name
    });
  },

  setp: function (e) {
    this.setData({
      phonenumber: e.detail
    })
  },


  setpwd: function (e) {
    this.setData({
      password: e.detail
    })
  },

  setu: function (e) {
    this.setData({
      username: e.detail
    })
  },


  setc: function (e) {
    this.setData({
      company: e.detail
    })
  },

  register: function () {
    wx.request({
      url: 'http://123.56.96.92:3000/api/v1/user/reg', //仅为示例，并非真实的接口地址
      data: {
        phonenumber: this.data.phonenumber,
        password: this.data.password,
        username: this.data.username,
        face: wx.getStorageSync('face'),
        sex: this.data.radio,
        organization: this.data.company
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "POST",
      success(res) {
        console.log(res.data)
        // 本地化
        wx.setStorageSync('userdataPhone', res.data.data.phonenumber)
        wx.setStorageSync('userdataUserName', res.data.data.username)
        wx.setStorageSync('userdataSex', res.data.data.sex)
        wx.setStorageSync('userdataOrganization', res.data.data.organization)
        wx.setStorageSync('userdataFace', res.data.data.face)
        // 跳转
        wx.switchTab({
          url: '../attendance/attendance'
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