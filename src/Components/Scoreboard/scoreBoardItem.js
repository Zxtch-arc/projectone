import React, {useState, useEffect} from "react";
import OverwatchLeague from "overwatchleague";
import Team from '../Team/team';
import Match from '../Match/Match.js'

const OWL = new OverwatchLeague();

const ScoreBoardItem = ({teamId, teamName, teamLogo}) => {
 const [wins, setMatchWins] = useState(0);
 const [loss, setLoss] = useState(0);
 const [opponentId, setOpponentId] = useState('');
 const [opponentLogo, setOpponentLogo] = useState('');
 const [opponentScore, setOpponentScore] = useState(0);
 const [homeScore, setHomeScore] = useState(0);

 const fetchData = () => {
    OWL.getMatchWins(teamId).then(response => {
     setMatchWins(response.data)
   }).then(OWL.getMatchLoss(teamId).then(response => { 
     setLoss(response.data)
   })).then(OWL.lastMatchForTeam(teamId).then(response => {
     const team = response.data;
     setOpponentId(team.competitors[0].id)
     setOpponentScore(team.scores[0].value)
     setHomeScore(team.scores[1].value)
  })).then(OWL.getTeamLogo(opponentId)
  .then(response => {
    setOpponentLogo(response.data)
  }).catch(error => console.log(error))
)}

 useEffect(() => {
   fetchData(teamId);
 })

 return(
  <div className="scoreBoardItem">
    <Team
      teamName={teamName}
      logo={teamLogo}
      wins={wins}
      teamLosses={loss}
    />
    <Match 
      matchTitle={'Recent'}
      homeTeamLogo={teamLogo} 
      opposingTeamLogo={opponentLogo}
      homeTeamScore={homeScore}
      opposingTeamScore={opponentScore}
    />

    <video className="videoPlayer" src="" controls width="250" crossOrigin="" >
    </video>
  </div>
)};

export default ScoreBoardItem;