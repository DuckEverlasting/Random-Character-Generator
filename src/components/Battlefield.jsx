import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MonsterToken from "./MonsterToken";

class Battlefield extends React.Component {
  state = {
    monster: [
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
        is_Alive: false
      }
    ]
  };
  render() {
    return (
      <Battlegrounds>
        <Field>
          {this.state.monster
            .filter(monster => monster.is_Alive === true)
            .map(monster => (
              <MonsterToken key={monster.id} monster={monster} />
            ))}
        </Field>
        <ShadowRealm>
          {this.state.monster
            .filter(monster => monster.is_Alive === false)
            .map(monster => (
              <MonsterToken key={monster.id} monster={monster} />
            ))}
        </ShadowRealm>
      </Battlegrounds>
    );
  }
}

const Battlegrounds = styled.div`
display: flex;
flex-direction: column;
height: 77vh
width: 50%;
`;

const Field = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-around;
  height: 67%;
  background: url(https://cdn.pixabay.com/photo/2016/11/29/02/31/grass-1866870_1280.jpg);
  background-repeat: no-repeat;
  background-positon: center;
`;

const ShadowRealm = styled.div`
height: 33%
display: flex;
flex-direction: row;
align-items: center
background: url(https://cdn.pixabay.com/photo/2018/01/30/13/08/old-3118750_1280.jpg);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100%`;

//redux
const mapStateToProps = state => {
  return {
    monsters: state.moonsters,
    players: state.players
  };
};

export default connect(mapStateToProps)(Battlefield);
