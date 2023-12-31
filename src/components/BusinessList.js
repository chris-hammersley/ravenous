import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Business from './Business';


const BusinessList = ( {businesslist} ) => {
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