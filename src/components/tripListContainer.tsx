import React from 'react';
import TripItemContainer from './tripItemContainer';
import './tripListContainer.scss';

const TripListContainer = ({ tripSet }: any) => {
  return (
    <div className="list-conatiner">
      {
        tripSet.map((item: any, index: number) => {
          return (
            <TripItemContainer tripItem={item} key={index} />
          );
        })
      }
    </div>
  );

};

export default TripListContainer;