
import React from "react";
import "./scoreBoard.css";
import ScoreBoardItem from "./scoreBoardItem";
const OverwatchLeague = require("overwatchleague");
export default class ScoreBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      teamData: {}
    };
  }
  fetchData() {
    const OWL = new OverwatchLeague();
    return OWL.findTeamName(4410).then(response => {
      this.setState({ teamData: response.data });
      console.log(response.data);
    });
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    console.log("hey this is our awesome data", this.state);
    return (
      <div className="scoreBoard">
        <ScoreBoardItem src="https://images.blz-contentstack.com/v3/assets/blt1ab304102f2340ec/bltd4784693a24686f9/5d637aa67c931b106e8afde5/Team_Logos_Text_Vancouver.svg?auto=webp" />
      </div>
    );
  }
}