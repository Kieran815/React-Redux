// INTRO TO REACT CLASSES
// classes allow you to use React's State System
  // Different from Hooks

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import './index.css';

// *** APP LIFECYCLE WALKTHROUGH
// JS file loaded by browser
// Instance of `App` component created
// App component's `constructor` function called
// `state` object is created and assigned to the `this.state` prop
// call additional methods (this case: geolocation services)
// React calls component's `render` method
// App returns JSX, which gets rendered as HTML
// receives results of additional methods (geolocation)
// `state` updated via `this.setState`
// React sees updated `state`
// React re-renders component with new state values
  // returns updated JSX
// React updates content on screen



// RULES OF REACT CLASSES:
  // MUST BE a JavaScript Class
  // MUST `extend` (creates sub-class) `React.Component`
  // MUST define `render` method that returns some JSX



// using `extends` allows class-based component to use additional methods from the react library (sub-classes import everything from the parent class, as per JavaScript)
class App extends React.Component {
  // RULES OF REACT STATE MANAGEMENT IN CLASSES
    // *** STATE is only usable with class components (functional components can use hooks; hooks system is different that state system)
    // 'state` is a JS object that contains data relevant to a component
    // updating `state` on a component causes the component to re-render
    // `state` must be initialized when a component is created
    // *** `state` can ONLY BE UPDATED USING `setState`
  
  // // state uses constructor method from vanilla JS
  //   // `constructor` is first method called in any JS Class;
  //   // useful to assign initial state parameters
  // constructor(props) {
  //   // super comes from `React.Component
  //   // `super` is a reference to parent's constructor function, not JS constructor function;
  //   super(props);
  //   // after `super` is called, you can initialize `state`
  //   // THIS IS THE ONLY TIME YOU DO DIRECT STATE ASSIGNMENT
  //     // otherwise, ONLY USE `setState`
  //   this.state ={
  //     lat: null,
  //     errorMessage: ''
  //   };  
  // }
  // **** `state` can also be written outside of constructor method directly as:
  state = {
    lat: null,
    // added `long` for fun
    long: null,
    errorMessage: ''}

// *** LifeCycle Methods:
  // Component Lifecycle Method w/ Methods
    // constructor
      // good for one-time setup
    // render
      // AVOID ANYTHING BESIDES RETURNING JSX
    // ** componentDidMount(): runs on component creation
      // best for data-loading
      // makes it easier for next engineer to see all of the data fetching
  componentDidMount() {
    console.log("Component Rendered")
    // **** DO NOT PUT CALLBACKS IN THE RENDER METHOD
    // **** Place them inside `componentDidMount()`
      // `render` method gets called frequently, so every time the component is re-rendered, the call is made again. This increases the page load time. Having callbacks in `componentDidMount()` prevents the method from calling multiple times.
    // basic geolocation from MDN
    // uses browser to identify location
    // JS file loaded by browser
    // App component gets created/mounted
    // We call geolocation service
    // App returns JSX, gets rendered as HTML
    // Receive results of geolocation and `setState`
    // Tell component to re-render with new information (updates state)
    window.navigator.geolocation.getCurrentPosition(
      // test/log lat and long positions
      position => {
        console.log(position)
        // use `setState` to change `state` value
          // `setState` added from `extends React.Component`
        this.setState({lat: position.coords.latitude})
        this.setState({long: position.coords.longitude})
      },
      // check for errors
      err => {
        console.log(err)
        this.setState({errorMessage: err.message})
        // alert(errorMessage)
      }
    )
  }
          
  // app updates and render method is called again
  // ** componentDidUpdate(): runs on EVERY component update
    // best for additional data-loading when state/props change
  componentDidUpdate() {
    console.log("Component Updated/Re-rendered");
  }
  // component no longer shown
  // ** componentWillUnmount(): runs on component removal
    // best for cleanup (esp non-react data/methods)
  componentWillUnmount() {
    console.log("Component Removed")
  }

  // helper function
  renderComponent() {
    // Conditional Rendering based on State Values:
    // error message and no lat
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    // no error and lat
    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      // `state.lat` passed as prop to `SeasonDisplay` component
      // updating `state` will also re-render children components as well
      return <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
    }
    // everything else
    // pass text as prop to render individual message for reusability
    return <Loader text="Please Allow Browser to Identify Your Location..." />
  }

  render() {
    return (
    <div className= "border">
      {this.renderComponent()}
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));