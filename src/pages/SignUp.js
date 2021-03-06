import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../state/user'
import AuthForm from '../components/AuthForm'
import { Redirect, Link } from 'react-router-dom'

class SignUpPage extends Component {
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
    if (data.password === data.confirmPassword) {
      this.props.signUp(data.email, data.password, { name: data.name, lastname: data.lastname })
      .then(() => this.setState({ loading: false, redirect: true }))
      .catch(error => {
        this.setState({ loading: false, error: error.message })
      })
    } else {
      this.setState({ loading: false, error: 'Podane hasła nie są takie same' })
    }
  }

  render () {
    const { loading, redirect, error } = this.state

    return (
      <div>
        {redirect ? <Redirect to='/signin' />
        : <AuthForm loading={loading} error={error} displayConfirm btnContent='Zarejestruj' onSubmit={this.onSubmit} />}
        <br />
        <span>Masz już konto? </span>
        <Link to='/signin'>Zaloguj się</Link>
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
