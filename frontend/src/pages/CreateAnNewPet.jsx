import { useState } from 'react'
import './App.css'
import NavBar from "../components/NavBar";
import TextBox from '../components/TextBox'
import DropDown from '../components/DropDown'


function App() {
    return (
      <>
        <NavBar/>
        <TextBox/>
        <DropDown/>
        <h1 fixed="top">Your pet is waiting for you!</h1>
      </>
    );
}

export default App
