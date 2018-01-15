import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

export default ({ src, selected, onRemove, onSelect }) => {
  const className = {
    border: '2px solid rgb(0, 255, 142)'
  }

  return (
    <Card style={selected ? className : {}}>
      <Image src={src} />
      <Card.Content>
        <div className='ui two buttons'>
          {!selected && <Button basic color='green' content='Jako główne' onClick={onSelect} />}
          <Button basic color='red' content='Usuń' onClick={onRemove} />
        </div>
      </Card.Content>
    </Card>
  )
}
