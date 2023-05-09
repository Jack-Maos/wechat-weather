// pages/weather1/weather1.js
const app = getApp();
let globalData = app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now:{
      t_air_level:"",
      t_air:"",
      t_category: "",
      t_primary:"",
      t_pm25:"",
      t_so2:"",
      t_no2:"",
      t_o3:"",
      t_co:"",
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
    var that = this;
    wx.request({
      //当天天气的接口
      url: 'https://devapi.qweather.com/v7/air/now?key=' + globalData.key + "&location=" + globalData.getLocation,
      success(res){
        var data = res.data.now;
        //console.log(data);
        that.setData({
          t_air_level:data.level,
          t_air:data.aqi,
          t_category:data.category,
          t_primary:data.primary,
          t_pm25:data.pm2p5,
          t_so2:data.so2,
          t_no2:data.no2,
          t_o3:data.o3,
          t_co:data.co
        })
      }
    })
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
