import React, { Component } from 'react';

class SearchBar extends Component {
  state ={
    searchTerm: ''
  };

  // `onChange` Event Handler
  updateSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value});
  }

  // `onSubmit` Event Handler
  onFormSubmit = (event) => {
    // `preventDefault` to prevent page refresh
    event.preventDefault();
    // set up api call
    // pass `state.searchTerm` up to`App` through `props.onTermSubmit()`
    this.props.onTermSubmit(this.state.searchTerm);
  }

  render() {
    return(
      <div className="search-bar ui segment">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}  
        >
          <div className="field">
            <label>Search Videos:</label>
            {/* set up controlled component by linking to `state` via `value` prop */}
            <input
              type="text"
              placeholder="Enter Search Term"
              value={this.state.searchTerm}
              onChange={this.updateSearchTerm}  
            />
          </div>
        </form>

      </div>

    )
  }
}

export default SearchBar;