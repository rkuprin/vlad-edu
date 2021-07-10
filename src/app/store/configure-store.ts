import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import posts from "../../features/posts/post.slice"

const rootReducer = combineReducers({
  posts,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
})
