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
    newtotalPrice:'',
    site:'',
    id:'',
    orderKey:""
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
            try {
                const res = await post({
                  url: '/order/create/'+_that.data.orderKey,
                data:{
                  "addressId":'2',
                  "from":"routine",
                  "payType":"weixin",
                  "shipping_type":1
                }

                }) 
                console.log(res)
                if (res.data.status==200) {
                  // console.log(res.data.data)
                  const respay = await post({
                    url: '/order/pay',
                  data:{
                         "from":"routine",
                          "paytype":"weixin",
                          "uni":res.data.data.result.orderId
                  }
                  }) 
                     console.log(respay)
                     if (respay.data.status==200) {
                        wx.requestPayment({
                          timeStamp:respay.data.data.result.jsConfig.timestamp,
                          nonceStr: respay.data.data.result.jsConfig.nonceStr,
                          package: respay.data.data.result.jsConfig.package,
                          signType:respay.data.data.result.jsConfig.signType,
                          paySign:respay.data.data.result.jsConfig.paySign,
                          appId:respay.data.data.result.jsConfig.appId,
                          success: function (res) { 
                            // // success
                            console.log(res);
                          // wx.navigateTo({
                          //       url: '../paysue/index?Price='+'&newtotalPrice='+_that.data.newtotalPrice+'&discount='+_that.data.discount,
                          //   })
                          },
                          fail: function (res) {
                            // fail
                            console.log(res);
                            wx.showToast({
                              title: '支付失败',
                              icon:'none',
                              duration:1500
                            })
                          //   wx.switchTab({
                          //     url: '../shop/index',
                          // })
                          },
                        })
                     }

                      
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
    // subPrice
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
  //结算
  async  showNavtos(e) {
let _that=this
      try {
        const res = await post({
          url: '/order/confirm' ,
        data:{
          "cartId":_that.data.id
        }
        })
        console.log(res.data.data.orderKey)
        console.log(res.data.data.addressInfo)
        console.log(res.data.data)
        console.log(res.data.data.priceGroup.storePostage)
        let site=[]
        site.push(res.data.data.addressInfo)
        if (res.data.status == 200) {
          _that.setData({
            totalNums:res.data.data.cartInfo,
            site:site,
            orderKey:res.data.data.orderKey,
            priceGroup:res.data.data.priceGroup.storePostage
          })

        } 
        else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
          })
        }
        //获取缓存中购物车数据
        // const cart=wx.getStorageSync('cart')||[];
        // this.setCart(cart);
  
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


  onLoad:function(options){
    console.log(options)
       this.setData({
        id:options.id,
       })
    let totalpriceCount=options.totalprice
    let totalnum=options.totalnum
    let newtotalPrice= Math.floor(totalpriceCount * 100) / 100 //设置为两位数
        console.log(totalpriceCount)
        console.log(newtotalPrice)

    if (totalpriceCount<=0) {
       this.setData({
        newtotalPrice:0,
        totalnum
       })
    }else{
         this.setData({
          newtotalPrice,
          totalnum
         })
         
    }
    // console.log(totalpriceCount)
    this.setData({
      totalnum:options.totalnum,
      totalprice:options.totalprice,
  
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   this.user()
   this.showNavtos()

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