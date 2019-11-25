
import React, {useState, useEffect} from "react";
import OverwatchLeague from "overwatchleague";
import ScoreBoardItem from "./scoreBoardItem";
import "./scoreBoard.css";

const OWL = new OverwatchLeague();

const ScoreBoard = () => {

  // const [teams, setTeams] = useState([]);
  
  // const fetchData = async () => {
  //   const response = await OWL.getTeams()
  //   .then(response => {
  //     setTeams(response.data)
  //   }).catch(error => console.log(error))
  // }
 
  // useEffect(() => {
  //   fetchData();
  // })

  // console.log('the value of all teams',teams)

  return (
    <div className="scoreBoard">
      <ScoreBoardItem teamId={7696}/>
    </div>
  );
}

export default ScoreBoard;