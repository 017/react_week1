import React from 'react';
export default class test extends React.Component {
  render() { // Render() is for visual settings/config
    return React.createElement('button', {class: 'btn btn-primary'}, 'Like');
  }
}