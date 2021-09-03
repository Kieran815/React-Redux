import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a Frontend JavaScript Framework.'
  },
  {
    title: 'What are you doing?',
    content: 'Trying to get a better job'
  },
  {
    title: 'Why?',
    content: 'Because they LIED to me!!!'
  }
]

export default () => {
  return(
    <div>
      Hello From App
      <Accordion items={items} />
    </div>
    
  )
}
