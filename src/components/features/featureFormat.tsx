import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  heading: string;
  description: string;
  image: StaticImageData;
  flip: boolean;
};

const FeatureFormat: React.FC<Props> = ({
  heading,
  description,
  image,
  flip,
}) => {
  const containerClasses =
    "flex flex-col md:flex-row items-center justify-between py-8";
  const imageClasses = "h-full w-full mx-auto";
  const headingClasses = "text-2xl font-bold text-gray-800";
  const descriptionClasses = "text-gray-600 mt-2";

  return (
    <div className={containerClasses}>
      {flip ? (
        <>
          <div className="md:w-1/2 px-8">
            <Image src={image} alt={heading} className={imageClasses} />
          </div>
          <div className="md:w-1/2 px-8 mt-4 md:mt-0">
            <h3 className={headingClasses}>{heading}</h3>
            <p className={descriptionClasses}>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 px-8 mt-4 md:mt-0">
            <h3 className={headingClasses}>{heading}</h3>
            <p className={descriptionClasses}>{description}</p>
          </div>
          <div className="md:w-1/2 px-8">
            <Image src={image} alt={heading} className={imageClasses} />
          </div>
        </>
      )}
    </div>
  );
};

export default FeatureFormat;
