import React from 'react';
import Team from '../Team/team';
import CurrentMatch from '../CurrentMatch/currentMatch'
import RecentMatch from '../RecentMatch/recentMatch'

 const ScoreBoardItem = ({src}) => {
  return (
    <div className="scoreBoardItem">
  
      <Team src={src} />
      <RecentMatch />
      <CurrentMatch />
    </div>
  );
}

export default ScoreBoardItem;
