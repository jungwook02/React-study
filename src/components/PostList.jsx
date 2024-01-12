import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostList.module.css';

function PostList() {
  const posts = useLoaderData();

  // function addPostHandler(postData) {
   
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>작성하신 지원서가 없습니다.</h2>
         
        </div>
      )}

    </>
  );
}

export default PostList;