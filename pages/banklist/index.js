// pages/banklist/index.js
import { post,get } from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  recording(){
    wx.navigateTo({
      url: '/pages/recording/index',
    })
  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  navto(){
    wx.navigateTo({
      url: '/pages/addbank/index',
    })
  },

//渲染
  async info(e) {
    let _that=this
    try {
      const res = await post({
        url: '/midianuserserver/bank/myBankList',
        // header: {
        //   "Content-Type": "application/json",
        //   "token": "5a4c24f9608d455181e37b5a81a67177",
        // },
         data: {
          "type":0
         }
        })  
      // console.log(res.data.data)
      _that.setData({
        brnd:res.data.data
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
// 删除
async del(e) {
  let _that=this
  let {userbankid}=e.currentTarget.dataset
  try {
    const res = await post({
      url: '/midianuserserver/bank/delBank',
      // header: {
      //   "Content-Type": "application/json",
      //   "token": "5a4c24f9608d455181e37b5a81a67177",
      // },
       data: {
        "userBankId": userbankid
       }
      })  
      if (res.data.code==200) {
        wx.showToast({
          title: '删除成功',  // 标题
          icon: 'success',   // 图标类型，默认success
          duration: 1500   // 提示窗停留时间，默认1500ms
      })
      wx.redirectTo({
        //目的页面地址
        url: '/pages/banklist/index',
        // success: function(res){},
        // ...
    })
       }else{
        wx.showToast({
          title: '抱歉删除失败了',
          icon: 'none',
          duration: 1500
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     this.info()
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