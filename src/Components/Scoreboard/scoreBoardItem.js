import React from 'react';

 const ScoreBoardItem = ({src}) => {
  return (
    <div className="scoreBoardItem">
        <div className="teamLogo">
            <img src={src} alt='team logo'></img>
       </div>
        <div className="teamStats">
                <span className="teamWins">1</span>
                -
                <span className="teamLosses">0</span>
            </div>  
    </div>
  );
}

export default ScoreBoardItem;
