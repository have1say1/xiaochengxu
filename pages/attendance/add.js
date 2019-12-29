// pages/attendance/add.js
import Dialog from '../../dist/dialog/dialog';
const util = require('../../utils/util.js');

const dataMap = {
  '日': 0,
  '一': 1,
  '二': 2,
  '三': 3,
  '四': 4,
  '五': 5,
  '六': 6
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    weekDayList: ['日', '一', '二' , '三', '四',  '五', '六'],
    weekDayResult: [],
    mname: '',
    describe: '',
    stTime: '',
    endTime: '',
    rule: []
  },


  // 获取页面数据
  inputMname: function(event) {
    this.setData({
      mname: event.detail
    })
  },
  inputDescribe: function (event) {
    this.setData({
      describe: event.detail
    })
  },
  inputStTime: function (event) {
    this.setData({
      stTime: event.detail
    })
  },
  inputEndTime: function (event) {
    this.setData({
      endTime: event.detail
    })
  },

  // 与复选框相关的方法
  onWeekDayChange: function(event) {
    this.setData({
      weekDayResult: event.detail
    });
  
  },

  // 两个button
  onButtonCancel: function(event) {
    wx.navigateBack()
  },
  onButtonSubmit: function(event) {
    // 网络请求
    wx.request({
      url: 'http://123.56.96.92:3000/api/v1/meeting/add',
      data: {
        mname: this.data.mname,
        mcover: '一张图', 
        check_rule: this.data.rule, 
        check_time_start: util.changeStrToMinutes(this.data.stTime),
        check_time_end: util.changeStrToMinutes(this.data.endTime),
        longitude: 116, 
        latitude: 39, 
        describe: this.data.describe, 
        uid: wx.getStorageSync('userdataPhone')
      },
      method: "POST",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded' // 默认值
      },
      // 使用箭头函数
      success: (res) => {
        console.log(res.data.msg)
        // 显示dialog
        Dialog.alert({
          message: '添加成功'
        }).then(() => {
          // on close
          wx.navigateBack()
        });
      }
      
    })
  },
  
  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
    
    var arr = this.data.weekDayResult.map(function(value, index, array) {
      return this[value];
    }, dataMap)
    var result = arr.sort().join('_');
    console.log(result);
    this.setData({
      rule: result
    })
  },

  noop() { },
  
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