import { useState } from 'react'
import '../App.css'
import NavBar from "../components/NavBar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CreateAnNewPet() {
    const [data, setData] = useState({
      name: "",
      type: ""
    });

    const handleChange = (event) => {
      setData({
        ...data,
        [event.target.name]: event.target.value
      });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      const response = await fetch("http://localhost:5000/create_an_new_pet",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const forward_data = await response.json();
      console.log(forward_data, data.name, data.type);
    };


    return (
      <>
        <NavBar/>
        <br />
        <Form.Control type="text" name="name" value={data.name} onChange={handleChange} placeholder="Choose a name for your pet :)" size="lg" />
        <br />
        
        <Form.Select name="type" value={data.type} onChange={handleChange} aria-label="Default select example" size="lg">
          <option value="1">Dolphin</option>
          <option value="2">Dog</option>
          <option value="3">Cat</option>
        </Form.Select>

        <Button style={{ margin: '20px' }} onClick={handleSubmit} variant="outline-secondary">Create My Pet!</Button>
      </>
    );
}

export default CreateAnNewPet
