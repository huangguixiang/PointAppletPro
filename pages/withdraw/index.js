// pages/withdraw/index.js
import {
  post,
  get
} from "../../request/request.js";;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    money: "",//提现金额
    Pay:[
      {
        "img":'/images/user/yh.png',
        "bankname":"中国建设银行",//银行
        "cardnum":"888888888888888888888",//卡号
      }
    ],
  },
//支付宝提现
async Alipay (){
  let _that = this
  try {
    const res = await post({
      url: "/extract/cash"
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
//微信提现
async WeChatPay(){
  console.log("aaaa")
  let _that = this
       if (_that.data.money.length!=0) {
        try {
          const res = await post({
            url: "/extract/cash",
            data:{
              "bankname":_that.data.Pay[0].bankname,//银行
              "cardnum":_that.data.Pay[0].cardnum,//卡号
              "extract_type":"weixin",//体现类型 bank、alipay、weixin
              "money":_that.data.money,//提现金额
              "name":'wx',//name
              "weixin":'14786149914',//类型 微信的时候 有该字段
            }
          })
      
          console.log(res)
          if (res.data.status==200) {
            wx.showToast({
              title: '提现成功，请稍后',
              icon:'success'
            })
          }else{
            wx.showToast({
              title: res.data.msg,
              icon:'none'
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
       }else{
         wx.showToast({
           title: '请先输入提现金额',
           icon:'none'
         })
       }
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
    console.log(event)
    this.setData({
      active: event.detail.name,
      money: event.detail
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