import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  logo from '../images/image.PNG';

const center = {
  padding: "70px 0",
  textAlign: "center",
  transform: "translateY(200px)"
}
function Section() {
  return (
    <Container style={{backgroundColor: "blue"}}>
      <Row>
        <Col>
        <div style={center} >
        <p style={{color: "white", marginRight: "110px"}}>Software Recruitement Specialist</p>
        <h1 style={{color: "white"}}>Elevate your career</h1>
        <input type="text" style={ {border: "0px",height: "40px",width: "58%", borderRadius: "30px 10px 10px 30px"} } placeholder='Eg. networking'/>
        <button style={{border: "0px",borderRadius: "10px 30px 30px 10px", width: "25%", height: "40px", backgroundColor: "gold", fontSize: "13px", fontWeight: "bold", marginRight: "3px", marginLeft: "-5px" }} >Search jobs</button>
        </div>
        </Col>
        <Col><img src= {logo} style= {{borderRadius: "30px", margin: "80px"}}alt="Image" /></Col>
      </Row>
    </Container>
  );
}

export default Section;