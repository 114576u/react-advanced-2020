import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect ( () => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `new messages(${value})`;
      // note there is a clear difference above in using ' vs using `
    }
  }, [value]);
  // the above [] is the 'second parameter', and means that the hook will run every time
  // there is any change on value

  useEffect( () => { 
    console.log('hello world, second use effect');
  }, []);
  // above: look at console and see difference when having [value] vs when having[]. When 
  // [value], the hook is triggered, but not when[], other than initialization

  console.log('render component');

  return <>
    <h1>{value}</h1>
    <button className="btn" onClick={ () => setValue(value + 1) }>
      click me
    </button>
  </>;
};

export default UseEffectBasics;
