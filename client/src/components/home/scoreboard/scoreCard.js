import React from "react";
import { Link } from "react-router-dom";

const ScoreCard = ({ player, deletePlayer }) => {
  const avatarStyle = {
    borderRadius: "50%",
    marginRight: "15px"
  };
  return (
    <div className='scoreboard__card' key={player._id}>
      <div className='scoreboard__card-top'>
        <img
          className='scoreboard__card-img'
          src={player.avatar}
          style={avatarStyle}
        />
        <div className='scoreboard__card-info'>
          <div className='scoreboard__card-name'>{player.name}</div>
          <div className='scorecard__card-age'>Age : {player.age}</div>
        </div>
      </div>
      <div className='scoreboard__card-score'>Score : {player.score}</div>
      <div className='scoreboard__card-bottom'>
        <div
          className='scoreboard__card-delete'
          onClick={() => {
            deletePlayer(player._id);
          }}
        >
          <svg className='scoreboard__card-icon'>
            <use href='resources/icons.svg#icon-trash'></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
