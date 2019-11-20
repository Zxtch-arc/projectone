import React from 'react';

 const Team = ({src}) => {
  return (
      <React.Fragment>
        <div className="teamLogo">
        <img src={src} alt='team logo'></img>
        </div>
        <div className="teamStats">
            <span className="teamWins">1</span>
            -
            <span className="teamLosses">0</span>
        </div>
    </React.Fragment>
  );
}

export default Team;
