import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import py from "../images/python.PNG"
import pin from "../images/location.png"
function Card1({color, fontColor}) {
  return (
    <Card style={{ width: "20rem", backgroundColor: color, color: fontColor, borderRadius: "25px" }}>
      <Card.Body>
        <img src={py} alt="Image" />
        <Card.Title><h3>Software Engineer</h3></Card.Title>
        <Card.Subtitle className="mb-2"><img src={pin} alt="Image"style={{width : "20px"}} /> London</Card.Subtitle>
        <Card.Text>
          Odio mi amet commodo convallis nunc.
          Tincidunt mauris eu egestas eget in aliquam.
        </Card.Text>
      </Card.Body>
      <center><Button variant="light" style={{width:"250px",borderRadius: "20px", color: "blue", fontWeight: "bold"}}>View this job</Button></center>
    <p style={{fontSize: "12px", margin: "20px"}}>Posted on 29/08/2023</p>
    </Card>
  );
}

export default Card1;
