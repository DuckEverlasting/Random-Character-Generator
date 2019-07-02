import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Field from "./Field";
import ShadowRealm from "./ShadowRealm";

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
      }
    ],
    terrain: "Grasslands"
  };

  render() {
    return (
      <Battlegrounds>
        <FieldBox
          style={{
            backgroundImage: `url(/assets/${this.state.terrain}.jpg)`
          }}
        >
          <Field monster={this.state.monster} />
        </FieldBox>
        <ShadowRealmBox>
          <ShadowRealm monster={this.state.monster} />
        </ShadowRealmBox>
      </Battlegrounds>
    );
  }
}

const Battlegrounds = styled.div`
display: flex;
flex-direction: column;
height: 77vh
width: 50%;
@media (max-width: 800px) {
      width: 100%;
    }
  }
`;

const FieldBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-around;
  height: 67%;
  overflow: scroll;
  background-repeat: no-repeat;
  background-positon: center;
`;

const ShadowRealmBox = styled.div`
height: 33%
display: flex;
flex-direction: row;
align-items: center
justify-content: space-around;
overflow: scroll;
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
