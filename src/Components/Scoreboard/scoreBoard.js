
import React, {useState, useEffect} from "react";
import OverwatchLeague from "overwatchleague";
import ScoreBoardItem from "./scoreBoardItem";
import "./scoreBoard.css";


const ScoreBoard = () => {
  const OWL = new OverwatchLeague();

  // const [team, setTeam] = useState([]);

  OWL.getVideos().then(response => {
    const game = response.data
    console.log(game)
    // setTeam(game.competitors)
  })
  
  // console.log(team)
  return (
    <div className="scoreBoard">
      <ScoreBoardItem teamId={7696}/>
    </div>
  );
}

export default ScoreBoard;