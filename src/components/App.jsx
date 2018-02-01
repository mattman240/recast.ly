// need to keep track of currentVid (this.videos[0])??
// event function in App, listener on click which then 
// will change the state of our current vid



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currVid: window.exampleVideoData[0]  
    };
    this.onTitleClick = this.onTitleClick.bind(this);
    
  }
  
  componentDidMount() {
    this.props.searchYouTube({query:'hackreactor'}, (videos) => {
      this.setState({
        videos: videos,
        currVid: videos[0]
      });
    }); 
  }


  onTitleClick(video) {
    this.setState({
      currVid: video
    });
  }
  
  // var searchYouTube = (options, callback)
  

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currVid}/></div>
          </div>
          <div className="col-md-5">
            <div> <VideoList videos={this.state.videos} onTitleClick={this.onTitleClick}/> </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//test


