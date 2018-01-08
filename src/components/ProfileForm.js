import React, { Component } from 'react'
import { Form, Message, Label } from 'semantic-ui-react'

export default class ProfileForm extends Component {
  constructor (props) {
    super(props)
    const { name, lastname, email } = props.user || {}
    this.state = {
      email: email || '',
      name: name || '',
      lastname: lastname || ''
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
    const { email, name, lastname } = this.state
    const { loading, error } = this.props

    return (
      <div>
        {error &&
        <Message negative>
          <p>{error}</p>
        </Message>}
        <Form loading={loading} onSubmit={this.handleSubmit}>
          <h3>{email}</h3>
          <Form.Input placeholder='Imię...' name='name'value={name} onChange={this.handleChange} />
          <Form.Input placeholder='Nazwisko...' name='lastname' value={lastname} onChange={this.handleChange} />
          <Form.Button>Zapisz</Form.Button>
        </Form>
      </div>
    )
  }
}
