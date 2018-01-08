import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileForm from '../components/ProfileForm'
import { updateUser } from '../state/user'
import { Redirect } from 'react-router-dom'

class ProfilePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      redirect: false,
      loading: false,
      error: null
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (data) {
    this.setState({ loading: true })
    this.props.updateUser(data)
      .then(() => this.setState({ loading: false, redirect: true }))
      .catch(error => {
        this.setState({ loading: false, error: error.message })
      })
  }

  render () {
    const { user } = this.props
    const { redirect, loading } = this.state

    return (
      <div>
        {redirect
        ? <Redirect to='/' />
      : <div>
        <h1>User profile</h1>
        <ProfileForm loading={loading} user={user} onSubmit={this.onSubmit} />
      </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
