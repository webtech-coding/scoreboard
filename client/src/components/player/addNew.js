import React, { Component } from "react";

class AddNew extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className='player'>
        <form action='' className='player__form'>
          <p className='player__form-title'>Add a new player : </p>
          <small>(*) fields are required</small>
          <br />
          <div className='player__form-group'>
            <div className='player__form-label'>Name of the player* :</div>
            <input type='text' className='player__form-input' required />
          </div>
          <div className='player__form-group'>
            <div className='player__form-label'>Age* :</div>
            <input type='text' className='player__form-input' required />
          </div>
          <div className='player__form-group'>
            <div className='player__form-label'>Score* :</div>
            <input type='text' className='player__form-input' required />
          </div>
          <div className='player__form-group player__form-group--button'>
            <button className='player__form-submit' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddNew;
