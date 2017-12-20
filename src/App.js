import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import MemoriesPage from './pages/Memories'
import ProfilePage from './pages/Profile'
import CreateMemoryPage from './pages/CreateMemory'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Container>
            <Route path='/' exact component={MemoriesPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/memory/create' component={CreateMemoryPage} />
          </Container>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
