import { post,get } from "../../request/request.js";;

// pages/addbank/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    bankCardNum: "",//银行卡号/支付宝
    bankLogo: "https://zhenbaoqi-1300597750.cos.ap-shanghai.myqcloud.com/photo/bank/nong.png",
    bankId: "",//卡id如果是支付宝就不填写
    fullName: "",//真实姓名
    idCard: "",//身份证
    phone: "",//电话号码
    type: "",//类型0 卡号  1支付宝号
    bankBranch: "",//银行支行
    columns:[
      "中国工商银行", "中国农业银行", "中国银行", "中国建设银行", "中国光大银行", "中国广发银行", "中国华夏银行", "中国交通银行", "中国民生银行", "中国平安银行", "中国浦发银行", "中国兴业银行", "中国邮政储蓄银行", "中国招商银行", "中国中信银行"
    ]
  },
  onChange(e) {
    // console.log(e.detail.index)
    const  brnd = e.detail.value;
    const  bankId = e.detail.index+1;

    // console.log(e)
    this.setData({
      brnd:brnd,
      bankBranch:brnd,
      bankId:bankId//对应银行卡下标,
    })
  },

  getName(e){
// console.log(e.detail.value)
this.setData({
fullName:e.detail.value
})
  },
  getIdentity(e){
    // console.log(e.detail.value)
    this.setData({
    idCard:e.detail.value
  })
  },
  getCard(e){
    // console.log(e.detail.value)
    this.setData({
    bankCardNum:e.detail.value
  })
  },
  getCall(e){
    // console.log(e.detail.value)
    this.setData({
    phone:e.detail.value
  })
  },
  getVerification(e){
    // console.log(e.detail.value)
      this.setData({
        fullName:e.detail.value,
        type:"0"
      })
  },
  async infoBrnd(e) {
    let _that=this
    try {
      const res = await post({
        url: '/midianuserserver/bank/bindBank',
        // header: {
        //   "Content-Type": "application/json",
        //   "token": "5a4c24f9608d455181e37b5a81a67177",
        // },
         data: {
          "bankCardNum":_that.data.bankCardNum ,
          "bankId":_that.data.bankId  ,
          "fullName": _that.data.fullName ,
          "idCard":_that.data.idCard  ,
          "phone":_that.data.phone  ,
          "type": _that.data.type ,
          "bankBranch":_that.data.bankBranch  
        }
        })  
      console.log(res)
      if (res.data.code==200) {
        wx.showToast({
          title: '绑定成功',  // 标题
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
          title: '抱歉失败了，请检查后再填写',
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
   * 生命周期函数--监听页面加载
   */
  selectdz(){
    this.setData({
      show:true
    })
    // this.info()
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  

  onLoad: function (options) {

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