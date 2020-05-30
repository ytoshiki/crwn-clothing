import React from "react"
import "./App.css"
import HomePage from "./pages/homepage/homepage.component"
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
