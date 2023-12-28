import React from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Container>
            <Navbar className="justify-content-center" bg="warning" sticky="top">
                <Navbar.Brand>ravenous</Navbar.Brand>
            </Navbar>
            <SearchBar />
            <BusinessList />
        </Container> 
    );
};

export default App;