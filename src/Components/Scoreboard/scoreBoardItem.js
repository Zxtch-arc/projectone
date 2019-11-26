import React, {useState, useEffect} from "react";
import OverwatchLeague from "overwatchleague";
import Team from '../Team/team';
import Match from '../Match/Match.js'


const ScoreBoardItem = ({teamId}) => {
 const OWL = new OverwatchLeague();
  
 const [logo, setLogo] = useState('');
 const [wins, setMatchWins] = useState(0);
 const [loss, setLoss] = useState(0);
 const [opponentId, setOpponentId] = useState('');
 const [opponentLogo, setOpponentLogo] = useState('');
 const [opponentScore, setOpponentScore] = useState(0);
 const [homeScore, setHomeScore] = useState(0);
 const [teamName, setTeamName] = useState('');

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
     setOpponentId(team.competitors[0].id)
     setOpponentScore(team.scores[0].value)
     setHomeScore(team.scores[1].value)
  })).then(OWL.getTeamLogo(opponentId)
  .then(response => {
    setOpponentLogo(response.data)
  }).then(OWL.findTeamName(teamId).then(response => {
    setTeamName(response.data)
  })).catch(error => console.log(error))
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

 return(
  <div className="scoreBoardItem">
    <Team
      teamName={teamName}
      logo={logo}
      wins={wins}
      teamLosses={loss}
    />
    <Match 
      matchTitle={'Recent'}
      homeTeamLogo={logo} 
      opposingTeamLogo={opponentLogo}
      homeTeamScore={homeScore}
      opposingTeamScore={opponentScore}
    />

    <video className="videoPlayer" src="https://player2.majorleaguegaming.com/api/v2/player/embed/vod/owl-web?vid=SZEMePPMEzh&lang=en-us" controls width="250" crossOrigin="" >
    </video>
  </div>
)};

export default ScoreBoardItem;
