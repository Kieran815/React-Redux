// import the `useState` hook
import React, { Fragment, useState } from 'react';

const Accordion = ({items}) => {

  // `useState` gives functional components access to the react state system
  // initialize state using `useState`
  // MUST CALL SEPARATE `setState` FOR EACH STATE VALUE!!!
  // uses destructuring to create variables for state:
  // const [`piece of state`, `function to change piece of state`] = useState(`initial state value`)
  const [activeIndex, setActiveIndex] = useState(null);

  // Difference between Class and Functional Components:
    //                 Class Component:                    Functional Component:
    // initialization: `state = { activeIndex: 0 }    ===> `useState(0)`
    // reference:      `this.state.activeIndex`       ===> `activeIndex`
    // updates:        `this.setState({activeIndex})` ===> `setActiveIndex(10)`

  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {

    // add `active` class to selected `activeIndex` element
    // compares selected item index to current active item index
    const active = index === activeIndex ? 'active' : '';
    return (
      <Fragment key={item.title}>
        <div
          className={`title ${active}`}
          // wrapping callback in arrow function prevents the callback from running on render
          // makes it so the callback only runs if called, in this case `onClick`
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          {item.content}
        </div>
      </Fragment>
    )
  })

  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  )
}

export default Accordion;