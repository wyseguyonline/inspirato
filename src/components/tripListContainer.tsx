import React from 'react';
import TripItemContainer from './tripItemContainer';
import './tripListContainer.scss';

const TripListContainer = ({ tripSet }: any) => {
  return (
    <div className="list-conatiner">
      {
        tripSet.map((item: any) => {
          return (
            <TripItemContainer tripItem={item} />
          );
        })
      }
    </div>
  );

};

export default TripListContainer;