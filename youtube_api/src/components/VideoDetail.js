import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  // pull `video` id from api response and add to url
  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        {/* created url passed as `src` */}
        <iframe title="videoPlayer" src={videoSource} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;