import React, { useState, useEffect } from 'react';
import HeroImage from "./components/heroImage";
import TripListContainer from "./components/tripListContainer";
import './App.scss';

import tripDataRaw from "./trips.json";

const compAsc = (objA: any, objB:any ) => {
  const dateA = new Date(objA.checkInDate);
  const dateB = new Date(objB.checkInDate);

  if ( dateA < dateB ){
    return -1;
  }
  if ( dateA > dateB ){
    return 1;
  }
  return 0;
};

const compDesc = (objA: any, objB: any) => {
  const dateA = new Date(objA.checkInDate);
  const dateB = new Date(objB.checkInDate);

  if ( dateA > dateB ){
    return -1;
  }
  if ( dateA < dateB ){
    return 1;
  }
  return 0;
};

function App() {
  const [sortAsc, setSortAsc] = useState(true);
  const [sortBtnText, setSortBtnText] = useState("Ascending");
  const [tripSetData, setTripData] = useState(tripDataRaw.tripSet);

  useEffect(() => {
    const sortData = sortAsc ? tripSetData.sort(compAsc) : tripSetData.sort(compDesc);
    setTripData(sortData);
  }, []);

  const toggleSort = () => {
    if (sortAsc) {
      setSortAsc(false);
      setSortBtnText("Descending");
      setTripData(tripSetData.sort(compDesc));
      return;
    }

    setSortAsc(true);
    setSortBtnText("Ascending");
    setTripData(tripSetData.sort(compAsc));
    return;
  };

  return (
    <div className="App">
      <header className="App-header">
        <HeroImage picId="9451686/v3_select_pass_overview_1.jpg" />
      </header>
      <div className="outer-container">
        <div className="sort-toggle">
          <button onClick={toggleSort}>{`Sort ${sortBtnText}`}</button>
        </div>
        <TripListContainer 
          tripSet={tripSetData}
        />
      </div>
    </div>
  );
}

export default App;
