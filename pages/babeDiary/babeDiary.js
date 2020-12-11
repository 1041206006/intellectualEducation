// pages/babeDiary/babeDiary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //导航栏图片
    img:"https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/babezx.jpg",
    // 云相册
    fileList:[{
      url:'',
      deletable:'true',
      name:""
    }
    ],
    
    // 身高
    stature:'',
    // 体重
    weight:'',
    // 头围
    head:'',
    time:[{
        times : '06-17',
        minute : '22:30',
        texts : ' 今天二宝5个月啦。大宝下个月就7周岁了。'
    },{
       times : '06-18',
        minute : '09:30',
        texts : '大宝起床洗漱后，我们一起吃早餐，二宝也醒了，在床上躺着自己玩，听着音乐，不哭不闹。 '
    },{
      times : '06-19',
       minute : '08:30',
       texts : '大宝起床洗漱后，我们一起吃早餐，二宝也醒了，在床上躺着自己玩，听着音乐，不哭不闹。 '
   },{
    times : '06-20',
     minute : '08:30',
     texts : '大宝起床洗漱后，我们一起吃早餐，二宝也醒了，在床上躺着自己玩，听着音乐，不哭不闹。 '
 }
  ]
  },
  onChange(event){
    console.log(event.detail)
  },
  // 加载逻辑
  grid: function () {
    setTimeout(() => {
      wx.showModal({
        title: '保存失败',
        content: '没有找到数据库',
        success(res) {
          if (res.confirm) {
            wx.navigateBack({
              delta: 1
            })
          } else if (res.cancel) {
            wx.navigateBack({
              delta: 1
            })
          }
        }
      })
    }, 4000);
    
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
    }, 4000);
  },
  // 下面是点击保存按钮
  save: function(){
  this.li(this.grid())
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