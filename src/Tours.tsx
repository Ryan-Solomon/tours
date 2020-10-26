import React, { FC } from 'react';
import { Tour as TourType } from './typeDefs/types';
import Tour from './Tour';

interface Props {
  tours?: TourType[];
}

const Tours = ({ tours = [] }: Props) => {
  const renderedTours = tours.map((tour) => {
    return <Tour key={tour.id} tour={tour} />;
  });

  return <div>{renderedTours}</div>;
};

export default Tours;
