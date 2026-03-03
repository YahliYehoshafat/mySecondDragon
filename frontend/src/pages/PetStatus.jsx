import '../App.css'
import Image from '../components/Image'
import ListGroup from '../components/ListGroup'
import { useEffect, useState } from "react";
import TextBox from '../components/TextBox'

function PetStatus() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:80/pet_status")
        .then((res) => res.json())
        .then((data) => setPets(data))
        .catch((err) => console.error(err));
    }, []);
    return (
        <>
            <ListGroup/>
            <TextBox/>
            <DropDown/>
        </>
    )
}

export default PetStatus
