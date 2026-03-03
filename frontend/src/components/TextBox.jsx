import Form from 'react-bootstrap/Form';

function TextBox() {
  return (
    <>
      <br />
      <Form.Control type="text" placeholder="Choose a name for your pet :)" size="lg" />
      <br />
    </>
  );
}

export default TextBox;