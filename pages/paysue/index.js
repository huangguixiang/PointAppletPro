// pages/paysue/index.js
import {post,get } from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderId:''
  },
  goShop(){
wx.redirectTo({
  url: '../order/index',
})
  },
  goHome(){
    wx.switchTab({
      url: '../home/home',
    })
  },

  async defeated() {
    let _that=this
    // subPrice
    try {
     const res = await get({
       url: '/order/detail/'+_that.data.orderId,
     })  
     console.log(res)
     console.log(res.data.status)
          if (res.data.status==200) {
            _that.setData({
              // address:res.data.data.user_address,//详细地址
              // phone:res.data.data.user_phone,//电话
              // name:res.data.data.real_name,//姓名
              // cartInfo:res.data.data.cartInfo,//商品信息
              // addTime:res.data.data._add_time,//添加时间
              // payTime:res.data.data._pay_time,//支付时间
              // status:res.data.data._status,//支付状态
              price:res.data.data.pay_price,//支付状态
             })
          }else{
            wx.showToast({
              title: res.data.msg,
              icon:"none"
            })
          }
    } catch (error) {
      if(error.errMsg=="request:fail "){
       wx.showToast({
         title: "无网络链接",
         icon:'none',
         duration:1000
       }) 
      }  
    }
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      orderId:options.orderId
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
this.defeated()
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