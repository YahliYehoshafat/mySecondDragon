import ListGroup from 'react-bootstrap/ListGroup';

function LinkedExample(pets) {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  if (pets.length === 0){
    return <p>You don't have any pets right now :( Create your own pet :)</p>
  }
  return (
    <ListGroup>
        {pets.map((pet, index) => (
            <ListGroup.Item key={pet.index} action onClick={alertClicked}>
                {pet}
            </ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default LinkedExample;