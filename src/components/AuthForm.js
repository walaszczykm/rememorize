import React, { Component } from 'react'
import { Form, Message } from 'semantic-ui-react'

export default class AuthForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e, { name, value }) {
    this.setState({ [name]: value })
  }

  handleSubmit () {
    this.setState({ loading: true })
    this.props.onSubmit({...this.state})
  }

  render () {
    const { email, password, confirmPassword } = this.state
    const { loading, displayConfirm, btnContent, error } = this.props

    return (
      <div>
        {error &&
        <Message negative>
          <p>{error}</p>
        </Message>}
        <Form loading={loading} onSubmit={this.handleSubmit}>
          <Form.Input placeholder='Email...'name='email'value={email} onChange={this.handleChange} />
          <Form.Input placeholder='Hasło...' type='password' name='password' value={password} onChange={this.handleChange} />
          {displayConfirm &&
          <Form.Input placeholder='Powtórz hasło...' type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} />}
          <Form.Button>{btnContent}</Form.Button>
        </Form>
      </div>
    )
  }
}
