import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  console.log(props.images);

  // create an `images` variable that maps out each image from `props`
    //  `props.images` passed from `state.images` in `App.js`
    // variable values destructured from `images` objects
  const images= props.images.map(image => {
    return(
      <ImageCard image={image} key={image.id} />
    )
  })
  return (
      <div className="image-list">
        {/* maps out images from unsplash api call  */}
        {images}
      </div>
  )
}

export default ImageList;