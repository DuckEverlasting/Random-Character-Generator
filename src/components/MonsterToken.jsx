import React from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import styled from "styled-components";

class MonsterToken extends React.Component {
  render() {
    if (!this.props.monster) {
      return null;
    }
    return (
      <CreatureToken>
        <MonsterInfo>
          <Typography>{this.props.monster.name}</Typography>
          <StatHolder>
            <Stat>
              <i class="fas fa-heart" />
              <Typography>{this.props.monster.hit_points}</Typography>
            </Stat>
            <Stat>
              <i class="fas fa-bolt" />
              <Typography>{this.props.monster.initiative}</Typography>
            </Stat>
          </StatHolder>
          <IconButton>
            <i class="fas fa-skull-crossbones" />
          </IconButton>
        </MonsterInfo>
      </CreatureToken>
    );
  }
}

const CreatureToken = styled(Card)({
  width: "10%",
  height: "30%",
  padding: "1%"
});

const MonsterInfo = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 !important",
  height: "100%"
});

const StatHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
  justify-content: space-around;
  width: 100%;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default MonsterToken;
