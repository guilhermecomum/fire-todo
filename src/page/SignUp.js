import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Message,
  Form,
  Button,
} from 'semantic-ui-react'

import TextInput from '../components/TextInput'

@reduxForm({ form: 'signUp' })
export default class SignUp extends Component {
  submit = user => {
    this.props.signUp(user.email, user.password)
  }

  render() {
    const { handleSubmit, app, submitting } = this.props
    const { signUpError,  signingUp } = app

    return (
      <div>
        <h1>SignUp</h1>
        <Form
          onSubmit={handleSubmit(this.submit)}
          loading={submitting || signingUp}
          error={signUpError && signUpError.error === true}
        >
          <Message error>
            <Message.Header>Ops! Tem algo de errado!</Message.Header>
            <Message.List>
              {signUpError &&
                <Message.Item>{signUpError.message}</Message.Item>
                }
            </Message.List>
          </Message>

          <Form.Group widths="equal">
            <Field
              component={TextInput}
              name="email"
              label="Nome"
              placeholder="Nome"
              required
            />
            <Field
              component={TextInput}
              name="password"
              label="Senha"
              placeholder="Senha"
              type="password"
              required
            />
          </Form.Group>
          <br />
          <Button type="submit" disabled={submitting}>
            Cadastrar
          </Button>
        </Form>
      </div>
    )
  }
}
