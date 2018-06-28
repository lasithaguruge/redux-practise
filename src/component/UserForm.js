import React, { Component } from 'react'
import { Divider, Form, Segment } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      size: '',
      description: ''
    }
  }

  handleInputs = (e, { value, name }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state);
  }

  render() {
    const { firstName, lastName, gender, size, description } = this.state
    return (
      <Segment basic>
        <Divider hidden />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              name='firstName'
              fluid label='First name'
              placeholder='First name'
              value={firstName}
              onChange={this.handleInputs} />
            <Form.Input
              name='lastName'
              fluid label='Last name'
              placeholder='Last name'
              value={lastName}
              onChange={this.handleInputs} />
            <Form.Select
              name='gender'
              fluid label='Gender'
              options={options}
              placeholder='Gender'
              value={gender}
              onChange={this.handleInputs} />
          </Form.Group>
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              name='size'
              label='Small'
              value='sm'
              checked={size === 'sm'}
              onChange={this.handleInputs}
            />
            <Form.Radio
              name='size'
              label='Medium'
              value='md'
              checked={size === 'md'}
              onChange={this.handleInputs}
            />
            <Form.Radio
              name='size'
              label='Large'
              value='lg'
              checked={size === 'lg'}
              onChange={this.handleInputs}
            />
          </Form.Group>
          <Form.TextArea
            name='description'
            label='About'
            placeholder='Tell us more about you...'
            value={description}
            onChange={this.handleInputs} />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Segment>
    )
  }
}

export default UserForm;