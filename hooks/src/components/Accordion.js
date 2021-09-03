import React, { Fragment } from 'react';

const Accordion = ({items}) => {
  const renderedItems = items.map(item => {
    return (
      <Fragment key={item.title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          {item.content}
        </div>
      </Fragment>
    )
  })
  return (
    <div className="ui styled accordion">{renderedItems}</div>
  )
}

export default Accordion;