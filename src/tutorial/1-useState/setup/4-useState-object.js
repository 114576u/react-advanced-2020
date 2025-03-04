import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState(
    {
      name:'peter', 
      age:24, 
      message:'random message'
    });
  console.log(person);

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random message');

  const changeMessage = () => {
    //setPerson({...person, message:'hello you!'});
    setMessage('this is a changed message')
  };
  // return <>
  //   <h3>{person.name}</h3>
  //   <h3>{person.age}</h3>
  //   <h3>{person.message}</h3>
  //   <button className="btn" onClick={changeMessage}>Change Messge</button>
  // </>;
  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={changeMessage}>Change Messge</button>
  </>;

};

export default UseStateObject;
