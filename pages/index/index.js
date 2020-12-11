//index.js
//获取应用实例
const app = getApp()
// 对数据库进行初始化
const db = wx.cloud.database()
const title = db.collection('title')
const text = db.collection('title').doc('0288fce75fc5f3c00086059c20e22556')

// 云开发的数据插入
// db.collection('title').add({
//     // data: {
//     //     // 搜索框值
//     //     value: "",
//     //     callboard: "小程序正在开发中。。。。。。。。。。。。。。。。。。。。。。。",
//     //     // grid宫格
//     //     name1: [{
//     //             icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/pregnancy.png',
//     //             text: '怀孕知识',
//     //             url: "../../pages/babeKnowledge/babeKnowledge"
//     //         }, {
//     //             icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/childRearing.png',
//     //             text: '育儿知识',
//     //             url: "../../pages/babeKnowledge/babeKnowledge"
//     //         }, {
//     //             icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/%E9%9F%B3%E4%B9%90.png',
//     //             text: '胎教音乐',
//     //             url: "../../pages/babeMusic/babeMusic"
//     //         }, {
//     //             icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/community1.png',
//     //             text: '育儿社区',
//     //             url: "../../pages/babeCommunity/babeCommunity"
//     //         },
//     //         // 第二行
//     //         {
//     //             icon: 'http://img95.699pic.com/element/40153/9956.png_860.png',
//     //             text: '专属客服',
//     //             url: "../../pages/service/service"
//     //         },
//     //         {
//     //             icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/feedback.png',
//     //             text: '功能意见',
//     //             url: "../../pages/coupleBack/coupleBack"
//     //         },
//     //     ],
//     //     // 主页标签
//     //     title: [{
//     //             titles: "推荐",
//     //             array: [{
//     //                     id:'1',
//     //                     img: '',
//     //                     title: '冷空气来袭，家有宝宝如何预防感冒？ ',
//     //                     type: '健康养生',
//     //                     text: '而伴随着冷空气而来的，可能还有种种疾病威胁。\n妈妈们发现，家里宝宝出现了咳嗽、流涕等症状。在目前的情况下，大家不免有些担心害怕。',
//     //                     liulan: '20696浏览',
//     //                     pinglun: '7评论'
//     //                 },
//     //                 {
//     //                     id:'2',
//     //                     img: '',
//     //                     title: '困了只想喝咖啡',
//     //                     type: '家庭医生在线',
//     //                     text: '',
//     //                     liulan: '20628浏览',
//     //                     pinglun: '13评论'
//     //                 },
//     //                 {
//     //                     id:'3',
//     //                     img: '',
//     //                     title: '橙子吃多了变小黄人',
//     //                     type: '家庭医生在线',
//     //                     text: '',
//     //                     liulan: '19585浏览',
//     //                     pinglun: '6评论'
//     //                 },
//     //                 {
//     //                     id:'4',
//     //                     img: '',
//     //                     title: '搜狐新闻，手机用久了',
//     //                     type: '广告',
//     //                     text: '',
//     //                     liulan: '4688浏览',
//     //                     pinglun: '4评论'
//     //                 },
//     //                 {
//     //                     id:'5',
//     //                     img: '',
//     //                     title: '困了只想喝咖啡',
//     //                     type: '家庭医生在线',
//     //                     text: '',
//     //                     liulan: '20696浏览',
//     //                     pinglun: '13评论'
//     //                 }
//     //             ]

//     //         },
//     //         {
//     //             titles: "热榜",
//     //             array: [
//     //                 {
//     //                     id:'6',
//     //                     img: '',
//     //                     title: '困了只想喝咖啡',
//     //                     type: '家庭医生在线',
//     //                     text: '',
//     //                     liulan: '20628浏览',
//     //                     pinglun: '13评论'
//     //                 },
//     //                 {
//     //                     id:'7',
//     //                     img: '',
//     //                     title: '橙子吃多了变小黄人',
//     //                     type: '家庭医生在线',
//     //                     text: '',
//     //                     liulan: '19585浏览',
//     //                     pinglun: '6评论'
//     //                 },
//     //                 {
//     //                     id:'8',
//     //                     img: '',
//     //                     title: '搜狐新闻，手机用久了',
//     //                     text: '',
//     //                     type: '广告',
//     //                     liulan: '4688浏览',
//     //                     pinglun: '4评论'
//     //                 },
//     //                 {
//     //                     id:'9',
//     //                     img: '',
//     //                     title: '困了只想喝咖啡',
//     //                     text: '',
//     //                     type: '家庭医生在线',
//     //                     liulan: '20696浏览',
//     //                     pinglun: '13评论'
//     //                 }
//     //             ]
//     //         }
//     //     ],


