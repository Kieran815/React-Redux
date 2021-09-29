import React, { Component } from 'react';
import UserCreate from './UserCreate'

// **** CONTEXT API ****
// `context` api is designed to communicate state info from a parent component to a nested child component (eliminates prop drilling)
  // will transfer state data from `App` to `Field` and `Button`

//  *** INFO IN & INFO OUT ***
  // 2 ways to get info in and 2 ways to get info out:
    // DATA IN:
      // create `Default Values` when context object is created
      // create a `Provider` component, which pushes info into context object
    // DATA OUT:
      // use `this.context`
      // create a `Context Consumer` component
class App extends Component {
  state={
    language: 'english'
  }

  onLanguageChange = language => {
    this.setState({language});
  }

  render() {
    return (
      <div className='ui container'>
        <div>
          Select Language:
          <i className='flag us' onClick={() => this.onLanguageChange('english')} />
          <i className='flag mx' onClick={() => this.onLanguageChange('spanish')} />
        </div>
        <UserCreate />
      </div>
    )
  }
}

export default App;