import React, { useState } from 'react'
import './Admin.css'
import { Field, Input } from "@chakra-ui/react"
import Homepage from '../assets/Homepage';



export default function AdminAuth({ updateLocalStorage }) {

  const [login, setLogin] = useState(true)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const register = () => login ? null : (
    <div className="register">
      <Field.Root required>
        <Field.Label>
          First Name <Field.RequiredIndicator />
        </Field.Label>
        <Input
          type="firstName"
          value={firstName}
          name="firstName"
          id="firstName"
          placeholder='Enter first name'
          onChange={e => setFirstName(e.target.value)}
        />
        <Field.Label>
          Last Name <Field.RequiredIndicator />
        </Field.Label>
        <Input
          type="lastName"
          value={lastName}
          name="lastName"
          id="lastName"
          placeholder='Enter last name'
          onChange={e => setLastName(e.target.value)}
        />
      </Field.Root>
    </div>
  )

  const toggle = () => {
    setLogin(!login)
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
  }

  const toggleBtn = () => login ? "Request Admin" : "Back to Login"

  const handleSubmit = (e) => {
    e.preventDefault()

    const url = login
      ? "http://127.0.0.1:4000/adminUser/login"
      : "http://127.0.0.1:4000/adminUser/admin"

    const body = login
      ? { email, password }
      : { firstName, lastName, email, password }

    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json()
      })
      .then(data => {
        console.log(data)
        updateLocalStorage(data.token)
      })
      .catch(err => console.error("Login/Register failed:", err))
  }

  return (
    <>
	  <Homepage />
      <h1 className='auth-header'>{login ? "Admin Login" : "Admin Register"}</h1>
      <form onSubmit={handleSubmit} className="form-wrapper">
        {register()}
        <Field.Root required>
          <Field.Label>
            Email <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder='Enter email'
            autoCorrect='on'
            onChange={e => setEmail(e.target.value)}
          />
          <Field.HelperText>We'll never share your email.</Field.HelperText>

          <Field.Label>
            Password <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="password"
            value={password}
            name="pwd"
            id="pwd"
            placeholder='Enter password'
            onChange={e => setPassword(e.target.value)}
          />
          <Field.HelperText>We'll never share your password.</Field.HelperText>
        </Field.Root>

        <button type="submit">{login ? "Login" : "Submit Request"}</button>
        <button type='button' className='logRegisterBtn' onClick={toggle}>{toggleBtn()}</button>
      </form>
    </>
  )
}
