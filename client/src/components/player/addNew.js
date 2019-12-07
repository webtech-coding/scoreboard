import React, { Component } from "react";
import axios from "axios";

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      score: ""
    };
  }

  inputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  formSubmit = async e => {
    e.preventDefault();
    const player = await axios.post("/api/player", { ...this.state });
    console.log(player);
  };

  render() {
    return (
      <section className='player'>
        <form
          action=''
          className='player__form'
          onSubmit={e => {
            this.formSubmit(e);
          }}
        >
          <p className='player__form-title'>Add a new player : </p>
          <small>(*) fields are required</small>
          <br />
          <div className='player__form-group'>
            <div className='player__form-label'>Name of the player* :</div>
            <input
              type='text'
              className='player__form-input'
              name='name'
              required
              onChange={e => {
                this.inputChange(e);
              }}
              value={this.state.name}
            />
          </div>
          <div className='player__form-group'>
            <div className='player__form-label'>Age* :</div>
            <input
              type='text'
              className='player__form-input'
              required
              onChange={e => {
                this.inputChange(e);
              }}
              value={this.state.age}
              name='age'
            />
          </div>
          <div className='player__form-group'>
            <div className='player__form-label'>Score* :</div>
            <input
              type='text'
              className='player__form-input'
              required
              onChange={e => {
                this.inputChange(e);
              }}
              name='score'
              value={this.state.score}
            />
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
