import React from 'react';
import ReactMarkdown from 'react-markdown';

const CustomPage = ({ data }) => {
  const { title, description, body } = data[0];

  return (
    <div className="page__wrapper p-8 sm:p-28 text-center">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="text-content">
        <ReactMarkdown className="markdown grid" source={body} />
      </div>
    </div>
  );
};

export default CustomPage;
