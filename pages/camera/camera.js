// pages/camera/camera.js
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

  },
  
  qiandao:function(){
    this.data.cameraContext = wx.createCameraContext()
    this.data.cameraContext.takePhoto({
      quality: "high", //高质量的图片
      success: res => {
        //res.tempImagePath照片文件在手机内的的临时路径
        let tempImagePath = res.tempImagePath
        let base64 = wx.getFileSystemManager().readFileSync(tempImagePath, 'base64') 
        wx.request({
          url: 'http://123.56.96.92:3000/api/v1/check/face', //仅为示例，并非真实的接口地址
          data: {
            face: base64,
            uid: wx.getStorageSync('userdataPhone')
          },
          header: {
            'Content-Type': 'application/x-www-form-urlencoded' // 默认值
          },
          method: "POST",
          success(res) {
            console.log(res.data)
            if(res.data.data.score > 80){
              wx.showToast({
                title: '签到成功',
                duration: 3000
              })
              wx.navigateTo({
                url: '/pages/detail/detailIndex',
              })
            }
            else
              wx.showToast({
                title: '签到失败',
                icon: 'none',
                duration: 3000
              })
          }
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