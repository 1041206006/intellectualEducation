// pages/babeKnowledge/babeKnowledge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // 主页标签
        array: [{
                img: '',
                title: '爱心早餐',
                type: '健康养生',
                liulan: '20696浏览',
                pinglun: '7评论'
            },
            {
                img: '',
                title: '困了只想喝咖啡',
                type: '家庭医生在线',
                liulan: '20628浏览',
                pinglun: '13评论'
            },
            {
                img: '',
                title: '橙子吃多了变小黄人',
                type: '家庭医生在线',
                liulan: '19585浏览',
                pinglun: '6评论'
            },
            {
                img: '',
                title: '搜狐新闻，手机用久了',
                type: '广告',
                liulan: '4688浏览',
                pinglun: '4评论'
            },
            {
                img: '',
                title: '困了只想喝咖啡',
                type: '家庭医生在线',
                liulan: '20696浏览',
                pinglun: '13评论'
            }
        ],
  },
     //事件处理函数
     ignition: function(e) {
        // 用json 来传递
        var array = JSON.stringify(e.currentTarget.dataset.array)
        wx.navigateTo({
            url: `../texts/texts?array=${array}`
        })
        console.log(array)
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