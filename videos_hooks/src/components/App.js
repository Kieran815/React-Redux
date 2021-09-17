import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YouTube from '../api/youtube';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  // this method will give the player a default search term so the app isn't blank
  componentDidMount() {
    this.onTermSubmit('cats')
  }

  // API key test, remove at end
  // testAPI() {
  //   console.log(`YouTube API: ${process.env.REACT_APP_YT_API}`)
  // }

  onTermSubmit = async term => {
    console.log(`Searching For: ${term}`);
    const youTubeResponse = await YouTube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: youTubeResponse.data.items,
      selectedVideo: youTubeResponse.data.items[0]
    });
    console.log(this.state.videos);
  }

  onVideoSelect = video => {
    this.setState({selectedVideo: video});
    console.log(this.state.selectedVideo);
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;