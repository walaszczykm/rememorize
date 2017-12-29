import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMemory } from '../state/memories'
import { Redirect } from 'react-router-dom'
import MemoryForm from '../components/MemoryForm'

class CreateMemoryPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      redirect: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (memory) {
    this.setState({ loading: true })
    this.props.createMemory(memory)
      .then(() => this.setState({ loading: false, redirect: true }))
  }

  render () {
    const { loading, redirect } = this.state

    return (
      redirect ? <Redirect to='/' />
      : <MemoryForm onSubmit={this.handleSubmit} loading={loading} submitText='Dodaj' />

    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  createMemory
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMemoryPage)
