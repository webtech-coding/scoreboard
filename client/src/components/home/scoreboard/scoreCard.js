import React from "react";

const ScoreCard = ({ player, deletePlayer }) => {
  return (
    <div className='scoreboard__card' key={player._id}>
      <div className='scoreboard__card-top'>
        <img className='scoreboard__card-img' src='resources/users.png' />
        <div className='scoreboard__card-info'>
          <div className='scoreboard__card-name'>{player.name}</div>
          <div className='scorecard__card-age'>Age : {player.age}</div>
        </div>
      </div>
      <div className='scoreboard__card-score'>Score : {player.score}</div>
      <div className='scoreboard__card-bottom'>
        <div className='scoreboard__card-edit'>
          <svg className='scoreboard__card-icon'>
            <use href='resources/icons.svg#icon-pencil'></use>
          </svg>
        </div>
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
