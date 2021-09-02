// reconfigured unsplash api call
// this refactor makes it so the api defaults are imported from this file instead of the whole axios library
// will be used extensively in later apps.

// ***NOTE: normally, you would make a component to handle the whole process, but this is for a course...

import axios from 'axios';

// `.create` creates instance of axios with a few defaults
export default axios.create({
  // pulled `baseURL` and `headers` from `axios.get` in `App.js`
  baseURL: 'https://api.unsplash.com',
  headers: {
    // API Key for Unsplash App
    Authorization: "Client-ID zh48Os3e3p62KEXOxhtL4FI6sBf7gnlftnz8mC3QuKE"
  }
})