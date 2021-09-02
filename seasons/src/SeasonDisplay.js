import React from 'react';
// import `css` files directly with no name
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "It's Hot, Son!!!",
    iconName: "sun"
  },
  winter: {
    text: "It's Cold, Son!!!",
    iconName: "snowflake"
  }
}

// CONVENTION: try to put as little logic in functional components as possible
  // like `componentDidMount()`, this makes it easier for other devs to know how the component works
const getSeason = (lat, month) => {
  // if/else for conditional rendering
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
};

const SeasonDisplay = (props) => {
  // `state.lat` and `state.long` passed to child component (`SeasonDisplay`) as `props` from parent component (`App`)
  console.table(props);
  console.log(`Latitude: ${props.lat}`);
  console.log(`Longitude: ${props.long}`);

  // pass `props.lat` and `Date().getMonth()` into function to get `season` value
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);

  // js destructuring of `seasonConfig` object
    // `seasonConfig` used to shorten code by having only one ternary statement instead of two
  const { text, iconName } = seasonConfig[season];

  return (
    // pass `seasonConfig` values from destructuring via string interpolation
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay;