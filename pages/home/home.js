// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
     banner:[
      {"img":'https://pics.images.ac.cn/image/5f0fec11bab0e.html'},
      {"img":'https://pics.images.ac.cn/image/5f0fec11bab0e.html'},
      {"img":'https://pics.images.ac.cn/image/5f0fec11bab0e.html'},

     ],
     //轮播页数组
      nav: [
          {
            "id":"0",
            "img":"../../images/home/sjk-cpt1.png",
            "name":"原创插画 玻璃壳 原创插画 玻璃壳",
            "price":"￥10.00",
          },
          {
            "id":"1",
            "img":"../../images/home/sjk-cpt2.png",
            "name":"原创插画 玻璃壳",
            "price":"￥10.00",
          },
          {
            "id":"2",
            "img":"../../images/home/sjk-cpt3.png",
            "name":"原创插画 玻璃壳",
            "price":"￥10.00",
          },
          {
            "id":"3",
            "img":"../../images/home/sjk-cpt2.png",
            "name":"原创插画 玻璃壳 ",
            "price":"￥10.00",
          },

      ],
      nav1: [
        {
          "id":"5",
          "img":"../../images/home/bwb-cpt1.png",
          "name":"杯子一",
          "price":"￥10.00",
        },
        {
          "id":"6",
          "img":"../../images/home/bwb-cpt2.png",
          "name":"原创插画 350ml",
          "price":"￥10.00",
        },
        {
          "id":"7",
          "img":"../../images/home/bwb-cpt3.png",
          "name":"原创插画 350ml",
          "price":"￥10.00",
        },

    ],
      nav2: [
        {
          "id":"10",
          "img":"../../images/home/tx-cpt1.png",
          "name":"女生T恤",
          "price":"￥10.00",
        },
        {
          "id":"11",
          "img":"../../images/home/tx-cpt2.png",
          "name":"女生T恤",
          "price":"￥10.00",
        },
        {
          "id":"12",
          "img":"../../images/home/tx-cpt2.png",
          "name":"女生T恤",
          "price":"￥10.00",
        },
        {
          "id":"13",
          "img":"../../images/home/tx-cpt3.png",
          "name":"女生T恤",
          "price":"￥10.00",
        },

    ],
      scrollLeft:'',
      content:[
        'https://pics.images.ac.cn/image/5f0fec1942173.html'
      ],
      content1:[
        'https://pics.images.ac.cn/image/5f0fec0d9731d.html'
      ],
    },
  //点击往左
  goRight(){
    this.setData({
      scrollLeft:-320
    })
    // console.log("右")
  
},
  //点击往右
  goLeft(){
    this.setData({
      scrollLeft:0
    })
    // console.log("左")
},
//跳转详情e
toDetail:(e)=>{
  let id = e. currentTarget.dataset.id;
  let title = e. currentTarget.dataset.title;
wx.navigateTo({
  url:'/pages/detail/detail?index= ' + id,
})
},
cupdetail:(e)=>{
  let id = e. currentTarget.dataset.id;
  let title = e. currentTarget.dataset.title;
wx.navigateTo({
  url:'/pages/cupdetail/cupdetail?index= ' + id,
})
},
shirt:(e)=>{
  let id = e. currentTarget.dataset.id;
  let title = e. currentTarget.dataset.title;
wx.navigateTo({
  url:'/pages/shirtdetail/shirtdetail?index= ' + id,
})
},
  /**
   * 生命周期函数--监听页面加载
   */
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