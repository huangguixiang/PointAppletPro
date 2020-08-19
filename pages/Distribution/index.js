// pages/Distribution/index.js
import {post,get  } from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
  },
  async user (){
    let _that = this
    let id = Number (_that.data.id)
    // console.log( Number (id))
    try {
      const res = await get({
        url: "/user"
      })
      let user=[]
      user.push(res.data.data)
      console.log(res.data.data)
      if (res.data.status==200) {
         _that.setData({
          user
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
  navto(e) {
    let name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: `/pages/${name}/index`,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  clickTg() {
    this.setData({
      show: true
    })
  },
  onClickHide() {
    this.setData({
      show: false
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.user()
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