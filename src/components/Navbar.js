import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <Menu>
      <Menu.Item header>rememorize</Menu.Item>
      <Menu.Item as={NavLink} to='/' name='Wspomnienia' />
      <Menu.Menu position='right'>
        <Menu.Item name='Wyloguj' />
        <Menu.Item as={NavLink} to='/profile' name='Profil' />
      </Menu.Menu>
    </Menu>
  )
}
