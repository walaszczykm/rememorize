import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

export default ({ src, selected, onRemove, onSelect }) => {
  return (
    <Card>
      <Image src={src} />
      <Card.Content>
        <div className='ui two buttons'>
          {!selected && <Button basic color='green' content='Ustaw' onClick={onSelect} />}
          <Button basic color='red' content='Usuń' onClick={onRemove} />
        </div>
      </Card.Content>
    </Card>
  )
}
