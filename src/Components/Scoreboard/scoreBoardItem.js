import React from 'react';
import Team from '../Team/team';
import Match from '../Match/Match.js'

 const ScoreBoardItem = ({src}) => {
  return (
    <div className="scoreBoardItem">
  
      <Team 
        src={src}
        teamWins='2'
        teamLosses='0' 
      />

      <Match 
        matchTitle={'Recent'}
        homeTeamLogo='https://pbs.twimg.com/profile_images/1179402715392282627/AR4Xv02g_400x400.png' 
        opposingTeamLogo='https://eui6dii703-flywheel.netdna-ssl.com/wp-content/uploads/2018/05/San-Francisco-Shock.png'
      />
      <Match
        matchTitle={'Current'}
        homeTeamLogo='https://pbs.twimg.com/profile_images/1179402715392282627/AR4Xv02g_400x400.png'
        opposingTeamLogo='https://eui6dii703-flywheel.netdna-ssl.com/wp-content/uploads/2018/05/San-Francisco-Shock.png'
      />
      

    </div>
  );
}

export default ScoreBoardItem;
