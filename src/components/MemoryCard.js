import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default ({ memory }) => {
  return (
    <Card>
      <Image size='medium' src='https://www.visitoslo.com//Images/Bilder%20Oslo/Attraksjoner/Akrobaten_Rolf%20Thoresen.jpg?t=ScaleDownToFill|1500x1500' />
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
