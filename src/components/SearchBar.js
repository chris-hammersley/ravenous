import React, { useState } from 'react';
import { Nav, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    const handleSortBySelection = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchLocationChange = (event) => {
        setSearchLocation(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        return (
            console.log(`Searching Yelp with ${searchTerm}, ${searchLocation}, ${sortBy}`)
        )
    };

    const renderSortByOptions = () => {
        return (
            Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            
                return (
                   <Nav.Item className="text-white p-0 d-flex justify-content-center">
                    <Nav.Link style={{ width: '4rem' }} className="text-white p-0" key={sortByOptionValue} onClick={() => handleSortBySelection(sortByOptionValue)}>{sortByOption}</Nav.Link>
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
                <Form onSubmit={handleSearch}>
                    <Row>
                        <Col className="d-flex justify-content-end">
                            <Form.Control className="w-75" placeholder="Search Businesses" onChange={handleSearchTermChange} />
                        </Col>
                        <Col className="d-flex justify-content-start">
                            <Form.Control className="w-75" placeholder="Where?" onChange={handleSearchLocationChange} />
                        </Col>
                    </Row>
                    <Button variant="warning" type="submit" className="mt-4 p-3 mb-5 text-white fs-5">
                        Let's Go!
                    </Button>
                </Form>
            </div>
    );
};

export default SearchBar;