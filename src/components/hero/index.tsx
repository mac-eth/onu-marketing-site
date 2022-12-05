import React from 'react';
import Navbar from './navbar';
import Content from './content';

const Hero: React.FC = () => {
    return (
        <div className="h-screen snap-start">
            <Navbar />
            <Content />
        </div>
    )
}

export default Hero;