//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        // 搜索框值
        value: "",
        callboard: "小程序正在开发中。。。。。。。。。。。。。。。。。。。。。。。",
        // grid宫格
        name1: [{
                icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/pregnancy.png',
                text: '怀孕知识',
                url: "../../pages/babeKnowledge/babeKnowledge"
            }, {
                icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/childRearing.png',
                text: '育儿知识',
                url: "../../pages/babeKnowledge/babeKnowledge"
            }, {
                icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/%E9%9F%B3%E4%B9%90.png',
                text: '胎教音乐',
                url: "../../pages/babeMusic/babeMusic"
            }, {
                icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/community1.png',
                text: '育儿社区',
                url: "../../pages/babeCommunity/babeCommunity"
            },
            // 第二行
            {
                icon: 'http://img95.699pic.com/element/40153/9956.png_860.png',
                text: '专属客服',
                url: "../../pages/service/service"
            },
            {
                icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/feedback.png',
                text: '功能意见',
                url: "../../pages/coupleBack/coupleBack"
            },
        ],
        // 主页标签
        title: [{
                titles: "推荐",
                array: [{
                        id:'1',
                        img: '',
                        title: '冷空气来袭，家有宝宝如何预防感冒？ ',
                        type: '健康养生',
                        text: '而伴随着冷空气而来的，可能还有种种疾病威胁。\n妈妈们发现，家里宝宝出现了咳嗽、流涕等症状。在目前的情况下，大家不免有些担心害怕。',
                        liulan: '20696浏览',
                        pinglun: '7评论'
                    },
                    {
                        id:'2',
                        img: '',
                        title: '困了只想喝咖啡',
                        type: '家庭医生在线',
                        text: '',
                        liulan: '20628浏览',
                        pinglun: '13评论'
                    },
                    {
                        id:'3',
                        img: '',
                        title: '橙子吃多了变小黄人',
                        type: '家庭医生在线',
                        text: '',
                        liulan: '19585浏览',
                        pinglun: '6评论'
                    },
                    {
                        id:'4',
                        img: '',
                        title: '搜狐新闻，手机用久了',
                        type: '广告',
                        text: '',
                        liulan: '4688浏览',
                        pinglun: '4评论'
                    },
                    {
                        id:'5',
                        img: '',
                        title: '困了只想喝咖啡',
                        type: '家庭医生在线',
                        text: '',
                        liulan: '20696浏览',
                        pinglun: '13评论'
                    }
                ]

            },
            {
                titles: "热榜",
                array: [
                    {
                        id:'6',
                        img: '',
                        title: '困了只想喝咖啡',
                        type: '家庭医生在线',
                        text: '',
                        liulan: '20628浏览',
                        pinglun: '13评论'
                    },
                    {
                        id:'7',
                        img: '',
                        title: '橙子吃多了变小黄人',
                        type: '家庭医生在线',
                        text: '',
                        liulan: '19585浏览',
                        pinglun: '6评论'
                    },
                    {
                        id:'8',
                        img: '',
                        title: '搜狐新闻，手机用久了',
                        text: '',
                        type: '广告',
                        liulan: '4688浏览',
                        pinglun: '4评论'
                    },
                    {
                        id:'9',
                        img: '',
                        title: '困了只想喝咖啡',
                        text: '',
                        type: '家庭医生在线',
                        liulan: '20696浏览',
                        pinglun: '13评论'
                    }
                ]
            }
        ],


    },
    // 搜索框


    // Grid 的列表
    //事件处理函数
    ignition: function(e) {
        // 用json 来传递
        var array = JSON.stringify(e.currentTarget.dataset.array)
        wx.navigateTo({
            url: `../texts/texts?array=${array}`
        })
    },
    onLoad: function() {
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
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})