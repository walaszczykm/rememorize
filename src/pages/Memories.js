import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMemories } from '../state/memories'
import MemoryCard from '../components/MemoryCard'

class MemoriesPage extends Component {
  render () {
    const memories = this.props.memories.map((memory, index) => <MemoryCard memory={memory} key={index} />)

    return (
      <div>
        <h1>Memories list</h1>
        {memories}
      </div>
    )
  }

  componentDidMount () {
    this.props.fetchMemories()
  }
}

const mapStateToProps = (state) => ({
  memories: state.memories
})

const mapDispatchToProps = {
  fetchMemories
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoriesPage)
