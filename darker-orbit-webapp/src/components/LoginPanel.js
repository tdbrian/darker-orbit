import React from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';

export default ({ onLogin }) => {
  return (
    <div className="login-panel">
      <h1 className="text-center mt-3 mb-4"><span className="name">DarkerOrbit</span> Login</h1>
      <Form>
        <FormGroup>
          <Label for="usernameInput">Username</Label>
          <Input id="usernameInput" name="username"/>
          <FormFeedback>You will not be able to see this</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="passwordInput">Password</Label>
          <Input id="passwordInput" name="password" />
          <FormFeedback>Sweet! that name is available</FormFeedback>
        </FormGroup>
        <div className="d-flex justify-content-between">
          <div>
            <Button type="button" onClick={onLogin}>Login</Button>
          </div>
          <a href="#" className="text-right align-self-end">Forgot Password</a>
        </div>
      </Form>
    </div>
  )
}
