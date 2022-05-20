// pages/fankui/fankui.js
const db = wx.cloud.database()
Page({

   /**
    * 页面的初始数据
    */
   data: {
      
         list: [],
         getroom: '',
         details: '',
         user: '',
         name1: '',
         time: '',
         imgbox: [], //选择图片
         fileIDs: [], //上传云存储后的返回值
         number:0,
         array: ["扣分", "警告", "无"],
         array1: ["无违规", "有违规", "请选择有无违规"],
         ind:2,
         index11: 2,
         index12: 2,
         index13: 2,
         index14: 2,
     
         index21: 2,
         index22: 2,
         index23: 2,
         index24: 2,
         index25: 2,
         index26: 2,
     
         index31: 2,
         index32: 2,
         index33: 2,
         index34: 2,
     
         index41: 2,
         index42: 2,
         index43: 2,
         index44: 2,
         index45: 2,
     
         index51: 2,
         index52: 2,
         index53: 2,
         index54: 2,
         index55: 2,
         index56: 2,
         index57: 2,
         index58: 2,
         index59: 2,
     
         index61: 2,
         index62: 2,
         index63: 2,
         index64: 2,
         index65: 2,
         index66: 2,
     
         index71: 2,
         index72: 2,
         index73: 2,
     
         index81: 2,
         index82: 2,
         index83: 2,
         index84: 2,
         index85: 2,
     
         index91: 2,
         index92: 2,
         index93: 2,
         index94: 2,
         index95: 2,
         index96: 2,
         index97: 2,
     
         index102: 2,
         index103: 2,
         index104: 2,
         index105: 2,
         index101: 2,
     
     
         index111: 2,
         index112: 2,
         index113: 2,
         index114: 2,
         index115: 2,
         index116: 2,
     
         index121: 2,
         index122: 2,
         index123: 2,
         index124: 2,
         index125: 2,
     
         sum:0,
         i11:1,
         i12:1,
         i13:1,
         i14:1,
         i15:1,
         i16:1,
         i21:1,
         i22:1,
         i23:1,
         i24:1,
         i31:1,
         i32:1,
         i33:1,
         i41:1,
         i42:1,
         problem:"",
         pict:"",
         details1:"",
         fileIDs1:"",
         id:"",
         showView1: false,
         showView2: false,
         showView3: false,
         showView4: false,
         showView5: false,
         showView6: false,
         showView7: false,
         showView8: false,
         showView9: false,
         showView10: false,
         showView11: false,
         showView12: false,

   },
   bindTextAreaBlur: function (e) {
      console.log(e.detail.value);
      this.setData({
        details: e.detail.value
      });
    },
// 删除照片
imgDelete: function (e) {
      let that = this;
      let index = e.currentTarget.dataset.deindex;
      let imgbox = this.data.imgbox;
      imgbox.splice(index, 1)
      that.setData({
        imgbox: imgbox
      })
    },
    // 选择图片 
    c: function (e) {
      var imgbox = this.data.imgbox;
      console.log(imgbox)
      var that = this;
      var n = 5;
      if (5 > imgbox.length > 0) {
        n = 5 - imgbox.length;
      } else if (imgbox.length == 5) {
        n = 1;
      }
      wx.chooseImage({
        count: n, // 默认9，设置图片张数
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // console.log(res.tempFilePaths)
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          if (imgbox.length == 0) {
            imgbox = tempFilePaths
          } else if (5 > imgbox.length) {
            imgbox = imgbox.concat(tempFilePaths);
          }
          that.setData({
            imgbox: imgbox
          })
        }
      })
    },

    tijiao: function (e) {

      var that = this;
      let promiseArr = [];
      for (let i = 0; i < this.data.imgbox.length; i++) {
        promiseArr.push(new Promise((reslove, reject) => {
          let item = this.data.imgbox[i];
          let suffix = /\.\w+$/.exec(item)[0]; //正则表达式返回文件的扩展名
          let cloudPath = new Date().getTime() + '.' + suffix;
          wx.cloud.uploadFile({
            cloudPath: '图片1/' + cloudPath, // 上传至云端的路径
            filePath: item, // 小程序临时文件路径
            success: res => {
              this.setData({
                fileIDs1: this.data.fileIDs.concat(res.fileID)
              })
              console.log(res)
              console.log(this.data.fileIDs)
              reslove();
              wx.hideLoading();
            }
          })
  
        }))
      }
  
      let {
            details1,
            id
      } = that.data
      Promise.all(promiseArr).then(res => {
      
        console.log("fileIDs", that.data.fileIDs) //输出上传后图片的返回地址
        wx.cloud.database().collection('jilu')
          .doc(id).update({ //添加数据
            data: {
                  fileIDs1: that.data.fileIDs1,
                  pro1: details1,
              
            },
            success(res) {
              console.log("添加成功", res)
              // console.log( res.data)
  
              wx.showToast({
                icon: 'none',
                title: '提交成功',
                // duration:2000,
              })
              setTimeout(function () {
                wx.reLaunch({
                  url: '../room/room',
                })
              }, 1000) //延迟时间 这里是1秒
  
  
            },
            fail(res) {
              console.log("添加失败", res)
  
              wx.showToast({
                icon: 'none',
                title: '提交失败',
              })
  
            }
          })
         
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
      let that = this 
      let id = wx.getStorageSync('idm')
      db.collection('jilu').doc(id).get({
            success : res=> {
                  console.log(res)
                  console.log("成功")
                  
                  let temp = res.data
                  var summ = 0
                  console.log(temp.sum)
               
                  that.setData({
                              id:id,
                         
                              index11: temp.k11,
                              index12: temp.k12,
                              index13: temp.k13,
                              index14: temp.k14,
                          
                              index21: temp.k21,
                              index22: temp.k22,
                              index23: temp.k23,
                              index24: temp.k24,
                              index25: temp.k25,
                              index26: temp.k26,
                          
                              index31: temp.k31,
                              index32: temp.k32,
                              index33: temp.k33,
                              index34: temp.k34,
                          
                              index41: temp.k41,
                              index42: temp.k42,
                              index43: temp.k43,
                              index44: temp.k44,
                              index45: temp.k45,
                          
                              index51: temp.k51,
                              index52: temp.k52,
                              index53: temp.k53,
                              index54: temp.k54,
                              index55: temp.k55,
                              index56: temp.k56,
                              index57: temp.k57,
                              index58: temp.k58,
                              index59: temp.k59,
                          
                              index61: temp.k61,
                              index62: temp.k62,
                              index63: temp.k63,
                              index64: temp.k64,
                              index65: temp.k65,
                              index66: temp.k66,
                          
                              index71: temp.k71,
                              index72: temp.k72,
                              index73: temp.k73,
                          
                              index81: temp.k81,
                              index82: temp.k82,
                              index83: temp.k83,
                              index84: temp.k84,
                              index85: temp.k85,
                          
                              index91: temp.k91,
                              index92: temp.k92,
                              index93: temp.k93,
                              index94: temp.k94,
                              index95: temp.k95,
                              index96: temp.k96,
                              index97: temp.k97,
                          
                              index102: temp.k102,
                              index103: temp.k103,
                              index104: temp.k104,
                              index105: temp.k105,
                              index101: temp.k101,
                          
                          
                              index111: temp.k111,
                              index112: temp.k112,
                              index113: temp.k113,
                              index114: temp.k114,
                              index115: temp.k115,
                              index116: temp.k116,
                          
                              index121: temp.k121,
                              index122: temp.k122,
                              index123: temp.k123,
                              index124: temp.k124,
                              index125: temp.k125,
                          
                              sum : temp.sum,
                              getroom: temp.room,
                              name1: temp.jianchayuan,
                              problem:temp.pro,
                              pict:temp.fileIDs
                       
                  })
                  console.log(that.data.index11)
            }
      })

   },

   onChangeShowState1: function () {
    var that = this;
    that.setData({
      showView1: (!that.data.showView1)
    })
  },
  onChangeShowState2: function () {
    var that = this;
    that.setData({
      showView2: (!that.data.showView2)
    })
  },
  onChangeShowState3: function () {
    var that = this;
    that.setData({
      showView3: (!that.data.showView3)
    })
  },
  onChangeShowState4: function () {
    var that = this;
    that.setData({
      showView4: (!that.data.showView4)
    })
  },
  onChangeShowState5: function () {
    var that = this;
    that.setData({
      showView5: (!that.data.showView5)
    })
  },
  onChangeShowState6: function () {
    var that = this;
    that.setData({
      showView6: (!that.data.showView6)
    })
  },
  onChangeShowState7: function () {
    var that = this;
    that.setData({
      showView7: (!that.data.showView7)
    })
  },
  onChangeShowState8: function () {
    var that = this;
    that.setData({
      showView8: (!that.data.showView8)
    })
  },
  onChangeShowState9: function () {
    var that = this;
    that.setData({
      showView9: (!that.data.showView9)
    })
  },
  onChangeShowState10: function () {
    var that = this;
    that.setData({
      showView10: (!that.data.showView10)
    })
  },
  onChangeShowState11: function () {
    var that = this;
    that.setData({
      showView11: (!that.data.showView11)
    })
  },
  onChangeShowState12: function () {
    var that = this;
    that.setData({
      showView12: (!that.data.showView12)
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