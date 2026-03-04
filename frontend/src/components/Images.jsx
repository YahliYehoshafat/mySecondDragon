import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import goatImg from "../Images/Goat.png";
import koalaImg from "../Images/Koala.png";
import squirrelImg from "../Images/Squirrel.png";

function Images() {
  //Creating three images next to each other for website decoration
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image width="230" height="auto" styles={{margin: "40px"}} src={goatImg} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image width="270" height="auto" styles={{margin: "40px"}} src={koalaImg} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image width="180" height="auto" styles={{margin: "40px"}} src={squirrelImg} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Images;