import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Field from "./Field";
import ShadowRealm from "./ShadowRealm";
import { dataRecieved } from "../actions";
import Button from "@material-ui/core/Button";

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
    if (this.props.formPending === true) {
      return <div>Loading...</div>;
    }
    return (
      <Battlegrounds>
        <ButtonBox>
          <InitiativeButton variant="contained" onClick={this.last}>
            Previous
          </InitiativeButton>
          <InitiativeButton variant="contained" onClick={this.next}>
            Next
          </InitiativeButton>
        </ButtonBox>

        <FieldBox
          style={{
            backgroundImage: `url(/assets/${this.props.terrain}.jpg)`
          }}
        >
          <Field monsters={this.state.list} />
        </FieldBox>
        <ShadowRealmBox>
          <ShadowRealm monster={this.state.list} />
        </ShadowRealmBox>
      </Battlegrounds>
    );
  }
}

const InitiativeButton = styled(Button)({
  backgroundColor: "#cf291d !important",
  width: "25%"
});

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 5%;
  width: 100%;
`;

const Battlegrounds = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const FieldBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-around;
  height: 75%;
  overflow-y: scroll;
  background-repeat: no-repeat;
  background-positon: center;
`;

const ShadowRealmBox = styled.div`
  height: 25%;
  display: flex;
  flex-direction: row;
  align-items: safe center;
  overflow-x: auto;
  background: url(https://cdn.pixabay.com/photo/2018/01/30/13/08/old-3118750_1280.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.6;
  width: 100%;
`;

//redux
const mapStateToProps = state => {
  return {
    monsters: state.monsters,
    players: state.players,
    formPending: state.formPending,
    formError: state.formError,
    formUpdated: state.formUpdated,
    terrain: state.terrain
  };
};

const mapDispatchToProps = {
  dataRecieved
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battlefield);
