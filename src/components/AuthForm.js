import React, { Component } from 'react'
import { Form, Message, Button, Image, Icon } from 'semantic-ui-react'

export default class AuthForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      lastname: ''
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
    const { email, password, confirmPassword, name, lastname } = this.state
    const { loading, displayConfirm, btnContent, error } = this.props

    return (
      <div>
        <Image centered size='medium' src={`${process.env.PUBLIC_URL + '/logo.png'}`} />
        <h3 style={{textAlign: 'center'}}>Jedno miejsce, wszystkie Twoje wspomnienia</h3>
        <br />
        {error &&
        <Message negative>
          <p>{error}</p>
        </Message>}
        <Form loading={loading} onSubmit={this.handleSubmit}>
          <Form.Input placeholder='Email...'name='email'value={email} onChange={this.handleChange} />
          <Form.Input placeholder='Hasło...' type='password' name='password' value={password} onChange={this.handleChange} />
          {displayConfirm &&
          <div>
            <Form.Input placeholder='Powtórz hasło...' type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} />
            <Form.Input placeholder='Imie...'name='name'value={name} onChange={this.handleChange} />
            <Form.Input placeholder='Nazwisko...'name='lastname'value={lastname} onChange={this.handleChange} />
          </div>}
          <Button className={'orange'}>
            <Icon name='sign in' />
            {btnContent}
          </Button>
        </Form>
      </div>
    )
  }
}
