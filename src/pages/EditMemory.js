import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMemory } from '../state/memories'
import { Redirect } from 'react-router-dom'
import MemoryForm from '../components/MemoryForm'

class EditMemoryPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      redirect: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (memory) {
    const { match } = this.props
    this.setState({ loading: true })
    this.props.setMemory(match.params.id, memory)
      .then(() => this.setState({ loading: false, redirect: true }))
  }

  render () {
    const { loading, redirect } = this.state
    const { match, memories } = this.props
    const memory = memories.find(m => m.id === match.params.id)

    return (
      (redirect || !memory) ? <Redirect to='/' />
      : <MemoryForm onSubmit={this.handleSubmit} loading={loading} memory={memory} submitText='Zapisz' />

    )
  }
}

const mapStateToProps = (state) => ({
  memories: state.memories
})

const mapDispatchToProps = {
  setMemory
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMemoryPage)
