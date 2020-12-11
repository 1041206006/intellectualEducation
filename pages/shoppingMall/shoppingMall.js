//商城js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 搜索框
    value: '',
    // 商品
    shop: [{
      // 订单编号
      id: 0,
      // 数量加价格的值
      value: 0,
      // 订单数量
      num: 0,
      // 订单价格
      price: 67.50,
      // 描述信息
      desc: "大号L54片【9-14KG适用】（日本原装进口）",
      // 描述标题
      title: "尤妮佳（moony）腰贴型婴儿纸尿裤/尿不湿",
      // 商品照片
      imageURL: "http://image2.suning.cn/uimg/cms/img/152913156938627767.jpg"
    }, {
      id: 1,
      value: 0,
      num: 0,
      price: 94.00,
      desc: "L码46男女宝宝婴儿宝宝超薄透气尿不湿（新老包装随机发货）",
      title: "帮宝适(Pampers)清新帮泡泡纸尿裤",
      imageURL: "http://image5.suning.cn/uimg/cms/img/159911677549135513.jpg"
    }, {
      id: 2,
      value: 0,
      num: 0,
      price: 94.00,
      desc: "（12-36个月适用）808g罐装",
      title: "君乐宝（JUNLEBAO）乐铂幼儿配方奶粉3段",
      imageURL: "http://image5.suning.cn/uimg/cms/img/159910514362770403.jpg"
    }, {
      id: 3,
      value: 0,
      num: 0,
      price: 94.00,
      desc: "（0-7岁宝宝婴儿幼儿 ）儿童活性益生菌粉(益生元) 调节肠胃 奶味96g（2g/袋x48袋）",
      title: "合生元（BIOSTIME）",
      imageURL: "http://image3.suning.cn/uimg/cms/img/159910511839835538.jpg"
    }
    ],
    // 提交订单
    orderForm: 0,

    // 公告栏1
    notice: "12.12双十二年终狂欢母婴用品囤货集结",
    // 导航栏图片
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://image4.suning.cn/uimg/cms/img/160750299837924834.png'
    }, {
      id: 1,
      type: 'image',
      url: 'http://wubaiyi.net/wby/66002/themes/honghaizi/images/a7.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'http://image1.suning.cn/uimg/cms/img/160750305185771661.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'http://image5.suning.cn/uimg/cms/img/160750315606414378.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'http://image5.suning.cn/uimg/cms/img/160750321376473231.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'http://image1.suning.cn/uimg/cms/img/160750310257757599.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'http://wubaiyi.net/wby/66002/themes/honghaizi/images/a8.jpg'
    }],
    // grid宫格
    cardCur: false,
    // 加载
    loadModal: 0,
    name1: [{
      icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/vip.png',
      text: '新人领卡',
      url: ""
    }, {
      icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/huiyuanfuliicon.png',
      text: '会员福利',
      url: ""
    }, {
      icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/yuandi.png',
      text: '领取优惠券',
      url: ""
    }, {
      icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/shouhou.png',
      text: '售后服务',
      url: ""
    },
    ],

  },
  // 首页搜索栏
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onClick() {
    Toast('搜索' + this.data.value);
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // grid宫格跳转
  grid: function () {
    setTimeout(() => {
      wx.showModal({
        title: '未登录',
        content: '请前往登录',
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../babeCommunity/babeCommunity'
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }, 2000);
    
  },
  // 加载逻辑
  li: function () {

    // 下面是定时器
    this.setData({
      loadModal: true
    })
    setTimeout(() => {
      this.setData({
        loadModal: false
      })
    }, 2000);
  },
  lis: function () {
     this.li(this.grid());

},
  // 增加订单
  add: function (e) {
    // 获取商品id
    let i = e.currentTarget.dataset.id
    // 获取商品价格
    let val = this.data.shop[`${i}`].price;
    // 获取商品数量
    let nus = this.data.shop[`${i}`].num;
    nus++;
    // 不能超过10件
    if (nus === 11) {
      wx.showModal({
        content: "一次最多下单10件喔~",
        success(res) {
          if (res.confirm) {
            console.log("用户点击确定")
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      let value = nus * val;
      this.setData({
        [`shop[${i}].num`]: nus,
        [`shop[${i}].value`]: value,
      }),
        console.log(value)
    };
    // 获取全部商品的值来计算价格
    let orderForm = 0;
    // 获取全部
    let arr = this.data.shop;
    arr.forEach(item => {
      orderForm = orderForm + item.value;
    });
    this.setData({
      orderForm: orderForm
    });
    console.log("全部价钱：" + orderForm)

  },
  // 减少订单
  subtract: function (e) {
    // 获取商品id
    let i = e.currentTarget.dataset.id
    // 获取商品价格
    let val = this.data.shop[`${i}`].price;
    let nus = this.data.shop[`${i}`].num;
    nus--;// 不能少于0件
    if (nus === -1) {
      wx.showModal({
        content: "不能再减少了喔~",
        success(res) {
          if (res.confirm) {
            console.log("用户点击确定")
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      let value = nus * val;
      this.setData({
        [`shop[${i}].num`]: nus,
        [`shop[${i}].value`]: value
      }),
        console.log(value)
    };
    // 获取全部商品的值来计算价格
    let orderForm = 0;
    // 获取全部
    let arr = this.data.shop;
    arr.forEach(item => {
      orderForm = orderForm + item.value;
    });
    this.setData({
      orderForm: orderForm
    });
    console.log(`全部价钱：${orderForm}`)

  },
  // 提交订单按钮
  onSubmit: function () {
    let e = this.data.orderForm;
    console.log(e);
    wx.showModal({
      title: "未登录",
      content: "请登录后再下单",
      success(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: "../babeCommunity/babeCommunity"
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  }
})
