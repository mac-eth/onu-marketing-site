import React from "react";
import Image from "next/image";
import LaptopSocials from "../../assets/LaptopSocials.png";


const HeroImage: React.FC = () => {
    return (
        <div className="relative hidden lg:flex object-scale-down ">
            <Image src={LaptopSocials} alt="HeroImage" />
        </div>
    )
};


export default HeroImage;