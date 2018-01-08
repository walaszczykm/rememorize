import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default ({ memory }) => {
  const headerStyle = {
    color: 'orange'
  }

  return (
    <Card>
      <Link to={`/memory/${memory.id}`}>
        <Image size='medium' src={memory.photo || `${process.env.PUBLIC_URL + '/missing-image.png'}`} />
      </Link>
      <Card.Content>
        <Card.Header>
          <Link to={`/memory/${memory.id}`} style={headerStyle}>{memory.name}</Link>
        </Card.Header>
        <Card.Meta>{memory.date && memory.date.toString()}</Card.Meta>
        <Card.Description>{memory.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}
