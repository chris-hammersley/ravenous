import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';

// Businesses styled using Bootstrap cards
const Business = ( {business} ) => { 
    return (
            <Card border="success" style={{ width: '18rem' }} className="m-5">
                <Card.Img variant="top" src={business.imageSrc} />
                <Card.Body>
                    <Card.Title>{business.name}</Card.Title>
                    <Row className="p-0">
                        <Col>
                            <Card.Text>{business.street}</Card.Text>
                            <Card.Text>{business.city}</Card.Text>
                            <Card.Text>{business.state}, {business.zipcode}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className="text-end">{business.category.toUpperCase()}</Card.Text>
                            <Card.Text className="text-end">{business.rating} stars</Card.Text>
                            <Card.Text className="text-end">{business.reviewCount} reviews</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            );
};

export default Business;