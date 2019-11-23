import React from 'react';
import Team from '../Team/team';
import Match from '../Match/Match.js'

 const ScoreBoardItem = ({logo, wins}) => (
  <div className="scoreBoardItem">
    <Team
      logo={logo}
      wins={wins}
      teamLosses='0' 
    />

    <Match 
      matchTitle={'Recent'}
      homeTeamLogo={logo} 
      opposingTeamLogo='https://liquipedia.net/commons/images/thumb/9/93/San_Francisco_Shock_Alt_logo.png/688px-San_Francisco_Shock_Alt_logo.png'
      homeTeamScore='4'
      opposingTeamScore='0'
    />
    <Match
      matchTitle={'Current'}
      homeTeamLogo={logo}
      opposingTeamLogo='https://images.blz-contentstack.com/v3/assets/blt0c238ac68842739d/blt9f8719fbc58dc316/5d636d843471931c451d348c/Team_Logos_Seoul.svg?auto=webp'
      homeTeamScore='3'
      opposingTeamScore='2'
    />
    

  </div>
);

export default ScoreBoardItem;
