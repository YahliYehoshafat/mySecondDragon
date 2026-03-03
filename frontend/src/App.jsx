import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar";
import TextBox from './components/TextBox'
import DropDown from './components/DropDown'


function App() {
    return (
      <>
        <NavBar/>
        <TextBox/>
        <DropDown/>
      </>
    );
}

export default App
