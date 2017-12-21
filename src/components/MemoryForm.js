import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class MemoryForm extends Component {
  constructor (props) {
    super(props)
    const { name, description, date } = props.memory || {}
    this.state = {
      name: name || '',
      description: description || '',
      date: date || ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e, { name, value }) {
    this.setState({ [name]: value })
  }

  handleSubmit () {
    this.setState({ loading: true })
    this.props.onSubmit({ ...this.state })
  }

  render () {
    const { name, description, date } = this.state
    const { loading, submitText } = this.props

    return (
      <Form loading={loading} onSubmit={this.handleSubmit}>
        <Form.Input placeholder='Nazwa wspomnienia...' name='name' value={name} onChange={this.handleChange} />
        <Form.TextArea placeholder='Opis wspomnienia...' name='description' value={description} onChange={this.handleChange} />
        <Form.Input placeholder='Data...' name='date' value={date} onChange={this.handleChange} />
        <Form.Button>{submitText}</Form.Button>
      </Form>
    )
  }
}
