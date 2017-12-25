import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import MemoriesPage from './pages/Memories'
import ProfilePage from './pages/Profile'
import CreateMemoryPage from './pages/CreateMemory'
import EditMemoryPage from './pages/EditMemory'
import SignUpPage from './pages/SignUp'
import SignInPage from './pages/SignIn'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Container>
            <Switch>
              <Route path='/' exact component={MemoriesPage} />
              <Route path='/profile' component={ProfilePage} />
              <Route path='/memory/create' component={CreateMemoryPage} />
              <Route path='/memory/:id' component={EditMemoryPage} />
              <Route path='/signup' component={SignUpPage} />
              <Route path='/signin' component={SignInPage} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
