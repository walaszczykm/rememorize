import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMemories } from '../state/memories'
import MemoriesList from '../components/MemoriesList'
import { Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MemoriesPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: props.memories.length === 0
    }
  }

  render () {
    const { memories } = this.props
    const { loading } = this.state

    return (
      <div>
        <h1>Moje wspomnienia</h1>
        {loading
          ? <Loader active size='large' />
          : memories.length > 0
          ? <MemoriesList memories={memories} />
          : <h3>Nie masz jeszcze żadnych wspomnień. <br /> Aby stworzyć nowe <Link to='/memory/create'>kliknij tutaj</Link></h3>}
      </div>
    )
  }

  componentWillMount () {
    this.props.fetchMemories()
    .then(() => this.setState({ loading: false }))
    .catch(error => console.log(error.message))
  }
}

const mapStateToProps = (state) => ({
  memories: state.memories
})

const mapDispatchToProps = {
  fetchMemories
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoriesPage)
