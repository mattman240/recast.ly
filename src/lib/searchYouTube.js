var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url:'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      q: options.query,
      maxResults: options.max,
      key: options.key
    },
    success: function(data) {
      callback(data);
      console.log('success');
    },
    error: function(err) {
      console.error(err);
    }
  });
};

window.searchYouTube = searchYouTube;
