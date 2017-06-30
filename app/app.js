(function() {

  App({
    onLaunch: function(options) {
      // Do something initial when launch.
      console.log('launch app');
    },
    onShow: function(options) {
        // Do something when show.
        console.log('show app');
    },
    onHide: function() {
        // Do something when hide.
        console.log('hide app');
    },
    onError: function(msg) {
      console.log(msg)
    },
    globalData: 'I am global data'
  });
}());