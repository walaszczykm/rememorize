import React from 'react'
import { Card } from 'semantic-ui-react'

export default ({ memory }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {memory.name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            {memory.date.toString()}
          </span>
        </Card.Meta>
        <Card.Description>
          {memory.description}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
