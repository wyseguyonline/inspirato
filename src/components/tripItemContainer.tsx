import React from 'react';
import './tripItemContainer.scss';

const TripItemContainer = ({ tripItem }: any) => {
  const checkinDate = new Date(tripItem.checkInDate);
  return (
    <div className="trip-item">
      <div className="item-unit-name">{`${tripItem.unitName}`}</div>
      <div className="item-unit-style">{`${tripItem.unitStyleName}`}</div>
      <div className="item-check-in">{`Checkin: ${checkinDate.getMonth() + 1}/${checkinDate.getDate()}/${checkinDate.getFullYear()}`}</div>
    </div>
  );

};

export default TripItemContainer;