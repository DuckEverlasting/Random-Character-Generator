import React from "react";
import styled from "styled-components";
import MonsterToken from "./MonsterToken";

class Battlefield extends React.Component {
  render() {
    return (
      <Battlegrounds>
        <Field>
          <MonsterToken monster={this.props.monster} />
        </Field>
        <ShadowRealm>
          <MonsterToken monster={this.props.monster} />
        </ShadowRealm>
      </Battlegrounds>
    );
  }
}

const Battlegrounds = styled.div`
display: flex;
flex-direction: column;
height: 75vh
width: 50%;
padding: 1%;`;

const Field = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-around;
  height: 66%;
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

export default Battlefield;
