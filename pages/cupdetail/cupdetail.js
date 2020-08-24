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
    goBrandtwo: '',
    brand:'',//品牌
    model:'',//型号
    value: '',
    //预览照片
    showdown: false,
    show: false,
    id: '',
    bgc: '',
    bgcs: '',
    // price:'',
    unique:'',
    img:''
  },
  //预览图片，放大预览
  preview(event) {
    // console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    let {img} = event.currentTarget.dataset
    console.log(img)
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: img // 需要预览的图片http链接列表
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

  //评论跳转
  discuss(){
    let _that=this
    let id = _that.data.id
    wx.navigateTo({
      url: '/pages/discuss/discuss?id='+id,
    })
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  //评论
  async comment (){
    let _that = this
    let id = Number (_that.data.id)
    // console.log( Number (id))
    try {
      const res = await get({
        url: "/reply/list/"+id+"?page="+1+"&limit="+999999+"&type="+0
      })
      console.log(res.data.data)
       let evaluate=[]
       let pinj=[]
       let evaluateImg="/images/detail/pl-star.png"
       evaluate.push(res.data.data[0],res.data.data[1],res.data.data[2])
      if (res.data.status==200) {
        _that.setData({
          evaluate,//显示条数
          pin:res.data.data//判断是否显示更多
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
      // console.log(res.data.msg)
      let particulars=[]
      particulars.push(res.data.data.storeInfo)
      console.log(particulars)
      if (res.data.status==200) {
        _that.setData({
          particulars,//价格
          goodsDescImg:res.data.data.storeInfo.slider_image,//详情底部图片
          banner:res.data.data.storeInfo.slider_image,//轮播
          pinpai:res.data.data.shouji
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
  },
  guanbi() {
    this.setData({
      show: false
    })
  },
  //选择品牌
  jixin(e) {
    // console.log(e)
    // let relatedid = e.currentTarget.dataset.relatedid
    // let id = e.currentTarget.dataset.id
    // console.log(relatedid )
    let {index} = e.currentTarget.dataset
    let {relatedid} = e.currentTarget.dataset
    let _that = this
    console.log(index)
    _that.setData({
      bgc: index,
      goBrandOne: index,
      brand: index,
      xin:relatedid,
      model:"aa"//清除默认
    })



  },



//选择型号
async jixins(e) {
    // console.log(e)
    let {
      items
    } = e.currentTarget.dataset
    let {
      innhtml
    } = e.currentTarget.dataset
    // let contrast=this.data.goBrandOne+','+items
    let _that = this
    let id = _that.data.id
    console.log(items)
    try {
      const res = await get({
        url: '/product/detail/' + Number (id),
      })
      console.log(res.data.data.productValue)

      if (res.data.status==200) {
        let shouji_childs=res.data.data.shouji_child.filter(item=>item.name==items)
        console.log(shouji_childs[0].value)
        let value=shouji_childs[0].value
        let productValue=res.data.data.productValue.filter(item=>item.name==value)
        console.log(productValue)
      
        console.log(items)
       _that.setData({
        productValue,
        image:productValue[0].data.image,
        // price:productValue[0].data.price,
        unique:productValue[0].data.unique,
       })
       console.log(productValue[0].data.image)
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
    this.setData({
      bgcs: items,
      goBrandtwo: items,
      innhtml: innhtml,
    })
  },
  
  //跳转定制
  next() {
    let id = this.data.id
    let {
      goBrandtwo
    } = this.data
    let {
      goBrandOne
    } = this.data
     console.log(this.data.price)
    let brands = id + ',' + this.data.unique +','+this.data.image
    console.log(brands)
    if (goBrandOne == "undefined" || goBrandOne == null || goBrandOne == "" ||goBrandtwo == "undefined" || goBrandtwo == null || goBrandtwo == "") {
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
        console.log(res.brand)//品牌
        console.log(res.model)//型号
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
    this.comment();
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