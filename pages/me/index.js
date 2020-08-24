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
      console.log(res.data.data.orderStatusNum)
      console.log(res)
      if (res.data.status==200) {
         _that.setData({
          user,
          // complete_count:res.data.data.orderStatusNum.complete_count,//订单已完成 数量
          evaluated_count:res.data.data.orderStatusNum.evaluated_count,//订单待评价 数量
          // order_count:res.data.data.orderStatusNum.order_count,//订单支付没有退款 数量
          received_count:res.data.data.orderStatusNum.received_count,//订单待收货 数量
          // refund_count:res.data.data.orderStatusNum.refund_count,//订单退款
          // sum_price:res.data.data.orderStatusNum.sum_price,//订单支付没有退款 支付总金额
          unpaid_count:res.data.data.orderStatusNum.unpaid_count,//订单待支付 数量
          unshipped_count:res.data.data.orderStatusNum.unshipped_count,//订单待发货 数量
         })
      }else{
        wx.showToast({
          title: res.data.msg,
          icon:'none',
          duration:3000
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