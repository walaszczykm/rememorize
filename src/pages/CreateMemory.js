import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { createMemory } from '../state/memories'
import { Redirect } from 'react-router-dom'

class CreateMemoryPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      date: '',
      loading: false,
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e, { name, value }) {
    this.setState({ [name]: value })
  }

  handleSubmit () {
    this.setState({ loading: true })
    const { name, description, date } = this.state
    if (name) {
      this.props.createMemory({
        name,
        description,
        date
      })
      .then(() => this.setState({ loading: false, redirect: true }))
    }
  }

  render () {
    const { name, description, date, loading, redirect } = this.state

    return (
      redirect ? <Redirect to='/' />
      : <Form loading={loading} onSubmit={this.handleSubmit}>
        <Form.Input placeholder='Nazwa wspomnienia...' name='name' value={name} onChange={this.handleChange} />
        <Form.TextArea placeholder='Opis wspomnienia...' name='description' value={description} onChange={this.handleChange} />
        <Form.Input placeholder='Data...' name='date' value={date} onChange={this.handleChange} />
        <Form.Button>Dodaj</Form.Button>
      </Form>

    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  createMemory
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMemoryPage)
