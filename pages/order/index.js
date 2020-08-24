// pages/order/index.js
import { post,get } from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
  },


    async showEvaluate(e) {
      let _that=this
      try {
       const res = await get({
         url: '/order/list?&page=1&limit=999',
       })  
       console.log(res)
       console.log(res)
      // 0未付款 1待发货 2待收货 3待评价 4已完成
       let paymentAll=res.data.data
       let payment=res.data.data.filter(item => item._status._type==0)
       let paymentOne=res.data.data.filter(item => item._status._type==1)
       let paymentTwo=res.data.data.filter(item => item._status._type==2)
       let paymentThree=res.data.data.filter(item => item._status._type==3)
       let paymentFour=res.data.data.filter(item => item._status._type==4)
       console.log(paymentAll)
       console.log(payment)
       console.log(paymentOne)
       console.log(paymentTwo)
       console.log(paymentThree)
       console.log(paymentFour)
       _that.setData({
        paymentAll,
        payment,
        paymentOne,
        paymentTwo,
        paymentThree,
        paymentFour,
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
     //提醒发货
     remind(){
       wx.showToast({
         title: '以提醒卖家',
         icon:'success'
       })
     },
     //未付款取消订单
     cancel(e){
      // let {ordeid}=e.currentTarget.dataset
      let {item}=e.currentTarget.dataset
      console.log(item)
       wx.navigateTo({
         url: '/pages/material/material?ordeid='+JSON.stringify(item),
       })
     },
     //购买后取消订单
     chargeback(e){
      // let {ordeid}=e.currentTarget.dataset
      let {item}=e.currentTarget.dataset
      console.log(item)
       wx.navigateTo({
         url: '/pages/chargeback/chargeback?ordeid='+JSON.stringify(item),
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
async goShop(e){
  let {ordeid}=e.currentTarget.dataset
    let _that=this
    // subPrice
    try {
     const res = await post({
       url: '/order/pay',
       data:{
        "from":"routine",
         "paytype":"weixin",
         "uni":ordeid,
       }
     })  
     console.log(res)
     console.log(res.data.status)
          if (res.data.status==200) {
            wx.requestPayment({
              timeStamp:res.data.data.result.jsConfig.timestamp,
              nonceStr: res.data.data.result.jsConfig.nonceStr,
              package: res.data.data.result.jsConfig.package,
              signType:res.data.data.result.jsConfig.signType,
              paySign:res.data.data.result.jsConfig.paySign,
              appId:res.data.data.result.jsConfig.appId,
              success: function (res) { 
                // // success
                console.log(res);
                console.log(_that.data.orderId)
              wx.navigateTo({
                    url: '../paysue/index?orderId='+_that.data.orderId,
                })
              },
              fail: function (res) {
                // fail
                console.log(res);
                console.log(_that.data.orderId)
                wx.showToast({
                  title: '支付失败',
                  icon:'none',
                  duration:1500
                })
                wx.navigateTo({
                  url: '/pages/order/index'
              })
              },
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
      active:Number(index)
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