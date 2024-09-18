import React from 'react';
import './SubscribeSection.css';

const SubscribeSection = () => {
    return (
        <div className="subscribe-section">
            <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
    );
};

export default SubscribeSection;
