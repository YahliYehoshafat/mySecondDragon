import Form from 'react-bootstrap/Form';

function DropDown() {
  return (
    <Form.Select aria-label="Default select example" size="lg">
      <option value="1">Dolphin</option>
      <option value="2">Dog</option>
      <option value="3">Cat</option>
    </Form.Select>
  );
}

export default DropDown;