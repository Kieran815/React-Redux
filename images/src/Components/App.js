import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// App Work Flow:
  // Initial App Render, SearchBar, no Images
  // `onSearchSubmit` method called
  // `axios` sends request to Unsplash
    // request response
  // Set Image Data on `state` of `App.js`
  // `App.js` re-renders and shows images via `ImageList.js`

class App extends React.Component {
  state = {
    // `images` initialized as empty array so it can have immediate access to array methods
      // in this case, using the `map` method, which is built into arrays and won't throw an `undefined` error
    images: []
  }


  // adding `async` allows use of the `async/await` methods for data fetching
  // add `async` before passed variable to bind 
  onSearchSubmit = async (term) => {
    console.log(term);
    // default params imported from `unsplash.js` (see imports)
    // `axios` sents `GET` request to url
    // assign the method to a variable
    const response = await unsplash.get('/search/photos', {
      // pass `term` to query parameters
      params: {query: term}
    })
    
    // returns response from data fetch request
    // assign response via `this.setState`
    this.setState({ images: response.data.results });
    // console.log(this.state.images);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar
          // passing method as `prop` down to `SearchBar`
          onSearchSubmit={this.onSearchSubmit}
        />
        Found: {this.state.images.length} images.
        <ImageList images={this.state.images} />
      </div>
    )
  }
}


export default App;