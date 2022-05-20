const db = wx.cloud.database()
const user = db.collection('user')
const util = require('../../utils/utils.js')

Page({
  data: {
    list: [],
    getroom: '',
    details: '',
    user: '',
    name1: '',
    time: '',
    imgbox: [], //选择图片
    fileIDs: [], //上传云存储后的返回值
    number: 0,
    array: ["扣分", "警告", "无"],
    array1: ["无违规", "有违规", "请选择有无违规"],
    ind: 2,
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

    sum: 0,

    i11: 1,
    i12: 1,
    i13: 1,
    i14: 1,

    i21: 1,
    i22: 1,
    i23: 1,
    i24: 1,
    i25: 1,
    i26: 1,

    i31: 1,
    i32: 1,
    i33: 1,
    i34: 1,

    i41: 1,
    i42: 1,
    i43: 1,
    i44: 1,
    i45: 1,

    i51: 1,
    i52: 1,
    i53: 1,
    i54: 1,
    i55: 1,
    i56: 1,
    i57: 1,
    i58: 1,
    i59: 1,

    i61: 1,
    i62: 1,
    i63: 1,
    i64: 1,
    i65: 1,
    i66: 1,

    i71: 1,
    i72: 1,
    i73: 1,

    i81: 1,
    i82: 1,
    i83: 1,
    i84: 1,
    i85: 1,

    i91: 1,
    i92: 1,
    i93: 1,
    i94: 1,
    i95: 1,
    i96: 1,
    i97: 1,

    i101: 1,
    i102: 1,
    i103: 1,
    i104: 1,
    i105: 1,

    i111: 1,
    i112: 1,
    i113: 1,
    i114: 1,
    i115: 1,
    i116: 1,

    i121: 1,
    i122: 1,
    i123: 1,
    i124: 1,
    i125: 1,

    folg: false,

    roomname: '',

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

  roomname: function (e) {
    this.data.roomname = this.data.getroom.substring(0, 3) //取下划线前的字符
  },

  bindPickerChange: function (e) {
    let tem = parseInt(e.detail.value)
    this.setData({
      ind: tem
    })
  },

  bindPickerChange11: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i11
    this.setData({
      index11: tem
    })
    if (i == 1) {
      if (this.data.index11 == 0) {
        sum += 1,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i11: i
        })
      }
    } else if (i == 2) {
      if (this.data.index11 != 0) {
        sum -= 1,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i11: i
        })
      }
    }
  },

  bindPickerChange12: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i12
    this.setData({
      index12: tem
    })
    if (i == 1) {
      if (this.data.index12 == 0) {
        sum += 1,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i12: i
        })
      }
    } else if (i == 2) {
      if (this.data.index12 != 0) {
        sum -= 1,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i12: i
        })
      }
    }
  },

  bindPickerChange13: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i13
    this.setData({
      index13: tem
    })
    if (i == 1) {
      if (this.data.index13 == 0) {
        sum += 1,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i13: i
        })
      }
    } else if (i == 2) {
      if (this.data.index13 != 0) {
        sum -= 1,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i13: i
        })
      }
    }
  },
  bindPickerChange14: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i14
    this.setData({
      index14: tem
    })
    if (i == 1) {
      if (this.data.index14 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i14: i
        })
      }
    } else if (i == 2) {
      if (this.data.index14 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i14: i
        })
      }
    }
  },


  bindPickerChange21: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i21
    this.setData({
      index21: tem
    })
    if (i == 1) {
      if (this.data.index21 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i21: i
        })
      }
    } else if (i == 2) {
      if (this.data.index21 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i21: i
        })
      }
    }
  },
  bindPickerChange22: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i22
    this.setData({
      index22: tem
    })
    if (i == 1) {
      if (this.data.index22 == 0) {
        sum += 2,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i22: i
        })
      }
    } else if (i == 2) {
      if (this.data.index22 != 0) {
        sum -= 2,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i22: i
        })
      }
    }
  },
  bindPickerChange23: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i23
    this.setData({
      index23: tem
    })
    if (i == 1) {
      if (this.data.index23 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i23: i
        })
      }
    } else if (i == 2) {
      if (this.data.index23 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i23: i
        })
      }
    }
  },
  bindPickerChange24: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i24
    this.setData({
      index24: tem
    })
    if (i == 1) {
      if (this.data.index24 == 0) {
        sum += 2,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i24: i
        })
      }
    } else if (i == 2) {
      if (this.data.index24 != 0) {
        sum -= 2,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i24: i
        })
      }
    }
  },
  bindPickerChange25: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i25
    this.setData({
      index25: tem
    })
    if (i == 1) {
      if (this.data.index25 == 0) {
        sum += 2,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i25: i
        })
      }
    } else if (i == 2) {
      if (this.data.index25 != 0) {
        sum -= 2,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i25: i
        })
      }
    }
  },
  bindPickerChange26: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i26
    this.setData({
      index26: tem
    })
    if (i == 1) {
      if (this.data.index26 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i26: i
        })
      }
    } else if (i == 2) {
      if (this.data.index26 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i26: i
        })
      }
    }
  },

  bindPickerChange31: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i31
    this.setData({
      index31: tem
    })
    if (i == 1) {
      if (this.data.index31 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i31: i
        })
      }
    } else if (i == 2) {
      if (this.data.index31 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i31: i
        })
      }
    }
  },
  bindPickerChange32: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i32
    this.setData({
      index32: tem
    })
    if (i == 1) {
      if (this.data.index32 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i32: i
        })
      }
    } else if (i == 2) {
      if (this.data.index32 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i32: i
        })
      }
    }
  },
  bindPickerChange33: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i33
    this.setData({
      index33: tem
    })
    if (i == 1) {
      if (this.data.index33 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i33: i
        })
      }
    } else if (i == 2) {
      if (this.data.index33 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i33: i
        })
      }
    }
  },
  bindPickerChange34: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i34
    this.setData({
      index34: tem
    })
    if (i == 1) {
      if (this.data.index34 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i34: i
        })
      }
    } else if (i == 2) {
      if (this.data.index34 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i34: i
        })
      }
    }
  },

  bindPickerChange41: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i41
    this.setData({
      index41: tem
    })
    if (i == 1) {
      if (this.data.index41 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i: i
        })
      }
    } else if (i == 2) {
      if (this.data.index41 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i41: i
        })
      }
    }
  },
  bindPickerChange42: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i42
    this.setData({
      index42: tem
    })
    if (i == 1) {
      if (this.data.index42 == 0) {
        sum += 8,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i42: i
        })
      }
    } else if (i == 2) {
      if (this.data.index42 != 0) {
        sum -= 8,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i42: i
        })
      }
    }
  },
  bindPickerChange43: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i43
    this.setData({
      index43: tem
    })
    if (i == 1) {
      if (this.data.index43 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i43: i
        })
      }
    } else if (i == 2) {
      if (this.data.index43 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i43: i
        })
      }
    }
  },
  bindPickerChange44: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i44
    this.setData({
      index44: tem
    })
    if (i == 1) {
      if (this.data.index44 == 0) {
        sum += 4,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i44: i
        })
      }
    } else if (i == 2) {
      if (this.data.index44 != 0) {
        sum -= 4,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i44: i
        })
      }
    }
  },
  bindPickerChange45: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i45
    this.setData({
      index45: tem
    })
    if (i == 1) {
      if (this.data.index45 == 0) {
        sum += 4,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i45: i
        })
      }
    } else if (i == 2) {
      if (this.data.index45 != 0) {
        sum -= 4,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i45: i
        })
      }
    }
  },


  bindPickerChange51: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i51
    this.setData({
      index51: tem
    })
    if (i == 1) {
      if (this.data.index51 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i51: i
        })
      }
    } else if (i == 2) {
      if (this.data.index51 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i51: i
        })
      }
    }
  },
  bindPickerChange52: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i52
    this.setData({
      index52: tem
    })
    if (i == 1) {
      if (this.data.index52 == 0) {
        sum += 8,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i52: i
        })
      }
    } else if (i == 2) {
      if (this.data.index52 != 0) {
        sum -= 8,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i52: i
        })
      }
    }
  },
  bindPickerChange53: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i53
    this.setData({
      index53: tem
    })
    if (i == 1) {
      if (this.data.index53 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i53: i
        })
      }
    } else if (i == 2) {
      if (this.data.index53 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i53: i
        })
      }
    }
  },
  bindPickerChange54: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i54
    this.setData({
      index54: tem
    })
    if (i == 1) {
      if (this.data.index54 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i24: i
        })
      }
    } else if (i == 2) {
      if (this.data.index54 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i54: i
        })
      }
    }
  },
  bindPickerChange55: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i55
    this.setData({
      index55: tem
    })
    if (i == 1) {
      if (this.data.index55 == 0) {
        sum += 2,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i25: i
        })
      }
    } else if (i == 2) {
      if (this.data.index55 != 0) {
        sum -= 2,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i55: i
        })
      }
    }
  },
  bindPickerChange56: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i66
    this.setData({
      index66: tem
    })
    if (i == 1) {
      if (this.data.index66 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i66: i
        })
      }
    } else if (i == 2) {
      if (this.data.index66 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i66: i
        })
      }
    }
  },
  bindPickerChange57: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i57
    this.setData({
      index57: tem
    })
    if (i == 1) {
      if (this.data.index57 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i57: i
        })
      }
    } else if (i == 2) {
      if (this.data.index57 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i57: i
        })
      }
    }
  },
  bindPickerChange58: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i58
    this.setData({
      index58: tem
    })
    if (i == 1) {
      if (this.data.index58 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i58: i
        })
      }
    } else if (i == 2) {
      if (this.data.index58 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i58: i
        })
      }
    }
  },
  bindPickerChange59: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i59
    this.setData({
      index59: tem
    })
    if (i == 1) {
      if (this.data.index59 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i59: i
        })
      }
    } else if (i == 2) {
      if (this.data.index59 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i59: i
        })
      }
    }
  },

  bindPickerChange61: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i61
    this.setData({
      index61: tem
    })
    if (i == 1) {
      if (this.data.index61 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i61: i
        })
      }
    } else if (i == 2) {
      if (this.data.index61 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i61: i
        })
      }
    }
  },
  bindPickerChange62: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i62
    this.setData({
      index22: tem
    })
    if (i == 1) {
      if (this.data.index62 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i62: i
        })
      }
    } else if (i == 2) {
      if (this.data.index62 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i62: i
        })
      }
    }
  },
  bindPickerChange63: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i63
    this.setData({
      index63: tem
    })
    if (i == 1) {
      if (this.data.index63 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i63: i
        })
      }
    } else if (i == 2) {
      if (this.data.index63 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i63: i
        })
      }
    }
  },
  bindPickerChange64: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i64
    this.setData({
      index64: tem
    })
    if (i == 1) {
      if (this.data.index64 == 0) {
        sum += 8,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i64: i
        })
      }
    } else if (i == 2) {
      if (this.data.index64 != 0) {
        sum -= 8,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i64: i
        })
      }
    }
  },
  bindPickerChange65: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i65
    this.setData({
      index65: tem
    })
    if (i == 1) {
      if (this.data.index65 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i65: i
        })
      }
    } else if (i == 2) {
      if (this.data.index65 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i65: i
        })
      }
    }
  },
  bindPickerChange66: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i66
    this.setData({
      index66: tem
    })
    if (i == 1) {
      if (this.data.index66 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i66: i
        })
      }
    } else if (i == 2) {
      if (this.data.index66 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i66: i
        })
      }
    }
  },

  bindPickerChange71: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i71
    this.setData({
      index71: tem
    })
    if (i == 1) {
      if (this.data.index71 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i71: i
        })
      }
    } else if (i == 2) {
      if (this.data.index71 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i71: i
        })
      }
    }
  },
  bindPickerChange72: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i72
    this.setData({
      index72: tem
    })
    if (i == 1) {
      if (this.data.index72 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i72: i
        })
      }
    } else if (i == 2) {
      if (this.data.index72 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i72: i
        })
      }
    }
  },
  bindPickerChange73: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i73
    this.setData({
      index73: tem
    })
    if (i == 1) {
      if (this.data.index73 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i73: i
        })
      }
    } else if (i == 2) {
      if (this.data.index73 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i73: i
        })
      }
    }
  },

  bindPickerChange81: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i81
    this.setData({
      index81: tem
    })
    if (i == 1) {
      if (this.data.index81 == 0) {
        sum += 4,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i81: i
        })
      }
    } else if (i == 2) {
      if (this.data.index81 != 0) {
        sum -= 4,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i81: i
        })
      }
    }
  },
  bindPickerChange82: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i82
    this.setData({
      index82: tem
    })
    if (i == 1) {
      if (this.data.index82 == 0) {
        sum += 2,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i82: i
        })
      }
    } else if (i == 2) {
      if (this.data.index82 != 0) {
        sum -= 2,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i82: i
        })
      }
    }
  },
  bindPickerChange83: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i83
    this.setData({
      index83: tem
    })
    if (i == 1) {
      if (this.data.index83 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i83: i
        })
      }
    } else if (i == 2) {
      if (this.data.index83 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i83: i
        })
      }
    }
  },
  bindPickerChange84: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i84
    this.setData({
      index84: tem
    })
    if (i == 1) {
      if (this.data.index84 == 0) {
        sum += 4,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i84: i
        })
      }
    } else if (i == 2) {
      if (this.data.index84 != 0) {
        sum -= 4,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i84: i
        })
      }
    }
  },
  bindPickerChange85: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i85
    this.setData({
      index85: tem
    })
    if (i == 1) {
      if (this.data.index85 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i85: i
        })
      }
    } else if (i == 2) {
      if (this.data.index85 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i85: i
        })
      }
    }
  },

  bindPickerChange91: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i91
    this.setData({
      index91: tem
    })
    if (i == 1) {
      if (this.data.index91 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i91: i
        })
      }
    } else if (i == 2) {
      if (this.data.index91 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i91: i
        })
      }
    }
  },
  bindPickerChange92: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i92
    this.setData({
      index92: tem
    })
    if (i == 1) {
      if (this.data.index92 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i92: i
        })
      }
    } else if (i == 2) {
      if (this.data.index92 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i92: i
        })
      }
    }
  },
  bindPickerChange93: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i93
    this.setData({
      index93: tem
    })
    if (i == 1) {
      if (this.data.index93 == 0) {
        sum += 4,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i93: i
        })
      }
    } else if (i == 2) {
      if (this.data.index93 != 0) {
        sum -= 4,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i93: i
        })
      }
    }
  },
  bindPickerChange94: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i94
    this.setData({
      index94: tem
    })
    if (i == 1) {
      if (this.data.index94 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i94: i
        })
      }
    } else if (i == 2) {
      if (this.data.index94 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i94: i
        })
      }
    }
  },
  bindPickerChange95: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i95
    this.setData({
      index95: tem
    })
    if (i == 1) {
      if (this.data.index95 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i95: i
        })
      }
    } else if (i == 2) {
      if (this.data.index95 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i95: i
        })
      }
    }
  },
  bindPickerChange96: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i96
    this.setData({
      index96: tem
    })
    if (i == 1) {
      if (this.data.index96 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i96: i
        })
      }
    } else if (i == 2) {
      if (this.data.index96 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i96: i
        })
      }
    }
  },
  bindPickerChange97: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i94
    this.setData({
      index94: tem
    })
    if (i == 1) {
      if (this.data.index94 == 0) {
        sum += 4,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i24: i
        })
      }
    } else if (i == 2) {
      if (this.data.index94 != 0) {
        sum -= 4,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i94: i
        })
      }
    }
  },

  bindPickerChange101: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i101
    this.setData({
      index21: tem
    })
    if (i == 1) {
      if (this.data.index101 == 0) {
        sum += 4,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i101: i
        })
      }
    } else if (i == 2) {
      if (this.data.index101 != 0) {
        sum -= 4,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i2101: i
        })
      }
    }
  },
  bindPickerChange102: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i102
    this.setData({
      index102: tem
    })
    if (i == 1) {
      if (this.data.index102 == 0) {
        sum += 4,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i102: i
        })
      }
    } else if (i == 2) {
      if (this.data.index102 != 0) {
        sum -= 4,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i102: i
        })
      }
    }
  },
  bindPickerChange103: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i103
    this.setData({
      index103: tem
    })
    if (i == 1) {
      if (this.data.index103 == 0) {
        sum += 3,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i103: i
        })
      }
    } else if (i == 2) {
      if (this.data.index103 != 0) {
        sum -= 3,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i103: i
        })
      }
    }
  },
  bindPickerChange104: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i24
    this.setData({
      index104: tem
    })
    if (i == 1) {
      if (this.data.index104 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i104: i
        })
      }
    } else if (i == 2) {
      if (this.data.index104 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i104: i
        })
      }
    }
  },
  bindPickerChange105: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i105
    this.setData({
      index105: tem
    })
    if (i == 1) {
      if (this.data.index105 == 0) {
        sum += 4,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i105: i
        })
      }
    } else if (i == 2) {
      if (this.data.index105 != 0) {
        sum -= 4,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i105: i
        })
      }
    }
  },

  bindPickerChange111: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i111
    this.setData({
      index111: tem
    })
    if (i == 1) {
      if (this.data.index111 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i111: i
        })
      }
    } else if (i == 2) {
      if (this.data.index111 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i111: i
        })
      }
    }
  },
  bindPickerChange112: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i112
    this.setData({
      index112: tem
    })
    if (i == 1) {
      if (this.data.index112 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i112: i
        })
      }
    } else if (i == 2) {
      if (this.data.index112 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i112: i
        })
      }
    }
  },
  bindPickerChange113: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i113
    this.setData({
      index113: tem
    })
    if (i == 1) {
      if (this.data.index113 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i113: i
        })
      }
    } else if (i == 2) {
      if (this.data.index113 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i113: i
        })
      }
    }
  },
  bindPickerChange114: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i114
    this.setData({
      index114: tem
    })
    if (i == 1) {
      if (this.data.index114 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i114: i
        })
      }
    } else if (i == 2) {
      if (this.data.index114 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i114: i
        })
      }
    }
  },
  bindPickerChange115: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i115
    this.setData({
      index115: tem
    })
    if (i == 1) {
      if (this.data.index115 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i115: i
        })
      }
    } else if (i == 2) {
      if (this.data.index115 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i115: i
        })
      }
    }
  },
  bindPickerChange116: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i116
    this.setData({
      index116: tem
    })
    if (i == 1) {
      if (this.data.index116 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i116: i
        })
      }
    } else if (i == 2) {
      if (this.data.index116 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i116: i
        })
      }
    }
  },

  bindPickerChange121: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i121
    this.setData({
      index121: tem
    })
    if (i == 1) {
      if (this.data.index121 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i121: i
        })
      }
    } else if (i == 2) {
      if (this.data.index121 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i121: i
        })
      }
    }
  },
  bindPickerChange122: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i122
    this.setData({
      index122: tem
    })
    if (i == 1) {
      if (this.data.index122 == 0) {
        sum += 6,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i122: i
        })
      }
    } else if (i == 2) {
      if (this.data.index122 != 0) {
        sum -= 6,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i122: i
        })
      }
    }
  },
  bindPickerChange123: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i123
    this.setData({
      index123: tem
    })
    if (i == 1) {
      if (this.data.index123 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i123: i
        })
      }
    } else if (i == 2) {
      if (this.data.index123 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i123: i
        })
      }
    }
  },
  bindPickerChange124: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i124
    this.setData({
      index124: tem
    })
    if (i == 1) {
      if (this.data.index124 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i124: i
        })
      }
    } else if (i == 2) {
      if (this.data.index124 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i124: i
        })
      }
    }
  },
  bindPickerChange125: function (e) {
    let tem = parseInt(e.detail.value)
    var sum = this.data.sum;
    var i = this.data.i125
    this.setData({
      index125: tem
    })
    if (i == 1) {
      if (this.data.index125 == 0) {
        sum += 12,
          i += 1,
          console.log(i)
        this.setData({
          sum: sum,
          i125: i
        })
      }
    } else if (i == 2) {
      if (this.data.index125 != 0) {
        sum -= 12,
          i -= 1,
          console.log(i)
        this.setData({
          sum: sum,
          i125: i
        })
      }
    }
  },

  bindTextAreaBlur: function (e) {
    console.log(e.detail.value);
    this.setData({
      details: e.detail.value
    });
  },

  async getList() {
    //初始化指令
    const db = wx.cloud.database();
    //指定当前库名
    let {
      data
    } = await db.collection("jilu")
      .where({}) //根据条件查找
      .get() //获取查找的结果
    this.setData({
      list: data,
      xuhao: data.length
    })
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
    let {
      folg,
      roomname
    } = this.data
    console.log(roomname)
    if (roomname != 'JXA' && roomname != 'JXB' && roomname != 'JXC' && roomname != 'JSA' && roomname != 'JSB' && roomname != 'JSC' && roomname != 'GZA' && roomname != 'GZB' && roomname != 'GZC') {
      wx.showToast({
        title: '请填写正确房间号,如JXC303',
        icon: "none",
        duration: 2000,
      })
      return
    } else if (folg) {
      wx.showToast({
        title: '请填写房间号',
        icon: "none",
        duration: 2000,
      })
      return
    } else {
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
                fileIDs: this.data.fileIDs.concat(res.fileID)
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
        getroom,
        details,
        name1,
        time,
        sum
      } = that.data
      Promise.all(promiseArr).then(res => {
        console.log("fileIDs", that.data.fileIDs) //输出上传后图片的返回地址
        wx.cloud.database().collection('jilu')
          .add({ //添加数据
            data: {
              jianchayuan: name1,
              room: getroom,
              pro: details,
              time: time,
              fileIDs: that.data.fileIDs,
              k11: this.data.index11,
              k12: this.data.index12,
              k13: this.data.index13,
              k14: this.data.index14,
              
              k21: this.data.index21,
              k22: this.data.index22,
              k23: this.data.index23,
              k24: this.data.index24,
              k25: this.data.index25,
              k26: this.data.index26,

              k31: this.data.index31,
              k32: this.data.index32,
              k33: this.data.index33,
              k34: this.data.index34,

              k41: this.data.index41,
              k42: this.data.index42,
              k43: this.data.index43,
              k44: this.data.index44,
              k45: this.data.index45,

              k51: this.data.index51,
              k52: this.data.index52,
              k53: this.data.index53,
              k54: this.data.index54,
              k55: this.data.index55,
              k56: this.data.index56,
              k57: this.data.index57,
              k58: this.data.index58,
              k59: this.data.index59,

              k61: this.data.index61,
              k62: this.data.index62,
              k63: this.data.index63,
              k64: this.data.index64,
              k65: this.data.index65,
              k66: this.data.index66,

              k71: this.data.index71,
              k72: this.data.index72,
              k73: this.data.index73,

              k81: this.data.index81,
              k82: this.data.index82,
              k83: this.data.index83,
              k84: this.data.index84,
              k85: this.data.index85,

              k91: this.data.index91,
              k92: this.data.index92,
              k93: this.data.index93,
              k94: this.data.index94,
              k95: this.data.index95,
              k96: this.data.index96,
              k97: this.data.index97,

              k101: this.data.index101,
              k102: this.data.index102,
              k103: this.data.index103,
              k104: this.data.index104,
              k105: this.data.index105,

              k111: this.data.index111,
              k112: this.data.index112,
              k113: this.data.index113,
              k114: this.data.index114,
              k115: this.data.index115,
              k116: this.data.index116,

              k121: this.data.index121,
              k122: this.data.index122,
              k123: this.data.index123,
              k124: this.data.index124,
              k125: this.data.index125,

              sum: sum,
              tili: this.data.ind,
              pro1: "",
              fileIDs1: ""
            },
            success(res) {
              console.log("添加成功", res)
              // console.log( res.data)

              wx.showToast({
                icon: 'none',
                title: '提交成功',
                // duration:2000,
              })

              that.setData({
                folg: true,
              })

              setTimeout(function () {
                wx.reLaunch({
                  url: '../dengji2/dengji2',
                })
              }, 200) //延迟时间 这里是0.2秒


            },
            fail(res) {
              console.log("添加失败", res)

              wx.showToast({
                icon: 'none',
                title: '提交失败',
              })

            }
          })
        wx.cloud.database().collection('ar_sum').where({
          room: that.data.getroom,
          edata: that.data.time.substring(0, 7)
        }).get({
          success: res => {
            console.log(res)
            console.log("成功")
            let temp = res.data
            console.log(temp)

            if (temp == "") {
              console.log(that.data)
              wx.cloud.database().collection('ar_sum').add({
                data: {
                  edata: that.data.time.substring(0, 7),
                  room: that.data.getroom,
                  sum: that.data.sum
                }

              })
            } else {
              let idd = temp[0]._id
              let sum1 = temp[0].sum
              sum1 += that.data.sum
              console.log(sum1)
              console.log(idd)
              wx.cloud.database().collection('ar_sum').doc(idd).update({
                data: {
                  sum: sum1
                }
               
              })
              console.log(sum)
            }

          }
        })
      })
    }
  },

  onLoad: function (options) {
    this.getList()
    user.get({
      success: res => {
        this.setData({
          user: res.data
        })
      }
    })
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
    showView: (options.showView == "true" ? true : false)
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let user = wx.getStorageSync('user')
    this.setData({
      name1: user.Account
    })
  },
})