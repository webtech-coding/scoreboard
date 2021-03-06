import React from "react";

const Sort = props => {
  return (
    <div className='sort' onClick={props.onOrderToggle}>
      <div></div>
      <button className='sort__button'>
        <svg className='sort__icon'>
          <use href='resources/icons.svg#icon-retweet'></use>
        </svg>
        <label className='sort__label'>Order by score </label>
      </button>
    </div>
  );
};

export default Sort;
