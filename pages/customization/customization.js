import {
  post,
  get
} from "../../request/request.js";
Page({
  data: {
    showwl: false,
    showall: false,
    ismu: false,
    showw2: false,
    isinp: false,
    showhua: false,
    hindeshop: false,
    count: false,
    bg1: false,
    bg2: false,
    bg23: false,
    bgcm: false,
    goicon: false,
    Know:false,
    recommend:false,
    nextItemTwo:false,
    nextItemOne:true,
    bottomTb: true,
    bottomTbone: true,
    bottomTbtwo: true,
    bottomTbthree: true,
    bottomTbfure: true,
    cutout: false,
    ind: "0", //处理层级
    activeName: '1',
    img: '',
    activ: '',
    cartTotalCounts: '',
    goodsId:'',//商品ID
    unique:'',//品牌
    //储存信息传送给后端
    // getdate:[
    //     {
    //       bgdata:''  //bg
    //     },
    //     {
    //       Text:''  //文字
    //     },
    //     {
    //       Map:''  //贴图
    //     },
    // ],
    bgdata:'' , //bg
    Text:'' , //文字
    Map:'' , //贴图
    //input拖拽
    // input值
    pin2: false,

    globalData: {}, // 保存屏幕的宽高
    hide_good_box: true, // 是否隐藏添加购物车时的圆点

    originUrl: "cloud://normal-env-ta6pc.6e6f-normal-env-ta6pc-1300924598/meinv/00006.jpg",
    ratio: 102 / 152,
    list: ["所有照片（2649）", "最近项目（2649）", "自拍（20）", "实况照片（464）", "人像（77）", "全景照片（9）", "连拍快照（9）"],
    listone: [{
        content: [
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

        ]
      },
      {
        content: [
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",

        ]
      },
      {
        content: [
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "/images/detail/12.jpg",
          "/images/detail/11.jpg",

        ]
      },
      {
        content: [
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "/images/detail/12.jpg",

        ]
      },
      {
        content: [
          "/images/detail/11.jpg",
          "/images/detail/12.jpg",
          "/images/detail/11.jpg",
          "/images/detail/12.jpg",
          "/images/detail/11.jpg",
          "/images/detail/12.jpg",
        ]
      },
      {
        content: [
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "https://pics.images.ac.cn/image/5f0febf7a0d08.html",
          "/images/detail/12.jpg",

        ]
      },
      {
        content: [
          "/images/detail/11.jpg",
          "/images/detail/12.jpg",
          "/images/detail/11.jpg",
          "/images/detail/12.jpg",

        ]
      },
    ],
    tie: ["夏日序曲", "涂鸦艺术", "动物联盟", "挡脸神器", "心情日记"],
    tieone: [{
        content: [
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",


        ]
      },
      {
        content: [
          "/images/detail/tie2.jpg",

          "/images/detail/tie2.jpg",


        ]
      },
      {
        content: [
          "/images/detail/tie2.jpg",



        ]
      },
      {
        content: [
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",


        ]
      },
      {
        content: [
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",
          "/images/detail/tie2.jpg",



        ]
      },

    ],
    bgcolor: ['#FFFFFF', '#000000', '#3D365E', '#C28E90  ', '#FC7404', '#10A84C', '#1484AC', '#043474', '#FC4474', '#FC946C', '#4C6468', '#CCA4E4', '#C42434', '#E8CCD8', '#706484', '#BCCCC4'],
    ishidden: 0,
    ishiddens: 0,

  },
  //开始拖拽
  onPageScroll(e) {
    this.data.scrolltop = e.scrollTop;
  },
  //隐藏图片
  onChanges() {
    this.setData({
      showwl: false,
    })
  },
  //隐藏图贴
  onChangess() {                      
    this.setData({
      showw2: false,
    })
  },
  //所有1
  onChange2() {
    this.setData({
      showall: false,

    })
  },
    //切换Diy
    Diy(e) {
      let img = e.currentTarget.dataset.img
          this.setData({
            bg2: true,
            showwl: false,
            wangIMG: img,
            cutout:false,
            bgdata:img,
            imgINp2: "11",
            imgINp4: '13',
            imgINp1: "10",
            imgINp5: '10',
            touindex: '15'
          })
          // console.log(this.data.bgdata)
        },
  //切换wang图片
  qiehuan(e) {
let img = e.currentTarget.dataset.img
    this.setData({
      bg2: true,
      showwl: false,
      wangIMG: img,
      bgdata:img,
      imgINp2: "11",
      imgINp4: '13',
      imgINp1: "10",
      imgINp5: '10',
      touindex: '15'
    })
    // console.log(this.data.bgdata)
  },

  //判断是否输入
  watchPassWord(e) {
    // console.log(e.detail.value);
  },
  //失去焦点
  subs(e) {
    // console.log(e)
    // console.log(e.detail.value);
    let val = e.detail.value
    if (val.lenght !== null) {
      this.setData({
        pin2: true,
        Text:val,
        isinp: false,
        valzhi: val
      })

    } else {
      this.setData({
        isinp: false,
      })
    }
  },
  //所有贴图
  onChange3() {
    this.setData({
      showw2: false,
      ismu: false

    })
  },
  //切换贴图
  qiehuantie(e) {
    let img = e.currentTarget.dataset.img
    // console.log(img)
    this.setData({
      originUrl: img,
      bg3: true,
      imgINp4: "13",
      Map:img,
      // imgINp2:"10",
      // imgINp1:"10",
      imgINp3: "14",
      // imgINp5:'10',
      touindex: '15',
      ismu: false
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
  onChanges2() {
    this.setData({
      showw2: false,
    })
  },

  showTo: function (e) {
    // 获取标签元素上自定义的 data-myindex 属性的值
    let myindex = e.currentTarget.dataset.myindex;
    // console.log(myindex);
    this.setData({
      ishidden: myindex,
      shows: true
    })

  },
  showTos: function (e) {
    // 获取标签元素上自定义的 data-myindex 属性的值
    let tieindex = e.currentTarget.dataset.tieindex;
    // console.log(tieindex)
    // console.log(myindex);
    this.setData({
      ishiddens: tieindex,
      shows: true
    })

  },
  chooseWxImage: function (type) {
    let that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        // console.log(res);
        that.setData({
          // tempFilePath可以作为img标签的src属性显示图片
          benimg: res.tempFilePaths[0],
          bgdata:res.tempFilePaths[0],
          imgINp4: "13",
          imgINp2: "10",
          imgINp1: "12",
          imgINp3: "14",
          imgINp5: '10',
          bg1: true,
          touindex: '15'
        })
        // console.log(that.data.bgdata)
      }
    })
  },

  chooseimage: function (e) {
    let that = this;
    let {
      tburl
    } = e.currentTarget.dataset
    // console.log(tburl)
    that.setData({
      coTb: tburl,
      bottomTb: false,
      bottomTbone: true,
      bottomTbtwo: true,
      bottomTbthree: true,
      bottomTbfure: true,
      cutout: false,
    })
    wx.showActionSheet({
      itemList: ['从本地相册获取', '拍照'],
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          } else if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          }
        }
      }
    })

  },
  // 网图
  bnediimage: function (e) {
    let {
      tburl
    } = e.currentTarget.dataset

    // console.log(tburl)
    this.setData({
      showwl: true,
      ind: "100",
      coTbone: tburl,
      bottomTbone: false,
      bottomTb: true,
      bottomTbtwo: true,
      bottomTbthree: true,
      bottomTbfure: true,
      cutout: false,
      // inds:'10'
    });

  },
  //输入框
  isinpchange(e) {
    let {
      tburl
    } = e.currentTarget.dataset
    this.setData({
      isinp: true,
      imgINp3: "14",
      touindex: '15',
      coTbtwo: tburl,
      bottomTbtwo: false,
      bottomTb: true,
      bottomTbone: true,
      bottomTbthree: true,
      bottomTbfure: true,
      cutout: false,
    })
    // console.log("aaa")
  },
  //图贴
  istutie(e) {
    let {
      tburl
    } = e.currentTarget.dataset
    this.setData({
      showw2: true,
      showdonghua: true,
      ismu: true,
      ind: "10",
      inds: '100',
      coTbthree: tburl,
      bottomTbthree: false,
      bottomTb: true,
      bottomTbone: true,
      bottomTbtwo: true,
      bottomTbfure: true,
      cutout: false,

    });
  },

  // 画板
  showPopup(e) {
    let {
      tburl
    } = e.currentTarget.dataset
    // console.log(tburl)
    this.setData({
      showhua: true,
      bgcm: true,
      coTbfure: tburl,
      bottomTbfure: false,
      bottomTb: true,
      bottomTbone: true,
      bottomTbtwo: true,
      bottomTbthree: true,
      cutout: false,
    });
  },
  huoqubg(e) {
    let bg = e.currentTarget.dataset.bg;
    // console.log(bg)
    this.setData({
      bgcolos: bg,
      bgdata:bg,
      imgINp4: "13",
      imgINp2: "10",
      imgINp1: "10",
      imgINp3: "14",
      imgINp5: '12',
      touindex: '15',
      activ: bg
    })
    // console.log(this.data.bgdata)
  },

  //DIY
  userCutout() {
    let _that = this
    _that.setData({
      cutout: true,
      
    })
  },

  //显示购物车
  hindeshop() {
    this.setData({
      hindeshop: true,
      goicon: false
    })
  },

  //加入购物车
  async jia(events) {
    //获得当前点击的位置，距离可视区域左上角
    let touches = events.touches[0];
    let style = 'left:230rpx;top:270rpx;transition: all 0.4s;'; //移动距离
    let styleh = 'left:204rpx;top:0rpx;'; //移动距离
    this.setData({
      isFly: true,
      goicon: true,
      translateStyle: style
    });
    let that = this;
    setTimeout(() => {
      that.setData({
        isFly: false,
        translateStyle: styleh, //恢复到最初状态
        isShake: true,
      });

      setTimeout(() => {
        // 不作过多考虑自增1
        let cartTotalCounts = that.data.cartTotalCounts;
        cartTotalCounts++
        //  console.log(cartTotalCounts)
        if (cartTotalCounts != 0) {
          that.setData({
            isShake: false,
            count: true,

            cartTotalCounts: cartTotalCounts
          });
        }
      }, 100);
    }, 1000);
    this.setData({
      hindeshop: false,

    })
      try {
        const res = await post({
          url: '/cart/add',
          data: { 
            "productId": this.data.goodsId,//商品id
            "new": "0" ,//1加入购物车直接购买 0加入购物车
            "uniqueId": this.data.unique,
            "cartNum":1,//商品数量
            "img": "https://api.midiandz.com/uploads/attach/2020/08/12/027e4bf0101c5bb65f3acc662f26a714.jpg",
              },
        })
        console.log(res)
  if (res.data.data.status==200) {
     wx:showToast({
      title: "加入购物车成功",
      icon:'success',
      duration:1500
     })
      }else{
        wx:showToast({
          title: res.data.data.msg,
          icon:'none',
          duration:1500
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

  //查看购物车
  chakan() {
    this.setData({
      hindeshop: false
    })
  wx.switchTab({
    url: '../shop/index',
  })
  },
  //立即购买
  purchase() {
    this.setData({
      hindeshop: false,
    })
    // goodsId:'',//商品ID
    // goodsAttr:'',//品牌
    // model:'',//型号
    // let 
  },
//一开始进来就出现提示
polygon(){
   let _that=this
   _that.setData({
    polygon:true
   })
},
nextKnow(){
  let _that=this
  _that.setData({
    polygon:false,
    Know:true,
    recommend:true,
    nextItemTwo:true,
    nextItemOne:false
   })
},
nextKnows(){
  let _that=this
  _that.setData({
    recommend:false,
    nextItemTwo:false,

   })
},

  //图片旋转
  chooseImg: function () {
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
    this.setData({
      showhua: false,

    });
  },
  //关闭DIY
  onCloseDiy() {
    this.setData({
      cutout: false,
      
    });
  },
  onLoad: function (options) {
    // console.log(options)
    let {brands}=options
    let  newBrands=brands.split(",")
    console.log(newBrands[0])//id
    console.log(newBrands[1])//unique
    this.setData({
      show: true,
      goodsId:newBrands[0],
      unique:newBrands[1],
    });
   this.polygon()
    // 在页面中定义插屏广告
  },
})

//画板圆圈
