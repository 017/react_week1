import React from 'react';
import Reply from './reply_button.js';
import Like from './like_button.js';

let e = React.createElement;

export default class Comment extends React.Component {
  render() {
    return e('div', {class: 'card w-75'},
      e('div', {class: 'card-header bg-success text-white'}, 'Username and Time'),
      e('div', {class: 'card-body'}, 'Comment Content'),
      e('div', {class: 'card-footer'}, 
        e(Like, {}, null),
        e('span', {}, ' '),
        e(Reply, {}, null)
      )
    );
  }
}