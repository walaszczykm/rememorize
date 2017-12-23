import React, { Component } from 'react'
import { Form, Image, Grid } from 'semantic-ui-react'
import FileInput from './FileInput'

export default class MemoryForm extends Component {
  constructor (props) {
    super(props)
    const { name, description, date, photo, media } = props.memory || {}
    this.state = {
      name: name || '',
      description: description || '',
      date: date || '',
      photo: photo || '',
      media: media || []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onNewMedia = this.onNewMedia.bind(this)
  }

  handleChange (e, { name, value }) {
    this.setState({ [name]: value })
  }

  handleSubmit () {
    this.setState({ loading: true })
    this.props.onSubmit({...this.state})
  }

  onNewMedia (url) {
    const { media } = this.state
    this.setState({ media: [...media, url], photo: url })
  }

  render () {
    const { name, description, date, photo } = this.state
    const { loading, submitText } = this.props

    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Image fluid rounded src={photo || `${process.env.PUBLIC_URL}/missing-image.png`} />
          </Grid.Column>
          <Grid.Column>
            <Form loading={loading} onSubmit={this.handleSubmit}>
              <Form.Input placeholder='Nazwa wspomnienia...' name='name' value={name} onChange={this.handleChange} />
              <Form.TextArea placeholder='Opis wspomnienia...' name='description' value={description} onChange={this.handleChange} />
              <Form.Input placeholder='Data...' name='date' value={date} onChange={this.handleChange} />
              <FileInput buttonContent='Wybierz pliki' filesPrefix='media' onFileUploaded={this.onNewMedia} />
              <Form.Button>{submitText}</Form.Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