//     // },
//     success :function (res){
//         console.log(res)
//     }
// }),
// 这个是获取一个记录的数据
// db.collection('title').doc('0a4429175fc5fa8c008da1302a2c447a').get({
//     success:function (res) {
//         console.log(res.data)
//     }
// })
// .get({
//     success: function (res) {
//         console.log(res.data)
//     }
// })
Page({
    
    data: {
        // 搜索框值
        value: "",
        callboard: "小程序正在开发中。。。服务器已关闭只做静态展示使用。。",
        // grid宫格
        name1: [{
                icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/pregnancy.png',
                text: '怀孕知识',
                url: "../../pages/babeKnowledge/babeKnowledge"
            }, {
                icon: 'https://7a69-ziyv-u4vjv-1301858199.tcb.qcloud.la/childRearing.png',
                text: '育儿知识',
                url: "../../pages/babeKnowledges/babeKnowledges"
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
                        img: 'http://health.people.com.cn//NMediaFile/2020/1210/MAIN202012100947514218172471281.jpg',
                        title: '给孩子吃补品，不是爱反是害',
                        type: '人民网-生命时报',
                        text: '东南大学附属中大医院药学部药师 侯 凯\n\n每位家长都希望孩子能健康茁壮地成长，于是从能吃辅食起，不少家长就想尽办法给孩子做各种高营养、高蛋白的食物。也有些家长会给孩子服用补充剂，希望他能长得更高、发育得更好。在此提醒家长：补剂有不同，服用需谨慎，用错了适得其反。市面上的儿童补充剂花样繁多，虽不能否认其中某些对患有营养不良性疾病或发育迟缓的孩子确实有一定帮助，但对于绝大多数身体健康的孩子来说作用并不大，以下一些补品尤其要慎重。。',
                        liulan: '20696浏览',
                        pinglun: '7评论'
                    },
                    {
                        id:'2',
                        img: 'http://health.people.com.cn//NMediaFile/2020/1211/MAIN202012111025463280265790643.jpg',
                        title: '食用油中添加了棕榈油，还能购买吗？真相在这！',
                        type: '人民网-人民健康网',
                        text: '编者按：说起棕榈油，由于它饱和脂肪酸含量高，很多小伙伴一定会联想到“不健康”。那么，真相是怎样的呢？今天，我们就和大家聊一聊棕榈油。\n\n随着大家健康意识的增强，食用油中的不饱和脂肪酸日渐受到人们的关注。棕榈油中饱和脂肪酸和不饱和脂肪酸的比例基本为1:1，其中亚油酸作为人体必须的氨基酸，具有降低胆固醇、预防动脉粥样硬化等功效。',
                        liulan: '20628浏览',
                        pinglun: '13评论'
                    },
                    {
                        id:'3',
                        img: 'http://health.people.com.cn//NMediaFile/2020/1210/MAIN202012100949327328280645791.jpg',
                        title: '饭前服药和空腹服药不是一回事儿',
                        type: '人民政协报',
                        text: '人吃五谷杂粮，难免遇到小病需要吃药，有些药要求饭后吃，有些药最好饭前吃。很多人把饭前吃药理解为空腹服药，但是这种理解和做法，是错误的。\n\n胃是一个中空的囊状器官，主要功能是暂时储存食物进行初步消化。成人的胃一般能容纳1~2L食物，因此人们只需要一日进食2~3餐，在一次饱餐后食物可以慢慢地由胃进入小肠。食物在口腔内经过咀嚼被磨碎，并经舌的搅拌使食物与唾液混合成食团，然后吞咽入胃，食物在口腔停留的时间很短，一般只有15~20秒。',
                        liulan: '19585浏览',
                        pinglun: '6评论'
                    },
                    {
                        id:'4',
                        img: 'http://statics.itc.cn/pcChannel/prod/css/images/shh-ec5b728887c5138086e55df9e5766a59.png',
                        title: '搜狐新闻，手机用久了',
                        type: '广告',
                        text: '  ',
                        liulan: '4688浏览',
                        pinglun: '4评论'
                    },
                    {
                        id:'5',
                        img: 'http://p6.itc.cn/q_70,c_lfill,w_380,h_190,g_faces/images01/20201211/061e2c11f5a841af9811e9ea8568a793.jpeg',
                        title: '秋冬儿童哮喘易反复？专家教你做好防护',
                        type: '羊城晚报',
                        text: '秋冬是哮喘高发期。由于患者的气道敏感，在过敏原的刺激下，比如冷空气、动物皮毛、尘螨等，容易引起明显的支气管收缩痉挛，进而出现咳嗽、喘息、气促、胸闷，甚至呼吸困难等。专家表示，经过规范治疗，大部分的哮喘儿童可以得到很好的控制。但由于很多家长对儿童哮喘的认识不够，使得目前儿童哮喘的控制水平仍不理想。',
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
                        img: 'http://p3.itc.cn/q_70,c_lfill,w_300,h_200,g_faces/images01/20201210/5afdad9599ec46e6bf286cf5f4b0963e.jpeg',
                        title: '儿科医生：这种“假辅食”不要再做给孩子吃了，没营养还容易积食',
                        type: '文|西红柿妈妈',
                        text: '宝宝的喂养问题，一直是家长关注的重中之重。月龄6个月以内的宝宝，倒不需要多操心，有母乳就可以，可6个月后开始吃辅食了，到底该怎么吃、吃什么，则成为不小的难题。\n\n 前不久，宝妈阿萱老家有事，就把1岁半的儿子小乐送到了婆婆家。她怕婆婆不会喂，就特意在纸上写下辅食的制作方法。\n\n 婆婆看着纸上繁琐的步骤，觉得非常头疼。她认为，儿媳把孙子喂得太娇气了，而且，她的三个孩子，都是自己带大，怎么喂孩子还需要一个年轻人来教？',
                        liulan: '20628浏览',
                        pinglun: '13评论'
                    },
                    {
                        id:'7',
                        img: 'http://p5.itc.cn/q_70,c_lfill,w_300,h_200,g_faces/images03/20201210/00fab0f72c3d4992b664dd38f2bcb492.jpeg',
                        title: '坐月子想吃水果，得煮熟了才能吃？当真你就输了',
                        type: '家庭医生在线',
                        text: '民间有说法，说女性坐月子期间如果想吃水果，要吃加热后的水果，不然宝宝会拉肚子。如果吃凉水果，牙齿会受凉，将来会落下牙疼、牙齿松动等月子病。那么，这个说法是真的吗？\n\n民间说法并无科学依据。\n\n其实，新生宝宝腹泻和妈妈吃何种水果并没什么关系。而且，吃凉水果会落下月子病这种说法也是没有科学依据的。',
                        liulan: '19585浏览',
                        pinglun: '6评论'
                    },
                    {
                        id:'8',
                        img: 'http://statics.itc.cn/pcChannel/prod/css/images/shh-ec5b728887c5138086e55df9e5766a59.png',
                        title: '搜狐新闻，手机用久了',
                        text: '',
                        type: '广告',
                        liulan: '4688浏览',
                        pinglun: '4评论'
                    },
                    {
                        id:'9',
                        img: 'http://p3.itc.cn/q_70,c_lfill,w_300,h_200,g_faces/images01/20201210/920975047b42464e9abcf3a090b97739.jpg',
                        title: '还在天天给孩子讲人生道理？别落伍了，精英父母都这么做 ',
                        text: '现在社会上出现这么一种现象，孩子有问题，父母第一反应不是找自己的麻烦，而是抱怨：现在的孩子太难管教，想当年我们那个时候……仿佛一切都是孩子的错误，与他们毫无关系。\n\n孩子犯错，到底是谁的责任？这个问题在网上流传了很多年，从一开始的“父母论”到现在的“熊孩子论”，不难发现，人们的思维观念在悄无声息之间出现了变化。\n\n 在我看来，尽管孩子犯错的类型在不断变化，可是其本质永远不变：小孩子不好，那就是父母的责任。',
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