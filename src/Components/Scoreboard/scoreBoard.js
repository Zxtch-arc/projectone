
import React, {useState, useEffect} from "react";
import OverwatchLeague from "overwatchleague";
import ScoreBoardItem from "./scoreBoardItem";
import "./scoreBoard.css";

const OWL = new OverwatchLeague();

const renderScoreBoardItem = (index, id, name, logo, primaryColor) => {
  const primaryBackgroundColor = {
    background: "black"
  }

  return(<ScoreBoardItem teamId={id} teamName={name} teamLogo={logo} key={index} style={primaryBackgroundColor} />);
} 

const ScoreBoard = () => {

  const [teams, setTeams] = useState([]);
  

  const fetchData = () =>  {
     OWL.getTeams().then(response => {
      const data = response.data
      console.log(data.competitors)

      setTeams(data.competitors)
    }).catch(error => console.log(error))
  }


  useEffect(() => {
    fetchData();
  },[]);
  
  return (
    <div className="scoreBoard">
      {teams &&
          teams.map(
            (team, index) => {

              const { id, name, logo, primaryColor } = team.competitor; 

              console.log(id)
              
              return renderScoreBoardItem(index, id, name, logo, primaryColor);
            },
          )}


    
    </div>
  );
}

export default ScoreBoard;


  



