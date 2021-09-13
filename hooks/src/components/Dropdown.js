import React, {useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {

  const [open, setOpen] = useState(false);

  // `useRef` creates a reference point inside a DOM element
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = event => {
      // if clicked element is INSIDE the component...
      if (ref.current.contains(event.target)) {
        // exit callback and return early
        return;
      }
      setOpen(false);
    };
    // add listener to run `onBodyClick`
    document.body.addEventListener(
      "click",
      onBodyClick,
      { capture: true }
    );
    // cleanup to remove `onBodyClick` to prevent `null.contains` error
    return () => {
      // remove listener from DOM element
      document.body.removeEventListener(
        'click',
        onBodyClick,
        { capture: true});
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        className="item"
        key={option.value}
        onClick={()=> {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  })

  
  console.log(ref.current);

  return (
    <div
      ref={ref}
      className="ui form"
    >
      <div className="field">
        <label className="label">
          Select a Color
        </label>
        <div
          // toggle open
          onClick={() => {
            setOpen(!open);
          }}
          // ternary statement to open/close dropdown
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;