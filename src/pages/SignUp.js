import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../state/user'
import AuthForm from '../components/AuthForm'
import { Redirect } from 'react-router-dom'

class SignUpPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      redirect: false
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (data) {
    console.log(data)
    this.setState({ loading: true })
    if (data.password === data.confirmPassword) {
      this.props.signUp(data.email, data.password)
      .catch(error => {
        console.log('signUpError', error)
      })
      .then(() => this.setState({ loading: false, redirect: true }))
    }
  }

  render () {
    const { loading, redirect } = this.state

    return (
      <div>
        {redirect ? <Redirect to='/signin' />
        : <AuthForm loading={loading} displayConfirm btnContent='Zarejestruj' onSubmit={this.onSubmit} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
