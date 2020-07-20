
Page({
  data: {
    showwl:false,
    showall:false,
    ismu:false,
    showw2:false,
    isinp:false,
    showhua:false,
    hindeshop:false,
    count:false,
    ind:"0",    //处理层级
    activeName: '1',
    img: '',
    cartTotalCounts:'',

    globalData: {}, // 保存屏幕的宽高
    hide_good_box: true ,// 是否隐藏添加购物车时的圆点

    originUrl:"cloud://normal-env-ta6pc.6e6f-normal-env-ta6pc-1300924598/meinv/00006.jpg",
    ratio: 102 / 152,
    list: ["所有照片（2649）", "最近项目（2649）", "自拍（20）","实况照片（464）","人像（77）","全景照片（9）","连拍快照（9）"],
    listone: [
      { content: [
        "/images/detail/11.jpg",
        "/images/detail/12.jpg",
        "/images/detail/11.jpg",
        "/images/detail/12.jpg",
        "/images/detail/11.jpg",
        "/images/detail/12.jpg",
        "/images/detail/12.jpg",
        "/images/detail/12.jpg",
        "/images/detail/12.jpg",
        "/images/detail/12.jpg",
        "/images/detail/12.jpg",
        "/images/detail/12.jpg",
        "/images/detail/12.jpg",

      ] },
      { content: [
        "/images/detail/13.jpg",
        "/images/detail/13.jpg",
        "/images/detail/13.jpg",

      ] },
      { content: [
        "/images/detail/13.jpg",
        "/images/detail/13.jpg",
        "/images/detail/13.jpg",
        "/images/detail/12.jpg",
        "/images/detail/11.jpg",

      ] },
      { content: [
        "/images/detail/13.jpg",
        "/images/detail/13.jpg",
        "/images/detail/13.jpg",
        "/images/detail/12.jpg",

      ] },
      { content: [
        "/images/detail/11.jpg",
        "/images/detail/12.jpg",
        "/images/detail/11.jpg",
        "/images/detail/12.jpg",
        "/images/detail/11.jpg",
        "/images/detail/12.jpg",
      ] },
      { content: [
        "/images/detail/13.jpg",
        "/images/detail/13.jpg",
        "/images/detail/13.jpg",
        "/images/detail/12.jpg",

      ] },
      { content: [
        "/images/detail/11.jpg",
        "/images/detail/12.jpg",
        "/images/detail/11.jpg",
        "/images/detail/12.jpg",

      ] },
      ],
      tie: ["夏日序曲", "涂鸦艺术", "动物联盟","挡脸神器","心情日记"],
      tieone:[
        { content: [
          "/images/detail/tie1.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie1.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie1.jpg",

        ] },
        { content: [
          "/images/detail/tie1.jpg",
          "/images/detail/tie1.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",

        ] },
        { content: [
          "/images/detail/tie1.jpg",
          "/images/detail/tie1.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",

        ] },
        { content: [
          "/images/detail/tie1.jpg",
          "/images/detail/tie1.jpg",
          "/images/detail/tie1.jpg",

        ] },
        { content: [
          "/images/detail/tie1.jpg",
          "/images/detail/tie1.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",

        ] },

      ],
      bgcolor:['#FFFFFF','#000000','#3D365E','#C28E90  ','#FC7404','#10A84C','#1484AC','#043474','#FC4474','#FC946C','#4C6468','#CCA4E4','#C42434','#E8CCD8','#706484','#BCCCC4'],
      ishidden: 0,

  },
//开始拖拽
onPageScroll(e) {
  this.data.scrolltop = e.scrollTop;
},

  //隐藏图片
  onChanges(){
    this.setData({
      showwl: false ,
    })
  },
    //隐藏图贴
    onChangess(){
      this.setData({
        showw2: false ,
      })
    },
  //所有1
  onChange2(){
    this.setData({
      showall: false ,
      
    })
  },
//切换wang图片
qiehuan(e){
  let img=e.currentTarget.dataset.img
  this.setData({
    showwl: false ,
    wangIMG:img,
    imgINp2:"11",
    imgINp1:"10",
    imgINp5:'10',
    touindex:'15'
  })

  
// console.log(img)
},

    //所有贴图
  onChange3(){
    this.setData({
      showw2: false ,
      ismu:false
      
    })
  },
  //切换贴图
  qiehuantie(e){
  let img=e.currentTarget.dataset.img
  this.setData({
    originUrl:img,
    imgINp4:"13",
    imgINp2:"10",
    imgINp1:"10",
    imgINp3:"14",
    imgINp5:'10',
    touindex:'15'
  })

  
// console.log(img)
},
  //折叠栏
  onChange(event) {
    this.setData({
      activeName: event.detail,
      showall: true
    });
  },
    //隐藏图贴
    onChanges2(){
      this.setData({
        showw2: false ,
      })
    },

  showTo: function (e) {
    // 获取标签元素上自定义的 data-myindex 属性的值
    let myindex = e.currentTarget.dataset.myindex;
    // console.log(myindex);
    this.setData({
      ishidden: myindex  ,
      shows:true
    })
    
  },
  chooseWxImage: function(type) {
    let that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function(res) {
        // console.log(res);
        that.setData({
     // tempFilePath可以作为img标签的src属性显示图片
          benimg: res.tempFilePaths[0],
          imgINp4:"13",
          imgINp2:"10",
          imgINp1:"12",
          imgINp3:"14",
          imgINp5:'10',
          touindex:'15'
        })
      }
    })
  },

  chooseimage: function() {
    let that = this;
    wx.showActionSheet({
      itemList: ['从本地相册获取','拍照'],
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
 
  },
  // 网图
  bnediimage: function() {
    this.setData({ 
      showwl: true,
      ind:"100",
      inds:'10'
    });
    
  },
    //输入框
isinpchange(e){
  this.setData({
    isinp:true,
    imgINp3:"14",
    touindex:'15'
  })
  // console.log("aaa")
},
//图贴
  istutie(){
    this.setData({ 
      showw2: true ,
      showdonghua:true,
      ismu:true,
      ind:"10",
      inds:'100'

    });
  },

// 画板
showPopup() {
  this.setData({ showhua: true });
},    
huoqubg(e){
let bg=e.currentTarget.dataset.bg;
// console.log(bg)
this.setData({
  bgcolos:bg,
  imgINp4:"13",
  imgINp2:"10",
  imgINp1:"10",
  imgINp3:"14",
  imgINp5:'12',
  touindex:'15'
})
},
//显示购物车
hindeshop(){
 this.setData({
  hindeshop:true
 })
},
//加入购物车
jia(events){
   //获得当前点击的位置，距离可视区域左上角
   let touches=events.touches[0];

     let  style='left:212rpx;top:220rpx;transition: all 0.4s;';  //移动距离
     let  styleh='left:203rpx;top:0rpx;';  //移动距离
   this.setData({
       isFly:true,
       translateStyle:style
   });
  //  console.log(style)
   let that=this;
   setTimeout(()=>{
       that.setData({
           isFly:false,
           translateStyle:styleh,  //恢复到最初状态
           isShake:true,
       });

       setTimeout(()=>{
        // 不作过多考虑自增1
           let cartTotalCounts=that.data.cartTotalCounts;
           cartTotalCounts++
          //  console.log(cartTotalCounts)
            if (cartTotalCounts!=0) {
              that.setData({
                isShake:false,
                count:true,

                cartTotalCounts:cartTotalCounts
            });
            }
       },100);
   },1000);
   this.setData({
    hindeshop:false,

   })
},
//查看购物车
chakan(){
  this.setData({
    hindeshop:false
   })
},
//立即购买
goumai(){
  this.setData({
    hindeshop:false
   })
},
//图片旋转
chooseImg:function(){
  let that = this
  wx.chooseImage({
    count: 1,
    sizeType: ['original'],
    sourceType: ['album', 'camera'],
    success(res) {
      that.setData({
        originUrl: res.tempFilePaths[0],
      })
    }
  })
},
onClose() {
  this.setData({ showhua: false });
},
  onLoad: function (options) {
    this.setData({ show: true });
        // 在页面中定义插屏广告
  },
})
