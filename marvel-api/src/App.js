import React, { useState } from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Axios from "axios"
import './App.css';
import Form from "./Components/Form"
import Hero from "./Components/Hero"

// Initializers
const initialFormValues = {
  name: "",
  description: "",
}
const initialHeroes = []

export default function App() {
  // States
  const [heroes, setHeroes] = useState(initialHeroes)
  const [formValues, setFormValues] = useState(initialFormValues)
  // Change Handler
  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }
  // Submit Handler
  const formSubmit = () => {
    let newHero = {
      name: formValues.name.trim(),
      description: formValues.description.trim(),
    }
    Axios.post("https://reqres.in/api/users", newHero)
      .then(res => {
        console.log(res)
        setHeroes([...heroes, res.data])
      })
      .catch(err => {
        console.log(err)
      })
    if(!newHero.name || !newHero.description) return
    // setHeroes(heroes.concat(newHero))
    setFormValues(initialFormValues)
  }

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/Form">Form</Link>
      <div>
        <span>--testing--</span>
        <h1>Marvel API</h1>
      </div>

      <Switch>
        <Route path="/Form">
          <Form 
            values={formValues} 
            change={inputChange} 
            submit={formSubmit} 
          />
          {heroes.map(item => {
            return <Hero key={item.id} details={item} />
          })}
        </Route>

        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </>
  );
}
