import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class TextInput extends Component {
  render() {
    const {
      disabled = false,
      required,
      input,
      meta: { touched, error = { error: false } },
    } = this.props

    return (
      <Form.Field
        error={touched && error.error}
        required={required}
        disabled={disabled}
      >
        {this.props.label && <label>{this.props.label}</label>}
        <input {...input} {...this.props} />
        {touched &&
          (error.error && (
            <span style={{color: 'red'}}>
              {error.message}
            </span>
          ))}
      </Form.Field>
    )
  }
}

export default TextInput
