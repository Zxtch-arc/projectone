import React from 'react';

 const Team = ({wins, teamLosses, logo}) => {
  return (
      <React.Fragment>
        <div className="teamLogo">
          <img src={logo} alt='team logo'></img>
        </div>
        <div className="teamContainer">
          <span className="teamWinLoss">W-L</span>
          <div className="teamStats">
            <span className="teamWins">{wins}</span>
              -
            <span className="teamLosses">{teamLosses}</span>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Team;
