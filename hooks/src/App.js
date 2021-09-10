import React, {useState} from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown'

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

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },
  {
    label: 'The Color Green',
    value: 'green'
  }
]

export default () => {

  const [selected, setSelected ] = useState(options[0]);

  return(
    <div>
      <br/>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
    </div>
    
  )
}
