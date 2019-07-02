import React from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleMonsterDeath } from "../actions";

class MonsterToken extends React.Component {
  selectMonster = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  monsterDeath = e => {
    e.preventDefault();
    e.stopPropagation();
    toggleMonsterDeath(this.props.monster.id);
    console.log("dead");
  };

  selectMonster = e => {
    e.preventDefault();
    console.log("selected");
  };

  render() {
    if (!this.props.monster) {
      return null;
    }
    return (
      <CreatureToken onClick={this.selectMonster}>
        <MonsterInfo>
          <Typography>{this.props.monster.name}</Typography>
          <StatHolder>
            <Stat>
              <i className="fas fa-heart" />
              <Typography>{this.props.monster.hit_points}</Typography>
            </Stat>
            <Stat>
              <i className="fas fa-bolt" />
              <Typography>{this.props.monster.initiative}</Typography>
            </Stat>
          </StatHolder>
          <IconButton onClick={this.monsterDeath}>
            {this.props.monster.is_Alive === true ? (
              <i className="fas fa-skull-crossbones" />
            ) : (
              <i className="fas fa-undo" />
            )}
          </IconButton>
        </MonsterInfo>
      </CreatureToken>
    );
  }
}

const CreatureToken = styled(Card)({
  width: "12%",
  height: "25%",
  padding: "1%",
  textAlign: "center",
  margin: "1px"
});

const MonsterInfo = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 !important",
  minHeight: "100%"
});

const StatHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

//redux
const mapStateToProps = state => {
  return {
    monsters: state.moonsters,
    players: state.players
  };
};

export default connect(
  mapStateToProps,
  { toggleMonsterDeath }
)(MonsterToken);
