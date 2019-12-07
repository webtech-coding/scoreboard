import React, { Component, Fragment } from "react";
import axios from "axios";

import ScoreCard from "./scoreCard";
import Sort from "./sort";

class ScoreboardLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      players: [],
      orderBy: "desc"
    };
  }

  getPlayers = async () => {
    try {
      const allPlayers = await axios.get(
        `/api/player?orderBy=${this.state.orderBy}`
      );

      if (allPlayers) {
        this.setState({
          loaded: true,
          players: allPlayers.data.players
        });
      }
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

  toggle = () => {
    let orderBy = this.state.orderBy;
    console.log(orderBy);
    if (this.state.orderBy == "asc") {
      orderBy = "desc";
    } else if (this.state.orderBy == "desc") {
      orderBy = "asc";
    }

    this.setState(
      {
        orderBy
      },
      () => {
        this.getPlayers();
      }
    );
  };

  componentDidMount() {
    this.getPlayers();
  }
  render() {
    return (
      <Fragment>
        <Sort
          onOrderToggle={() => {
            this.toggle();
          }}
        />
        <section className='scoreboard'>
          <div className='scoreboard__lists'>
            {this.state.players.length > 0 &&
              this.state.players.map(player => {
                return (
                  <ScoreCard
                    player={player}
                    deletePlayer={id => {
                      this.deletePlayer(id);
                    }}
                    key={player._id}
                  />
                );
              })}
            {this.state.loaded == false && (
              <div style={{ color: "#fff" }}>Loading ... </div>
            )}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ScoreboardLists;
