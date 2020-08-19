// pages/withdraw/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  morelist() {
    wx.navigateTo({
      url: '/pages/banklist/index',
    })
  },
  onChange(event) {
    this.setData({
      active: event.detail.name
    })
  },
  
  // async info() {
  //   let _that=this
  //   try {
  //     const res = await post({
  //       url: ':8000/midianuserserver/bank/bankList',
  //       header: {
  //         "Content-Type": "application/json",
  //         "token": "5a4c24f9608d455181e37b5a81a67177",
  //       },
  //     })  
  //     console.log(res.data.data)
 
  //    } catch (error) {
  //      if(error.errMsg=="request:fail "){
  //       wx.showToast({
  //         title: "无网络链接",
  //         icon:'none',
  //         duration:1000
  //       }) 
  //      }  
  //    }
  //  },

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