import React from "react";
import Image from "next/image";
import HeroImageSVG from "../../assets/HeroImage.svg";

const HeroImage: React.FC = () => {
    return (
        <div className="relative hidden lg:flex place-top-left w-full">
            <Image src={HeroImageSVG} alt="Hero Image" />
        </div>
    )
};


export default HeroImage;