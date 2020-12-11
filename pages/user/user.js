// pages/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[{
        icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/pregnancy.png',
        text: '怀孕知识',
        url: "../babeKnowledge/babeKnowledge"
    }, {
        icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/childRearing.png',
        text: '育儿知识',
        url: "../babeKnowledges/babeKnowledges"
    }, {
        icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/%E9%9F%B3%E4%B9%90.png',
        text: '胎教音乐',
        url: "../babeMusic/babeMusic"
    },{
      icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/feedback.png',
      text: '功能意见',
      url: "../../pages/coupleBack/coupleBack"
  }]
  },
  // 列表跳转
  uil :(e) => {
    let urls = e.currentTarget.dataset.url;
    console.log(urls)
    wx.navigateTo({
      url :urls
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  gridchange: function (e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function (e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  menuBorder: function (e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function (e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function (e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function (e) {
    this.setData({
      skin: e.detail.value
    });
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

  },
  // 用户分享
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '智育社区你我的社区',
      path: '/page/user'
    }
  },
  // 
  
})