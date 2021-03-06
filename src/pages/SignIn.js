import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../state/user'
import AuthForm from '../components/AuthForm'
import { Link } from 'react-router-dom'

class SignInPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      redirect: false,
      error: null
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (data) {
    this.setState({ loading: true })
    this.props.signIn(data.email, data.password)
    .catch(error => {
      this.setState({ loading: false, error: error.message })
    })
  }

  render () {
    const { loading, error } = this.state

    return (
      <div>
        <AuthForm loading={loading} error={error} btnContent='Zaloguj' onSubmit={this.onSubmit} />
        <br />
        <span>Nie masz jeszcze konta? </span>
        <Link to='/signup'>Zarejestruj się</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage)
