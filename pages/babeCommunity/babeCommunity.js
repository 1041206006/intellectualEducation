// pages/babeCommunity/babeCommunity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  // 加载逻辑
  grid: function () {
    setTimeout(() => {
      wx.showModal({
        title: '请求失败',
        content: '请联系管理员',
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
    // 遮盖层
    con: function (){
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