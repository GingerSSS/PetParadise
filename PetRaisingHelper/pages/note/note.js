var app = getApp()
Page(
  {
    data: {
      orderInfo: '',
      tip: '',
      inputvalue: '',
      add: ''
    },
    submitdate: function (event) {
      var orderInfo = event.detail.value;
      wx.setStorage({
        key: 'orderInfo',
        data: orderInfo,
        success: function (res) {
          wx.navigateTo({
            url: '../note/note'
          })
        }
      })
    },
    onLoad: function () {
      var that = this;
      wx.getStorage({
        key: 'orderInfo',
        success: function (res) {
          that.setData({
            orderInfo: res.data
          })
        }
      })
    },
    bindKeyinput: function (e) {
      this.setData({
        inputvalue: e.detail.value
      })
    },
    addbtn: function () {
      if (this.data.inputvalue) {
        wx.redirectTo({
          url: '../note/note'
        })
        wx.setStorage({
          key: 'add',
          data: this.data.inputvalue
        })
      }
      else {
        wx.showModal({
          title: '内容为空',
          content: '请输入内容',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
    },
    onload: function () {
      //onload
    },
    onShow: function () {
      var that = this;
      wx.getStorage({
        key: 'add',
        data: this.data.add
      })
    },
    formBindsubmit: function (e) {
      this.setData
        (
        {
          tip: e.detail.value.tip
        }
        )
    },
    formReset: function () {
      this.setData
        (
        {
          tip: ''
        }
        )
    }
  }
) 


         