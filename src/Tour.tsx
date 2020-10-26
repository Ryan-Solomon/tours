import React from 'react';
import { Tour as TourType } from './typeDefs/types';

interface Props {
  tour: TourType;
}

const Tour = ({ tour }: Props) => {
  return (
    <div className='container'>
      <img src={tour.image} alt='Tour' />
      <h3>{tour.name}</h3> <span>{tour.price}</span>
      <p>{tour.info}</p>
    </div>
  );
};

export default Tour;
