import React from 'react';

export default function(properties) {
  const { label, clickHandler } = properties;
  return (
    <button onClick={clickHandler} className="btn btn-primary">
      {label}
    </button>
  )
}