import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default ({ user, onSignOut }) => {
  return (
    <Menu>
      <Menu.Item header>rememorize</Menu.Item>
      <Menu.Item as={NavLink} to='/' name='Wspomnienia' />
      <Menu.Item as={NavLink} to='/memory/create' name='Nowe wspomnienie' />
      {user.email && <Menu.Menu position='right'>
        <Menu.Item name='Wyloguj' onClick={onSignOut} />
        <Menu.Item as={NavLink} to='/profile' name={user.email} />
      </Menu.Menu>}
    </Menu>
  )
}
