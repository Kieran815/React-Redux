import React, { Component } from 'react';
// import context object into components that use the context state:
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {

  // `contextType` imports the context from the `context` object for use in components
  static contextType = LanguageContext;

  render () {
    return (
      <button className='ui button primary'>Submit</button>
    )
  }
}

export default Button;