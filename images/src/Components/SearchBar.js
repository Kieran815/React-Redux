import React from 'react';


// SearchBar Work Flow
  // User types in input
  // Callback gets invoked
  // update `state` with new value via `setState`
  // Component re-renders w/ new state value
  // Input is told what it's value is (comes from `state.term`)

// **** CONTROLLED COMPONENT ****
  // all state values are handled directly by `state`
  // as opposed to...
// **** UNCONTROLLED COMPONENT ****
  // values are handled by HTML input or DOM

class SearchBar extends React.Component {

  state = {
    term: ''
  }

  // *** `onChange` METHOD
  // respond to user input
  // `event` pulls value that user entered into input
  // react will call method when user types in text field
  // NOT CURRENTLY USED
  onInputChange(event) {
    console.log(event.target.value.toUpperCase());
  }

  // *** `onClick` METHOD
  // CURRENTLY USED
  onInputClick() {
    console.log("Input Was Clicked");
  }

  // *** `onSubmit` METHOD
  // CURRENTLY USED
  // Arrow Functions will bind `this` directly to the class instance
  // this prevents `undefined state` errors
  // see also `onChange` in `form` below
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    // `onSearchSubmit` passed from `App.js` as props.
      // methods passed to classes use the `this` keyword
        // refers to `this` instance of `SearchBar` props
    this.props.onSearchSubmit(this.state.term);
  }



  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            {/* 
              `onChange` is the method to update interface on user input;
              links to JS methods/function; uses `this` to refer to methods inside component;
              DO NOT ADD `()`:
                `()` calls function on component rendering, which we don't want
                leaving `()` off makes it so the function will be called in the future
             */}
            <input 
              type="text"
              // `value` set to match state (`state.term`)
              value={this.state.term}
              // use `setState` to update `term` value to match input
              // as soon as user types in `input` field, the `state.term` value is updated
                // passing state this way makes it a CONTROLLED COMPONENT
              // the `value` prop (above) is updated with the current state
              // *** `this` from above
                // passing the inline callback directly to the event handler will also bind `this` to the method
                // binding again prevents `undefined state` errors
              onChange={(e) => this.setState({ term: e.target.value})}
              onClick={this.onInputClick}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;