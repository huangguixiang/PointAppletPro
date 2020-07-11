// pages/changeaddress/index.js
// const util = require('../../utils/area.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaList: require('./area.js').default,
    show:false,
    result: ['a']
  },
  onChange(event) {
    this.setData({
      result: event.detail
    });
  },
  selectdz(){
    this.setData({
      show:true
    })
  },
  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onClose(){
    this.setData({
      show:false
    })
  },
  confirm(){
    this.setData({
      show:true
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