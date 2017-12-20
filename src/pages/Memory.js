import React, { Component } from 'react'

export default class MemoryPage extends Component {
  render () {
    const { match } = this.props

    return (
      <div>
        <h1>Memory page {match.params.id}</h1>
      </div>
    )
  }
}
