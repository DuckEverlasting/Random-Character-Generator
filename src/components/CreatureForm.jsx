import React, { Component } from 'react';

// Encounter Level - number input
// Number of Monsters - number input
// Type selector - drop down - select one
// alignment selector - select multiple
// terrain selector - select one

class CreatureForm extends Component {
    constructor() {
        super();
        this.state = {
            info: {
                encounterLevel: 0,
                numberEncounter: 0,
                type: "x",


            }

        }
    }

    onSubmitHandler = event => {
        event.preventDefault();

    }

    onChangeHandler = event => {
        this.setState({
            info: {
                ...this.state.info,
                [event.target.name]: event.target.value
            }
        })
    }


    render() {
        return (
            <div className='form-container' autocomplete='off'>
                <form onSubmit={this.onSubmitHandler}>

                    Encounter Level:
                    <input
                        type="number"
                        min="1"
                        max="20"
                        name="encounterLevel"
                        value={this.state.info.encounterLevel}
                        onChange={this.onChangeHandler}
                    />

                    Number of Encounters:
                    <input
                        type="number"
                        name="numberEncounter"
                        value={this.state.info.numberEncounter}
                        onChange={this.onChangeHandler}
                    />

                    Encounter Type:
                    <select
                        name="type"
                        placeholder="x"
                        value={this.state.info.type}
                        onChange={this.onChangeHandler}
                        >

                        <option value="x" hidden>Choose</option>
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



                </form>
            </div>
        );
    }
}

export default CreatureForm;