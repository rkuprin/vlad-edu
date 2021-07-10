import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { store } from "./app/store/configure-store"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path={`/`} component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
)
