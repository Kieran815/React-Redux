import React, { useState, useEffect } from 'react';
import axios from 'axios';

// en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming

// `useEffect` allows react to detect when component is re-rendering and some information has changed
// Notes:
  // allows function components to use "something like" lifecycle methods (ex. componentDidMount())
  // configure the hook to run some code automatically in one of three scenarios:
    // 1) []: When the component is rendered for the first time (* Only Ran Once, then not again)
    // 2) blank, no params: When the component is rendered for the first time and whenever it re-renders
    // 3) [state]: When the component is rendered for the first time and whenever it re-renders and some piece of data has changed. (* both re-render and data change must occur)
  // `useEffect` can return a FUNCTION value, but no other values
    // return function acts as cleanup for `useEffect` values
const Search = () => {
  
  // state
  const [term, setTerm] = useState('tiger');
  const [results, setResults] = useState([]);

  // lifecycle methods
  // useEffect takes two params:
    // the function to execute and when to execute by using array [] values
    // when is passed by using `[]`, passing no array (empty), or `[data]`,
  // []: run at initial render and not again
  useEffect(() => {
    console.log('[]: Only Runs Once')
  }, []);

  // no array: run at initial render and every render after
  useEffect(() => {
    console.log('Empty useEffect: Runs on Every Render')
  });

  // [data]: run at initial render and every re-render IF DATA VALUE HAS CHANGED
    // state `term` updates on input, so this hook will run after every additional input
    useEffect(() => {
      console.log('[data]: runs on every render where state changes');
      
    // NOTE: `useEffect` CANNOT USE ASYNC/AWAIT DIRECTLY
      // you CAN create a helper function INSIDE `useEffect` that uses async/await

    // immediately invoked function expression 
    (async () => {
      await axios.get('')
    })();
    // Below: same as running iife above
    const search = async () => {
      // data destructured from axios response object
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        // all prams pulled from url @ top
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          // `term` from state is passed to `srsearch` param
          srsearch: term
        }
      })
      // `data` assigned to `results`
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search()
    } else {
      // if there is a term, run `search()`
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000)
      
      // `useEffect` clean-up function:
        // clean-up function is held by react and runs before next call of `useEffect`
        // helps to clear out previous call's data
      return () => {
        clearTimeout(timeoutId)
      };
    }
  }, [term]);



  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          {/* `dangerouslySetInnerHTML` can put your site/app at risk of xss attacks and should only be used from absolutely trusted sources */}
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    )
  })

  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Terms</label>
          {/* still pass `term` state using `onChange`, value updates using `setTerm` */}
          <input className="input" onChange={(e) => setTerm(e.target.value)} />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}

export default Search;