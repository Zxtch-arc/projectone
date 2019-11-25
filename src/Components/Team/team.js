import React from 'react';
import "./team.css";

 const Team = ({wins, teamLosses, logo}) => {
  return (
      <React.Fragment>
   
        <div className="teamContainer">
          <div className="teamLogo">
            <img src={logo} alt='team logo'></img>
          </div>
          <div>
            <span className="teamWinLoss">W-L</span>
            <div className="teamStats">
              <span className="teamWins">{wins}</span>
                -
              <span className="teamLosses">{teamLosses}</span>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Team;
