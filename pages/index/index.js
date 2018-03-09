//index.js
//获取应用实例
const app = getApp();
var mtabW;

var pageConfig = {
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    imgUrls: ["http://res.cloudinary.com/wbsxby/image/upload/v1520536397/Savvy%20Home/homepage/home1.jpg", "http://res.cloudinary.com/wbsxby/image/upload/v1520536397/Savvy%20Home/homepage/home2.jpg"],
    tabs: ["lumina", "ERA2"],
    activeIndex: 0,
    slideOffset: 0,
    tabW:0
  },
  //事件处理函数
  tabClick: function (e) {
    var that = this;
    var idIndex = e.currentTarget.id;
    var offsetW = e.currentTarget.offsetLeft;  //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: idIndex,
      slideOffset: offsetW
    });
  },
  bindChange: function (e) {
    var current = e.detail.current;
    if ((current + 1) % 4 == 0) {

    }
    var offsetW = current * mtabW;    //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: current,
      slideOffset: offsetW
    });

  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        mtabW = res.windowWidth / 4;  //设置tab的宽度
        that.setData({
          tabW: mtabW
        })
      }
    });
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
  }
}

Page(pageConfig)
