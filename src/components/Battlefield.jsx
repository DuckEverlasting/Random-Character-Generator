import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Field from "./Field";
import ShadowRealm from "./ShadowRealm";
import { dataRecieved } from "../actions";
import Button from "@material-ui/core/Button";

class Battlefield extends React.Component {
  state = {
    monsters: [
      {
        name: "Rug of Smothering2",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 2,
        is_Alive: false
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 3,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 4,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 5,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 6,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 7,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 8,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 9,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 10,
        is_Alive: true
      },
      {
        name: "Joshua, Lord of Light",
        hit_points: 15,
        initiative: 6,
        location: "Grasslands",
        id: 11,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 12,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 13,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 14,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 15,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 16,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 17,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 18,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 19,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 20,
        is_Alive: true
      },
      {
        name: "Joshua, Lord of Light",
        hit_points: 15,
        initiative: 6,
        location: "Grasslands",
        id: 1,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 2,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 3,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 4,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 5,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 6,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 7,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 8,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 9,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 10,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 12,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 13,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 14,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 15,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 16,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 17,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 18,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 19,
        is_Alive: true
      },
      {
        name: "Rug of Smothering",
        hit_points: 64,
        initiative: 18,
        location: "Arctic",
        id: 20,
        is_Alive: true
      }
    ],
    players: [
      {
        name: "Joshua, Lord of Light",
        hit_points: 15,
        initiative: 6,
        location: "Grasslands",
        id: 1,
        is_Alive: true
      },
      {
        name: "Joshua, Lord of Light",
        hit_points: 15,
        initiative: 6,
        location: "Grasslands",
        id: 11,
        is_Alive: true
      }
    ],
    terrain: "Grasslands",
    list: [],
    formUpdated: true
  };

  componentDidMount() {
    if (this.state.formUpdated) {
      let temp = this.state.monsters.map((i, index) => ({
        ...i,
        initiative: Math.floor(
          Math.random() * 20 + 1 + Math.floor(((i.dexterity || 10) - 10) / 2)
        ),
        is_Alive: true,
        id: index
      }));
      temp = temp.concat(
        this.state.players.map((char, i) => ({
          ...char,
          id: temp.length + i
        }))
      );

      temp = temp.sort((a, b) => {
        return b.initiative - a.initiative;
      });
      this.setState({
        list: temp,
        formUpdated: false
      });
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
            backgroundImage: `url(/assets/${this.state.terrain}.jpg)`
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
  flex-flow: wrap
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
  overflow-x: auto
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
    players: state.players
  };
};

const mapDispatchToProps = {
  dataRecieved
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battlefield);
