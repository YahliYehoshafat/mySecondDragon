import Form from 'react-bootstrap/Form';

function DropDown() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">Dolphin</option>
      <option value="2">Dog</option>
      <option value="3">Cat</option>
    </Form.Select>
  );
}

export default DropDown;