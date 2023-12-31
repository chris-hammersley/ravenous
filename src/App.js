import React from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

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

// create array of fake business details
const businesslist = [business, business, business, business, business, business];

const App = () => {
    return (
        <Container fluid>
            <Navbar className="justify-content-center" bg="warning" sticky="top">
                <Navbar.Brand className="mb-0 h1 fs-1">~so hungry~</Navbar.Brand>
            </Navbar>
            <SearchBar />
            <BusinessList businesslist={businesslist} />
        </Container> 
    );
};

export default App;