import React, { useEffect, useState} from "react";
import "./style.css"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Background from "../../../images/background2.jpeg"

function Portfolio(props) {

    return(
<div className="portfolio-container">
    <div>
    <h1>portfolio </h1>
    <Card style={{width: '18rem' }}>
        <Card.Img variant="top" src={Background}/>
        <Card.Body>
            <Card.Title>SeaBorn</Card.Title>
            <Card.Text>Ink and paper 6"x12"</Card.Text>
        </Card.Body>

    </Card>
    </div>
    <img></img>
</div>
    )
}

export default Portfolio;