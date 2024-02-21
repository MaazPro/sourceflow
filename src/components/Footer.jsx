import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import li from '../images/linkedin.png';
import fb from '../images/facebook.png';
import ig from '../images/instagram.png';
import twitter from '../images/twitter.png';

function Footer() {
return (
    <Container style={{color: "white"}}>
      <Row style={{marginTop: "50px"}}>
        <Col xs style={{fontWeight: "bold", marginBottom: "20px"}}>Software Recruitement co.</Col>
        <Col xs={{ order: 12 }}style={{marginBottom: "20px"}}><h2>Explore</h2></Col>
        <Col xs={{ order: 1 }}><h2>Sectors</h2></Col>
        <Col xs={{ order: 1 }}><h2>Services</h2></Col>
      </Row>
      <Row>
        <Col xs><img src={li} alt='image' style={{width: "10%"}}/> <img src={fb} alt='image' style={{width: "10%"}}/> <img src={ig} alt='image' style={{width: "10%"}}/> <img src={twitter} alt='image' style={{width: "10%"}}/></Col>
        <Col xs={{ order: 12 }} style={{marginBottom: "20px"}}>Homepage</Col>
        <Col xs={{ order: 1 }} style={{marginBottom: "20px"}} >Software engineering</Col>
        <Col xs={{ order: 1 }} style={{marginBottom: "20px"}}>Nav item</Col>
      </Row>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }} style={{marginBottom: "20px"}}>For jobseekers</Col>
        <Col xs={{ order: 1 }} style={{marginBottom: "20px"}}>DevOps</Col>
        <Col xs={{ order: 1 }} style={{marginBottom: "20px"}}>Nav item</Col>
      </Row>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }} style={{marginBottom: "20px"}}>For clients</Col>
        <Col xs={{ order: 1 }} style={{marginBottom: "20px"}}>Cloud</Col>
        <Col xs={{ order: 1 }} style={{marginBottom: "20px"}}>Nav item</Col>
      </Row>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }} style={{marginBottom: "20px"}}>Our Sectors</Col>
        <Col xs={{ order: 1 }} style={{marginBottom: "20px"}}>Infrastructure</Col>
        <Col xs={{ order: 1 }} style={{marginBottom: "20px"}}>Nav item</Col>
      </Row>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }} style={{marginBottom: "20px"}}>Resources</Col>
        <Col xs={{ order: 1 }} style={{marginBottom: "20px"}}>Testing</Col>
        <Col xs={{ order: 1 }}style={{marginBottom: "20px"}}>Nav item</Col>
      </Row>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }} style={{marginBottom: "20px"}}>Contact us</Col>
        <Col xs={{ order: 1 }} style={{marginBottom: "20px"}}>Security</Col>
        <Col xs={{ order: 1 }}Nav itemow></Col>
        </Row>
    </Container>
  )
}

export default Footer
