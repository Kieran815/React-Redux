import React from 'react';

// CardImage Work Flow:
  // ImageCard renders itself and its image
  // Reach into DOM and Figure out height of the image
  // Set Image Height on state to get component to re-render
  // while re-rendering, assign 'grid-row-end' to make sure image takes up appropriate space


// *** USE `ref`s to access DOM elements
  // `ref` is a JS property that has a `current` property, which references a particular DOM element/node
  // gives access to a single DOM element
  // create `ref` in the `constructor`, assign them to instance variables, then pass `ref` to JSX element as `props`


class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    };

    // create`ref` inside `constructor`
    // pass to DOM element as `ref` prop
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // add event listener to access properties of successfully loaded image
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // set `span` heights for grid display in `ImageList.js`
  // use Arrow Function to bind function to current instance of `this`
  setSpans = () => {
    // console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  }

  render() {

    const { description, urls } = this.props.image;
    
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          // add `ref` to element as a `prop`
          // `ref` will give add'l info about DOM element
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard;