import React from 'react'
import { Card } from 'semantic-ui-react'
import MemoryCard from './MemoryCard'

export default ({ memories }) => {
  return (
    <Card.Group>
      {memories && memories.map((memory, index) => <MemoryCard memory={memory} key={index} />)}
    </Card.Group>
  )
}
