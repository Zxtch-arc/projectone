
import React, {useState, useEffect} from "react";
import OverwatchLeague from "overwatchleague";
import ScoreBoardItem from "./scoreBoardItem";
import "./scoreBoard.css";

const OWL = new OverwatchLeague();

const ScoreBoard = () => {
  const [logo, setLogo] = useState('');
  const [wins, setMatchWins] = useState(0);
  
  const fetchData = async () => {
    const response = await OWL.getTeamLogo(7696)
    .then(response => {
      setLogo(response.data)
    }).then(OWL.getMatchWins(7696).then(response => {
      setMatchWins(response.data)
    })).catch(error => console.log(error));
  }

  useEffect(() => {
    fetchData();
  })

  return (
    <div className="scoreBoard">
      <ScoreBoardItem logo={logo} wins={wins} />
    </div>
  );
}

export default ScoreBoard;