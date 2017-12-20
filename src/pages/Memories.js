import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMemories } from '../state/memories'
import MemoriesList from '../components/MemoriesList'
import { Loader } from 'semantic-ui-react'

class MemoriesPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: props.memories.length === 0
    }
  }

  render () {
    const { memories } = this.props

    return (
      <div>
        <h1>Memories list</h1>
        {this.state.loading ? <Loader active size='large' /> : <MemoriesList memories={memories} />}
      </div>
    )
  }

  componentDidMount () {
    this.props.fetchMemories().then(() => this.setState({ loading: false }))
  }
}

const mapStateToProps = (state) => ({
  memories: state.memories
})

const mapDispatchToProps = {
  fetchMemories
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoriesPage)
