import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Spanish',
    value: 'es'
  },
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]



const Translate = () => {

  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Term</label>
          {/* assign input to `state.text` */}
          <input type='text' value={text} onChange={(e) => {
            setText(e.target.value);
          }} />
        </div>
      </div>
      <br />
      <Dropdown
        label="Select Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  )
}

export default Translate;