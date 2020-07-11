// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
     banner:[
      {"img":'../../images/home/banner1.png'},
      {"img":'../../images/home/banner1.png'},
      {"img":'../../images/home/banner1.png'},
     ],
     //轮播页数组
      nav: [
          {
            "id":"0",
            "img":"../../images/home/call1.png",
            "name":"原创插画 玻璃壳",
            "price":"￥10.00",
          },
          {
            "id":"1",
            "img":"../../images/home/call1.png",
            "name":"原创插画 玻璃壳",
            "price":"￥10.00",
          },
          {
            "id":"2",
            "img":"../../images/home/call1.png",
            "name":"原创插画 玻璃壳",
            "price":"￥10.00",
          },
          {
            "id":"3",
            "img":"../../images/home/call1.png",
            "name":"原创插画 玻璃壳",
            "price":"￥10.00",
          },

      ],
      nav1: [
        {
          "id":"5",
          "img":"../../images/home/beizi.jpg",
          "name":"原创插画 350ml",
          "price":"￥10.00",
        },
        {
          "id":"6",
          "img":"../../images/home/beizi.jpg",
          "name":"原创插画 350ml",
          "price":"￥10.00",
        },
        {
          "id":"7",
          "img":"../../images/home/beizi.jpg",
          "name":"原创插画 350ml",
          "price":"￥10.00",
        },

    ],
      nav2: [
        {
          "id":"10",
          "img":"../../images/home/yifu.jpg",
          "name":"女生T恤",
          "price":"￥10.00",
        },
        {
          "id":"11",
          "img":"../../images/home/yifu.jpg",
          "name":"女生T恤",
          "price":"￥10.00",
        },
        {
          "id":"12",
          "img":"../../images/home/yifu.jpg",
          "name":"女生T恤",
          "price":"￥10.00",
        },
        {
          "id":"13",
          "img":"../../images/home/yifu.jpg",
          "name":"女生T恤",
          "price":"￥10.00",
        },

    ],
      scrollLeft:'',
      content:[
        '../../images/home/112.png'
      ],
      content1:[
        '../../images/home/1133.png'
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