import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./redux/store"

//Provider inside of it, have access to redux
//Once passed the store object, give it to the rest of the app so we can dispatch actions
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
)
