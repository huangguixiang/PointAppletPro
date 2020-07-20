const {post,get} =require('../../request/request.js')
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
    iPhone:false,
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
       "shibpaizi":"华为",
       "logo":'/images/detail/sj-hwblack.png',
       "logo1":'/images/detail/sj-hwwhite.png',
       "xinghao":["mate20","mate20pro","mate30","mate30pro","mate40","mate40pro"],

      },

      {
        "id":2,
        "shibpaizi":"小米",
        "logo":'/images/detail/sj-miblack.png',
        "logo1":'/images/detail/sj-miwhite.png',
        "xinghao":["小米1","小米2","小米3","小米4","小米5","小米6"],

       },
       {
        "id":6,
        "shibpaizi":"苹果",
        "logo":'/images/detail/sj-iphoneb.png',
        "logo1":'/images/detail/sj-iphonew.png',
        "xinghao":["苹果1","苹果2","苹果3","苹果4","苹果5","苹果6"],

       },
       {
        "id":9,
        "shibpaizi":"荣耀",
        "logo":'/images/detail/sj-ryb.png',
        "logo1":'/images/detail/sj-ryw.png',
        "xinghao":["荣耀1","荣耀2","荣耀3","荣耀4","荣耀5","荣耀6"],

       },
       {
        "id":7,
        "shibpaizi":"oppo",
        "logo":'/images/detail/sj-oppob.png',
        "logo1":'/images/detail/sj-oppow.png',
        "xinghao":["OPPO1","OPPO2","OPPO3","OPPO4","OPPO5","OPPO6"],
       },
       {
        "id":5,
        "shibpaizi":"vivo",
        "logo":'/images/detail/sj-vivob.png',
        "logo1":'/images/detail/sj-vivow.png',
        "xinghao":["vivo1","vivo2","vivo3","vivo4","vivo5","vivo6"],
       }
],
     showdown:false,
     show: false,
     id:'',
     bgc:'',
     bgcs:'',
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
  // console.log(e)
  let pz=e.currentTarget.dataset.innhtml
  let {index} = e.currentTarget.dataset
  this.setData({
    xin:pz,
    bgc:index
  })
  },

  jixins(e){
  // console.log(e)
  let {items} = e.currentTarget.dataset
  this.setData({
    bgcs:items
  })
  },

//  async getData(){
//     const res = await post({
//       url:'http://47.111.248.110:13002/cun-api/swagger-ui.html#/user-controller/uploadFileUsingPOST',
//       data:{dta:1},
//       header:{ 'content-type': 'application/x-www-form-urlencoded' }
//     })
//     // this.setData({
//     //   goodList:res.data.data,
//     //   xin:res.data.data
//     // })
//     console.log(res)
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
        }[]
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