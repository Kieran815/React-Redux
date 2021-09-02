import React from 'react';

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="massive ui text loader">{props.text}</div>
    </div>
  )
}

// *** Default Props:
// you can pass default prop values to a component using:
// `${component}.defaultProps`, like so...
Loader.defaultProps = {
  text: "Loading Page, Please Wait..."
}

export default Loader;