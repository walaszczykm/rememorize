import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../state/user'
import AuthForm from '../components/AuthForm'
import { Redirect } from 'react-router-dom'

class SignInPage extends Component {
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
    this.props.signIn(data.email, data.password)
    .catch(error => {
      console.log('signUpError', error)
    })
    .then(() => this.setState({ loading: false, redirect: true }))
  }

  render () {
    const { loading, redirect } = this.state

    return (
      <div>
        {redirect ? <Redirect to='/memories' />
        : <AuthForm loading={loading} btnContent='Zaloguj' onSubmit={this.onSubmit} />}
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
