// pages/me/index.js
import {post,get  } from "../../request/request.js";
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
//订单
order(e){
  let {index}=e.currentTarget.dataset
  wx.navigateTo({
    url: `/pages/order/index?index=`+index,
  })
},


  //分销中心
  Distribution(e) {

    wx.navigateTo({
      url: `/pages/Distribution/index`,
    })
  },
  //订单
  navto(e) {

    let {index}=e.currentTarget.dataset
    // console.log(index)
    wx.navigateTo({
      url: `/pages/order/index?index=`+index,
    })
  },
//创作中心
creation(e){
    // let {index}=e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/creation/creation`,
    })
  },
    //地址
    navtos(e) {
      wx.navigateTo({
        url: '/pages/AddressGl/index',
      })
    },

    //客服
    handleContact (e) {
      console.log(e.detail.path)
      console.log(e.detail.query)
  },
//优惠券
discount() {
  //跳转Tabbar
    wx.switchTab({  
      url: `/pages/conList/index`,
          });
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
      console.log(res)
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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