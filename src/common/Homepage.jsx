import React from 'react';
import Button from '../Button.jsx';

export default function() {
  const handleButtonClick = e => console.log(e);
  return (
    <div>
      <h1> Homepage </h1>
      <Button label='Test' clickHandler={handleButtonClick}/>
    </div>
  )
}