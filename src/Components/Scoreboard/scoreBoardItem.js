import React from 'react';

 const ScoreBoardItem = ({src}) => {
  return (
    <div className="scoreBoardItem">
        <div className="teamLogo">
            <img src={src} alt='team logo'></img>
        </div>
    </div>
  );
}

export default ScoreBoardItem;
