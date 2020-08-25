//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    openId:''

  },
  onLoad() {},
  //微信登录
  goLogin() {
    var that = this;
    wx.login({
      success(res) {
        console.log(res)
        let code = res.code
        console.log(code)
        wx.getUserInfo({
          success(res) {
            console.log(res)
            wx.request({
              url: 'https://api.midiandz.com/api/wechat/mp_auth',
              method: 'POST',
              data: {
                "code": code,
                "login_type":"routine" ,
                "encryptedData": res.encryptedData,
                "iv": res.iv
              },
              header: {
                "Content-Type": "application/json;charset=UTF-8",
              },
              success(res) {
            console.log( res.data)
         if (res.data.status==410000) {
         }else{
              wx.setStorage({
                key: "Authori-zation",
                data: res.data.data.token,
              })
          wx.switchTab({
            url: '../home/home',
          })
         }
              }
            })
          }
        })
      }
    })
  },
  
  // //去手机号绑定页
  // goPhone() {
  //   wx.navigateTo({
  //     url: '../register/register'
  //   })
  // }
})