import './App.css'
import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from "./components/NavBar";


function App() {
    const [pets, setPets] = useState([]);
    const alertClicked = () => {
      alert('You clicked the third ListGroupItem');
    };

    useEffect(() => {
        fetch("http://localhost:5000/pet_status")
        .then((res) => res.json())
        .then((data) => setPets(data))
        .catch((err) => console.error(err));
    }, []);
    
    return (
      <>
        <NavBar/>
        {pets.length === 0 && <p>You don't have any pets right now :(   Create your own pet :)</p>}
        <ListGroup>
            {pets.map((pet, index) => (
                <ListGroup.Item key={pet.index} action onClick={alertClicked}>
                    {pet}
                </ListGroup.Item>
            ))}
        </ListGroup>
      </>
    );
}

export default App
