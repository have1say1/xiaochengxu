//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username:'',
    password:'',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../attendance/attendance'
    }),
    console.log("aaa")

  },

  setz: function(e){
    this.setData({
      username: e.detail
    })
  },
  

  setp: function(e){
    this.setData({
      password: e.detail
    })
  },

  login:function(){
    wx.request({
      url: 'http://123.56.96.92:3000/api/v1/user/login', //仅为示例，并非真实的接口地址
      data: {
        phonenumber: this.data.username,
        password: this.data.password
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

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
