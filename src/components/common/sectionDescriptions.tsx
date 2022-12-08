import React from 'react';
interface Props {
  heading: string;
  description: string;
}

const SectionDescriptions: React.FC<Props> = ({ heading, description }) => {
  return (
    <div className="bg-primary py-12 rounded-3xl border-2 border-gray-900 shadow-md shadow-gray-900 mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-7xl lg:px-8 duration-150 hover:scale-110">
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{heading}</h2>
      <p className="mx-auto mt-5 max-w-prose text-xl text-gray-700">{description}</p>
    </div>
  );
}

export default SectionDescriptions;
