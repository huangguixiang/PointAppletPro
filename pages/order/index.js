// pages/order/index.js
import { post,get } from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },


    async showEvaluate() {
      let _that=this
      try {
       const res = await get({
         url: '/midiangoodsorderserver/order/getall',
         data:{ 

         },
        //  header: {
        //   "Content-Type": "application/json;charset=UTF-8",
        //   'token':'8c0c174bab6c4c64abe18d0028acedc3'
        // },
       })  
       console.log(res.data)
      //  订单状态：0->待付款；1->已支付:待发货；2->已发货；3->已收货 4 退货中 5 ->退货成功；6->已完成；7->退款成功,
       let payment=res.data.result.filter(item => item.status==0)
       let paymentOne=res.data.result.filter(item => item.status==1)
       let paymentTwo=res.data.result.filter(item => item.status==2)
       let paymentThree=res.data.result.filter(item => item.status==3)
       let paymentFour=res.data.result.filter(item => item.status==4)
       let paymentFive=res.data.result.filter(item => item.status==5)
       let paymentSex=res.data.result.filter(item => item.status==6)
       let paymentSeven=res.data.result.filter(item => item.status==7)
      //  console.log(paymentOne)
      //  console.log(paymentOne)
      //  console.log(paymentTwo)
      //  console.log(paymentThree)
       _that.setData({
        All:res.data.result,
        payment,
       paymentOne,
        paymentTwo,
        paymentThree,
        // paymentFour,
        // paymentFive,
        paymentSex,
        // paymentSeven,
       })
  
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

     //物流
     logistics(){
       wx.navigateTo({
         url: '/pages/logistics/logistics',
       })
     },
     //取消订单
     material(){
       wx.navigateTo({
         url: '/pages/material/material',
       })
     },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let index=options.index
  console.log(index)
    this.setData({
      active:index
    })
  },
//售后
  navtoAftersale(){
    wx.navigateTo({
      url: '/pages/Aftersale/index',
    })
  },
//继续支付
goShop(){
    // wx.navigateTo({
    //   url: '/pages/Aftersale/index',
    // })
   wx.showToast({
     title: '还没有流程',
     icon:'none'
   })
  },
  navto(){
    wx.navigateTo({
      url: '/pages/orderdel/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onLoad: function(options){
    let {index}= options
    console.log(index)
    this.setData({
      active:index
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.showEvaluate()
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