import React from 'react';
import './css/Business.css';
import { Card, Col, Row } from 'react-bootstrap/Card';
import businesslist from './BusinessList';

// Placeholder business details
export const fakeBiz = {
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

// Business Component that represents how business is formatted and styled using Bootstrap cards
function business() {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ Length: businesslist.length }).map((_, idx) => (
                <Col key={idx}>
                    <Card border="success" style={{ width: '45%'}}>
                        <Card.Img variant="top" src={fakeBiz.imageSrc} />
                        <Card.Body>
                            <Card.Title>{fakeBiz.name}</Card.Title>
                            <Card.Text>{fakeBiz.street} {fakeBiz.category}</Card.Text>
                            <Card.Text>{fakeBiz.city} {fakeBiz.rating} stars</Card.Text>
                            <Card.Text>{fakeBiz.state} {fakeBiz.zipcode} {fakeBiz.reviewCount} reviews</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default business;