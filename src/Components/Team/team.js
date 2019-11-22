import React from 'react';

 const Team = ({matchWins, teamLosses, src}) => {
  return (
      <React.Fragment>
        <div className="teamLogo">
          <img src={src} alt='team logo'></img>
        </div>
        <div className="teamContainer">
          <span className="teamWinLoss">W-L</span>
          <div className="teamStats">
            <span className="teamWins">{matchWins}</span>
              -
            <span className="teamLosses">{teamLosses}</span>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Team;
