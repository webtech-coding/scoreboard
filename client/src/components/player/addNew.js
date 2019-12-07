import React, { Component } from "react";
import axios from "axios";

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: "",
        age: "",
        score: ""
      },
      success: false
    };
  }

  inputChange = e => {
    this.setState({
      input: {
        ...this.state.input,
        [e.target.name]: e.target.value
      }
    });
  };

  formSubmit = async e => {
    e.preventDefault();
    try {
      const player = await axios.post("/api/player", { ...this.state.input });
      if (player) {
        this.setState({
          success: true
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <section className='player'>
        {!this.state.success && (
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
                value={this.state.input.name}
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
                value={this.state.input.age}
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
                value={this.state.input.score}
              />
            </div>
            <div className='player__form-group player__form-group--button'>
              <button className='player__form-submit' type='submit'>
                Submit
              </button>
            </div>
          </form>
        )}

        {this.state.success == true && (
          <div style={{ color: "#fff", padding: "50px", fontSize: "24px" }}>
            A new player has been added successfully
          </div>
        )}
      </section>
    );
  }
}

export default AddNew;
