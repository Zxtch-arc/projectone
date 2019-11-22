
import React from "react";
import "./scoreBoard.css";
import ScoreBoardItem from "./scoreBoardItem";
const OverwatchLeague = require("overwatchleague");

const OWL = new OverwatchLeague();

export default class ScoreBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      team: {
        name:'',
        logo: '',
        matchWins: '',
      }
    };
  }

  fetchTeamName() {
    return OWL.findTeamName(7696).then(response => {
      this.setState({ team: {name: response.data }});
    });
  }
  
  fetchTeamLogo() {
    return OWL.getTeamLogo(7696).then(response => {
      this.setState({ team: {logo: response.data }});
    });
  }

  fetchMatchWins() {
    return OWL.getMatchWins(7696).then(response => {
      this.setState({ team: {matchWins: response.data }});
    });
  }

  componentDidMount() {
    this.fetchTeamName();
    this.fetchTeamLogo();
    this.fetchMatchWins();
  }

  render() {
    const { team } = this.state;
    console.log("hey this is our awesome data", team);
      return (
      <div className="scoreBoard">
        <ScoreBoardItem src={team.logo} matchWins={team.matchWins} />
      </div>
    );
  }
}