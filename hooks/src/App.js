import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a Frontend JavaScript Framework.'
  },
  {
    title: 'What are you doing?',
    content: 'Working With React.'
  },
  {
    title: 'Why?',
    content: 'To be a better developer.'
  }
]

export default () => {
  return(
    <div>
      <br/>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
    
  )
}
