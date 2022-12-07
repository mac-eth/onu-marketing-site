import React from 'react';

interface Props {
  title: string;
  heading: string;
  description: string;
}

const SectionDescriptions: React.FC<Props> = ({ title, heading, description }) => {
  return (
    <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
      <h1 className="text-lg font-semibold text-tertiary">{title}</h1>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{heading}</h2>
      <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">{description}</p>
    </div>
  );
}

export default SectionDescriptions;
