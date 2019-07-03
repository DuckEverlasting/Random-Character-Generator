import React, { Component } from "react";
import { submitForm as sf } from "../actions";
import { connect } from "react-redux";
// Encounter Level - number input
// Number of Monsters - number input
// Type selector - select multiple as well
// terrain selector - select one
// alignment selector - select multiple

class CreatureForm extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        encounterLevel: 0,
        numberEncounter: 0,
        type: [],
        terrain: "x",
        alignment: []
      },
      player: {
        name: "",
        level: 0,
        initiative: 0
      }
    };
  }

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.sf({ ...this.state.info });
  };

  onChangeHandler = event => {
    this.setState({
      info: {
        ...this.state.info,
        [event.target.name]: event.target.value
      }
    });
  };

  handleAlignment = event => {
    var options = event.target.options;
    var alignment = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        alignment.push(options[i].value);
      }
    }
    this.setState({
      info: {
        ...this.state.info,
        alignment: alignment
      }
    });
  };

  handleType = event => {
    var options = event.target.options;
    var type = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        type.push(options[i].value);
      }
    }
  };
  onChangeHandler = event => {
    this.setState({
      info: {
        ...this.state.info,
        [event.target.name]: event.target.value
      }
    });
  };

  handleAlignment = event => {
    var options = event.target.options;
    var alignment = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        alignment.push(options[i].value);
      }
    }

    this.setState({
      info: {
        ...this.state.info,
        alignment: alignment
      }
    });
  };

  handleType = event => {
    var options = event.target.options;
    var type = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        type.push(options[i].value);
      }
    }

    this.setState({
      info: {
        ...this.state.info,
        type: type
      }
    });
  };

  onChangePlayer = event => {
    this.setState({
      player: {
        ...this.state.player,
        [event.target.name]: event.target.value
      }
    });
  };

  addPlayer = event => {
    event.preventDefault();
    console.log(
      `AddPlayer: Player: ${this.state.player.name}, Level: ${
        this.state.player.level
      }, Initiative: ${this.state.player.initiative}`
    );
  };

  render() {
    return (
      <div className="form-container">
        <h1 className="title">Generate Random Encounter</h1>
        {
          //<p className='instructions'>For Windows: Hold down the <strong>Control button + Click</strong> to select multiple option.
          //For Mac: Hold down the <strong>Command button + Click</strong> to select multiple options.</p>
        }
        <form onSubmit={this.onSubmitHandler} autoComplete="off">
          <h3>Encounter Level:</h3>
          <input
            type="number"
            min="1"
            max="20"
            name="encounterLevel"
            value={this.state.info.encounterLevel}
            onChange={this.onChangeHandler}
          />

          <h3>Number of Creatures:</h3>
          <input
            type="number"
            min="1"
            max="20"
            name="numberEncounter"
            value={this.state.info.numberEncounter}
            onChange={this.onChangeHandler}
          />

          <h3>Creature Type:</h3>
          <select
            multiple={true}
            value={this.state.info.type}
            onChange={this.handleType}
          >
            <option value="any">Any/All</option>
            <option value="aberration">Aberration</option>
            <option value="beast">Beast</option>
            <option value="celestial">Celestial</option>
            <option value="construct">Construct</option>
            <option value="dragon">Dragon</option>
            <option value="elemental">Elemental</option>
            <option value="fey">Fey</option>
            <option value="fiend">Fiend</option>
            <option value="giant">Giant</option>
            <option value="humanoid">Humanoid</option>
            <option value="monstrosity">Monstrosity</option>
            <option value="ooze">Ooze</option>
            <option value="plant">Plant</option>
            <option value="undead">Undead</option>
          </select>

          <h3>Environment</h3>
          <select
            name="terrain"
            placeholder="x"
            value={this.state.info.terrain}
            onChange={this.onChangeHandler}
          >
            <option value="any">Any/All</option>
            <option value="arctic">Arctic</option>
            <option value="coastal">Coastal</option>
            <option value="desert">Desert</option>
            <option value="forest">Forest</option>
            <option value="grassland">Grassland</option>
            <option value="hill">Hill</option>
            <option value="mountain">Mountain</option>
            <option value="swamp">Swamp</option>
            <option value="underdark">Underdark</option>
            <option value="underwater">Underwater</option>
            <option value="urban">Urban</option>
          </select>


          <h3>Alignment</h3>
          <select
            multiple={true}
            value={this.state.info.alignment}
            onChange={this.handleAlignment}
          >
            <option value="any">Any/All</option>
            <option value="Unaligned">Unaligned</option>
            <option value="Lawful Good">Lawful Good</option>
            <option value="Neutral Good">Neutral Good</option>
            <option value="Chaotic Good">Chaotic Good</option>
            <option value="Lawful Neutral">Lawful Neutral</option>
            <option value="Neutral">Neutral</option>
            <option value="Chaotic Neutral">Chaotic Neutral</option>
            <option value="Lawful Evil">Lawful Evil</option>
            <option value="Neutral Evil">Neutral Evil</option>
            <option value="Chaotic Evil">Chaotic Evil</option>
          </select>
          <button type="submit">Generate</button>
        </form>

        <h1>Add Players</h1>
        <form onSubmit={this.addPlayer} autoComplete="off">
          Name:
          <input
            type="text"
            name="name"
            value={this.state.player.name}
            onChange={this.onChangePlayer}
          />
          Level:
          <input
            type="number"
            min="1"
            max="20"
            name="level"
            value={this.state.player.level}
            onChange={this.onChangePlayer}
          />
          Initiative:
          <input
            type="number"
            min="1"
            name="initiative"
            value={this.state.player.initiative}
            onChange={this.onChangePlayer}
          />
          <button type="submit">Add Player</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  sf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatureForm);
