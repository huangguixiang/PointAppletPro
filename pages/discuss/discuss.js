import {
  post,
  get
} from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pinj:[],
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

    async comment (){
      let _that = this
      let id = Number (_that.data.id)
      // console.log( Number (id))
      try {
        const res = await get({
          url: "/reply/list/"+id+"?page="+1+"&limit="+999999+"&type="+0
        })
        console.log(res.data.data)
        if (res.data.status==200) {
          _that.setData({
            pin:res.data.data
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
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    
    // console.log(options.index)
    let _that = this;
    _that.setData({
      id: id,
    })
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
      this.comment()
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