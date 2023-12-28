import React from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

function SearchBar() {
    return (
        <Container>
            <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
            style={{backgroundImage: "url('../../../public/search-bar-banner.jpg')"}}>
                <ListGroup horizontal>
                    <ListGroup.Item id="best-match">Best Match</ListGroup.Item>
                    <ListGroup.Item id="highest-rated">Highest Rated</ListGroup.Item>
                    <ListGroup.Item id="most-reviewed">Most Reviewed</ListGroup.Item>
                </ListGroup>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Search Businesses" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Where?" />
                        </Col>
                    </Row>
                    <Button variant="warning" type="submit">
                        Let's Go!
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default SearchBar;