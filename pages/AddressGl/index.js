// pages/AddressGl/index.js
import {post,get} from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //订单选择地址
sele(e){

  let {item}=e.currentTarget.dataset
  console.log(item)
  let items =[];
  items.push(item)
  let pages = getCurrentPages();
  let prevPage = pages[pages.length - 2];   //上一页面
   prevPage.setData({
    site:items,
         //上个页面数据赋值 
   });
   //返回上一级关闭当前页面
wx.navigateBack({
  delta: 1
})
},
//地址
  async showLocation () {
    let _that=this
    // let id=_that.data.id
    // console.log(id)
    try {
      const res = await get({
        url: '/address/list?page=1&limit=999',
        data: {         
        },
      })  
      console.log(res.data.data)
            //  let Banner=res.data.result.filter(item=>item.bannerId==id)
         _that.setData({
          address:res.data.data,
         })
     
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

//删除地址
async dele (e) {
  let _that=this
  let {id}=e.currentTarget.dataset
  console.log(id)
  try {
    const res = await post({
      url: '/address/del',
      data: {
        id
      },

    })  
    console.log(res)
    if (res.data.status==200) {
      wx.showToast({
        title: '删除成功',  // 标题
        icon: 'success',   // 图标类型，默认success
        duration: 1500   // 提示窗停留时间，默认1500ms
    })
    wx.redirectTo({
      //目的页面地址
      url: '/pages/AddressGl/index',
      // success: function(res){},
      // ...
  })
     }else{
      wx.showToast({
        title: '抱歉删除失败了',
        icon: 'none',
        duration: 1500
    })
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
 },
 //修改地址
 editAddress(e){
  // console.log(e)
  let { item }=e.currentTarget.dataset

  // let info=[]
  // info.push(addressid,consigneename,phoneno,address)
  console.log(item)
  wx.navigateTo({
    url: '/pages/editAddress/editAddress?item=' +JSON.stringify(item),
  })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  adddz(){
    wx.navigateTo({
      url: '/pages/changeaddress/index',
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
   this.showLocation()
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