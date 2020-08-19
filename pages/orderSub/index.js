// pages/orderSub/index.js
import {
  post,
  get
} from "../../request/request.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    active: 0,
    radio:1,
    discount :29.93,
    openId:'',
    token:'',
    orderSn:'',
    newtotalPrice:'',
    site:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChanges(event) {
    this.setData({
      radio: event.detail,
    });
  },
  onChange(event) {
    this.setData({
      active:event.detail.name
    })
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
  },
  onClose(){
    this.setData({
      show:false
    })
  },
    //选择地址
  changeaddress(){
    wx.navigateTo({
      url: '/pages/AddressGl/index',
    })


  },
  //备注
  input(e){
    let remark=e.detail.value
    console.log(this.data.site)
    this.setData({
      remark
    })

  },
  // 提交订单
  async navto(){
    var _that=this
    if (_that.data.site!=null) {
      for (var j = 0; j < _that.data.site.length; j++) {
        var elementOne = _that.data.site[j]; 
      }
      // console.log(elementOne)
      for (var i = 0; i < _that.data.totalNums.length; i++) {
        var element = _that.data.totalNums[i];
      }
      // console.log(element)
          let newpccName= elementOne.pccName.split(' ')
          // console.log(_that.data.token)
          // console.log(_that.data.openId)

            try {
                const res = await post({
                  url: '/midiangoodsorderserver/order/add',
                //   header: {
                //    "Content-Type": "application/json;charset=UTF-8",
                //    "token":_that.data.token
                //  },
                 data:{
                "totalAmount":_that.data.totalprice, //订单总价18
                "payAmount":_that.data.totalpriceCount, //实际支付价格12
                "freightAmount":0,  //运费2
                "payType":2,   //支付方式：0->未支付；1->支付宝；2->微信,13
                "receiverName": elementOne.consigneeName,//收件人15
                "receiverPhone":elementOne.phoneNo,//手机号16
                "receiverProvince": newpccName[0],//省17
                "receiverCity": newpccName[1],//市18
                "receiverRegion":newpccName[2],//区19
                "receiverDetailAddress": elementOne.address,//详细地址14
                "note":this.data.remark,//备注20
                "goodsId":element.goodsId,//商品id5
                "goodsName":element.goodsName,//商品名字8
                "goodsPic":element.goodsPic,//图片9
                "goodsPrice":element.goodsAmount,//商品价格10
                "goodsQuantity":element.number,//商品数量11
                "goodsCategoryId":2,//element.goodsName商品fenl4
                "goodsAttr":element.goodsAttributeValues,//商品参数3
                "goodsItemId":1,//升级商品ID6
                "goodsItemPrice":10,//element.goodsItemPrice升级商品价格7
                "cartId":1// element.cartId购物车id  1
                 }
                }) 
                if (res.data.status==200) {
                  // console.log(res.data.data)
                  _that.setData({
                  orderSn:res.data.data.orderSn
                  })
         
                  wx.request({
                    url: 'https://api.midiandz.com/midiangoodsorderserver/order/payOrder',
                    method: 'POST',
                    data: {
                      "orderSn":_that.data.orderSn,
                      "payAmount":_that.data.newtotalPrice,
                      "openId":_that.data.openId
                    },
                    header: {
                      "Content-Type": "application/json;charset=UTF-8",
                      "token":_that.data.token
                    },
                    success(res) {
                      console.log("单号",  _that.data.orderSn)
                      console.log("openid", _that.data.openId)
                      console.log("价格", _that.data.newtotalPrice)
                      console.log("token", _that.data.token)
                     
                      if (res.data.status==200) {
                        //  console.log(res.data.data)
                        //  console.log(res.data.data.timestamp)
                        //  console.log(res.data.data.noncestr)
                        //  console.log(res.data.data.mini_package)
                        //  console.log(res.data.data.signType)
                        //  console.log(res.data.data.sign)
                        //  console.log(res.data.data.mini_appId)
             

                         wx.requestPayment({
                          timeStamp: res.data.data.timestamp,
                          nonceStr: res.data.data.noncestr,
                          package: res.data.data.mini_package,
                          signType:res.data.data.signType,
                          paySign: res.data.data.sign,
                          appId:res.data.data.mini_appId,
                          success: function (res) { 
                            // // success
                            console.log(res);
                          wx.navigateTo({
                                url: '../paysue/index?Price='+'&newtotalPrice='+_that.data.newtotalPrice+'&discount='+_that.data.discount,
                            })
                          },
                          fail: function (res) {
                            // fail
                            console.log(res);
                            wx.showToast({
                              title: '支付失败',
                              icon:'none',
                              duration:1500
                            })
                            wx.switchTab({
                              url: '../shop/index',
                          })
                          },
                        })
                      
             
                      }else{
                          wx.showToast({
                            title: res.data.message,
                          })
                      }
  
                    }
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
    } else {
      wx.showToast({
        title: '请选择地址',
        icon:'none'
      })
    }
  },
  //优惠券
  async discounts() {
    let _that=this
    wx.getStorage({
      key: 'openId',
      success: function(res) {
        // console.log(res.data)
        _that.setData({
          openId: res.data
        })
      },
    })
    try {
        // console.log(_that.data.openId)
     const res = await post({
       url: '/midianuserserver/coupon/updateCouponState',
       data: {
          "couponId":_that.data.totalNums[0].userId,
          "userId":_that.data.openId,
          "state":1
        },
      //  header: { 
      //    'Content-Type': 'application/json',
      //    "token":"01d56962a3804683911887d1d52eb617"
      //  },
     })  
    //  console.log(res)
  
     _that.setData({
      show:true
     })
     // console.log(nav)
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
  user(){
    let _that=this
    wx.getStorage({
      key: 'openId',
      success: function(res) {
  
        _that.setData({
          openId: res.data
        })
      },
    })
    
    wx.getStorage({
      key: 'token',
      success: function(res) {
        // console.log(res.data)
        _that.setData({
          token: res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


  onLoad:function(options){
    // console.log(options.totalnum)
    // console.log(options.totalprice)
    console.log(JSON.parse(options.totalNums))
    let totalNums=JSON.parse(options.totalNums)
    let totalpriceCount=options.totalprice-this.data.discount
    let newtotalPrice= Math.floor(totalpriceCount * 100) / 100 //设置为两位数
    if (totalpriceCount<=0) {
       this.setData({
        newtotalPrice:0,
       })
    }else{
         this.setData({
          newtotalPrice
         })
         
    }
    // console.log(totalpriceCount)
    this.setData({
      totalnum:options.totalnum,
      totalprice:options.totalprice,
       totalNums
    })
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