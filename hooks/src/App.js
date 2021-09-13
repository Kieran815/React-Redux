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

const App = () => {

  const [selected, setSelected ] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return(
    <div>
      <br/>
      <button onClick={() => {setShowDropdown(!showDropdown)}}>
        Toggle Dropdown
      </button>

      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {showDropdown ?
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> : null}
    </div>
    
  )
}

export default App;