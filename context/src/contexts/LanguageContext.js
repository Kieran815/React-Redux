// Create a `context` object and export it
// import `context` object ONLY INTO COMPONENTS THAT NEED THE STATE
  // in this case, context will go from `App` to `Button`/`Field`


// Below is all you need to create a `context` object

/*
import React from 'react';

export default React.createContext();
*/

// you can also pass default values to the context object, like so:
import React from 'react';

export default React.createContext('english');