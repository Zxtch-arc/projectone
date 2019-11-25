import React, {useState, useEffect} from "react";
import OverwatchLeague from "overwatchleague";
import Team from '../Team/team';
import Match from '../Match/Match.js'

const OWL = new OverwatchLeague();

const ScoreBoardItem = ({teamId}) => {
 
 const [logo, setLogo] = useState('');
 const [wins, setMatchWins] = useState(0);
 const [loss, setLoss] = useState(0);
 const [opponentId, setOpponentId] = useState('');
 const [opponentLogo, setOpponentLogo] = useState('');
 const [opponentScore, setOpponentScore] = useState(0);
 const [homeScore, setHomeScore] = useState(0);

 const fetchData = async () => {
   const response = await  OWL.getTeamLogo(teamId)
   .then(response => {
     setLogo(response.data)
   }).then(OWL.getMatchWins(teamId).then(response => {
     setMatchWins(response.data)
   })).then(OWL.getMatchLoss(teamId).then(response => { 
     setLoss(response.data)
   })).then(OWL.lastMatchForTeam(teamId).then(response => {
     const team = response.data;
     console.log(team)
     setOpponentId(team.competitors[0].id)
     setOpponentScore(team.scores[0].value)
     setHomeScore(team.scores[1].value)
  })).then(OWL.getTeamLogo(opponentId)
  .then(response => {
    setOpponentLogo(response.data)
  }).catch(error => console.log(error))
)}
//   .then(OWL.lastMatchForTeam(teamId).then(response => {
//     const team = response.data;
//     console.log('team test', team)
//     setMatchscore(team.scores[0].id)
//   .catch(error => console.log(error))
//  }))

 useEffect(() => {
   fetchData();
 })

//  console.log('currentlivematch data', OWL.getLiveMatch(teamId) )

 return(
  <div className="scoreBoardItem">
    <Team
      logo={logo}
      wins={wins}
      teamLosses={loss}
    />

    <Match 
      matchTitle={'recent'}
      homeTeamLogo={logo} 
      opposingTeamLogo={opponentLogo}
      homeTeamScore={homeScore}
      opposingTeamScore={opponentScore}
    />
    <Match
      matchTitle={'Current'}
      homeTeamLogo={logo}
      opposingTeamLogo='https://images.blz-contentstack.com/v3/assets/blt0c238ac68842739d/blt9f8719fbc58dc316/5d636d843471931c451d348c/Team_Logos_Seoul.svg?auto=webp'
      homeTeamScore='3'
      opposingTeamScore='2'
    />
    

  </div>
)};

export default ScoreBoardItem;
