// pages/creation/creation.js
import { post,get } from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },




  // /
  innovate(){
wx.navigateTo({
  url: '/pages/innovate/innovate',
})
  },
  async showCrea(e) {
    let _that = this
    try {
      const res = await get({
        url: '/midiangoodsorderserver/userCreateHistory/getall',
        data: { 
         
            },
        header: {
          "Content-Type": "application/json",
          'token':"f6f3c95011d248ea8bc80440c4cba2c0"
        },

      })
      console.log(res.data.status)
     if (res.data.status==200) {
      wx.showToast({
        title:'还没有数据',
        icon:'none',
        duration:1500
      })
     }else{
      wx.showToast({
        title:res.data.message,
        icon:'none',
        duration:1500
      })
     }
    } catch (error) {
      if (error.errMsg == "request:fail ") {
        wx.showToast({
          title: "无网络链接",
          icon: 'none',
          duration: 1000
        })
      }
    }
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
    this.showCrea()
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