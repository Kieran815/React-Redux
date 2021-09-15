import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
      <Header />
      {/* JSX tag inside a JSX tag is a child of the parent tag. i.e. Route > Accordion */}
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select Color" options={options} selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}

export default App;