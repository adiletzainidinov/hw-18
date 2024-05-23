import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { data } from '../data/raiting';

export const SinglePage = () => {
  const params = useParams();
  const id = params.id;

  const contactObject = data.find((item) => item.id === +id);
  return (
    <div>
        <h1>Single Page</h1>
        <Link to='..' relative='path'>Go Back</Link>
        {contactObject && (
        <>
          <h1>{contactObject.title}</h1>
          <h1>{contactObject.phone}</h1>
        </>
      )}
    </div>
  );
};