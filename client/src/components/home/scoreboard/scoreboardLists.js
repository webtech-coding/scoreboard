import React, { Component } from "react";
import axios from "axios";

import ScoreCard from "./scoreCard";

class ScoreboardLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      players: []
    };
  }

  getPlayers = async () => {
    try {
      const allPlayers = await axios.get("/api/player");

      if (allPlayers) {
        this.setState({
          loaded: true,
          players: allPlayers.data.players
        });
      }
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  };

  deletePlayer = async id => {
    try {
      await axios.delete(`/api/player/${id}`);
      this.getPlayers();
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getPlayers();
  }
  render() {
    return (
      <section className='scoreboard'>
        <div className='scoreboard__lists'>
          {this.state.players.length > 0 &&
            this.state.players.map(player => {
              console.log(player);
              return (
                <ScoreCard
                  player={player}
                  deletePlayer={id => {
                    this.deletePlayer(id);
                  }}
                />
              );
            })}
          {this.state.loaded == false && (
            <div style={{ color: "#fff" }}>Loading ... </div>
          )}
        </div>
      </section>
    );
  }
}

export default ScoreboardLists;
