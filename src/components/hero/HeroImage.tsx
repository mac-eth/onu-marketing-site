import React from "react";
import Image from "next/image";
import HeroImageSVG from "../../assets/HeroImage.svg";

const HeroImage: React.FC = () => {
    return (
        <div className="hidden lg:flex place-self-center mt-10 w-4/5">
            <Image src={HeroImageSVG} alt="Hero Image" />
        </div>
    )
};

export default HeroImage;