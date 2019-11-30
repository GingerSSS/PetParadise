Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChecked: false,
    thisweek: {
      name1: "Ryu",
      imagePath1: "/images/fenge1.jpg",
      name2: "DD",
      imagePath2: "/images/fenge2.jpg",
      name3: "daad",
      imagePath3: "/images/fenge3.jpg",
      name4: "XII",
      imagePath4: "/images/fenge4.jpg",
      name5: "hua123",
      imagePath5: "/images/fenge5.jpg",
    }
  },

  serviceSelection() {
    this.setData({
      isChecked: true
    })
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