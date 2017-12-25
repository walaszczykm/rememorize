import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from './state/user'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import MemoriesPage from './pages/Memories'
import ProfilePage from './pages/Profile'
import CreateMemoryPage from './pages/CreateMemory'
import EditMemoryPage from './pages/EditMemory'
import SignUpPage from './pages/SignUp'
import SignInPage from './pages/SignIn'

class App extends Component {
  constructor (props) {
    super(props)

    this.onSignOut = this.onSignOut.bind(this)
  }

  onSignOut () {
    this.props.signOut()
  }

  render () {
    const { user } = this.props

    return (
      <BrowserRouter>
        <div>
          { !user.email && <Redirect to='/signin' /> }
          <Navbar user={user} onSignOut={this.onSignOut} />
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

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
