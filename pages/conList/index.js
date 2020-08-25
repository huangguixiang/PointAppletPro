// pages/conList/index.js
import { post,get } from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Change:false
  },
  async coupon() {
    let _that = this
    try {
      const res = await get({
        url: '/coupons?page=1&limit=20',
      })
       console.log(res)
       if (res.data.status==200) {
           _that.setData({
            coupon:res.data.data
           })
       }else{
         wx.showToast({
           title: res.data.message,
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
//领取优惠券
// async draw() {
//   let _that = this
//   try {
//     const res = await get({
//       url: '/coupons?page=1&limit=20',
//     })
//      console.log(res)
//      if (res.data.status==200) {
//          _that.setData({
//           coupon:res.data.data
//          })
//      }else{
//        wx.showToast({
//          title: res.data.message,
//          icon:"none"
//        })
//      }
     
//   } catch (error) {
//     if(error.errMsg=="request:fail "){
//      wx.showToast({
//        title: "无网络链接",
//        icon:'none',
//        duration:1000
//      }) 
//     }  
//   }
//  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChanges(event) {
    this.setData({
      result: event.detail,
    
    });
    // console.log(this.data.Change)
    let istrue=this.data.Change
    if (this.data.Change==true) {
      this.setData({
        Change:istrue=!istrue
    
      });
    }else{
      this.setData({
        Change:istrue=!istrue
      
      });
    }
  },
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
this.coupon();
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