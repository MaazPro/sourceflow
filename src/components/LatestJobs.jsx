import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card1 from './Card1'
import forward from '../images/btn1.png'
import back from '../images/btn2.png'
function LatestJobs() {
  return (
    <Container fluid style={{color: "white", backgroundColor: "lightblue"}}>
        <center style={{paddingTop: "30px"}} ><h1 style={{marginBottom:"30px", color: "blue"}} >Latest Jobs</h1></center>
    <Row>
      <Col><Card1 color={"yellow"} fontColor={"blue"}/></Col>
      <Col></Col>

      <Col><Card1 color={"blue"} fontColor={"white"}/></Col>
      <Col></Col>
      <Col><Card1 color={"pink"} fontColor={"blue"} /></Col>
    </Row>
    <Row>
      <Col style = {{ marginTop: "35px", marginBottom: "30px"}}><img src={back} alt="Image" style={{width: "30px"}}/><img src={forward} alt="Image" style={{width: "30px"}}/></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col><a href='#' style={{textDecoration: "none"}}>View more jobs</a></Col>
    </Row>
  </Container>
  )
}

export default LatestJobs
