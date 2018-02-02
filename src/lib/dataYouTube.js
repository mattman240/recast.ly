//id needs to be passed in from the first call to youtube and the current vid
var dataYouTube = (vid, cb) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos/',
    type: 'GET',
    data: {
      part: 'statistics',
      id: vid,
      key: window.YOUTUBE_API_KEY
    },
    success: function(data) {
      console.log('success', data);
      cb(data);
    },
    error: function(err) {
      console.error(err);
    }
  });
};

window.dataYouTube = dataYouTube; //_.debounce(searchYouTube, 500);
