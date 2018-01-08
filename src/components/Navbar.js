import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default ({ user, onSignOut }) => {
  const style = {
    backgroundColor: '#00FF8E'
  }

  return (
    <Menu style={style}>
      <Menu.Item header><Icon name='heart' />REMEMORIZE</Menu.Item>
      {user.email && <Menu.Item as={NavLink} to='/' exact>
        <Icon name='block layout' />
        Wspomnienia
      </Menu.Item>}
      {user.email && <Menu.Item as={NavLink} to='/memory/create'>
        <Icon name='add' />
        Dodaj wspomnienie
      </Menu.Item>}
      {user.email && <Menu.Menu position='right'>
        <Menu.Item onClick={onSignOut}>
          <Icon name='sign out' />
          Wyloguj
        </Menu.Item>
        <Menu.Item as={NavLink} to='/profile'>
          <Icon name='user circle outline' />
          {`${user.name} ${user.lastname}`}
        </Menu.Item>
      </Menu.Menu>}
    </Menu>
  )
}
