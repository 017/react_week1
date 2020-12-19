import React from 'react';
import Reply from './reply_button.js';
import Like from './like_button.js';
import Comment from './comment.js';

// let e = React.createElement;

// export default class Post extends React.Component {
//   render() {
//     return e('div', {class: 'card w-75'},
//       e('div', {class: 'card-header bg-success text-white'}, 'Username and Time'),
//       e('h1', {}, this.props.title), // props is a property of the class
//       e('div', {class: 'card-body'}, 'Post Content'),
//       e('div', {class: 'card-footer'}, 
//         e(Like, {}, null),
//         e('span', {}, ' '),
//         e(Reply, {}, null),
//         e('br', {}, null),
//         e(Comment, {}, null),
//         e(Comment, {}, null)
//       )
//     );
//   }
// }

export default class Post extends React.Component {
  render() {
    return (
    <div>
      <div className="card-header bg-success text-white"> Username and Time</div>
      <h1>{this.props.post.title}</h1>
      <div className="card-body">{this.props.post.message}</div>
      <div className="card-footer">
        <Like />
        <span />
        <Reply />
        <br />
        <Comment />
        <Comment />
      </div>
    </div>
    )
  }
}