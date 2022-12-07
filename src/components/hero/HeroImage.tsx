import React from "react";
import Image from "next/image";
import Hero_Image from "../../assets/HeroImage.png";

const HeroImage: React.FC = () => {
    return (
        <div className="relative hidden lg:flex object-scale-down ">
            <Image src={Hero_Image} alt="Hero Image" />
        </div>
    )
};


export default HeroImage;