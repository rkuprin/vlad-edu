import { nanoid } from "@reduxjs/toolkit"
import { Button } from "antd"
import React from "react"
import { useDispatch } from "react-redux"
import { Route, Switch, useHistory } from "react-router-dom"
import PostEdit from "./layout/PostEdit"
import { addPost } from "./post.slice"

const PostsView = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onAddPost = () => {
    const postId = nanoid()
    dispatch({ type: addPost.type, payload: { id: postId, userId: 1 } })
    history.push(`/posts/${postId}/edit`)
  }
  return (
    <div>
      <div className='header'>
        <Button onClick={onAddPost}>Add post</Button>
        <Switch>
          <Route exact path='/posts/:postId/edit'>
            <PostEdit />
          </Route>
        </Switch>

        <div className='posts-list'></div>
      </div>
    </div>
  )
}

export default PostsView
