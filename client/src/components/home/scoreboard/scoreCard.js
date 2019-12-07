import React from "react";
const ScoreCard = () => {
  return (
    <div className='scoreboard__card'>
      <div className='scoreboard__card-top'>
        <img className='scoreboard__card-img' src='resources/users.png' />
        <div className='scoreboard__card-info'>
          <div className='scoreboard__card-name'>Shovit Thapa</div>
          <div className='scorecard__card-age'>Age : 26</div>
        </div>
      </div>
      <div className='scoreboard__card-score'>Score : 20</div>
      <div className='scoreboard__card-bottom'>
        <div className='scoreboard__card-edit'>
          <svg className='scoreboard__card-icon'>
            <use href='resources/icons.svg#icon-pencil'></use>
          </svg>
        </div>
        <div className='scoreboard__card-delete'>
          <svg className='scoreboard__card-icon'>
            <use href='resources/icons.svg#icon-trash'></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
