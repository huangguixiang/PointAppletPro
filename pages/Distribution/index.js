// pages/Distribution/index.js
import {post,get  } from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    motto: 'Hello World',
    hidden: true,
    userInfo: {},
    hasUserInfo: false,
    windowWidth: '',
    posterHeight: '',
  },
  //用户
  async user (){
    let _that = this
    let id = Number (_that.data.id)
    // console.log( Number (id))
    try {
      const res = await get({
        url: "/user"
      })
      let user=res.data.data;
      // user.push(res.data.data)
      console.log(res.data.data)
      if (res.data.status==200) {
         _that.setData({
          user:user
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
  //推广用户
  async userPromotion (){
    let _that = this
    // console.log( Number (id))
    try {
      const res = await post({
        url: "/spread/people"
      })
      console.log(res)
      let tg_peopl=res.data.data;
      console.log(tg_peopl);
      console.log(res)
      if (res.data.status==200) {
         _that.setData({
          tg_peopl:tg_peopl
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
  //推广订单
  async userOrder (){
    let _that = this
    // console.log( Number (id))
    try {
      const res = await post({
        url: "/spread/people"
      })

      console.log(res)
      // if (res.data.status==200) {
      //    _that.setData({
      //     user
      //    })
      // }
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
//推广海报
  async clickTg (){
    let _that = this
    // console.log( Number (id))
    this.setData({
      show: true
    })
    try {
      const res = await post({
        url: "/spread/people"
      })

      console.log(res)
      // if (res.data.status==200) {
      //    _that.setData({
      //     user
      //    })
      // }
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
    this.userPromotion()
    this.userOrder()  
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
  onload: function () {

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