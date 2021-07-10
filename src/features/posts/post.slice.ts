import {
  createEntityAdapter,
  createSlice,
  Dictionary,
  EntityId,
  PayloadAction,
  Update,
} from "@reduxjs/toolkit"

export interface PostSlice {
  ids: EntityId[]
  entities: Dictionary<Post>
  loader?: boolean
}

export interface Post {
  userId: EntityId
  id: EntityId
  title?: string
  body?: string
}

const entityAdapter = createEntityAdapter<Post>()

const postSlice = createSlice({
  name: "posts",
  initialState: entityAdapter.getInitialState({
    loader: false,
  }),
  reducers: {
    addPost: (posts: PostSlice, action: PayloadAction<Post>) => {
      entityAdapter.addOne(posts, action.payload)
    },
    removePost: (posts: PostSlice, action: PayloadAction<EntityId>) => {
      entityAdapter.removeOne(posts, action.payload)
    },
    updatePost: (posts: PostSlice, action: PayloadAction<Update<Post>>) => {
      entityAdapter.updateOne(posts, action.payload)
    },
  },
})

export const { addPost, removePost, updatePost } = postSlice.actions

export default postSlice.reducer
