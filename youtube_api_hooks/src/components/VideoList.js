import React from 'react';
import VideoItem from './VideoItem';

// passed `state.videos` from `App` as props.videos, then de-structured
const VideoList = ({videos, onVideoSelect}) => {

  const renderedList = videos.map(video => {
    return(
      <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    )
  })
  return(
    <div>
      
      <div className="ui relaxed divided list">
        {videos.length === 0 ? "Enter a Search Term" : `Found ${videos.length} Videos.`}
        {renderedList}
      </div>
    </div>
  )
}

export default VideoList;