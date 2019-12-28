// pages/attendance/attendance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upTabActive: 0,
    downTabbarActive: 0,
    currentData: 0,
    attendanceListData: [],
    manageListData:[] 
  },


  // 上方tab的点击属性
  onChangeUp(event) {
    console.log(event.detail),
    console.log(event.detail.index),
    console.log(event.detail.title)
  },

  // 添加按钮
  addMeetingButton() {
    wx.navigateTo({
      url: '../attendance/add'
    })
  },

  // 下方tabBar的点击属性
  onChangeDown(event) {
    // event.detail 的值为当前选中项的索引
    console.log(event.detail);
    this.setData({ 
      downTabbarActive: event.detail,
      page: event.detail,
      currentData: event.detail
     });
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var uid = wx.getStorageSync('userdataPhone')
    // type：0 表示已参加
    wx.request({
      url: 'http://123.56.96.92:3000/api/v1/meeting/list',
      data: {
        uid: uid,
        type: 0
      },
      method: "GET",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded' // 默认值
      },
      // 使用箭头函数
      success: (res) => {
        console.log(res.data.data),
          console.log(res.data.data[0]),
          this.setData({
          attendanceListData: res.data.data
          })
        console.log(this.data.attendanceListData)
      }
    })
    // type 1 表示管理
    wx.request({
      url: 'http://123.56.96.92:3000/api/v1/meeting/list',
      data: {
        uid : uid, 
        type : 1
      },
      method: "GET",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded' // 默认值
      },
      // 使用箭头函数
      success:(res)=>{
        console.log(res.data.data),
        console.log(res.data.data[0]),
        this.setData({
          manageListData: res.data.data
        })
        console.log(this.data.manageListData)
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