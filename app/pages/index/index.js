'use strict';

import { html2json } from '../../src/html2json';
import { indexTemplate } from '../../templates/indexTemplate';

Page({
  data: {
    specialtyArray: [ '设计', '工程', '餐饮', '企划', '艺术' ],
  	specialty: [
      {
        id: 0,
        name: '设计'
      },
      {
        id: 1,
        name: '工程'
      },
      {
        id: 2,
        name: '餐饮'
      },
      {
        id: 3,
        name: '企划'
      },
      {
        id: 4,
        name: '艺术'
      }
    ],
    artPlanType: '',
    startDate: '',
    endDate: ''
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  bindSpecPickerChange: function(e) {
    this.setData({
      artPlanType: e.detail.value
    })
  },
  bindStartDateChange: function(e) {
    this.setData({
      startDate: e.detail.value
    })
  },
  bindEndDateChange: function(e) {
    this.setData({
      endDate: e.detail.value
    })
  }
});