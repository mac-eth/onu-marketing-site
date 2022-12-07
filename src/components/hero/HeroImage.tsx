import React from "react";
import Image from "next/image";
import LaptopSocials from "../../assets/LaptopSocials.png";


const HeroImage: React.FC = () => {
    return (
        <div className="relative hidden lg:flex ">
            <Image src={LaptopSocials} alt="HeroImage" className="relative hidden lg:flex" />
        </div>
    )
};


export default HeroImage;