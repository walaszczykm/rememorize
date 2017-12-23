import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import firebase from 'firebase'
import shortid from 'shortid'

export default class FileInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    this.onChooseFileClick = this.onChooseFileClick.bind(this)
    this.onFileInputChange = this.onFileInputChange.bind(this)
  }

  onChooseFileClick (event) {
    event.preventDefault()
    this.fileInput.click()
  }

  onFileInputChange () {
    const { filesPrefix } = this.props
    this.setState({ loading: true })
    const storageRef = firebase.storage().ref()

    let promises = [].map.call(this.fileInput.files, file =>
      storageRef.child(`${filesPrefix}/${shortid.generate()}`)
      .put(file)
      .then(snap => this.props.onFileUploaded(snap.metadata.name, snap.downloadURL))
    )

    Promise.all(promises).then(() => this.setState({ loading: false }))
  }

  render () {
    const { placeholder, buttonContent } = this.props
    const { loading } = this.state

    return (
      <div>
        <Form.Button loading={loading}
          disabled={loading}
          content={buttonContent}
          icon='file'
          placeholder={placeholder}
          onClick={this.onChooseFileClick} />
        <input type='file'
          multiple
          style={{display: 'none'}}
          ref={input => { this.fileInput = input }}
          onChange={this.onFileInputChange} />
      </div>
    )
  }
}
