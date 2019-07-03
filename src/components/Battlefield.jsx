import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Field from "./Field";
import ShadowRealm from "./ShadowRealm";
import { dataRecieved, endEncounter } from "../actions";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

class Battlefield extends React.Component {
  state = {
    terrain: "Grasslands",
    list: [],
    formUpdated: true
  };

  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.formUpdated) {
      let temp = this.props.monsters.map((i, index) => ({
        ...i,
        initiative: Math.floor(
          Math.random() * 20 + 1 + Math.floor(((i.dexterity || 10) - 10) / 2)
        ),
        is_Alive: true,
        id: index
      }));
      temp = temp.concat(
        this.props.players.map((char, i) => ({
          ...char,
          id: temp.length + i
        }))
      );

      temp = temp.sort((a, b) => {
        return b.initiative - a.initiative;
      });

      this.setState(
        {
          list: temp
        },
        this.props.dataRecieved
      );
    } else if (this.props.creatureDead !== undefined) {
      this.props.dataRecieved();
      this.setState(prevState => ({
        ...prevState,
        list: prevState.list.map(i =>
          i.id === this.props.creatureDead ? { ...i, is_Alive: !i.is_Alive } : i
        )
      }));
    }
  }

  next = e => {
    let temp = this.state.list.map(i => i);
    let tempChar = temp.shift();
    temp.push(tempChar);
    this.setState({ list: temp });
  };

  last = e => {
    let temp = this.state.list.map(i => i);
    let tempChar = temp.pop();
    temp.unshift(tempChar);
    this.setState({ list: temp });
  };

  render() {
    return (
      <Battlegrounds>
        <LoadingScreen visible={!this.props.terrain || this.props.formPending === true}>
          <LoadingBox>
            <CircularProgressSC visible={this.props.formPending} size={154} thickness={1} color="white" />
            <LoadingImg src="/assets/red-dragon-2.png" />
          </LoadingBox>
        </LoadingScreen>
        <ButtonBox>
          <InitiativeButton variant="contained" onClick={this.last}>
            Previous
          </InitiativeButton>
          <InitiativeButton variant="contained" onClick={this.next}>
            Next
          </InitiativeButton>
          <EndButton
            variant="contained"
            onClick={() => this.props.endEncounter()}
          >
            End Encounter
          </EndButton>
        </ButtonBox>

        <FieldBox
          style={{
            backgroundImage: `url(/assets/${this.props.terrain}.jpg)`
          }}
        >
          {this.state.list.filter(monster => monster.is_Alive === true).length >
          0 ? (
            <Field monsters={this.state.list} />
          ) : null}
        </FieldBox>
        {this.state.list.filter(monster => monster.is_Alive === false).length >
        0 ? (
          <ShadowRealmBox>
            <ShadowRealm monsters={this.state.list} />
          </ShadowRealmBox>
        ) : null}
      </Battlegrounds>
    );
  }
}

const InitiativeButton = styled(Button)({
  backgroundColor: "#cf291d !important",
  fontSize: "12px !important",
  color: "white !important",
  fontWeight: "bold !important",
  width: "15%"
});

const EndButton = styled(Button)({
  backgroundColor: "#bfbfbf !important",
  fontSize: "12px !important",
  fontWeight: "bold !important",
  width: "15%"
});

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 5%;
  width: 100%;
  background-color: #202020;
`;

const Battlegrounds = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  z-index: 1;
`;

const FieldBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  overflow-y: auto;
  background-repeat: no-repeat;
  /* background-positon: center; */
`;

const ShadowRealmBox = styled.div`
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: safe center;
  overflow-x: auto;
  background: #202020;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
`;

const LoadingScreen = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #262626;
  height: 100%;
  width: 100%;
  color: white;
  font-size: 40px;
  overflow: hidden;
  opacity: ${props => props.visible ? "1" : "0"};
  transition: opacity .2s;
  z-index: 2;
  pointer-events: none;
`;

const LoadingBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20%;
`;

const CircularProgressSC = styled(CircularProgress)`
  position: absolute;
  opacity: ${props => props.visible ? "1" : "0"};
  transition: opacity .1s;
  
`

const LoadingImg = styled.img`
  width: 10%;
  
`

//redux
const mapStateToProps = state => {
  return {
    monsters: state.monsters,
    players: state.players,
    formPending: state.formPending,
    formError: state.formError,
    formUpdated: state.formUpdated,
    terrain: state.terrain,
    creatureDead: state.creatureDead
  };
};

const mapDispatchToProps = {
  dataRecieved,
  endEncounter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battlefield);
