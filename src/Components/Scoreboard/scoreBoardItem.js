import React, {useState, useEffect} from "react";
import OverwatchLeague from "overwatchleague";
import Team from '../Team/team';
import Match from '../Match/Match.js'


const ScoreBoardItem = ({teamId, teamName, teamLogo}) => {
  const OWL = new OverwatchLeague();

 const [wins, setMatchWins] = useState(0);
 const [loss, setLoss] = useState(0);
//  const [opponentId, setOpponentId] = useState('');
 const [opponentLogo, setOpponentLogo] = useState('');
 const [opponentScore, setOpponentScore] = useState(0);
 const [homeScore, setHomeScore] = useState(0);

 const getTeamIndexes = (competitors, homeTeamId) => {
  //  debugger;
   console.log({competitors, homeTeamId})
   const home = competitors.findIndex(competitor => competitor.id === homeTeamId);
   console.log({home})
  //  if (home < 0) debugger;
   const opponent = home === 0 ? 1 : 0;

   return {home, opponent};
 };

 const fetchData = () => {
    Promise.all([
      OWL.getMatchWins(teamId),
      OWL.getMatchLoss(teamId),
      OWL.lastMatchForTeam(teamId)
    ]).then(([teamWins, teamLoss, lastMatch]) => {
      setMatchWins(teamWins.data);
      setLoss(teamLoss.data);

      const team = lastMatch.data;
      console.log({team})

      const { home, opponent } = getTeamIndexes(team.competitors, teamId);

      setOpponentScore(team.scores[opponent].value)
      setHomeScore(team.scores[home].value);
      return team.competitors[opponent].id;
    })
    .then((opponentId) =>
      OWL.getTeamLogo(opponentId)
        .then(response => {
          setOpponentLogo(response.data)
        })
    )
    .catch(error => console.log(error))
}

 useEffect(() => {
   console.log("FETCHING ", teamId);
   fetchData(teamId);
 }, [])

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