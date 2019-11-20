import React from 'react';
import Team from '../Team/team';
import CurrentMatch from '../CurrentMatch/currentMatch'

 const ScoreBoardItem = ({src}) => {
  return (
    <div className="scoreBoardItem">
      <Team src={src} />
      <CurrentMatch />
    </div>
  );
}

export default ScoreBoardItem;
