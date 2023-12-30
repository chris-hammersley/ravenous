import React from 'react';
import Business from './Business';
import { Col, Row } from 'react-bootstrap';


// create array of fake business details
let businesslist = [Business, Business, Business, Business, Business, Business];

const BusinessList = () => {
    return (
        <Row className="g-3">
            {businesslist.map((business, index) => {
                return (
                    <Col key={index}>
                        <Business business={business} key={index} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default BusinessList;