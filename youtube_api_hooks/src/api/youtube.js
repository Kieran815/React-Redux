import axios from 'axios';

// key from youTube api, located in `.env` in root


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: process.env.REACT_APP_YT_API
  }
});