import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const { img, teacher, duration, name, id } = props.service;
    return (
        <Col>
            <Card className="card">
                <Card.Img className="card-img" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Teacher : {teacher}
                        <br /> Duration : {duration}
                        <br />
                        <Link to={`/service/${id}`} ><Button className="details-btn">details</Button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Service;