import React, { useEffect, useState } from "react";
import "./style.css";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import art1 from "../../../images/art1.jpeg";

function Sale(props) {
  return (
    <div className="sale-container">
      <header>
        <h1>for sale</h1>
      </header>
      <section className="card-container">
        <Card style={{width:'18rem'}}>
            <Card.Img variant="top" src={art1}/>
            <Card.Body>
                <Card.Title>Art 1</Card.Title>
                <Card.Text>Available for price</Card.Text>
            </Card.Body>
            <Card.Body>
            <Button variant='primary'>Save to cart</Button>

            </Card.Body>\
            </Card>
      </section>
    </div>
  );
}

export default Sale;
