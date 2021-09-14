// https://translation.googleapis.com/language/translate/v2
// key: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Convert = ({ language, text }) => {

  const [translated, setTranslated] = useState('');

  useEffect(() => {

    // helper function to run as `async/await`
    // `useEffect` CAN NOT run as async, need helper function
    const runTranslate = async () => {
      // second object `{}` is empty
        // says we don't want to send any info as part of body of request
      // third object is the params for the api call
      // *** `data` destructured from response object (i.e.- `res.data` from JSON)
      const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target:language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      });
      setTranslated(data.data.translations[0].translatedText)
    }
    runTranslate();

  }, [language, text])

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}

export default Convert;