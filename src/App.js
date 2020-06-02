import React from "react"
import "./App.css"
import HomePage from "./pages/homepage/homepage.component"
import { Switch, Route } from "react-router-dom"
import ShopPage from "./components/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-up/sign-in-and-sign-up.component"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  // Prevent from leaking memory in JS
  unsubscribeFromAuth = null

  // fetch won't get called until component did mount lifecycle method gets called again
  // onAuthStateChanged fires when an user signed in or signed out.
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        // database update
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  // Close subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
