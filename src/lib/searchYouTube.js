var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      q: options.query || 'cute dogs',
      maxResults: options.max || 5,
      key: options.key || window.YOUTUBE_API_KEY
    },
    success: function(data) {
      console.log('success', data.items);
      callback(data.items);
    },
    error: function(err) {
      console.error(err);
    }
  });
};

window.searchYouTube = searchYouTube; //_.debounce(searchYouTube, 500);
