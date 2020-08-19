import {
  post,
  get
} from "../../request/request.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    iPhone: false,
    particulars:'',
    id: "",
    goBrandOne: '',
    brand:'',//品牌
    model:'',//型号
    pinj:[],
    //预览照片
    "imgList": [
      "https://oimagea5.ydstatic.com/image?id=-5285314247220546696&product=adpublish&w=520&h=347",
      "https://iknow-base.cdn.bcebos.com/540X230.jpg",
    ],
    showdown: false,
    show: false,
    id: '',
    bgc: '',
    bgcs: '',
  },
  //预览图片，放大预览
  preview(event) {
    // console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgList // 需要预览的图片http链接列表
    })
  },
  showPopup() { //后端拿到的牌子和型号分别复制给bgc和bgcs 实现点击定制改变背景颜色
    this.setData({
      show: true,
      showdown: true
      // bgc:paizi,    
      // bgcs:xinhao
    });
  },

  onClose() {
    this.setData({
      show: false
    });
  },

  //跳转定制
  next() {
    let id = this.data.id
    let {
      goBrandOne
    } = this.data

    for (let i = 0; i < this.data.text.length; i++) {
      var element = this.data.text[i].goodsAmount;
      
    }
    let brands = id + ',' + goBrandOne + ','+element
    if (goBrandOne == "undefined" || goBrandOne == null || goBrandOne == "" ) {
      wx.showToast({
        title: "请先选择商品", // 提示的内容
        icon: "none", // 图标，默认success
      })
    } else {
      wx.navigateTo({
         url: '/pages/customization/customization?brands= ' + brands,
      })

    }
  },

      jixin(e) {
    // console.log(e)
    // let relatedid = e.currentTarget.dataset.relatedid
    // let id = e.currentTarget.dataset.id
    // console.log(relatedid )
    let {index} = e.currentTarget.dataset
    let _that = this
    // console.log(id)
    _that.setData({
      bgc: index,
      goBrandOne: index,
      brand: index
    })



  },




  // jixins(e) {
  //   // console.log(e)
  //   let {
  //     items
  //   } = e.currentTarget.dataset
  //   let {
  //     innhtml
  //   } = e.currentTarget.dataset
  //   this.setData({
  //     bgcs: items,
  //     goBrandtwo: items,
  //     innhtml: innhtml,
  //   })
  // },

  //品牌
  async showBrand() {
    let _that = this
    let id = _that.data.id
    console.log( Number (id))
    try {
      const res = await get({
        url: '/product/detail/' + Number (id),
      })
      console.log(res)
      console.log(res.data.data.storeInfo.slider_image)
      // console.log(res.data.data.productAttr[1].attr_value)
      console.log(res.data.status)
      let particulars=[]
      particulars.push(res.data.data.storeInfo)
      // console.log(particulars)
      if (res.data.status==200) {
        console.log(particulars)
        console.log(res.data.data.storeInfo.slider_image)
        console.log(res.data.data.storeInfo.slider_image)
        console.log(res.data.data.productAttr[1].attr_value)
        _that.setData({
          particulars,//价格
          goodsDescImg:res.data.data.storeInfo.slider_image,//详情底部图片
          banner:res.data.data.storeInfo.slider_image,//轮播
          // pinpai:res.data.data.productAttr[1].attr_value//品牌
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
  },
  guanbi() {
    this.setData({
      show: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.index;
    
    // console.log(options.index)
    let _that = this;
    _that.setData({
      id: id,
    })
    wx.getSystemInfo({
      success: function (res) {
        console.log('品牌',res.brand)//品牌
        console.log('型号',res.model)//型号
        _that.setData({
          brand:res.brand,
          model:res.model
          
        })
        if (res.model == 'iPhone X' || res.model == 'iPhone XR' || res.model == 'iPhone XS Max' || res.model == 'iPhone 11' || res.model == 'iPhone 11pro' || res.model == 'iPhone 11pro Max') {
          _that.setData({
            iPhone: true
          })
        }
      }
    })

    // console. log( id )


    //改变顶部导航动态
    // wx.setNavigationBarTitle({
    //   title: '当前页面'
    // })
    // this.getData();

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
    this.showBrand();
    // this.showEvaluate()
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