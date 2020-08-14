import React, { useState } from 'react'
import { register } from './userFonctions'
import {useHistory} from 'react-router-dom'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const  Register = () => {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


let history = useHistory()

  const createUser = (e) => {
    e.preventDefault()

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    }

    register(newUser).then(res => {
      history.push(`/auth`)
    })
  }

    return (
        <Form onSubmit={createUser}>
    <Form.Field>
      <label>Prénom</label>
      <input placeholder='Prénom' value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Nom</label>
      <input placeholder='Nom'value={lastName}
            onChange={(e) => setLastName(e.target.value)} />
    </Form.Field>
    <Form.Field>
    <label>Email</label>
      <input value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='joe@schmoe.com'/>
    </Form.Field>
    <Form.Field>
    <label>Mot de passe</label>
      <input value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='******'/>
    </Form.Field>
    <Button color='green' type='submit'>Submit</Button>
  </Form>

    )
  }

export default Register