import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Dog from '../Images/dog_image.png'

function Image() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="Dog/171x180" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Image;