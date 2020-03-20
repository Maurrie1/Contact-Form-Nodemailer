import React, { Component } from 'react';
import { Form, FormGroup, Label, Button, Input, Container } from "reactstrap";
import axios from "axios"

class App extends Component {
constructor(){
  super()
  this.state = {
    name: "",
    email: "",
    message: ""
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange = e => {
  this.setState({ [e.target.name]: e.target.value })
}

async handleSubmit(e) {
  e.preventDefault()

  const{ name, email, message } = this.state

  const form = await axios.post("api/form", {
    name,
    email,
    message
  })
  }


  render() {
    return (
      <Container>
        <h1>Contact Us!</h1>
      <Form onSubmit = {this.handleSubmit}>
        <FormGroup>
          <Label for="name">Name:</Label>
          
          <Input
            type="text"
            name="name"
            onChange={this.handleChange} />
          
        </FormGroup>

        <FormGroup>
          <Label >Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label >Message:</Label>
          <Input 
          maxLength="300"
            rows="5"
            type="textarea"
            name="message"
            onChange={this.handleChange} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </Container>
    );
  }
}

export default App;

