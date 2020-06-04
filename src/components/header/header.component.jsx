import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

// higher order component that let us to have access to redux
import { connect } from "react-redux"

import { auth } from "../../firebase/firebase.utils"

import "./header.scss"
import CartIcon from "../cart-icon/cart-icon.component."

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to='/signIn'>SIGN IN</Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
)

// info from the store about what we want to connect
//state is an object and the root reducer
// currentUser is passed to Header Component
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header)
