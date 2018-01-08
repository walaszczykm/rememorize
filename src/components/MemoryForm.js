import React, { Component } from 'react'
import { Form, Grid, Card, Divider, Button, Icon } from 'semantic-ui-react'
import FileInput from './FileInput'
import PhotoCard from './PhotoCard'

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
    this.onRemoveMedia = this.onRemoveMedia.bind(this)
    this.onSelectPhoto = this.onSelectPhoto.bind(this)
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
    this.setState({ media: [...media, url] })
  }

  onRemoveMedia (url) {
    const { media, photo } = this.state
    this.setState({ media: media.filter(m => m !== url), photo: photo === url ? '' : photo })
  }

  onSelectPhoto (url) {
    const { media } = this.state
    media.indexOf(url) !== -1 && this.setState({ photo: url })
  }

  render () {
    const { name, description, date, media, photo } = this.state
    const { loading, submitText } = this.props
    const imageCards = media.map((url, index) =>
      <PhotoCard src={url} key={index}
        selected={photo === url}
        onRemove={(event) => {
          event.preventDefault()
          this.onRemoveMedia(url)
        }}
        onSelect={(event) => {
          event.preventDefault()
          this.onSelectPhoto(url)
        }} />)

    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Form loading={loading} onSubmit={this.handleSubmit}>
              <Form.Input placeholder='Nazwa wspomnienia...' name='name' value={name} onChange={this.handleChange} />
              <Form.TextArea placeholder='Opis wspomnienia...' name='description' value={description} onChange={this.handleChange} />
              <Form.Input placeholder='Data...' name='date' value={date} onChange={this.handleChange} />
              <FileInput buttonContent='Wybierz zdjęcia' filesPrefix='media' onFileUploaded={this.onNewMedia} />
              <Divider />
              <Card.Group>
                {imageCards}
              </Card.Group>
              <Divider />
              <Button className={'orange'}>
                <Icon name='save' />
                {submitText}
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
