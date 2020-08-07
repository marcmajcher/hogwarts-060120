import React from 'react';
import HogCard from './HogCard';

export default function HogList(props) {
  return (
    <div>
      {props.hogs.map((hog) => (
        <HogCard hog={hog} key={hog.name}></HogCard>
      ))}
    </div>
  );
}
