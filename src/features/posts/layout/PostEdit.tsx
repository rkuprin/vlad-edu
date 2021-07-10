import { Update } from "@reduxjs/toolkit"
import { Button, Form, Input } from "antd"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { VladState } from "../../../app/store/store.defenitions"
import { Post, updatePost } from "../post.slice"

const PostEdit = () => {
  const { postId } = useParams<{ postId: string }>()
  const [post, setPost] = useState<Post>()
  const dispatch = useDispatch()

  const posts = useSelector((state: VladState) => state.posts.entities)

  useEffect(() => {
    if (postId && posts) {
      setPost(posts[postId])
    } else {
      setPost(undefined)
    }
  }, [postId, posts])

  const onSubmit = (values: Partial<Post>) => {
    const update: Update<Post> = {
      id: postId,
      changes: {
        title: values.title,
        body: values.body,
      },
    }
    dispatch({ type: updatePost.type, payload: update })
  }

  return (
    <Form name='post' initialValues={post} onFinish={onSubmit}>
      <Form.Item label='Title' name='title'>
        <Input />
      </Form.Item>
      <Form.Item label='Post' name='body'>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit'>Save post</Button>
      </Form.Item>
    </Form>
  )
}

export default PostEdit
