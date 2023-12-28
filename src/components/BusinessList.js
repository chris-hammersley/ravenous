import React from 'react';
import { fakeBiz } from './Business.js';
import './css/BusinessList.css';

// create array of fake business details
let businesslist = [fakeBiz, fakeBiz, fakeBiz, fakeBiz, fakeBiz, fakeBiz];

function BusinessList(props) {
    return (
        <div className="business-list">
            {businesslist.map(business => <business />)}
        </div>
    );
}

export default BusinessList;