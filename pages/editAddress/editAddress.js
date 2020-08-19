// pages/changeaddress/index.js
// const util = require('../../utils/area.js')
import {post,get} from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaList: require('./area.js').default,
    show:false,
    result: ['0','1'],
    information:[],
    addressId:'',
    location:[],//全称
    provinceId:'',//省ID
    cityId:'',//市ID
    countyId:'',//区ID
    isDefault:'',//是否为默认地址0/1
    pccName:'',//省市区名称
    address:'',//地址
    phoneNo:'',//手机号码
    consigneeName:'',//收货人
    id:'',
    togtwo:1
  },
  onChange(event) {
    // console.log(event)
    this.data.information.push(event.detail)
    this.setData({
      result: event.detail,
    });
  },
//选中
toogle(e){
  // console.log(e)
  let {tog}=e.currentTarget.dataset
  const { togtwo } = e.currentTarget.dataset;
  // console.log(tog)
  // console.log(togtwo)
  if (togtwo==1) {
    this.setData({
      isDefault:0,
      togtwo:0
    })
  }else{
    this.setData({
      isDefault:1,
      togtwo:1
    })
  }
 
},


  // 选择大地址
  confirm(e){
 
    //拿到地址的每一项遍历数组
    // console.log(e.detail.values[0])
    let provinceId=e.detail.values[0].code //省id
    let provinceName=e.detail.values[1].name //省
    let cityId=e.detail.values[1].code  //市id
    let cityName=e.detail.values[1].name  //市
    let countyId=e.detail.values[2].code  //区id
    let countyName=e.detail.values[2].name  //区
    let pccName=[]
    pccName.push(provinceName,cityName,countyName)
      let Elems= pccName.join(" ");//去除数组的逗号
      this.setData({
        value1:Elems,
        show:false,
        location:Elems,
        provinceId:provinceId,
        provinceName:provinceName,
        cityId:cityId,
        cityName:cityName,
        countyId:countyId,
        countyName:countyName,
      }) 


    // }

  },
  onChange1(event) {
    // console.log(event)

    this.setData({
      result: event.detail,
      address:event.detail.value
    });
  },
  onChange2(event) {
// console.log(event)
    this.setData({
      result: event.detail,
      consigneeName: event.detail.value,
    });
  },
  onChange3(event) {
    // console.log(event)
    this.setData({
      result: event.detail,
      phoneNo: event.detail.value,
    });
  },
  selectdz(){
    this.setData({
      show:true
    })
  },

  //修改地址
  async Submit() {
    let _that=this
//     console.log(_that.data.address)
//     console.log(_that.data.addressId,)
//     console.log(_that.data.phoneNo)
//     console.log(_that.data.consigneeName)
//     console.log(_that.data. provinceId)
//     console.log(_that.data.cityId)
//     console.log(_that.data.cityName)
//  console.log(_that.data.countyId)
//     console.log(_that.data.countyName)
    console.log( _that.data.isDefault)
    try {
      const res = await post({
        url: '/midianuserserver/address/updateAddress',
        data: {
          "addressId":_that.data.addressId,
          "consigneeName": _that.data.consigneeName,
          "phoneNo":_that.data.phoneNo,
          "address":_that.data.address,
          "provinceId": _that.data. provinceId,
          "cityId": _that.data.cityId,
          "countyId":_that.data.countyId,
          "isDefault": _that.data.isDefault,
          "pccName": _that.data.location
        },
        header: {
          "Content-Type": "application/json",
          "token": "5a4c24f9608d455181e37b5a81a67177",
        },
      })  
      // console.log(res.data)
         if (res.data.code==200) {
              wx.showToast({
                title: '修改成功！',  // 标题
                icon: 'success',   // 图标类型，默认success
                duration: 1500   // 提示窗停留时间，默认1000ms
            })
            wx.redirectTo({
              //目的页面地址
              url: '/pages/AddressGl/index',
              // success: function(res){},
              // ...
          })
             }else{
              wx.showToast({
                title: '抱歉你未填写内容！',
                icon: 'none',
                duration: 1000
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let info= JSON.parse(options.info);
    let _that=this
    // console.log(info)
    _that.setData({
      addressId:info[0],
      address:info[3],
      consigneeName: info[1],
      phoneNo:info[2]
    })
  },
  onClose(){
    this.setData({
      show:false
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