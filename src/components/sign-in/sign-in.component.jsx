import React from "react"

import "./sign-in.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })
    } catch (e) {
      console.log(e)
    }

    this.setState({ email: "", password: "" })
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='signIn'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} type='email' name='email' value={this.state.email} label='email' required />

          <FormInput handleChange={this.handleChange} type='password' name='password' value={this.state.password} label='password' required />

          <div className='buttons'>
            <CustomButton type='submit' value='Submit'>
              Sign In
            </CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
