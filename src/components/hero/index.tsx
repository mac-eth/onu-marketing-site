import React from 'react';
import Navbar from './navbar';
import Title from './title';

const Hero: React.FC = () => {
    return (
        <div className="full-screen bg-gradient-to-br from-bgpurple to-bgblue">
            <Navbar />
            <Title />
        </div>
    )
}

export default Hero;