var inputContent = {}
var app = getApp()
Page({
  data: {
    tempFilePaths: '',
  },
  /**
   * 上传图片
   */
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9 
      // 可以指定是原图还是压缩图，默认二者都有 
      sizeType: ['original', 'compressed'],
      // 可以指定来源是相册还是相机，默认二者都有
      sourceType: ['album', 'camera'],
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
      success: function (res) {

        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  }
})
