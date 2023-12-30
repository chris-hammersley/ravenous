import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';

// Placeholder business details
const business = {
    imageSrc: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3333,w_5000,x_0,y_0/c_limit,dpr_2,f_auto,fl_lossy,q_80,w_1386/4WIN21_PostAlleyPizza_AmberFouts_0905_tjvcyt.jpg',
    name: 'Alleyway Pizza',
    street: '100 Post Alley',
    city: 'Seattle',
    state: 'WA',
    zipcode: '98121',
    category: 'Italian',
    rating: 5.0,
    reviewCount: 242
};

// Business Component that represents how business is formatted  and styled using Bootstrap cards
const Business = () => { 
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