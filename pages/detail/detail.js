// pages/detail/detail.js
var structureData = require('../../utils/structure.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [],
    qyopen: false,
    qyshow: false,
    nzopen: false,
    pxopen: false,
    nzshow: false,
    pxshow: false,
    isfull: false,
    structureleft: structureData.getStructure(),
    structurecenter: {},
    //cityright: {},
    select1: '',
    select2: '',
    shownavindex: '',
    structureSelected: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  listqy: function (e) {
    if (this.data.qyopen) {
      this.setData({
        qyopen: false,
        nzopen: false,
        pxopen: false,
        nzshow: true,
        pxshow: true,
        qyshow: false,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        qyopen: true,
        pxopen: false,
        nzopen: false,
        nzshow: true,
        pxshow: true,
        qyshow: false,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }

  },
  list: function (e) {
    if (this.data.nzopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: false,
        pxshow: true,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.nv,
        nzopen: true,
        pxopen: false,
        qyopen: false,
        nzshow: false,
        pxshow: true,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
  },
  listpx: function (e) {
    if (this.data.pxopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.px,
        nzopen: false,
        pxopen: true,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },
  selectleft: function (e) {

    this.setData({
      //cityright: {},
      structurecenter: this.data.structureleft[e.currentTarget.dataset.structure],
      select1: e.target.dataset.structure
      //select2: ''
    });
  },
  selectcenter: function (e) {

    // this.setData({
    //   cityright: this.data.citycenter[e.currentTarget.dataset.city],
    //   select2: e.target.dataset.city
    // });

    this.setData({
      structureSelected: this.data.structurecenter[e.currentTarget.dataset.structure],
      select1: "",
      qyopen: false,
      nzopen: false,
      pxopen: false,
      nzshow: true,
      pxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    });
  },
  hidebg: function (e) {

    this.setData({
      qyopen: false,
      nzopen: false,
      pxopen: false,
      nzshow: true,
      pxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    })
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