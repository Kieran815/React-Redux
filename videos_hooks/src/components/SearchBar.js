// refactor from class component to functional component
import React, { useState } from 'react';

const SearchBar = ({onTermSubmit}) => {

  const [searchTerm, setSearchTerm] = useState('');

  // `onSubmit` Event Handler
  const onFormSubmit = (event) => {
    // `preventDefault` to prevent page refresh
    event.preventDefault();
    // set up api call
    // pass `searchTerm` up to`App` through `props.onTermSubmit()`
    onTermSubmit(searchTerm);
  }

  return(
    <div className="search-bar ui segment">
      <form
        className="ui form"
        onSubmit={onFormSubmit}  
      >
        <div className="field">
          <label>Search Videos:</label>
          {/* set up controlled component by linking to `state` via `value` prop */}
          <input
            type="text"
            placeholder="Enter Search Term"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}  
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;