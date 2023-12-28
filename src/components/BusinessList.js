import React from 'react';
import { business } from './Business.js';
import './css/BusinessList.css';

// create array of fake business details
let businesslist = [business, business, business, business, business, business];

const BusinessList = () => {
    return (
        <div className="business-list">
            {businesslist.map(business => <business />)}
        </div>
    );
};

export default BusinessList;