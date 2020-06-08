import React from "react"
import "./App.css"
import HomePage from "./pages/homepage/homepage.component"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import ShopPage from "./components/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-up/sign-in-and-sign-up.component"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import CheckoutPage from "./pages/checkout/checkout.component"

class App extends React.Component {
  // Prevent from leaking memory in JS
  unsubscribeFromAuth = null

  // fetch won't get called until component did mount lifecycle method gets called again
  // onAuthStateChanged fires when an user signed in or signed out.
  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        // database update
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  // Close subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth()
    console.log("willUnmount")
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signIn' render={() => (this.props.currentUser ? <Redirect /> : <SignInAndSignUpPage />)} />
        </Switch>
      </div>
    )
  }
}

//returns functon that gets the user object and then calls displatch

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
