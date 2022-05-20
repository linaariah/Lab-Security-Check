App({
  globalData : {
     userinfo:null
  },
  onLaunch:function(){
     wx.cloud.init({
        env:'test-0gnckg58cd3489ca',
        traceUser:true
     }) 
  },
})