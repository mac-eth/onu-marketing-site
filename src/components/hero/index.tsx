import React from 'react';
import Navbar from './navbar';

const Hero: React.FC = () => {
    return (
        <div className="full-screen bg-gradient-to-br from-bgpurple to-bgblue">
            <Navbar />
        </div>
    )
}

export default Hero;