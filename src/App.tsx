import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import PostsView from "./features/posts/PostsView"

function App() {
  return (
    <Switch>
      <Route path='/posts'>
        <PostsView />
      </Route>
    </Switch>
  )
}

export default App
