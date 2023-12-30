import React from 'react';
import { Nav, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

const SearchBar = () => {
    const renderSortByOptions = () => {
        return (
            Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            
                return (
                   <Nav.Item>
                    <Nav.Link className="text-white" href={sortByOptionValue}>{sortByOption}</Nav.Link>
                    </Nav.Item>
                );
            })
        );
    };

    return (
            <div className="p-5 bg-image text-center shadow-1-strong text-white"
            style={{backgroundImage: 'url("./ravenous-search-background.jpg")', backgroundRepeat: 'no-repeat', width:'100%'}}>
                <Nav justify variant="underline">
                    {renderSortByOptions()}
                </Nav>
                <hr />
                <Form>
                    <Row>
                        <Col>
                            <Form.Control className="w-75" placeholder="Search Businesses" />
                        </Col>
                        <Col>
                            <Form.Control className="w-75" placeholder="Where?" />
                        </Col>
                    </Row>
                    <Button variant="warning" type="submit" className="mt-4 p-3 mb-5 text-white">
                        Let's Go!
                    </Button>
                </Form>
            </div>
    );
};

export default SearchBar;