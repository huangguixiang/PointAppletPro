// pages/shop/index.js
import {post,get} from "../../request/request.js";;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['a', 'b', 'c'],
    result: ['a'],
    goods:[],
    checked:true,
    allchecked:false,
    totalPrice:0,
    totalNum:0,
    // id:'',//购物车id
    // goodsId:'',//购物车id
    // goodsNam:'',//商品名称
    // goodsAmount:'',//商品价格
    // number:'',//数量
    // goodsPic:'',//图片
    // goodsAttributeValues:'',//型号参数
    // goodsItemId:'',//升级商品id取消时设置为0

  },

  handleInput(e){
    // console.log(e.detail.value)
    this.setData({
      num:e.detail.value
    })
  },
  handletap(e){
        // console.log(e)
        //获取自定义属性
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num:this.data.num+operation
        }) 
  },

  async shop() {
    let _that=this
    try {
     const res = await get({
       url: '/cart/list',

     })  
     let carts=[]
     carts.push(res.data.data.res_valid)
     console.log(carts)
     _that.setData({
      cart:carts,
      sum:carts.length
     })
        //获取缓存中购物车数据
        // const cart=wx.getStorageSync('cart')||[];
        // this.setCart(cart);

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
   * 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChange(event) {
    this.setData({
      result: event.detail
    });
  },
  changtext(event){
    console.log(event.detail);
  },
  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  navto(){
    wx.navigateTo({
      url: '/pages/orderSub/index',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

   this.shop()
  
   },
   //商品选中
   handleItemChange(e){
    console.log(e)
    let _that=this
 //获取被修改的id
 const {id}=e.currentTarget.dataset
 const {num}=e.currentTarget.dataset
 const {price}=e.currentTarget.dataset
 const {item}=e.currentTarget.dataset
 const {index}=e.currentTarget.dataset
 let totalPrice=Number( _that.data.totalPrice)
 let totalNum=_that.data.totalNum
 console.log(id)
 console.log(num)
 console.log(price)
 console.log(index)
 console.log(totalPrice)
 console.log(totalNum)
 console.log(item[index])
 console.log(item)
if (item[index].cate_id==id) {
  console.log(item)
  _that.setData({
    // istrue:true
    totalPrice:item[index].productInfo.price+totalPrice,
    totalNum:item[index].cart_num+totalNum,
  })
}


   },
//  //选中状态取反
//  cart[index].istrue=!cart[index].istrue;
//   this.setCart(cart);
  //  },
   //设置购物车状态 重新计算 底部工具栏 价格 数量
  //  setCart(cart){
 //总价 数量
//  let totalPrice=0;
//  let totalNum=0;
//  let allchecked=true;
//  cart[0].forEach(v=>{
//    console.log(v)
//    if (v.istrue) {
//     totalPrice+=v.number*v.goodsAmount
//     totalNum+=v.number;
//    }else{
//     allchecked=false;
//    }

//  });
// let newtotalPrice= Math.floor(totalPrice * 100) / 100 //设置为两位数

//  //判断数组是否为空
//  allchecked=cart.length!=0?allchecked:false;
//  //把数据重新设置会data中和缓存中
//  this.setData({
//    cart,
//    allchecked,
//    totalPrice:newtotalPrice,
//    totalNum
//  });
//  wx.setStorageSync('cart', cart)
   //商品全选功能
   handleItemAllcheck(){
     //获取data中的数据
     let {cart,allchecked}=this.data;
     //修改值
     allchecked=!allchecked;
     //循坏修改cart数组中的状态
     cart.forEach(v=>v.istrue=allchecked);
     //把修改好的值 填回data或者缓存中
     this.setCart(cart);
   },
   //商品数量加减
   async handleEdit(e){

const {index,operation} = e.currentTarget.dataset
const {cart} = this.data
const {number} = cart[index]
  if (number<=1&&operation==-1) {
      wx.showToast({
        title: '再删就到底了哟',
        icon:"none"
      })

  }else{
    cart[index].number = cart[index].number + operation
    this.setData({
      cart
    })
    // console.log(number)
    try {  
     const {id,goodsId , goodsName, goodsAmount,goodsPic ,goodsAttributeValues ,goodsItemId} =cart[index]
    
     const res = await post({
       url: '/midiangoodsorderserver/cart/updateCart',
      //  header: {
      //   "Content-Type": "application/json",
      //   "token":"01d56962a3804683911887d1d52eb617"
      // },
      data:{
       id,
       goodsId , 
       goodsName, 
       goodsAmount, 
       number,
       goodsPic ,
       goodsAttributeValues ,
       goodsItemId
      },
     })  
  // console.log(res)
    } catch (error) {
      if(error.errMsg=="request:fail "){
       wx.showToast({
         title: "无网络链接",
         icon:'none',
         duration:1000
       }) 
      }  
    }
  }
 
   },

//删除
async dele(e) {
  let {id,index}=e.currentTarget.dataset
  // const {istrue} = this.data.cart[index]l
  let _that=this
  // if(istrue){
    try {
      const res = await post({
        url: '/midiangoodsorderserver/cart/deleteCart?id='+id,
      //   header: {
      //    "Content-Type": "application/json",
      //    "token":"01d56962a3804683911887d1d52eb617"
      //  },
      })  
      // console.log(res.data)
      if (res.data.status==200) {
       wx.showToast({
         title: '删除成功',  // 标题
         icon: 'success',   // 图标类型，默认success
         duration: 1500   // 提示窗停留时间，默认1500ms
     })
       _that.shop()
       _that.setData({
        totalPrice:0,
        totalNum:0,
       })
      }else{
       wx.showToast({
         title: '抱歉失败了',
         icon: 'none',
         duration: 1500
     })
      }
         //获取缓存中购物车数据
         // const cart=wx.getStorageSync('cart')||[];
         // this.setCart(cart);
   
     } catch (error) {
       if(error.errMsg=="request:fail "){
        wx.showToast({
          title: "无网络链接",
          icon:'none',
          duration:1000
        }) 
       }  
     }
  // }else{
  //   wx.showToast({
  //     title: '请先选中',
  //     icon:"none"
  //   })
  // }
  
 },
  //删除的时候提醒

  /**）}
   * 生命周期函数--监听页面隐藏
   */


//结算
navtos(e){
// console.log(this.data.cart)
let {totalnum}=e.currentTarget.dataset
let {totalprice}=e.currentTarget.dataset

let totalNum=[]
totalNum.push(totalnum,totalprice)
let close=this.data.cart.filter(item=>item.istrue==true)
  if (totalnum!=0) {
    wx.navigateTo({
      url: '/pages/orderSub/index?totalNums='+JSON.stringify(close) + '&totalnum=' +totalnum + '&totalprice=' +totalprice,
    })
  }else{
    wx.showToast({
      title: '请先勾选商品',
      icon:"none"
    })
  }
},

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
  // onPullDownRefresh: function () {
  //   console.log(11)
  // },

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