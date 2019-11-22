
import React from "react";
import "./scoreBoard.css";
import ScoreBoardItem from "./scoreBoardItem";
const OverwatchLeague = require("overwatchleague");
export default class ScoreBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      team: {
        name:'',
        logo: '',
      }
    };
  }

  fetchTeamName() {
    const OWL = new OverwatchLeague();
    return OWL.findTeamName(4410).then(response => {
      this.setState({ team: {name: response.data }});
    });
  }

  
  fetchTeamLogo() {
    const OWL = new OverwatchLeague();
    return OWL.getTeamLogo(4410).then(response => {
      this.setState({ team: {logo: response.data }});
    });
  }

  componentDidMount() {
    this.fetchTeamName();
    this.fetchTeamLogo();
  }

  render() {
    console.log("hey this is our awesome data", this.state);
    const { team } = this.state;
    return (
      <div className="scoreBoard">
        <ScoreBoardItem src={team.logo} />
      </div>
    );
  }
}