import React from 'react';
import { business } from './Business.js';

// create array of fake business details
let businesslist = [business, business, business, business, business, business];

const BusinessList = () => {
    return (
        <div>
            {businesslist.map(business => <business />)}
        </div>
    );
};

export default BusinessList;