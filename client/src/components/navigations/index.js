import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className='nav'>
      <div className='nav__item'>
        <svg className='nav__icon'>
          <use href='resources/icons.svg#icon-soccer'></use>
        </svg>
      </div>

      <div className='nav__item'>
        <Link to='/' className='nav__link'>
          <svg className='nav__icon'>
            <use href='resources/icons.svg#icon-home'></use>
          </svg>
        </Link>
      </div>

      <div className='nav__item'>
        <Link to='/add_player' className='nav__link'>
          <svg className='nav__icon'>
            <use href='resources/icons.svg#icon-add_circle_outlinecontrol_point'></use>
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
