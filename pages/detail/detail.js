// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[
      {"img":'../../images/detail/detail1.jpg'},
      {"img":'../../images/detail/detail1.jpg'},
      {"img":'../../images/detail/detail1.jpg'},
     ],
     text:[
      {
        "Egname":"MIDIAN DINGZHI",
        "Chname":"原创插画手机壳定制",
        "Price":"39.00",
        "img":"/images/detail/手机壳.png",
      }
   ],
     pin:[
        {
          "tou":"/images/detail/user.jpg",
          "name":"Atiina",
          "tui":"这个保温手机壳太酷啦！设计感十足 ！关键是可以DIY你想要的样式！而且制作的质量超级棒！爱不释手！赶紧推荐给朋友！",
         "pinj":[
          "/images/detail/xin.jpg",
          "/images/detail/xin.jpg",
          "/images/detail/xin.jpg",
          "/images/detail/xin.jpg",
          "/images/detail/xin.jpg"
          ],
          "up":[
            "/images/detail/up1.jpg",
            "/images/detail/up1.jpg",
            "/images/detail/up1.jpg",
            "/images/detail/up1.jpg"
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
       "paizi":"huawei",
       "xinghao":["mate20","mate20pro","mate30","mate30pro","mate40","mate40pro"],
      },
      {
        "paizi":"xiaomi",
        "xinghao":["小米1","小米2","小米3","小米4","小米5","小米6"],
       },
       {
        "paizi":"apple",
        "xinghao":["苹果1","苹果2","苹果3","苹果4","苹果5","苹果6"],
       },
       {
        "paizi":"oppo",
        "xinghao":["OPPO1","OPPO2","OPPO3","OPPO4","OPPO5","OPPO6"]
       }
],
 
     show: false,
     id:'',
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
  showPopup() {
    this.setData({ show: true });
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // console. log( options )
    let id= options. index;
    // console. log( id )
    this. setData({
      id:id,
    })
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