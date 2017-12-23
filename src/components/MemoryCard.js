import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'

export default class MemoryCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      photoUrl: `${process.env.PUBLIC_URL}/missing-image.png`
    }
  }

  componentDidMount () {
    const { photo } = this.props.memory
    photo && firebase.storage().ref()
    .child(`media/${photo}`)
    .getDownloadURL()
    .then(url => this.setState({ photoUrl: url }))
  }

  render () {
    const { memory } = this.props
    const { photoUrl } = this.state

    return (
      <Card>
        <Image size='medium' src={photoUrl} />
        <Card.Content>
          <Card.Header>
            <Link to={`/memory/${memory.id}`}>{memory.name}</Link>
          </Card.Header>
          <Card.Meta>{memory.date && memory.date.toString()}</Card.Meta>
          <Card.Description>{memory.description}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
