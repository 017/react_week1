import React from "react";
import Post from './post.js';

let e = React.createElement;

const posts = [
  {
    title: 'Post 1',
    message: 'words'
  },
  {
    title: 'Post 2',
    message: 'words'
  },
  {
    title: 'Post 3',
    message: 'words'
  },
];

export default class NewsFeed extends React.Component {
  render() {
    return (<div> {posts.map(post => {
      return <Post post={post} />
    })
    }
    </div>
    )
  }
}

// export default class NewsFeed extends React.Component {
//   render() {
//     return e('div', {class: 'container'},
//       e(Post, {}, null),
//       e(Post, {}, null),
//       e(Post, {}, null)
//     );
//   }
// }