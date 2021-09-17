// refactor from class component to functional component
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YouTube from '../api/youtube';

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // this method will give the player a default search term so the app isn't blank
  useEffect(() => {
    onTermSubmit('cats')
  }, [])

  // API key test, remove at end
  // testAPI() {
  //   console.log(`YouTube API: ${process.env.REACT_APP_YT_API}`)
  // }

  const onTermSubmit = async term => {
    const response = await YouTube.get('/search', {
      params: {
        q: term
      }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  return(
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;