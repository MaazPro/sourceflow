import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vm from '../images/vmware.PNG';
import ms from '../images/ms-word.PNG'
import or from '../images/oracle.PNG'
import at from '../images/atlassian.PNG'
import cf from '../images/cloudfare.PNG'

function MidSection() {
  return (
    <Container fluid>
      <Row style={{backgroundColor: "white"}}>
        <center><p style={{color: "grey"}}>Who we work with</p></center>
        <Col xs={{ order: 12 }}><img src={ms} alt = "image" /></Col>
        <Col xs={{ order: 12 }}><img src={or} alt = "image" /></Col>
        <Col xs={{ order: 12 }}><img src={at} alt = "image" /></Col>
        <Col xs={{ order: 12 }}><img src={cf} alt = "image" /></Col>
        <Col xs={{ order: 12 }}><img src={vm} alt = "image" /></Col>
   
      </Row>
    </Container>
  )
}

export default MidSection
