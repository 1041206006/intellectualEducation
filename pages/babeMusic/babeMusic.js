// pages/babeMusic/babeMusic.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    playlist:[
      {
        id:1,
        title:'竖琴协奏曲作品4-6',
        singer:'胎教音乐',
        src:'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/music/%E7%BE%A4%E6%98%9F%20-%20%E7%AB%96%E7%90%B4%E5%8D%8F%E5%A5%8F%E6%9B%B2%E4%BD%9C%E5%93%814-6.mp3',
        coverImgUrl:'https://img1.kuwo.cn/star/albumcover/300/85/11/2903411958.jpg',
      },{
      id:2,
      title:'小夜曲之浪漫曲',
      singer:'胎教音乐',
      src:'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/music/%E7%BE%A4%E6%98%9F%20-%20%E5%B0%8F%E5%A4%9C%E6%9B%B2%E4%B9%8B%E6%B5%AA%E6%BC%AB%E6%9B%B2.mp3',
      coverImgUrl:'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/4896361326985605.jpg',
    },{
      id:3,
      title:'羊群平安地吃草',
      singer:'胎教音乐',
      src:'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/music/%E7%BE%A4%E6%98%9F%20-%20%E7%BE%8A%E7%BE%A4%E5%B9%B3%E5%AE%89%E5%9C%B0%E5%90%83%E8%8D%89.mp3',
      coverImgUrl:'http://p4.music.126.net/-Re9khFg0fTzNXccyFA8cQ==/109951163250104638.jpg?param=50y50'
    },{
      id:4,
      title:'卡农D大调',
      singer:'胎教音乐',
      src:'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/music/%E7%BE%A4%E6%98%9F%20-%20%E5%8D%A1%E5%86%9CD%E5%A4%A7%E8%B0%83.mp3',
      coverImgUrl:'https://img01.dmhmusic.com/0208/M00/6A/04/ChR47FsrimKAFj4ZAAGfqHz6vrc387.jpg@w_300,h_300',
    },{
      id:5,
      title:'降E大调长笛小奏鸣曲',
      singer:'胎教音乐',
      src:'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/music/%E7%BE%A4%E6%98%9F%20-%20%E9%99%8DE%E5%A4%A7%E8%B0%83%E9%95%BF%E7%AC%9B%E5%B0%8F%E5%A5%8F%E9%B8%A3%E6%9B%B2.mp3',
      coverImgUrl:'https://img3.kuwo.cn/star/albumcover/120/47/76/379281092.jpg',
    },{
      id:6,
      title:'D大调云雀弦乐四重奏',
      singer:'胎教音乐',
      src:'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/music/%E7%BE%A4%E6%98%9F%20-%20D%E5%A4%A7%E8%B0%83%E4%BA%91%E9%9B%80%E5%BC%A6%E4%B9%90%E5%9B%9B%E9%87%8D%E5%A5%8F.mp3',
      coverImgUrl:'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/4896361326985605.jpg',
    }
  ],
    state:'paused',
    playIndex:0,
    play:{
      currentTime:"00:00",
      duration:'00:00',
      percent: 1,
      title:'',
      singer:'',
      coverImgUrl:'../img/cover.jpg',
    }
  },
  changeItem:function(e){
    this.setData({
      item: e.target.dataset.item
    })
  },
  changeTab:function(e){
    this.setData({
      tab:e.detail.current
    })
  },
  audioCtx:null,
  onReady:function(){
    this.audioCtx = wx.createInnerAudioContext()
    this.setMusic(0)
    var that = this
    //
    this.audioCtx.onError(function(){
      console.log('播放失败:' +that.audioCtx.src)
    })
    this.audioCtx.onEnded(function(){
      that.next()
    })
    this.audioCtx.onPlay(function() {})
    this.audioCtx.onTimeUpdate(function(){
      that.setData({
        'play.duration':formatTime(that.audioCtx.duration),
        'play.currentTime':formatTime(that.audioCtx.currentTime),
        'play.percent':that.audioCtx.currentTime / that.audioCtx.duration * 100
      })  
    })
    function formatTime(time){
      var minute = Math.floor(time / 60) % 60;
      var second = Math.floor(time) % 60
      return(minute <10 ? '0' + minute : minute)+ ':' +(second < 10? '0' + second : second)
    }
    
  },
  setMusic: function(index){
    var music = this.data.playlist[index]
    this.audioCtx.src = music.src
    this.setData({
      playIndex: index,
      'play.title': music.title,
      'play.singer': music.singer,
      'play.coverImgUrl': music.coverImgUrl,
      'play.currentTime': '00:00',
      'play.duration':'00:00',
      'play.percent':'00.00'
    })
  },
  //播放
  play:function(){
    this.audioCtx.play()
    this.setData({
      state:'running'
    })
  },
  //暂停
  pause:function(){
    this.audioCtx.pause()
    this.setData({
      state:'paused'
    })
  },
    //下一曲
    next:function(){
      var index = this.data.playIndex >= this.data.playlist.length - 1 ? 0 : this.data.playIndex +1
      this.setMusic(index)
      if (this.data.state === 'running'){
        this.play()
      }
    },
    sliderChange: function(){
      var second = e.detail.value * this.audioCtx.duration / 100
      this.audioCtx.seek(second)
    },
    play:function(){
      this.audioCtx.seek(0)
      this.audioCtx.play()
      this.setData({
        state:'running'
      })
    },
    pause:function(){
      this.audioCtx.pause()
      this.setData({
        state:'paused'
      })
    },
    change:function(e){
      this.setMusic(e.currentTargert.dataset.index)
      this.play()
    },
    


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 退出就销毁音乐


})