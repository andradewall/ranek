import React from 'react'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <h1>Home</h1>
      <NavLink to="produto/notebook">Notebook</NavLink>
      <NavLink to="produto/smartphone">Smartphone</NavLink>
    </div>
  )
}

export default Home
