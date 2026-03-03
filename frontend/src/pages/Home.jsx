import { useState } from 'react'
import '../App.css'
import NavBar from '../components/NavBar'

function Home() {
  return (
    <>
      <h1 fixed="top">Your pet is waiting for you!</h1>
      <NavBar/>
    </>
  )
}

export default Home
