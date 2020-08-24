// pages/orderdel/index.js
import {
  post,
  get
} from "../../request/request.js";
Page({

  data: {
    steps: [
      {
        text: '步骤一',
        desc: '描述信息',
        inactiveIcon: 'location-o',
        activeIcon: 'success',
      },
      {
        text: '步骤二',
        desc: '描述信息',
        inactiveIcon: 'like-o',
        activeIcon: 'plus',
      },
      {
        text: '步骤三',
        desc: '描述信息',
        inactiveIcon: 'star-o',
        activeIcon: 'cross',
      },
      {
        text: '步骤四',
        desc: '描述信息',
        inactiveIcon: 'phone-o',
        activeIcon: 'fail',
      },
    ],
    orderId:''
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
          // if (res.data.status==200) {
            _that.setData({
              address:res.data.data.user_address,//详细地址
              phone:res.data.data.user_phone,//电话
              name:res.data.data.real_name,//姓名
              cartInfo:res.data.data.cartInfo,//商品信息
              addTime:res.data.data._add_time,//添加时间
              payTime:res.data.data._pay_time,//支付时间
              status:res.data.data._status,//支付状态
              price:res.data.data.pay_price,//支付状态
             })
          // }else{
          //   wx.showToast({
          //     title: res.data.msg,
          //     icon:"none"
          //   })
          // }
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

  //  async navto(){
  //   let _that=this
  //           try {
  //               const res = await post({
  //                 url: '/order/create/'+_that.data.orderKey,
  //               data:{
  //                 "addressId":'2',
  //                 "from":"routine",
  //                 "payType":"weixin",
  //                 "shipping_type":1
  //               }

  //               }) 
  //               console.log(res)
  //               if (res.data.status==200) {
  //                 _that.setData({
  //                   orderId:res.data.data.result.orderId
  //                 })
  //                 // console.log(res.data.data)
  //                 const respay = await post({
  //                   url: '/order/pay',
  //                 data:{
  //                        "from":"routine",
  //                         "paytype":"weixin",
  //                         "uni":res.data.data.result.orderId
  //                 }
  //                 }) 
  //                    console.log(respay)
  //                    if (respay.data.status==200) {
  //                       wx.requestPayment({
  //                         timeStamp:respay.data.data.result.jsConfig.timestamp,
  //                         nonceStr: respay.data.data.result.jsConfig.nonceStr,
  //                         package: respay.data.data.result.jsConfig.package,
  //                         signType:respay.data.data.result.jsConfig.signType,
  //                         paySign:respay.data.data.result.jsConfig.paySign,
  //                         appId:respay.data.data.result.jsConfig.appId,
  //                         success: function (res) { 
  //                           // // success
  //                           console.log(res);
  //                           console.log(_that.data.orderId)
  //                         wx.navigateTo({
  //                               url: '../paysue/index?orderId='+_that.data.orderId,
  //                           })
  //                         },
  //                         fail: function (res) {
  //                           // fail
  //                           console.log(res);
  //                           console.log(_that.data.orderId)
  //                           wx.showToast({
  //                             title: '支付失败',
  //                             icon:'none',
  //                             duration:1500
  //                           })
  //                           wx.navigateTo({
  //                             url: '../orderdel/index?orderId='+_that.data.orderId,
  //                         })
  //                         },
  //                       })
  //                    }

                      
  //               }
           
  //            } catch (error) {
  //              if(error.errMsg=="request:fail "){
  //               wx.showToast({
  //                 title: "无网络链接",
  //                 icon:'none',
  //                 duration:1000
  //               }) 
  //              }  
  //           }

  // },

  changeAddress(){
    wx.navigateTo({
      url: '/pages/AddressGl/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(options.orderId)
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

  },

})