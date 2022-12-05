import React from 'react';

interface Props {
  title: string;
  heading: string;
  description: string;
}

const SectionDescriptions: React.FC<Props> = ({ title, heading, description }) => {
  return (
    <div className="text-center mx-auto max-w-7xl px-6 lg:px-8 ">
      <h1 className="text-lg font-semibold leading-8">{title}</h1>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{heading}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{description}</p>
    </div>
  );
}

export default SectionDescriptions;
