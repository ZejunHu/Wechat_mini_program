// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  formSubmit: function(e) {
    if (e.detail.value.name.length===0 || e.detail.value.mail.length===0) {
      wx.showToast({
        title: 'Name and Email cannot be empty',
        icon: "loading",
        duration: 1500
      })
      setTimeout(function() {
        wx.hideToast()
      }, 2000)
    } else {
      wx.request({
        url: 'https://mailthis.to/jonathanzejunhu@outlook.com',            //need to add server side url
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: {
          name: e.detail.value.name,
          mail: e.detail.value.mail,
          phone: e.detail.value.phone,
          message: e.detail.value.message
        },
        success: function(res) {
          if (res.data.status == 0) {
            wx.showToast({
              title: res.data.info,
              icon: "loading",
              duration: 1500
            })
          } else {
            wx.showToast({
              title: res.data.info,
              icon: "success",
              duration: 1000
            })
          }
        }
      })
    }
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