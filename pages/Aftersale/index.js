// pages/Aftersale/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    // columns:['不想要了','发错货','商品损坏','质量问题','其他'],
    radio: '',
    fileList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    });
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  selectType(){
    this.setData({
      show:true
    })
  },
  // onChange(event) {
  //   console.log(event)
  //   this.setData({
  //     radio: event.detail,
  //   });
  // },

  onClick(event) {
    // console.log(event)
    const { name } = event.currentTarget.dataset;
    // console.log(name) 
    this.setData({
      radio: name,
    });
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