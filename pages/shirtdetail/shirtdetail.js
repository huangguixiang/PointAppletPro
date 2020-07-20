// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[
      {"img":'http://graph.baidu.com/resource/1221b985a6ade2d70579701594878954.jpg'},
      {"img":'http://graph.baidu.com/resource/1221b985a6ade2d70579701594878954.jpg'},
      {"img":'http://graph.baidu.com/resource/1221b985a6ade2d70579701594878954.jpg'},
     ],
     text:[
      {
        "Egname":"MIDIAN DINGZHI",
        "Chname":"原创插画手机壳定制",
        "Price":"39.00",
        "img":"/images/detail/sj-01.png",
      }
   ],
     pin:[
        {
          "tou":"/images/detail/user.jpg",
          "name":"Atiina",
          "tui":"这个保温手机壳太酷啦！设计感十足 ！关键是可以DIY你想要的样式！而且制作的质量超级棒！爱不释手！赶紧推荐给朋友！",
         "pinj":[
          "/images/detail/pl-star.png",
          "/images/detail/pl-star.png",
          "/images/detail/pl-star.png",
          "/images/detail/pl-star.png",
          "/images/detail/pl-star.png",
          "/images/detail/pl-star.png",
          ],
          "up":[
            "https://pics.images.ac.cn/image/5f0febf90713d.html",
            "https://pics.images.ac.cn/image/5f0febf90713d.html",
            "https://pics.images.ac.cn/image/5f0febf90713d.html",
            "https://pics.images.ac.cn/image/5f0febf90713d.html",
          ],

        },
        {
          "tou":"/images/detail/user.jpg",
          "name":"Atiina",
          "tui":"这个保温手机壳太酷啦！设计感十足 ！关键是可以DIY你想要的样式！而且制作的质量超级棒！爱不释手！赶紧推荐给朋友！",
         "pinj":[
          "/images/detail/pl-star.png",
          "/images/detail/pl-star.png",
          "/images/detail/pl-star.png",
          "/images/detail/pl-star.png",
          "/images/detail/pl-star.png",
          "/images/detail/pl-star.png",
          ],
          "up":[
            "https://pics.images.ac.cn/image/5f0febf90713d.html",
            "https://pics.images.ac.cn/image/5f0febf90713d.html",
            "https://pics.images.ac.cn/image/5f0febf90713d.html",
            "https://pics.images.ac.cn/image/5f0febf90713d.html",
          ],

        }
     ],
     //预览照片
     "imgList":[
      "https://oimagea5.ydstatic.com/image?id=-5285314247220546696&product=adpublish&w=520&h=347",
      "https://iknow-base.cdn.bcebos.com/540X230.jpg",
    ],
     pinpai:[
       {
         "id":11,
         "shibpaizi":"正面  ￥89.00",
      },

      {
        "id":2,
        "shibpaizi":"背面  ￥89.00",


       },
       {
        "id":6,
        "shibpaizi":"正面&背面  ￥89.00",
        

       },
],
     yanse:[
       {col:'白色',
       cols:'white',
       url:'/images/detail/baise.png'
      },
       {
         col:'黑色',
         cols:'black',  
         url:'/images/detail/heise.png'}
     ],
     chima:['S','M','L','XL','XXL','XXXL'],
     showdown:false,
     show: false,
     id:'',
     bgc:'1',
     bgcs:'',
     iPhone:false,
     fal:true
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
  showPopup() {    //后端拿到的牌子和型号分别复制给bgc和bgcs 实现点击定制改变背景颜色
    this.setData({ 
      show: true ,
      showdown:true
      // bgc:paizi,    
      // bgcs:xinhao
    });
  },

  onClose() {
    this.setData({ show: false });
  },

  //跳转定制
  next(){
    let id =this.data.id
    wx.navigateTo({
      url:'/pages/customization/customization?index= ' + id,
    })
  },

  jixin(e){

  let {index} = e.currentTarget.dataset
    // console.log(index)
  this.setData({
    bgc:index,
    quyu:index
  })
  },

  jixins(e){
  let {items} = e.currentTarget.dataset
  let {yase}= e.currentTarget.dataset

  this.setData({
    bgcs:items,
    fal:false,
    yanses:yase,
    sexi:items
  })
  },
  jixinss(e){

    let {itemss} = e.currentTarget.dataset
    this.setData({
      bgcss:itemss,
      dx:itemss
    })
    },

//  async getData(){
//     const res = await get({
//       url:'',
//       data:'',
//       header:""
//     })
//     this.setData({
//       goodList:res.data.data,
//       xin:res.data.data
//     })
//   },

  guanbi(){
    this.setData({
      show:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id= options. index;
    let _that= this;
    wx.getSystemInfo({
      success: function(res) {
        // console.log(res.model)
        if (res.model=='iPhone X'||res.model=='iPhone XR'||res.model=='iPhone XS Max'||res.model=='iPhone 11'||res.model=='iPhone 11pro'||res.model=='iPhone 11pro Max') {
          _that.setData({
              id:id,
              iPhone:true
          })
        }
      }
      })
    // console. log( id )
   

    //改变顶部导航动态
    // wx.setNavigationBarTitle({
    //   title: '当前页面'
    // })
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